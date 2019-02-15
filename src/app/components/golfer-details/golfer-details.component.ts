import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from "../../services/post-service/post.service";
import { GolfersService } from "../../services/golfers-service/golfers.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { WarningModalComponent } from "../warning-modal/warning-modal.component";
import * as socketIo from "socket.io-client";
import { ActiveUsersService } from "../../services/active-users-service/active-users.service";

import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { AuthGuard } from 'src/app/auth.guard';


@Component({
  selector: 'app-golfer-details',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s',
          style({ opacity: 1 })),
      ]),
      transition(':leave',
        [style({ opacity: 1 }),
        animate('0.2s',
          style({ opacity: 0 }))])
    ])],
  templateUrl: './golfer-details.component.html',
  styleUrls: ['./golfer-details.component.scss']
})
export class GolferDetailsComponent implements OnInit {
  counter: number;
  ascFlag: boolean
  displayedGolfers: any = [];
  golfers: any = {}
  socket = socketIo("http://localhost:3010");
  complete: boolean=false;
  preDraft: boolean=true



  @Input() users;
  @Input() turn;
  @Input() currentUser;
  @Output() draftMessage = new EventEmitter<object>();
  @Output() userDetailsUpdate = new EventEmitter<object>();
  @Output() notifyDraftComplete = new EventEmitter()




  constructor(
    public post: PostService,
    public golfSer: GolfersService,
    private modalService: NgbModal,
    private spinner: Ng4LoadingSpinnerService,
    private activeUsersSer: ActiveUsersService,
    private auth: AuthGuard
    ) {

      if(this.currentUser){
        this.activeUsersSer.loggedInStatus = true
      }

    this.counter = 60;

  }

  getGolfers() {
    this.post.draftStart().subscribe(data => {
      console.log(data)
    })
    this.initiateTurn()
    this.golfSer.getGolfers()
      .subscribe(data => {
        let golfers = []
        console.log(data)
        for (let i = 0; i < 200; i++) {
          golfers.push(data[i])
        }
        this.postToGolfersDB(golfers);
        this.postActiveUser("", "init");
        
      })
  }

  getGolfersFromDB() {
    this.golfSer.returnGolfers()
      .subscribe(data => {
        if (!data["data"].length) {
          this.post.getDraftComplete().subscribe(data => {
            if(data["status"].length === 0){
              this.getGolfers()
            } else {
              this.complete = true;
              this.notifyDraftComplete.emit(this.complete)
            }
          })
        } else {
          if(this.users.length === 8){
            this.socket.emit("beginDraft")
          }
          this.golfers = data["data"]
          console.log(this.golfers)
          this.spinner.hide()
          this.getTurn()
          this.initGolfers()
          this.getActiveUserFromDB()
        }
      })
  }

  beginDraft(){
    this.preDraft = false;
    this.setCounter();
  }



  postToGolfersDB(data) {
    this.golfSer.postGolfers(data).subscribe(data => {
      this.golfers = data["data"]
      console.log(this.golfers)
      this.spinner.hide();
      this.initGolfers();
      
    })
  }

  activeUser(u) {
    this.turn = u
  }

