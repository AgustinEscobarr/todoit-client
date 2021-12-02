import { Component, OnInit } from '@angular/core';
import { TRAVEL_CODE } from 'src/app/model/const/status-shipping';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor(private stateService:StateService) { }

  ngOnInit(): void {
    
  }
  obtenerNombre(){
    let storage=JSON.parse(localStorage.getItem('userLoged')||'') 
    return storage.fullName
  }
}
