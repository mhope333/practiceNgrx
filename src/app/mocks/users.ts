import {User} from '../models/user';

export const defaultApiUser: User = {
  id: 99,
  email: 'defaultApiUser@email.com',
  first_name: 'default',
  last_name: 'apiUser',
  avatar: 'svg-1'
};

export const addedUser: User = {
  id: 99,
  email: 'defaultUser@email.com',
  first_name: 'added',
  last_name: 'user',
  avatar: 'svg-1',
  userAdded: true
};

export const usersArray: User[] = [ // users array returned from api call
    {'id': 1, 'email': 'george.bluth@reqres.in', 'first_name': 'George', 'last_name': 'Bluth', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'},
    {'id': 2, 'email': 'janet.weaver@reqres.in', 'first_name': 'Janet', 'last_name': 'Weaver', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'},
    {'id': 3, 'email': 'emma.wong@reqres.in', 'first_name': 'Emma', 'last_name': 'Wong', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'},
    {'id': 4, 'email': 'eve.holt@reqres.in', 'first_name': 'Eve', 'last_name': 'Holt', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'},
    {'id': 5, 'email': 'charles.morris@reqres.in', 'first_name': 'Charles', 'last_name': 'Morris', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'},
    {'id': 6, 'email': 'tracey.ramos@reqres.in', 'first_name': 'Tracey', 'last_name': 'Ramos', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'}
];
