import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  FormGroupDirective } from '@angular/forms';
import { UserLogin, UserLoged} from 'src/app/model/user-login';

import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import { StateData } from '../../model/state-data';

import {MatDialog} from '@angular/material/dialog';
import { DialogLoginComponent } from 'src/app/components/dialog-login/dialog-login.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{

  user= new UserLogin();
  

  loginForm: FormGroup;

  constructor(private route:Router, private loginService:  LoginService, private stateService:StateService, public dialog: MatDialog) { 
    this.loginForm  = new FormGroup({
    
      email : new FormControl(''),
      password  : new FormControl(''),
      
    })

    console.log(this.loginForm);
    
    
  }
  
  onSubmit(formDirective:FormGroupDirective){
    
    console.log(this.loginForm);
    
    this.user  = this.loginForm.value;
    
    console.log(this.user);
    formDirective.resetForm();
    this.loginForm.reset();
    /*
    this.loginService
      .login(this.user).subscribe( resp =>  {
        console.log(resp);
        this.loginForm.reset(); 
       }); */
       
      console.log(this.user.email);
      console.log(this.user.password);
      
      this.loginService.login (this.user).subscribe(  (resp:any) => {
  
      
      console.log(resp.id);
      let userLoged= new UserLoged('');
      
      userLoged.id=resp.id;
      userLoged.fullName=resp.fullName;
      userLoged.email=resp.email;
      console.log(userLoged)
      localStorage.setItem('userLoged', JSON.stringify(userLoged));
      let loged = JSON.parse(localStorage.getItem('userLoged')||"");
      console.log(loged);
      
      
      this.redirect();
      
  },
  error=>{console.log('oops', error); this.openDialog()}
  );
  
  }
  redirect(){
    this.route.navigate(['home']);
  }
  
  openDialog() {
    this.dialog.open(DialogLoginComponent);
  }



  ngOnInit(){
    
  }
}



