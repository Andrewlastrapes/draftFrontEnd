import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatInput: any;
  chatOutput: any;
  username: string= "Username"
  chatArray = [];

  submitMessage(){

    this.chatOutput = `${this.username}: ${this.chatInput}`
    this.chatArray.push(this.chatOutput);
    this.chatInput = ""
  }

  constructor() { }

  ngOnInit() {
  }

}
