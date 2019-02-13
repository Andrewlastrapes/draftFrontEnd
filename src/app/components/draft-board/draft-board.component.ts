import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GolfersService } from "../../services/golfers-service/golfers.service";
import { ActiveUsersService } from "../../services/active-users-service/active-users.service";
import { LoginService } from "../../services/login-service/login.service";
import { MessageService } from "../../services/message-service/message.service";
import { ActivatedRoute } from '@angular/router';

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
  displayedGolfers: any = [];
  showMessage: boolean = false;
  complete: boolean=false;

  constructor(

    public golfSer: GolfersService,
    private activeUsersSer: ActiveUsersService,
    public loginSer: LoginService,
    private messageService: MessageService,
    private route: ActivatedRoute) {

  }

  onDraftGolfer(e) {
    this.messageService.draftGolferMessage(e);
    this.showMessage = true;
  }

  updateUser(e){
    this.getActiveUsers()
  }

  notified(){
    this.complete = true
  }

  getActiveUsers() {
    this.activeUsersSer.getAllActiveUsers()
      .subscribe((data) => {
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
    
   this.route.queryParams.subscribe(data => {
     this.currentUser = data
   })
    
    this.showMessage = true;
    this.getActiveUsers();



  }

}
