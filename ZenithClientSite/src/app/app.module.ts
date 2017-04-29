import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthService} from './auth.service';
import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module'; 
import { RegisterComponent } from './register/register.component';
import { ShowEventsComponent } from './show-events/show-events.component';
import { HeaderComponent } from './header/header.component';
import {EventsAPIService} from './events-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    AuthenticationComponent,
    RegisterComponent,
    ShowEventsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, EventsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
