import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { ViajeComponent } from './viaje/viaje.component';
import { EstadoComponent } from './estado/estado.component';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    HomeComponent,LoginComponent, ViajeComponent, EstadoComponent, HistorialComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
    
  ],
  exports:[LoginComponent,HomeComponent]
})
export class PagesModule { }
