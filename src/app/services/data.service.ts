import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { timepick } from '../timetablepage/timepick';
import {Observable} from 'rxjs/Observable';
import { TimetablepageComponent } from '../timetablepage';
import { datetime } from '../timetablepage/datetime';



@Injectable({
  providedIn: 'root'
})
//endpoint kald fra restapi
export class DataService {
  _url1 : string = 'http://localhost:8090/API/customers';
  _url2: string = 'http://localhost:8090/API/orders'
  constructor(
    private http: HttpClient 
  ) { }
  
  formdata: timepick;
  formdata1: datetime;
//metode for hhtp request bruger data 
  senddate(user: timepick):Observable<timepick> {
   return this.http.post<timepick>(this._url1, user);
  }

  //metode for http request tid
   sendtime(user: datetime):Observable<datetime> {
    return this.http.post<datetime>(this._url2, user);
  } 

} 
