import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import { UsersService } from '../users/users.service';
import * as userActions from './../actions/user.actions';
import { User } from '../models';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UsersService
    ) { }

    @Effect() loadUsers$ = this.actions$.pipe(
        ofType(userActions.LOAD_USERS),
        switchMap(() => this.userService.getUsers()
          .pipe(
            map(users => new userActions.LoadUsersSuccessAction(users)),
            // catchError(() => EMPTY)
          )
        )
    );
}
