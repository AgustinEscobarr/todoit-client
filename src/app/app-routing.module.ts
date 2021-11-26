import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule}  from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstadoComponent } from './pages/estado/estado.component';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { HistorialComponent } from './pages/historial/historial.component';

const routes:Routes =[
  {
    path:'home', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'state',component:EstadoComponent
  },
  {
    path:'travel',component:ViajeComponent
  },
  {
    path:'record',component:HistorialComponent
  },
  {
    path:'**', redirectTo:'home'
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
