import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models';
import { Validators, FormBuilder } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user: User;
  defaultUser = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    userAdded: true
  };

  addUserForm: any;

  constructor(
    private dailogRef: MatDialogRef<NewUserComponent>,
    private formBuilder: FormBuilder
  ) {
    this.addUserForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      avatar: ['', Validators.required],
      email: ['']
    });
  }

  ngOnInit() {
    this.user = this.defaultUser;
  }

  saveUser() {
    if (this.addUserForm.dirty && this.addUserForm.valid) {
      this.user.id = uuid(); // pre generated api users have number ids, uuid is a string guid
      this.user.userAdded = true;

      this.user.avatar = this.addUserForm.value.avatar;
      this.user.first_name = this.addUserForm.value.first_name;
      this.user.last_name = this.addUserForm.value.last_name;
      this.user.email = this.addUserForm.value.email;

      this.dailogRef.close(this.user); // pass user back when we click save
    }
  }

  cancel() {
    this.dailogRef.close(null);
  }

}
