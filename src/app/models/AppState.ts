import { User } from './user';

// this is the Applications Store State: (store is the appState Object{})
export interface AppState {
  // user slice of state object in the store will contain the users Array of objects
  // usersStateSlice: { users: User[] };
  readonly users: { users: User[] }; // ???? WHY
  // readonly users: User[]; // ???
}
