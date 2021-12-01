import { state } from '@angular/animations';
import { hostViewClassName } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { StateData } from '../../model/state-data';
import { StateService } from '../services/state.service';



/** Constants used to fill up our data base. */

let cosa :any = localStorage.getItem('userLoged');
console.log(`Esto hay adentro ${cosa}`);
@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.sass']
})
export class EstadoComponent implements OnInit {
  
  valido=true;
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'equipo'];
  dataSource: MatTableDataSource<StateData>;

  @ViewChild(MatPaginator) paginator:any;
  @ViewChild(MatSort) sort: any;

  constructor(private stateService: StateService) {
    // Create 100 users
    
    
    
    
    const users = JSON.parse(localStorage.getItem('stateTable')||""); 
    

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(){
   
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
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

/** Builds and returns a new User. 
*/