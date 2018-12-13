import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: any = [];

  constructor() { 
  
  }

  draftGolferMessage(obj){
    let user = obj["user"]["username"];
    let golfer = obj["golfer"]["Name"];
    this.messages.push(`${user} has selected ${golfer}`)
    this.spliceMessages()
  }

    userSignedInMessage(user){
      this.messages.push(`${user} has signed in.`)
      this.spliceMessages()
    }

    spliceMessages(){
      if(this.messages.length === 3){
        this.messages.splice(0, 1)
      }
    }

}
