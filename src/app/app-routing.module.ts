import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule}  from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstadoComponent } from './pages/estado/estado.component';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes:Routes =[
  {
    path:'home', component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login', component:LoginComponent,
    canActivate:[NologinGuard]
  },
  {
    path:'state',component:EstadoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'travel',component:ViajeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'record',component:HistorialComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**', component:NotFoundComponent
  },
  {
    path:'', component:LoginComponent,
    canActivate:[NologinGuard]

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
