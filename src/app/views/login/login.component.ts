import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(public router: Router, private loginService: LoginService, private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  login(){
    this.loginService.login(this.loginForm.value).subscribe(resp=>{
      console.log(resp)
      if(resp['token'] != null){
        localStorage.setItem("tokenId", resp["token"]);
        this.router.navigate(['/home']);
      }
    }, error =>{
      this._snackBar.open("Credenciales incorrectas","",{
        duration: 2000
      });
    })
  }
}
