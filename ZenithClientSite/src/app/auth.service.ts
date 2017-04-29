import { Injectable } from '@angular/core';
import { Event } from './event';
import { Token } from './token';
import {RegisterModel} from './register/register-model'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthService {

  private BASE_URL = "http://zenithback.azurewebsites.net"; 

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  public isAuth : boolean = false

  public userName : string = "Click here to Login"

  public isMemberOrAdmin : boolean = false

  constructor(private http: Http) { }

  Login(user : string, password: string) {
    const url = `${this.BASE_URL}/api/token`;
    var body =  `username=${user}&password=${password}`;
    // this.http.post(url, body, {headers: this.headers}).toPromise().then(res => console.log(res.json().data));
    return this.http.post(url, body, {headers: this.headers}).map((response: Response) => response.json()).catch(this.handleError);
  }

  Regiser(model : RegisterModel) {
    const url = `${this.BASE_URL}/api/APIAccount`;
    var body =  `username=${model.UserName}&password=${model.Password}&firstName=${model.FirstName}&lastName=${model.LastName}&email=${model.Email}`;
    return this.http.post(url, body, {headers: this.headers}).map((response: Response) => response.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
     //console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
  }

}
