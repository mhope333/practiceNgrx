import { User } from './../models';
import * as fromUsers from './../actions/user.actions';

export interface State {
    users: User[];
}

const initialState: State = {
    users: []
};

export function userReducer(state = initialState, action: fromUsers.Actions): State {
    switch (action.type) {
        case fromUsers.LOAD_USERS_SUCCESS: {
            return state = {
              users: action.payload
            };
        }
        case fromUsers.DELETE_USER: {
            return state = {
                // filter the array keeping only users with ids not provided in payload (in our store).
                users: state.users.filter(user => user.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
}
