import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from "../../services/post-service/post.service";
import { GolfersService } from "../../services/golfers-service/golfers.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { WarningModalComponent } from "../warning-modal/warning-modal.component";
import * as socketIo from "socket.io-client";
import { ActiveUsersService } from "../../services/active-users-service/active-users.service";

@Component({
  selector: 'app-golfer-details',
  templateUrl: './golfer-details.component.html',
  styleUrls: ['./golfer-details.component.scss']
})
export class GolferDetailsComponent implements OnInit {
  counter: number;
  ascFlag: boolean = true;
  displayedGolfers: any = [];
  golfers: any = {}
  socket = socketIo("http://localhost:3010");



  @Input() users;
  @Input() turn;
  @Input() currentUser;
  @Output() draftMessage = new EventEmitter<object>();
  



  constructor(
    public post: PostService,
    public golfSer: GolfersService,
    private modalService: NgbModal,
    private spinner: Ng4LoadingSpinnerService,
    private activeUsersSer: ActiveUsersService ) {


    this.counter = 60;

  }

  getGolfers() {
    this.golfSer.getGolfers()
      .subscribe(data => {
        let golfers = []
        for (let i = 0; i < 200; i++) {
          golfers.push(data[i])
        }
        this.postToGolfersDB(golfers);
        this.postActiveUser("", "init");
        this.golfers = golfers;
        this.spinner.hide();
        // this.setCounter();
        this.initGolfers();
      })
  }

  getGolfersFromDB() {
    this.golfSer.returnGolfers()
      .subscribe(data => {
        console.log(data)
        if (!data["data"].length) {
          this.getGolfers()
        } else {
          this.golfers = data["data"]
          this.spinner.hide()
          // this.setCounter()
          this.initGolfers()
          this.getActiveUserFromDB()
        }
      })
  }

  postToGolfersDB(data) {
    this.golfSer.postGolfers(data).subscribe(data => {
      console.log(data)
    })
  }


  activeUser(u) {
    console.log(u)
    this.turn = u
  }

  setCounter() {
    setInterval(() => {
      this.counter--
      if (this.counter === 0) {
        // this.draftGolfer(this.golfers[0])
      }
    }, 1000);
  }

  openModal(g, u) {
    let user;
  
    for(let i = 0; i < this.users.length; i++){
      console.log(this.users[i].username, this.turn)
      if(this.users[i].username === this.turn){
        user = this.users[i]
      }
    }

    // if(user["username"] !== this.currentUser){
    //   return;
    // }

    const modalRef = this.modalService.open(WarningModalComponent, { centered: true })
    modalRef.componentInstance.name = g.Name;
    modalRef.result.then(data => {

      if (!data) {
        return;
      } else {
        this.handleDraftDB(g, user)
        this.socket.emit("golferDrafted", {
          golfer: g,
          username: user
        });
      }
    })
  }

  handleDraftDB(g, user){
    this.removeGolferFromDB(g);
    this.postGolfer(g, user);
    this.updateTurn();
  }

  updateTurn(){

    this.post.getUsers().subscribe(data => {
      let activeUsers;
         activeUsers = data["data"].filter(user => {
         return user["signedIn"] === true
        
      });
       console.log(activeUsers)
    
    let userIndex;
    
     activeUsers.filter((u, i) => {
      if (u["active"]) {
        userIndex = i;
      }
    });
    console.log(userIndex)
    // Ascending flag

    console.log(activeUsers[userIndex].username)

    if (this.ascFlag) {
      if (userIndex === activeUsers.length - 1) {
        this.ascFlag = false;
        this.postActiveUser(activeUsers[userIndex], "");

      } else {
        activeUsers[userIndex + 1].active = true;
        activeUsers[userIndex].active = false;
        this.postActiveUser(activeUsers[userIndex + 1], "")

      }
      // Descending flag
    } else {
      if (userIndex === 0) {
        this.ascFlag = true;
        this.postActiveUser(activeUsers[userIndex], "")
      } else {
        activeUsers[userIndex - 1].active = true;
        activeUsers[userIndex].active = false;
        this.postActiveUser(activeUsers[userIndex - 1], "")
      }

    }

  });

  }


  draftGolfer(g, u) {

    this.counter = 60;

    this.removeGolferFromArray(g);

    let golfDraftObj = {
      golfer: g,
      user: u
    }

    this.draftMessage.emit(golfDraftObj);
    
    
  }

  getActiveUserFromDB(){
    console.log("183")
     this.activeUsersSer.getActiveUser().subscribe(data => {
      console.log(data);
      this.socket.emit("initialActiveUser", {
        data: data["data"]["username"]
      });
    })
  }
  


  removeGolferFromArray(g){
    this.golfers.filter((u, i) => {
      let golferIndex;
      if (JSON.stringify(g) === JSON.stringify(u)) {
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


  }

  removeGolferFromDB(g){
    this.golfSer.removeDraftedGolfer(g).subscribe(data => {
      console.log(`Remove Golfer: ${g.Name}`)
    });
  }

  postGolfer(golfer, user){
    console.log(golfer, user)
    this.post.postToDB(golfer, user).subscribe(data => {
      console.log(data)
    })
  }

  postActiveUser(u, type){
    let activeUser;
    if(type === "init"){
      activeUser = this.users[0];
      console.log(activeUser)
      this.activeUsersSer.postActiveUser(activeUser, "init").subscribe(data => {
        console.log(data)
        this.getActiveUserFromDB();
      });
    } else {
      activeUser = u;
      console.log(activeUser)
      this.activeUsersSer.postActiveUser(activeUser, "").subscribe(data => {
        console.log(data)
        this.getActiveUserFromDB();
      });
    }
    
  }


  initGolfers() {
    for (var i = 0; i < 26; i++) {
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
      return true;
    }
  }


  paginationSize(){
    return this.golfers.length > 125 ? 125 : this.golfers.length
  }

  ngOnInit() {

    this.spinner.show();
    this.getGolfersFromDB()

    this.socket.emit("newConnection", { data: this.currentUser });
    this.socket.on("golferDrafted", (data) => {
      console.log(data)
      this.draftGolfer(data["data"]["golfer"], data["data"]["username"])
    });
    this.socket.on("initiate", (data) => {
      console.log(data)
      this.activeUser(data["data"]["data"])
    })

    // if(this.users.length === 8){
    //   this.getGolfers()
    // }
    
  }

}
