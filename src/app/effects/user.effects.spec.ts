import { TestBed } from '@angular/core/testing';
// import { Location } from '@angular/common';
import { provideMockActions } from '@ngrx/effects/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

import {UserEffects} from './user.effects';
// import * as userActions from '../actions/user.actions';
// import {usersArray} from '../mocks/users';
import { UsersService } from '../users/users.service';

describe('User Effects', () => {
  let effects: UserEffects;
  const actions = new Subject();


  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [RouterTestingModule],
      providers: [
        { provide: UsersService, useValue: {} },
        UserEffects,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(UserEffects);
  });

  it('should be created', async() => {
    expect(effects).toBeTruthy();
  });

  // it('should trigger a LoadUsersSuccessAction action as a researcher', done => {
  //   const action = new userActions.LoadUsersAction();
  //   // this returns an array of users returned from the service the effect calls
  //   const reaction = new userActions.LoadUsersSuccessAction(usersArray);

  //   effects.loadUsers$.subscribe(_reaction => {
  //     console.log(_reaction, 'rrrrrrrrrrrrrrrrrrrrrrr');
  //     expect(_reaction).toEqual(reaction);
  //     done();
  //   });

  //   actions.next(action);
  // });
});


