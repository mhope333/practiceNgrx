import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { userReducer } from '../reducers/user.reducer';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  // let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        // StoreModule.forRoot({user: () => { return { users: []}; }})
        StoreModule.forRoot({user: () => { return userReducer; }}) // initial/default "user" state is empty "users" array (like line above)
        ],
      declarations: [ UsersComponent ],
      providers: [
        { provide: MatSnackBar, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // store = TestBed.get(Store);
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
