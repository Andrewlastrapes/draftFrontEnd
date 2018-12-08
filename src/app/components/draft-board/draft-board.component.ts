import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GolfersService } from "../../services/golfers-service/golfers.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import * as socketIo from "socket.io-client";
import { ActiveUsersService } from "../../services/active-users-service/active-users.service";
import { LoginService } from "../../services/login-service/login.service";



@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.scss']
})
export class DraftBoardComponent implements OnInit {

  golfers: any = {};
  users: any = {};
  loadingFlag: boolean = true;
  loggedOut: boolean = true;
  currentUser: any;
  turn: any;
  displayedGolfers: any = []



  @Output() passLogOut: EventEmitter<boolean> = new EventEmitter();

  constructor(

    public golfSer: GolfersService,
    private spinner: Ng4LoadingSpinnerService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private activeUsersSer: ActiveUsersService,
    public loginSer: LoginService) {


    this.currentUser = this.actRoute.snapshot.paramMap.get("id");

    this.spinner.show();

    // if(this.users.length === 8){
    //   this.getGolfers()
    // }
    this.getGolfersFromDB()
    this.getActiveUsers();

  }

  getGolfersFromDB() {
    this.golfSer.returnGolfers()
      .then(data => {
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


  getGolfers() {
    this.golfSer.getGolfers()
      .then(data => {
        let golfers = []
        for (let i = 0; i < 200; i++) {
          golfers.push(data[i])
        }
        this.postToGolfersDB(golfers)
        this.golfers = golfers
        this.spinner.hide()
        this.setCounter()
      })
      .then((data) => {
        this.initGolfers();
      })
  }


  postToGolfersDB(data) {
    this.golfSer.postGolfers(data)
  }


  setCounter() {
    // setInterval(() => {
    //   this.counter--
    //   if (this.counter === 0) {
    //     this.draftGolfer(this.golfers[0])
    //   }
    // }, 1000);
  }


  getActiveUsers() {
    this.activeUsersSer.getAllActiveUsers()
      .then((data) => {
        this.users = data["users"]
        this.users[0]["active"] = true;
        this.turn = this.users[0]["username"];

      })
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

  signOut() {
    this.loginSer.signOut(this.currentUser)
      .then((data) => {
        this.router.navigate([''])
      })

  }

  draftComplete() {
    if (this.golfers.length === 0) {
      return true;
    }
  }

  ngOnInit() {

    const socket = socketIo("http://localhost:3010");
    socket.emit("newConnection", { data: this.currentUser });

  }

}
