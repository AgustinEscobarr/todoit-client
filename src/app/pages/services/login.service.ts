import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserLogin } from 'src/app/model/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

 /* register(client:UserLogin):  Observable<UserLogin>  {

     let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'});
 
    return  this.http.post<UserLogin>('/api/Users?userOperation=1', client);
  }*/
  login(client:UserLogin): Observable<UserLogin> {
    return this.http.get<UserLogin>(`/api/Login?email=${client.email}&password=${client.password}`)
  }
}
