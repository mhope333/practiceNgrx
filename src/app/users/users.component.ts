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
  // users: Object;

  // create instance from data service through dependency injection through constructor
  constructor(private store: Store<AppState>) { }
  // constructor(private data: UsersService) { }

  // what happens in here is executed when the component first loads
  ngOnInit() {
    this.loadUsers();
    this.users$ = this.store.select(state => state.users); // what is this doing???

    console.log(this.users$, "11111111111111111111111111111111");

    // this.data.getUsers().subscribe(data => {
    //   this.users = data;
    //   // console.log(data, "11111111111111111111111111111");
    // });
  }

  // this.properties$.pipe(takeUntil(this.destroy$)).subscribe(properties => {
  //   this.dataSource.data = properties.list;
  //   this.total = properties.total;
  // });

  loadUsers() {
    this.store.dispatch(new userActions.LoadUsersAction());
  }

}
