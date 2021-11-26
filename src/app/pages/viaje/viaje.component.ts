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

  constructor(  private travelService:  TravelService) { 
    this.travelForm  = new FormGroup({
      
      marca : new FormControl(''),
      modelo  : new FormControl(''),
      falla  : new FormControl(''),
      address  : new FormControl(''),
      date  : new FormControl(''),
      time  : new FormControl(''),
      
    })
}
onSubmit(formDirective:FormGroupDirective){
    
  console.log(this.travelForm);
  
  this.travel  = this.travelForm.value;
  
  console.log(this.travel);
  formDirective.resetForm();
  this.travelForm.reset();
}
}
