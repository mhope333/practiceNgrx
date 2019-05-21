import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, HttpData } from '../models';
// import { map } from 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // getData: Observable<HttpData>;
  // usersArray: Observable<User[]>;

  constructor(private http: HttpClient) { }

  getUsers() { // type this to User[]?

    // this.getData = this.http.get('https://reqres.in/api/users');
    // this.usersArray = this.getData.data; // wtf
    // return this.usersArray;

    // is a map needed here, or can we just pipe as the get just provides one object?
    // can this get be of type <any> ??
    return this.http.get<HttpData>('https://reqres.in/api/users').pipe( // http returns an object with 'data' field
      map(result => result.data) // this 'result.data': [{user},{user},{user}] - array of user objects
    );
  }
}
