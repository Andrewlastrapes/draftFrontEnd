import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GolfersService } from "../../services/golfers-service/golfers.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import * as socketIo from "socket.io-client";
import { ActiveUsersService } from "../../services/active-users-service/active-users.service";
import { LoginService } from "../../services/login-service/login.service";
import { MessageService } from "../../services/message-service/message.service";
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-draft-board',
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
    ]),
  ],
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

  onDraftGolfer(e) {
    this.messageService.draftGolferMessage(e);
    this.showMessage = true;
  }


  getActiveUsers() {
    this.activeUsersSer.getAllActiveUsers()
      .subscribe((data) => {
        console.log(data["data"])

        this.users = data["data"]

      })
  }

 
  signOut() {
    // this.loginSer.signOut(this.currentUser)
    //   .then((data) => {
    //     this.router.navigate([''])
    //   })

  }


  ngOnInit() {

    this.currentUser = this.actRoute.snapshot.paramMap.get("id");
    this.messageService.userSignedInMessage(this.currentUser)
    this.showMessage = true;
    this.getActiveUsers();



  }

}
