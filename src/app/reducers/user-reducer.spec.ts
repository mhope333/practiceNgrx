import { userReducer, initialState } from './user.reducer';
import { LoadUsersSuccessAction, AddUserAction, DeleteUserAction } from '../actions/user.actions';
import { usersArray, addedUser } from '../mocks/users';

describe('userReducer', () => {
  const composedReducer = (state: any, action: any) => userReducer(state, action);

  it('Should update users for LOAD_USERS_SUCCESS', () => {
    const action = new LoadUsersSuccessAction(usersArray);
    const state = composedReducer(initialState, action);

    expect(state.users).toBe(usersArray);
  });

  it(`Should remove user with 'id' for DELETE_USER`, () => {
    const stateWithUsers = { users: usersArray };
    const expected = usersArray.slice(0, -1); // removing last element (6th)

    const action = new DeleteUserAction(6);
    const state = composedReducer(stateWithUsers , action);

    // TO DO: fix this for some reason even though they are equal they are not read as equal (hence use of stringify)
    expect(JSON.stringify(state.users)).toBe(JSON.stringify(expected));
  });

  it('Should update users for ADD_USER', () => {
    const action = new AddUserAction(addedUser);
    const state = composedReducer(initialState, action);

    // TO DO:
    expect(JSON.stringify(state.users)).toBe(JSON.stringify([addedUser]));
  });
});
