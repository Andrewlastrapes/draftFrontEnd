import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-draft-complete',
  templateUrl: './draft-complete.component.html',
  styleUrls: ['./draft-complete.component.scss']
})
export class DraftCompleteComponent implements OnInit {

  @Input() users;
  @Input() currentUser;

  constructor() { }

  ngOnInit() {
  }

}
