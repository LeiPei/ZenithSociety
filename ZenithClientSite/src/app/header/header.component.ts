import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AuthInfo} from "../auth-info";
import {EventsAPIService} from '../events-api.service';
import { Token } from './../token';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   title = 'Zenith Society';
   authInfo = AuthInfo;
   

   constructor(private auth : AuthService, private eventsAPIService : EventsAPIService, private router: Router) {

      // check if the user has already logged Logged in 
     if(localStorage.getItem("isAuth") === "yes") {
       this.authInfo.isAuth = true;
       this.authInfo.userName = localStorage.getItem("userName");
       Token.access_token = localStorage.getItem("access_token");
       if(localStorage.getItem("isMemberOrAdmin")==="yes") {
           this.authInfo.isMemberOrAdmin = true;
       }
     
     }
    
   }
  
  /*
    log off the user
  */
  test() {
    this.authInfo.isAuth = false;
    this.authInfo.userName = "Click here to Login";
    this.authInfo.isMemberOrAdmin = false;
    Token.access_token = null;
    localStorage.setItem("userName", null);
    localStorage.setItem("isAuth", null);
    localStorage.setItem("access_token", null);
    localStorage.setItem("isMemberOrAdmin", null);
    this.router.navigate(['./dashboard']);
    //location.reload();
  }


  ngOnInit() {
    
  }

}
