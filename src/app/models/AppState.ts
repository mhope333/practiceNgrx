
import { UserState } from '../reducers/user.reducer';

// this is the Applications Store State: (store is the appState Object{})
export interface AppState {

  user: UserState; // user slice of state object in the store will contain the users Array of objects

}
