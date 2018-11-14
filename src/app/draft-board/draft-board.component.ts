import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from "../services/post-service/post.service";
import { GolfersService } from "../services/golfers-service/golfers.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import * as socketIo from "socket.io-client";
import { ActiveUsersService } from "../services/active-users-service/active-users.service";
import { LoginService } from "../services/login-service/login.service";



@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.scss']
})
export class DraftBoardComponent implements OnInit {

  golfers: any = {};
  users: any = {};
  ascFlag: boolean = true;
  loadingFlag: boolean = true;
  counter: number;
  loggedOut: boolean = true;
  currentUser: any;


  @Output() passLogOut: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public post: PostService,
    public golfSer: GolfersService,
    private spinner: Ng4LoadingSpinnerService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private activeUsersSer: ActiveUsersService,
    public loginSer: LoginService) {

    this.currentUser = this.actRoute.snapshot.paramMap.get("id");

    this.spinner.show();

    this.counter = 60;

    // if(this.users.length === 8){
    //   this.getGolfers()
    // }
    this.getGolfers()
    this.getActiveUsers()


  }

  getGolfers() {
    this.golfSer.getGolfers()
      .then(data => {
        this.golfers = data
        this.spinner.hide()
        this.setCounter()
      })
  }

  getActiveUsers() {
    this.activeUsersSer.getAllActiveUsers()
      .then((data) => {
        this.users = data["users"]
        console.log(this.users)
      })
  }

  setCounter() {
    // setInterval(() => {
    //   this.counter--
    //   if (this.counter === 0) {
    //     this.draftGolfer(this.golfers[0])
    //   }
    // }, 1000);
  }

  showUsers(u) {
    if (u.picks.length > 0) {
      return true;
    }
  }

  signOut() {
    this.loginSer.signOut(this.currentUser)
    .then((data) => {
      console.log(data);
      this.router.navigate([''])
    })
    
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

    const socket = socketIo("http://localhost:3010");

    socket.on("news", (data) => {
      
    })

    socket.emit("message", { data: "hi" })


  }


}
