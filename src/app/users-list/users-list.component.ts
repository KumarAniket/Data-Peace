import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/services/rest.service';
import { StateService } from 'src/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  block_size = 5;
  j;
  sort_oper = false;

  constructor(private _rest: RestService,
    public _state: StateService) { }

  ngOnInit() {
    if (localStorage.getItem('page_number') === null) {
      this._state.page_number = 1;
    } else {
      this._state.page_number = Number(localStorage.getItem('page_number'));
    }
    this._rest.getAllUsers();
  }

  SortByFirstName(a, b) {
    return (((a.first_name > b.first_name) ? 1 : -1));
  }

  SortByLastName(a, b) {
    return (((a.last_name > b.last_name) ? 1 : -1));
  }

  SortByCompanyName(a, b) {
    return (((a.company_name > b.company_name) ? 1 : -1));
  }

  SortByCity(a, b) {
    return (((a.city > b.city) ? 1 : -1));
  }

  SortByState(a, b) {
    return (((a.state > b.state) ? 1 : -1));
  }

  SortByZip(a, b) {
    return (((a.zip > b.zip) ? 1 : -1));
  }

  SortByEmail(a, b) {
    return (((a.email > b.email) ? 1 : -1));
  }

  SortByWeb(a, b) {
    return (((a.web > b.web) ? 1 : -1));
  }

  SortByAge(a, b) {
    return (((a.age > b.age) ? 1 : -1));
  }

  sort(sortType) {
    if (sortType === 'firstName') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByFirstName);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByFirstName);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'lastName') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByLastName);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByLastName);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'companyName') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByCompanyName);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByCompanyName);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'city') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByCity);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByCity);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'state') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByState);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByState);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'zip') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByZip);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByZip);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'email') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByEmail);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByEmail);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'web') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByWeb);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByWeb);
        this._state.userDetails.reverse();
      }
    } else if (sortType === 'age') {
      this.sort_oper = !this.sort_oper;
      if (this.sort_oper === true) {
        this._state.userDetails.sort(this.SortByAge);
      }
      if (this.sort_oper === false) {
        this._state.userDetails.sort(this.SortByAge);
        this._state.userDetails.reverse();
      }
    }
  }

  fetchData() {
    for (this.j = this.block_size * (this._state.page_number - 1);
      this.j <= (this.block_size * (this._state.page_number - 1) + this.block_size - 1);
      this.j++) {
      this._state.userDetails.push(this._state.userList[this.j]);
    }
  }

  showDetails(index) {
    this._state.userDetails = this._state.userDetails[index];
    this._state.showUserDetails = true;

  }
  previous() {
    this._state.page_number = this._state.page_number - 1;
    localStorage.setItem('page_number', this._state.page_number.toString());
    this._state.userDetails = [];
    this.fetchData();
  }

  next() {
    this._state.page_number = this._state.page_number + 1;
    localStorage.setItem('page_number', this._state.page_number.toString());
    this._state.userDetails = [];
    this.fetchData();
  }
}
