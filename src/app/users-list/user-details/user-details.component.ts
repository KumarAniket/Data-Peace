import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/services/state.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails;
  constructor(public _state: StateService, private _router: Router) { }

  ngOnInit() {
    this.userDetails = this._state.userDetails;
  }



}
