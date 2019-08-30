import { Action } from '@ngrx/store';
import { User } from '../models'; // exported from index file in models folder

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export class LoadUsersAction implements Action {
    readonly type = LOAD_USERS;

    constructor() { }
}

export class LoadUsersSuccessAction implements Action {
    readonly type = LOAD_USERS_SUCCESS;

    constructor(public payload: User[]) { }
}

export class DeleteUserAction implements Action {
    readonly type = DELETE_USER;

    constructor(public payload: number) { } // User.id is a number
}

export class AddUserAction implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) { }
}

export type Actions
    = LoadUsersAction
    | LoadUsersSuccessAction
    | AddUserAction
    | DeleteUserAction;

