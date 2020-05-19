import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NewUserComponent } from './new-user.component';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;
  const dialogRefSpy = {
    close: function() {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
        ],
      declarations: [ NewUserComponent ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    spyOn(dialogRefSpy, 'close');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially have defaults for addUserForm', () => {
    const expectedDefault = {
      email: '',
      first_name: '',
      last_name: '',
      avatar: '',
    };
    expect(component.addUserForm.value).toEqual(expectedDefault);
  });

  it('should update form with valid input', () => {
    const validAddUserForm = {
      email: 'm@gmail.com',
      first_name: 'matt',
      last_name: 'macey',
      avatar: 'svg-1',
    };
    component.addUserForm.patchValue(validAddUserForm);

    expect(component.addUserForm.value).toEqual(validAddUserForm);
    expect(component.addUserForm.valid).toBeTruthy();
  });

  it('should have valid user information when user clicks save()', () => {
    const validAddUserForm = {
      email: 'm@gmail.com',
      first_name: 'matt',
      last_name: 'macey',
      avatar: 'svg-1',
    };

    component.addUserForm.patchValue(validAddUserForm);
    component.addUserForm.markAsDirty();
    component.saveUser();

    expect(component.user.first_name).toEqual(validAddUserForm.first_name);
    expect(component.user.last_name).toEqual(validAddUserForm.last_name);
    expect(component.user.email).toEqual(validAddUserForm.email);
    expect(component.user.avatar).toEqual(validAddUserForm.avatar);
    expect(component.user.userAdded).toEqual(true);

    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
