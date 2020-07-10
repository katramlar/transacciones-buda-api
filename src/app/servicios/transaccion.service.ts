import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticker } from '../modelos/Ticker';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  // url= 'https://jsonplaceholder.typicode.com/todos';
 // url = 'https://www.buda.com/api/v2/markets/btc-clp/ticker.json';
  url = '/markets/btc-clp/ticker.json';
  constructor(private http: HttpClient) { }

  getJson(): Observable<any> {
    return this.http.get<any>(this.url);
  }


 /*  getTicker(): any {
    console.log(this.http.get<any>(`${this.url}`));
    return this.http.get<any>(`${this.url}`);
  } */


}
