import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private stateService:StateService) { }

  ngOnInit(): void {
    let data:Array<any>=[];
    this.stateService.stateGet().subscribe((resp:any)=>{
      console.log(resp)
      let length:number;
      resp.forEach(function(element:any){
      length=element.travelEquipmentDTOs.length
      data.push({
         fecha:element.travelEquipmentDTOs[length-1].operationDate,
         marca:element.mark,
         modelo:element.model,
         equipo:element.failure,
      })
      localStorage.setItem('stateTable',JSON.stringify(data));
      });
      
    });
  }

}