  setCounter() {
    setInterval(() => {
      let user
      this.counter--
      if (this.counter === 0) {
          
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === this.turn) {
        user = this.users[i]
      }
    }   
    if(user["username"] !== this.currentUser["user"]){
      return;
    }
        this.handleDraftDB(this.golfers[0], user)
      }
    }, 1000);
  }

  openModal(g) {
    
    if(this.preDraft){
      return;
    }
    
    let user;

    
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === this.turn) {
        user = this.users[i]
      }
    }

   if(user["username"] !== this.currentUser["user"]){
     return;
   }
    const modalRef = this.modalService.open(WarningModalComponent, { centered: true })
    modalRef.componentInstance.name = g.Name;
    modalRef.result.then(data => {

      if (!data) {
        return;
      } else {
        this.handleDraftDB(g, user)
      }
    })
  }

  handleDraftDB(g, user) {
    console.log(g)
    this.post.getTurn().subscribe((data) => {
      this.ascFlag = data["data"][0]["turn"]
      this.removeGolferFromDB(g);
      this.postGolfer(g, user);
      this.updateTurn();
      this.socket.emit("golferDrafted", {
        golfer: g,
        username: user
      });
    })
   }

  updateTurn() {
    
    this.post.getUsers().subscribe(data => {
      let activeUsers;
      activeUsers = data["data"].filter(user => {
        return user["signedIn"] === true
      });

      let userIndex;

      activeUsers.filter((u, i) => {
        if (u["active"]) {
          userIndex = i;
        }
      });

      // Ascending flag

       let flag = this.ascFlag;

      if (flag) {
        if (userIndex === activeUsers.length - 1) {
          this.ascFlag = false;
          this.postTurn(false)
          this.postActiveUser(activeUsers[userIndex], "");
        } else {
          this.postActiveUser(activeUsers[userIndex + 1], "")

        }
        // Descending flag
      } else {
        if (userIndex === 0) {
          this.ascFlag = true;
          this.postTurn(true)
          this.postActiveUser(activeUsers[userIndex], "");
        } else {
          this.postActiveUser(activeUsers[userIndex - 1], "")
        }
      }    
    });
    
  }


  draftGolfer(g, u) {
    console.log(g, u)
    this.counter = 60;
    this.removeGolferFromArray(g);
    let golfDraftObj = {
      golfer: g,
      user: u
    }
    this.draftMessage.emit(golfDraftObj);
  }

  getActiveUserFromDB() {
    this.activeUsersSer.getActiveUser().subscribe(data => {
      this.socket.emit("initialActiveUser", {
        data: data["data"]["username"]
      });
    })
  }



  removeGolferFromArray(g) {
    this.golfers.filter((u, i) => {
      let golferIndex;
      console.log(g, u)
      if (JSON.stringify(g) === JSON.stringify(u)) {
        console.log(g, u)
        golferIndex = i;
        this.golfers.splice(golferIndex, 1)
      }
    });
    this.displayedGolfers.filter((u, i) => {
      let golferIndex;
      if (JSON.stringify(g) === JSON.stringify(u)) {
        golferIndex = i;
        this.displayedGolfers.splice(golferIndex, 1)
      }
    });

    if(this.golfers.length === 0){
      this.complete = true;
      this.notifyDraftComplete.emit(this.complete)
    }
  }

  removeGolferFromDB(g) {
    this.golfSer.removeDraftedGolfer(g).subscribe(data => {
    });
  }

  postGolfer(golfer, user) {
    this.post.postToDB(golfer, user).subscribe(data => {
    })
  }

  postTurn(bool) {
    this.post.updateTurn(bool).subscribe(data => {
    })
  }

  initiateTurn(){
    this.post.initiateTurn().subscribe(data => {
    })
  }

  getTurn() {
    this.post.getTurn().subscribe(data => {
      this.ascFlag = data["data"]
    })
  }

  postActiveUser(u, type) {
    let activeUser;
    if (type === "init") {
      activeUser = this.users[0];
      this.activeUsersSer.postActiveUser(activeUser, "init").subscribe(data => {
        this.getActiveUserFromDB();
      });
    } else {
      activeUser = u;
      this.activeUsersSer.postActiveUser(activeUser, "").subscribe(data => {
        this.userDetailsUpdate.emit(data)
        this.getActiveUserFromDB();
      });
    }

  }


  initGolfers() {
    let iter = this.golfers.length > 26 ? 26 : this.golfers.length
    for (var i = 0; i < iter; i++) {
      this.displayedGolfers.push(this.golfers[i])
    }
  }

  onPageChange(p) {
    switch (p) {
      case 1:
        if (this.golfers.length > 24) {
          this.pageSelectionLoop(0, 25);
        } else {
          this.pageSelectionLoop(0, this.golfers.length)
        }
        break;

      case 2:
        if (this.golfers.length > 50) {
          this.pageSelectionLoop(26, 51);
        } else {
          this.pageSelectionLoop(26, this.golfers.length)
        }
        break;

      case 3:
        if (this.golfers.length > 75) {
          this.pageSelectionLoop(51, 76);
        } else {
          this.pageSelectionLoop(51, this.golfers.length)
        }
        break;

      case 4:
        if (this.golfers.length > 100) {
          this.pageSelectionLoop(76, 101);
        } else {
          this.pageSelectionLoop(76, this.golfers.length)
        }
        break;

      case 5:
        if (this.golfers.length > 125) {
          this.pageSelectionLoop(101, 126);
        } else {
          this.pageSelectionLoop(101, this.golfers.length)
        }

        break;

      case 6:
        if (this.golfers.length > 1250) {
          this.pageSelectionLoop(126, 151);
        } else {
          this.pageSelectionLoop(126, this.golfers.length)
        }

        break;
    }
  }

  pageSelectionLoop(init, l) {
    this.displayedGolfers = []
    for (let i = init; i < l; i++) {
      this.displayedGolfers.push(this.golfers[i])
    }
  }

  draftComplete() {

    if (this.golfers.length === 0) {
      this.post.draftComplete().subscribe(data => {
        this.complete = true; 
      })
    }
  }


  paginationSize() {
    return this.golfers.length > 125 ? 125 : this.golfers.length
  }

  ngOnInit() {
    
    console.log(this.golfers)

    this.spinner.show();
    this.getGolfersFromDB()

    this.socket.emit("newConnection", { data: this.currentUser });
    this.socket.on("golferDrafted", (data) => {
      console.log(data["data"]["golfer"], data["data"]["username"])
      this.draftGolfer(data["data"]["golfer"], data["data"]["username"])
    });
    this.socket.on("initiate", (data) => {
      this.activeUser(data["data"]["data"])
    })

    this.socket.on("begin", () => {
      this.beginDraft()
    })

    this.auth.canActivate(this.currentUser, this.currentUser)
  }

}
