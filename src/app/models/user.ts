export interface User {
  id: number;
  email?: string; // optional for adding a user
  first_name: string;
  last_name: string;
  avatar: string;
  userAdded?: boolean; // userAdded flag: (aka not api loaded users)
}
