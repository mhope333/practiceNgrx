import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/AppState';
import * as userActions from '../actions/user.actions';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this.store.select(state => state.user.users);
  lastUserId: number;

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ) { }

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

  addUser() {
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(addUserResult => {
      if (addUserResult) {
        this.openSnackBar('Contact Added', 'Undo')
        .onAction().subscribe(() => {
          // remove the added contact if user clicks undo...
          this.store.dispatch(new userActions.DeleteUserAction(addUserResult.id));
        });
        this.store.dispatch(new userActions.AddUserAction(addUserResult));
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // TO DO? (on a submit):
  // need to send the modified state to an api -> then loader to update db with new/deleted user
  // then next time we load users, the deleted user would be gone / or be included in the initial loading of users.
}
