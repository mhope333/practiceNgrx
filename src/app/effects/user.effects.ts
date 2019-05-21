import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import { UsersService } from '../users/users.service';
import * as userActions from './../actions/user.actions';
import { EMPTY } from 'rxjs';
import { User } from '../models';
// import { DeleteCompanySuccessAction } from '../actions/company.actions';

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

    // // tslint:disable-next-line:member-ordering
    // @Effect() deleteCompany$ = this.actions$
    //     .ofType(companyActions.DELETE_COMPANY)
    //     .switchMap((action: companyActions.DeleteCompanyAction) => {
    //         return this.companyService.deleteCompany(action.payload)
    //             .map(company => new companyActions.DeleteCompanySuccessAction(company.id));
    //     });

}
