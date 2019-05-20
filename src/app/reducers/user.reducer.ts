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
        // case fromUsers.: {
        //     return state = {
        //         companies: state.companies.filter(company => company.id !== action.payload)
        //     };
        // }
        default: {
            return state;
        }
    }
}
