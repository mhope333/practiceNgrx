import { Action } from '@ngrx/store';
import { User } from '../models'; // exported from index file in models folder

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
// export const DELETE_COMPANY = 'DELETE_COMPANY';
// export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';

export class LoadUsersAction implements Action {
    readonly type = LOAD_USERS;

    constructor() { }
}

export class LoadUsersSuccessAction implements Action {
    readonly type = LOAD_USERS_SUCCESS;

    constructor(public payload: User[]) { }
}

// export class DeleteCompanyAction implements Action {
//     readonly type = DELETE_COMPANY;

//     constructor(public payload: number) { }
// }

// export class DeleteCompanySuccessAction implements Action {
//     readonly type = DELETE_COMPANY_SUCCESS;

//     constructor(public payload: number) { }
// }

export type Actions
    = LoadUsersAction
    | LoadUsersSuccessAction;
    // | DeleteCompanyAction
    // | DeleteCompanySuccessAction

