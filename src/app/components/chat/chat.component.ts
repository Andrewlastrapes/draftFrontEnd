import { Component, OnInit, Input } from '@angular/core';
import * as socketIo from "socket.io-client";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() users;
  @Input() user;
  chatInput: any;
  username: string;
  chatArray = [];
  socket = socketIo("http://localhost:3010");
  outputName: any;

  
  
  
  submitMessage(){

    // this.chatOutput = `${this.username}: ${this.chatInput}`
    
    this.socket.emit("messageOut", {
      data: {user: this.username,
             chat: this.chatInput}
    })

    this.chatInput = ""

  }

  constructor() { }

  ngOnInit() {



    this.username = this.user["user"]
    this.socket.on("messageIn", (data) => {
      
      let user = data["data"]["data"]["user"] 
      let message = data["data"]["data"]["chat"]
      this.chatArray.push({user: user, message: message})
      console.log(this.chatArray)
    })
  }

}
