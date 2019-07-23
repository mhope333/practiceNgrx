import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/AppState';
import * as userActions from '../actions/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // here we go to the store/AppState and obtain the users Array from usersStateSlice object
  users$ = this.store.select(state => state.user.users);
  lastUserId: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(new userActions.LoadUsersAction());
  }

  deleteUser() {
    this.users$.subscribe(users => {
      this.lastUserId = users[users.length - 1].id;
    });
    this.store.dispatch(new userActions.DeleteUserAction(this.lastUserId));
  }

  // TO DO (on a submit):
  // need to send the modified state to an api -> then db to update with deleted user
  // then next time we load users, the deleted user would be gone.
}
