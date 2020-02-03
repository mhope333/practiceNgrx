import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {usersArray} from '../mocks/users';
import { UsersService } from './users.service';
import { User } from '../models';

describe('users service', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      // declarations: [],
      providers: [
        UsersService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(UsersService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(UsersService).toBeTruthy();
  });

  it('should return an array of users when the getUsers Service is called', async(done) => {
    const entireResponse  = {
      'page': 1,
      'per_page': 6,
      'total': 12,
      'total_pages': 2,
      'data': usersArray
    };
    const url = 'https://reqres.in/api/users';

    const result = service.getUsers().subscribe(test => {
      // console.log(test, '??????????????????????????????????k');
      expect(test).toEqual(usersArray);
      done();
    });

    // console.log(result, '9999999999999999999999');
    const request = httpMock.expectOne(url); // - this will both test for a url, and 'close' the backend call.
    expect(request.request.method).toBe('GET');
    request.flush(entireResponse);
  });
});
