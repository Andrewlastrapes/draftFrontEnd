import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: any = [];

  constructor() { 
    console.log(this.messages)
  }

  draftGolferMessage(obj){
    let user = obj["user"]["username"];
    let golfer = obj["golfer"]["Name"];
    this.messages.push(`${user} has selected ${golfer}`)
  }

}
