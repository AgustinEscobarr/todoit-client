import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  FormGroupDirective } from '@angular/forms';
import { UserLogin } from 'src/app/model/user-login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent{

  user= new UserLogin('');
    

  loginForm: FormGroup;

  constructor(  private loginService:  LoginService) { 
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
      .register(this.user).subscribe( resp =>  {
        console.log(resp);
        this.loginForm.reset(); 
       }); */
  }


}
