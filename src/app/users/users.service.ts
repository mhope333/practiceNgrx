import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpData } from '../models';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {

    return this.http.get<HttpData>('https://reqres.in/api/users').pipe( // http returns an object with 'data' field
      map(result => result.data) // returns 'result.data': [{user},{user},{user}] - array of user objects
    );
  }
}
