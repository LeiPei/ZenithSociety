import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Response} from "@angular/http";
import {Token} from "../token";
import {AuthModel, LoginModel} from "./auth-model";
import {AuthInfo} from "../auth-info";
import {HeaderComponent} from "../header/header.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  newUser : AuthModel = new AuthModel();

  authFail : boolean = false;

  errorMsg : string = "";

  constructor(private auth : AuthService, private router: Router) { 

  }

  ngOnInit() {
  }

  login(model : AuthModel) {
    this.auth.Login(model.userName, model.passWord).subscribe(
      (data: any) => {Token.access_token = data.access_token; 
        console.log(Token.access_token);
        AuthInfo.userName = model.userName;
        AuthInfo.isAuth = true;
        AuthInfo.isMemberOrAdmin = data.isInRole;
        //******************* try to store local data*/
        localStorage.setItem("userName", model.userName);
        localStorage.setItem("isAuth", "yes");
        localStorage.setItem("access_token", Token.access_token);
        if(AuthInfo.isMemberOrAdmin) {
          localStorage.setItem("isMemberOrAdmin", "yes");
        }

        //********************************** */
        LoginModel.isAuth = true;
        LoginModel.userName = model.userName;
        LoginModel.isMA = data.isInRole;
        this.authFail = false;
        this.router.navigate(['./dashboard']);
      },
      
      (error: any) => { console.log(error._body); this.authFail = true; this.errorMsg = error._body;}
    );
  }

}
