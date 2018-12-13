import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GolfersService } from "../../services/golfers-service/golfers.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import * as socketIo from "socket.io-client";
import { ActiveUsersService } from "../../services/active-users-service/active-users.service";
import { LoginService } from "../../services/login-service/login.service";
import { MessageService } from "../../services/message-service/message.service";



@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.scss'],
})
export class DraftBoardComponent implements OnInit {

  users: any = {};

  loggedOut: boolean = true;
  currentUser: any;
  turn: any;
  displayedGolfers: any = []
  showMessage: boolean = false

  constructor(

    public golfSer: GolfersService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private activeUsersSer: ActiveUsersService,
    public loginSer: LoginService,
    private messageService: MessageService) {

  }

  onDraftGolfer(e){
    this.messageService.draftGolferMessage(e);
    this.showMessage = true;
  }


  getActiveUsers() {
    this.activeUsersSer.getAllActiveUsers()
      .subscribe((data) => {
        this.users = data["users"]
        this.users[0]["active"] = true;
        this.turn = this.users[0]["username"];

      })
  }


  signOut() {
    this.loginSer.signOut(this.currentUser)
      .then((data) => {
        this.router.navigate([''])
      })

  }


  ngOnInit() {

    this.currentUser = this.actRoute.snapshot.paramMap.get("id");
    this.getActiveUsers();
    
    const socket = socketIo("http://localhost:3010");
    socket.emit("newConnection", { data: this.currentUser });

  }

}
