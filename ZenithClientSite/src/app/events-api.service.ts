import { Injectable } from '@angular/core';
import { Event } from './event';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {EventsViewModel} from './show-events/events-view-model';
import {AuthInfo} from './auth-info';
import {Token} from './token';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsAPIService {

  private BASE_URL = "http://zenithback.azurewebsites.net";

  constructor(private http: Http) { }

  getCurrentEvents(): Promise<EventsViewModel> {
    const url = `${this.BASE_URL}/api/EventsAPI`;
    Token.page = 0;
    return this.http.get(url)
   .toPromise()
   .then(response => response.json() as EventsViewModel)
   .catch(this.handleError);
    
  }

  getPreviousEvents(): Promise<EventsViewModel> {
    //http://localhost:5000/api/eventsAPI/Client/1
    Token.page = Token.page + 1;
    //var headers = new Headers({'Authorization': `Bearer ${Token.access_token}`});
    //{ 'Accept': 'application/json' }
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${Token.access_token}`);

    let options = new RequestOptions({ headers: headers });
    const url = `${this.BASE_URL}/api/EventsAPI/Client/${Token.page}`;
    return this.http.get(url, options)
   .toPromise()
   .then(response => response.json() as EventsViewModel)
   .catch(this.handleError);
  }

  getNextEvents(): Promise<EventsViewModel> {
    //http://localhost:5000/api/eventsAPI/Client/1
    Token.page = Token.page - 1;
    //var headers = new Headers({'Authorization': `Bearer ${Token.access_token}`});
    //{ 'Accept': 'application/json' }
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', `Bearer ${Token.access_token}`);

    let options = new RequestOptions({ headers: headers });
    const url = `${this.BASE_URL}/api/EventsAPI/Client/${Token.page}`;
    return this.http.get(url, options)
   .toPromise()
   .then(response => response.json() as EventsViewModel)
   .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
  }

}
