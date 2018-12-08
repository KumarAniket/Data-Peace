import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  userList = []; // Array to store the user details
  userDetails = [];
  showUserDetails = false;
  page_number;
  oper = false;
  constructor() { }
}
