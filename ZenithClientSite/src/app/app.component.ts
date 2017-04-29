import { Component } from '@angular/core';
import { Event } from './event';
import {AuthService} from './auth.service';
import {Response} from "@angular/http";
import {Token} from "./token";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zenith Society';
  //userName = "User";

  constructor(private auth : AuthService) {

  }


}

