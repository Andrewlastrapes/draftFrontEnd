import { Component, OnInit, Input } from '@angular/core';
import { ActiveUsersService } from "../../services/active-users-service/active-users.service";
import * as socketIo from "socket.io-client";
import { environment } from "../../../environments/environment"


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  baseUrl = environment.baseUrl
  @Input() users; 
  socket = socketIo(this.baseUrl);
  
  constructor(private activeUsersSer: ActiveUsersService) {
    
  }

  showUsers(u) {
    if (u.picks.length > 0) {
      return true;
    }
  }

  activeUser(u){
    if(u.active){
      return "list-group-item list-group-item-action list-group-item-success";
    }
  }

ngOnChanges(){
  console.log(this.users)
  this.socket.emit("updateUsers", {
    users: this.users
  })
  this.socket.on("updateUsers", users => {
    if(users["users"]["users"].length > 0){
      console.log(users["users"]["users"])
      this.users = users["users"]["users"]
    }
  })
}



  ngOnInit() {
   
  }

}
