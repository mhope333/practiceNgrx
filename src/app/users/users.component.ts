import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../models';
import { AppState } from '../models/AppState';
import * as userActions from '../actions/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadUsers();
    // here we go to the store/AppState and obtain the users Array from usersStateSlice object
    this.users$ = this.store.select(state => state.users.users);

    console.log(this.users$, "11111111111111111111111111111111");

  }

  loadUsers() {
    this.store.dispatch(new userActions.LoadUsersAction());
  }

}
