import { Component, OnInit } from '@angular/core';
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

  // here we go to the store/AppState and obtain the users Array from usersStateSlice object
  users$: Observable<User[]> = this.store.select(state => state.users.users);
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

  // need to send the modified state to api -> db to update with deleted user
  // then next time we load users, the deleted user would be gone.
}
