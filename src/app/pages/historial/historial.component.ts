
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import { StateService } from '../services/state.service';
import { StateTravel } from '../../model/users-table';
import { TRAVEL_CODE } from 'src/app/model/const/status-shipping';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.sass']
})
export class HistorialComponent implements OnInit {

  code:string[]=TRAVEL_CODE;
  valido=true;
  displayedColumns: string[] = ['fechaSolicitud', 'marcaModelo', 'equipo','envio','fechaEntrega'];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  infoTablaViaje: StateTravel[] = [
    //{fecha: "1-01", marca: 'Dell', modelo: 'G3 15 Gaming', estadoEquipo: 'A Reparar', estadoEnvio: 'Pendiente a retirar'}
  ];

  dataSource = new MatTableDataSource<StateTravel> (undefined);
  

  constructor(private stateService: StateService) {
    // Create 100 users
    
    
    
    /*
    const users = JSON.parse(localStorage.getItem('stateTable')||""); 
    

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);*/
  }

  ngOnInit(){
    
    this.stateService.stateGet().subscribe( resp=> {
      

      let respuesta = JSON.stringify(resp)
  
      JSON.parse(respuesta);
  
      this.infoTablaViaje = JSON.parse(respuesta);
      console.log(this.infoTablaViaje)
      
        this.dataSource = new MatTableDataSource<StateTravel>(this.infoTablaViaje);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  
    });
    
    
  
  
} 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  obtener() {
    
}

}
