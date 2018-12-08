import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = 'http://demo9197058.mockable.io/users';
  block_size = 5;
  j;

  constructor(private _http: HttpClient, private _state: StateService) { }

  getAllUsers() {
    this._http.get(this.url).subscribe(resp => {
      const usr = [];
      usr.push(resp);
      usr.forEach(index => {
        index.forEach(item => {
          this._state.userList.push(item);
        });
      });
      for (this.j = this.block_size * (this._state.page_number - 1);
        this.j <= (this.block_size * (this._state.page_number - 1) + this.block_size - 1);
        this.j++) {
        this._state.userDetails.push(this._state.userList[this.j]);
      }
    });
  }
}
