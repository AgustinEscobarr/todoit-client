import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  FormGroupDirective } from '@angular/forms';
import { TravelData } from '../../model/travel-data';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.sass']
})
export class ViajeComponent  {
  travel= new TravelData('');
  travelForm: FormGroup;
  client= JSON.parse(localStorage.getItem('userLoged')||'')

  constructor(  private travelService:  TravelService) { 
    this.travelForm  = new FormGroup({
      
      marca : new FormControl(''),
      modelo  : new FormControl(''),
      falla  : new FormControl(''),
      
      
      
      
    })
}
onSubmit(formDirective:FormGroupDirective){
    
  console.log(this.travelForm);
  
  this.travel  = this.travelForm.value;
  this.travel.idClient=this.client.id 
  
  console.log(this.travel);
  formDirective.resetForm();
  this.travelForm.reset();

  
  this.travelService.retirement (this.travel).subscribe(  (resp:any) => {
  console.log(resp);
  
})
}
}
