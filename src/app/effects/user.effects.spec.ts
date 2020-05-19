import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { UsersService } from '../users/users.service';
import {UserEffects} from './user.effects';
import * as userActions from '../actions/user.actions';
import {usersArray} from '../mocks/users';

describe('User Effects', () => {
  let effects: UserEffects;
  let actions: Observable<any>;
  let userService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService,
        UserEffects,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.inject<UserEffects>(UserEffects);
    userService = TestBed.inject<UsersService>(UsersService);
  });

  it('should be created', async() => {
    expect(effects).toBeTruthy();
  });

  it('It should trigger a LoadUsersSuccessAction action', async(() => {
    spyOn(userService, 'getUsers').and.returnValue(of(usersArray));
    actions = hot('-a', {
      a: new userActions.LoadUsersAction()
    });

    const expected = cold('-b', {
      b: new userActions.LoadUsersSuccessAction(usersArray)
    });

    effects.loadUsers$.subscribe(() => {
      expect(userService.getUsers).toHaveBeenCalled();
    });

    expect(effects.loadUsers$).toBeObservable(expected);
  }));
});

