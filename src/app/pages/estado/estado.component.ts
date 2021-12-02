
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import { StateService } from '../services/state.service';
import { StateTravel } from '../../model/users-table';
import { TRAVEL_CODE } from 'src/app/model/const/status-shipping';



/** Constants used to fill up our data base. */

let cosa :any = localStorage.getItem('userLoged');
console.log(`Esto hay adentro ${cosa}`);
@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.sass']
})
export class EstadoComponent implements AfterViewInit, OnInit {
  code:string[]=TRAVEL_CODE;
  valido=true;
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'equipo','envio'];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  infoTablaViaje: StateTravel[] = [
    //{fecha: "1-01", marca: 'Dell', modelo: 'G3 15 Gaming', estadoEquipo: 'A Reparar', estadoEnvio: 'Pendiente a retirar'}
  ];

  dataSource = new MatTableDataSource<StateTravel> (undefined);
  

  constructor(private stateService: StateService) {
    
  }

  ngOnInit(){
    
    this.stateService.stateGet().subscribe( resp=> {
      

      let respuesta = JSON.stringify(resp)
  
      JSON.parse(respuesta);
  
      this.infoTablaViaje = JSON.parse(respuesta);
      console.log(this.infoTablaViaje)
      
        this.dataSource = new MatTableDataSource<StateTravel>(this.infoTablaViaje);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
  
    });
    
  
} 

ngAfterViewInit() {
  
  
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

/** Builds and returns a new User. 
*/