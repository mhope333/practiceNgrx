import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
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

  addUserForm: any;

  constructor(
    private dailogRef: MatDialogRef<NewUserComponent>,
    private formBuilder: FormBuilder
  ) {

    this.addUserForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }

  ngOnInit() {
    // this.user = new User(); // ???
    // remove [ngModel] in html -> go towards reactive forms: https://angular.io/api/forms/FormControlName#use-with-ngmodel
    // then wont need to define inital user object here.
    this.user = {
      id: 0,
      email: '',
      first_name: '',
      last_name: '',
      avatar: '',
      userAdded: true
    };
  }

  saveUser() {
    if (this.addUserForm.dirty && this.addUserForm.valid) {
      this.user.id = uuid(); // id should be number [Math.random()], uuid is a string guid
      this.user.userAdded = true;

      this.dailogRef.close(this.user); // pass user back when we click save
    }
  }

  cancel() {
    this.dailogRef.close(null); // pass back nothing as we have cancelled
  }

}
