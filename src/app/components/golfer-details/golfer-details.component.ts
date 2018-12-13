import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from "../../services/post-service/post.service";
import { GolfersService } from "../../services/golfers-service/golfers.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { WarningModalComponent } from "../warning-modal/warning-modal.component";

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



  @Input() users;
  @Input() turn;
  @Input() currentUser;
  @Output() draftMessage = new EventEmitter<object>();



  constructor(
    public post: PostService,
    public golfSer: GolfersService,
    private modalService: NgbModal,
    private spinner: Ng4LoadingSpinnerService,) {


    this.counter = 60;
    
  }

  getGolfers() {
    this.golfSer.getGolfers()
      .subscribe(data => {
        let golfers = []
        for (let i = 0; i < 200; i++) {
          golfers.push(data[i])
        }
        this.postToGolfersDB(golfers)
        this.golfers = golfers
        this.spinner.hide()
        this.setCounter()
        this.initGolfers()
      })
  }

  getGolfersFromDB() {
    this.golfSer.returnGolfers()
      .subscribe(data => {
        if (!data["data"].length) {
          this.getGolfers()
        } else {
          this.golfers = data["data"]
          this.spinner.hide()
          this.setCounter()
          this.initGolfers()
        }
      })
  }

  postToGolfersDB(data) {
    this.golfSer.postGolfers(data)
  }


  activeUser(u) {
    this.turn = u
  }

  setCounter() {
    // setInterval(() => {
    //   this.counter--
    //   if (this.counter === 0) {
    //     this.draftGolfer(this.golfers[0])
    //   }
    // }, 1000);
  }


  draftGolfer(g) {

     // if(username !== this.currentUser){
    //   return;
    // }


    
    let userIndex;
    let golferIndex;
    let username;

    // const modalRef = this.modalService.open(WarningModalComponent)
    // modalRef.componentInstance.name = g.Name;
    // console.log(modalRef.result)
    
    this.users.filter((u, i) => {
      if (u.active) {
        userIndex = i;
        username = u.username
      }
    });
    this.displayedGolfers.filter((u, i) => {
      if (g === u) {
        golferIndex = i;
        this.displayedGolfers.splice(golferIndex, 1)
      }
    });


   
    this.counter = 60;
  

    // Ascending flag

    if (this.ascFlag) {
      if (userIndex === this.users.length - 1) {
        this.ascFlag = false;
        this.activeUser(this.users[userIndex].username);

      } else {
        this.users[userIndex + 1].active = true;
        this.users[userIndex].active = false;
        this.activeUser(this.users[userIndex + 1].username)

      }
      // Descending flag
    } else {
      if (userIndex === 0) {
        this.ascFlag = true;
        this.activeUser(this.users[userIndex].username)
      } else {
        this.users[userIndex - 1].active = true;
        this.users[userIndex].active = false;
        this.activeUser(this.users[userIndex - 1].username)
      }

    }

      let golfDraftObj = {
        golfer: g,
        user: this.users[userIndex]
      }
      this.draftMessage.emit(golfDraftObj)
      this.post.postToDB(g, this.users[userIndex]);
      this.golfSer.removeDraftedGolfer(g)
      

      this.post.getUsers().then(data => {
        for (let i = 0; i < data["data"].length; i++) {
          if (data["data"][i]["username"] === this.users[userIndex].username) {
            this.users[userIndex].picks = data["data"][i]["picks"];
          }
        }
      });

  }

  initGolfers() {
    for (var i = 0; i < 26; i++) {
      this.displayedGolfers.push(this.golfers[i])
    }
  }

    onPageChange(p) {
    switch (p) {
      case 1:
        this.pageSelectionLoop(0, 26);
        break;

      case 2:
        this.pageSelectionLoop(26, 51);
        break;

      case 3:
        this.pageSelectionLoop(51, 76);
        break;

      case 4:
        this.pageSelectionLoop(76, 101);
        break;

      case 5:
        this.pageSelectionLoop(101, 126);
        break;

      case 5:
        this.pageSelectionLoop(126, 151);
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

  ngOnInit() {
    this.spinner.show();

    // if(this.users.length === 8){
    //   this.getGolfers()
    // }
    this.getGolfersFromDB()
  }

}
