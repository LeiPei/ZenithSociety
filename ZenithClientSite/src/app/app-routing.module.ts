import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationComponent}   from './authentication/authentication.component';
import {AppComponent} from './app.component';
import {ShowEventsComponent} from './show-events/show-events.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: ShowEventsComponent},
  { path: 'auth',  component: AuthenticationComponent },
  { path: 'register',  component: RegisterComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}