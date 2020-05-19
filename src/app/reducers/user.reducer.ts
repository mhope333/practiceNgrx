import { User } from '../models';
import * as fromUsers from '../actions/user.actions';

export interface UserState {
    users: User[];
}

export const initialState: UserState = {
    users: []
};

export function userReducer(state = initialState, action: fromUsers.Actions): UserState {
    switch (action.type) {
        case fromUsers.LOAD_USERS_SUCCESS: {
          return {
            ...state,
            users: action.payload
          };
        }
        case fromUsers.DELETE_USER: {
            return state = {
                ...state,
                // filter the array keeping only users with ids not provided in payload (in our store).
                users: state.users.filter(user => user.id !== action.payload)
            };
        }
        case fromUsers.ADD_USER: {
          return {
            ...state,
            users: [...state.users, action.payload]
          };
      }
        default: {
            return state;
        }
    }
}
