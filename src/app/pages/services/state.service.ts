import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateData } from '../../model/state-data';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  stateGet(): Observable<string> {
    let loged= JSON.parse(localStorage.getItem('userLoged')||'')
    return this.http.get<string>(`/api/Equipment?clientId=${loged.id}`)
  }
}
