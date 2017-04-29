import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EventsAPIService} from '../events-api.service';
import {AuthInfo} from '../auth-info';
@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {

   Mon : Event[] = [];
   Tue : Event[] = [];
   Wed : Event[] = [];
   Thu : Event[] = [];
   Fri : Event[] = [];
   Sat : Event[] = [];
   Sun : Event[] = [];
   authInfo = AuthInfo;

  constructor(private eventsAPIService : EventsAPIService) { 
    //this.getCurrentEvents();
  }

  getCurrentEvents() {
    this.eventsAPIService.getCurrentEvents().then(model => {this.Mon = model.mon; this.Tue = model.tue; this.Wed = model.wed; this.Thu = model.thu;
    this.Fri=model.fri; this.Sat=model.sat; this.Sun = model.sun;})
  }

  getPreviousEvents() {
    this.eventsAPIService.getPreviousEvents().then(model => {this.Mon = model.mon; this.Tue = model.tue; this.Wed = model.wed; this.Thu = model.thu;
    this.Fri=model.fri; this.Sat=model.sat; this.Sun = model.sun;});
  }

  getNextEvents() {
    this.eventsAPIService.getNextEvents().then(model => {this.Mon = model.mon; this.Tue = model.tue; this.Wed = model.wed; this.Thu = model.thu;
    this.Fri=model.fri; this.Sat=model.sat; this.Sun = model.sun;});
  }

  ngOnInit() {
    this.getCurrentEvents();
  }

}
