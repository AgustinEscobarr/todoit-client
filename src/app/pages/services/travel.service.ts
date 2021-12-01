import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TravelData } from 'src/app/model/travel-data';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  constructor(private http: HttpClient) { }

  retirement(client:TravelData):  Observable<TravelData>  {

/*     let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'});
 */
    return  this.http.post<TravelData>(`/api/Retirement?clientId=${client.idClient}&mark=${client.marca}&model=${client.modelo}&failure=${client.falla}`, client);
}
}