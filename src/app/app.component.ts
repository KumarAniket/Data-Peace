import { Component } from '@angular/core';
import { StateService } from 'src/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataPeace';
  constructor(public _state: StateService, private _router: Router) { }
  back() {
    this._state.userDetails = [];
    this._state.showUserDetails = false;
    this._router.navigate(['']);
  }
}
