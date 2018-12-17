import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() users; 


  showUsers(u) {
    if (u.picks.length > 0) {
      return true;
    }
  }

  constructor() { }

  ngOnInit() {
    console.log(this.users)
  }

}
