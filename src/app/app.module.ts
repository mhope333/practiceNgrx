import './core/rxjs-extensions';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material.module'; // imports the shared material module (containing all our material imports)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { UsersService } from './users/users.service';

import { UserEffects } from './effects/user.effects';
import { userReducer } from './reducers/user.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('user', userReducer), // add the user state to store
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}) // means it keeps the last 25 states visible in the devTools
  ],
  providers: [
    UsersService,
  ],
  entryComponents: [
    NewUserComponent // due to the AOT compiler, to be able to figure out which component factory to use?
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
