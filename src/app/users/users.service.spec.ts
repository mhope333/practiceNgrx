import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {usersArray} from '../mocks/users';
import { UsersService } from './users.service';

describe('users service', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
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

  it('should return an array of users when the getUsers Service is called', async (done) => {
    const entireApiResponse  = {
      'page': 1,
      'per_page': 6,
      'total': 12,
      'total_pages': 2,
      'data': usersArray
    };
    const url = 'https://reqres.in/api/users';

    service.getUsers().subscribe(test => {
      expect(test).toEqual(usersArray);
      done();
    });

    const request = httpMock.expectOne(url); // This will both test for a url, and 'close' the backend call.
    expect(request.request.method).toBe('GET');
    request.flush(entireApiResponse); // Here we provide a dummy value 'entireResponse' to return from api request
  });
});
