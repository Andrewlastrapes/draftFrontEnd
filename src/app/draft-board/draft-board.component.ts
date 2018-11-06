import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { PostService } from "../services/post-service/post.service";
import { GolfersService } from "../services/golfers-service/golfers.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {Router} from "@angular/router";



@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.scss']
})
export class DraftBoardComponent implements OnInit {

  golfers: any = {};
  users: any[];
  ascFlag: boolean = true;
  loadingFlag: boolean = true;
  counter: number;
  loggedOut: boolean=true;

  @Output() passLogOut: EventEmitter<boolean> =   new EventEmitter();

  constructor(
    public post: PostService,
    public golfSer: GolfersService,
    private spinner: Ng4LoadingSpinnerService,
    private router: Router) {
    
    
    
    this.spinner.show();
      
    this.counter = 60;

    this.users = [
      {
        name: "Andrew",
        picks: [],
        active: true
      },
      {
        name: "Taylor",
        picks: [],
        active: false
      },
      {
        name: "Thomas",
        picks: [],
        active: false
      },
      {
        name: "Matt",
        picks: [],
        active: false
      },
      {
        name: "Jimmy",
        picks: [],
        active: false
      },
      {
        name: "James",
        picks: [],
        active: false
      },
      {
        name: "Carl",
        picks: [],
        active: false
      },
      {
        name: "Sid Bream",
        picks: [],
        active: false
      }


    ];

    if(this.users.length === 8){
      this.getGolfers()
    }
    

  }

  setCounter(){
    // setInterval(() => {
    //   this.counter--
    //   if (this.counter === 0) {
    //     this.draftGolfer(this.golfers[0])
    //   }
    // }, 1000);
  }

  showUsers(u){
    if(u.picks.length > 0){
      return true;
    }
  }

  signOut(){
    this.router.navigate([''])
  }

  getGolfers() {
    this.golfSer.getGolfers()
      .then(data => {
        this.golfers = data
        this.spinner.hide()
        this.setCounter()
      }

      )

  }


  setActivation() {

    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].active) {
        return this.users[i].name;
      }
    }
  }
  draftGolfer(g) {

    this.counter = 60;

    if (this.ascFlag) {

      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].active) {
          let activeUser = this.users[i].name
          this.users[i].picks.push(g);
          this.users[i].active = false;

          this.post.postToDB(g, activeUser)


          if (i === this.users.length - 1) {
            this.users[this.users.length - 1].active = true;
            this.ascFlag = false;
            break;
          } else {
            this.users[i + 1].active = true;
            break;
          }
        }

      }
    } else if (!this.ascFlag) {
      for (var i = this.users.length - 1; i >= 0; i--) {
        if (this.users[i].active) {
          let activeUser = this.users[i].name
          this.users[i].picks.push(g);
          this.post.postToDB(g, activeUser)


          if (this.users[0].active === true) {

            this.users[0].active = true;
            this.ascFlag = true;
            break;
          } else {
            this.users[i].active = false;
            this.users[i - 1].active = true;
            break;
          }
        }
      }
    }

    for (var j = 0; j < this.golfers.length; j++) {
      if (this.golfers[j] === g) {
        this.golfers.splice(j, 1);
      }
    }

  }



  draftComplete() {
    if (this.golfers.length === 0) {
      return true;
    }
  }

  ngOnInit() {

    
  }


}
