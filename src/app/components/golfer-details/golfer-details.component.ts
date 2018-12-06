import { Component, OnInit, Input } from '@angular/core';
import { PostService } from "../../services/post-service/post.service";

@Component({
  selector: 'app-golfer-details',
  templateUrl: './golfer-details.component.html',
  styleUrls: ['./golfer-details.component.scss']
})
export class GolferDetailsComponent implements OnInit {
  counter: number;
  ascFlag: boolean = true;
 

  @Input() users;
  @Input() turn;
  @Input() displayedGolfers;
 
  

  constructor(public post: PostService) {
      this.counter = 60;
  }
  

  activeUser(u){
    this.turn = u
   }


  draftGolfer(g) {

    let index;
    let username;
    

    this.users.filter((u, i) => {
      if (u.active) {
        index = i;
        username = u.username
      }
    });   

    // if(username !== this.currentUser){
    //   return;
    // }
    

    this.counter = 60;
    
    // Ascending flag

    if (this.ascFlag) {
      if (index === this.users.length - 1) {
        this.ascFlag = false;
        this.activeUser(this.users[index].username);

      } else {
        this.users[index + 1].active = true;
        this.users[index].active = false;
        this.activeUser(this.users[index + 1].username)

      }
      // Descending flag
    } else {
        if(index === 0){
          this.ascFlag = true;
          this.activeUser(this.users[index].username)
        } else {
          this.users[index - 1].active = true;
          this.users[index].active = false;
          this.activeUser(this.users[index - 1].username)
        }
      
    }
    console.log(this.users)
    this.post.postToDB(g, this.users[index]);
    this.post.getUsers().then(data => {
      for(let i = 0; i < data["data"].length; i++){
        if(data["data"][i]["username"] === this.users[index].username){
          this.users[index].picks = data["data"][i]["picks"];
        }
      }
    });

    

    for (var j = 0; j < this.displayedGolfers.length; j++) {
      if (this.displayedGolfers[j] === g) {
        this.displayedGolfers.splice(j, 1);
      }
    }

  }

  ngOnInit() {
  }

}
