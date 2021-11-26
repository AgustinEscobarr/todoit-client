import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TravelData } from 'src/app/model/travel-data';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  constructor(private http: HttpClient) { }

  register(client:TravelData):  Observable<TravelData>  {

/*     let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'});
 */
    return  this.http.post<TravelData>('http://localHost:4200/api/Alta', client);
}
}