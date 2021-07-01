import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg = '';
  constructor( private routes: Router,private _AuthService:AuthService) { }

  ngOnInit() {
  }
  check(uname: string, p: string) {
    this._AuthService.login({username:uname,password:p}).subscribe((data:any)=>{
      localStorage.setItem('user',JSON.stringify(data))
      // this.routes.navigate(['/dashboard/dashboard2']);
      this.routes.navigate(['/forms']);
    },err=>{
      this.msg = 'Invalid Username or Password';
    })
    // const output = this.service.checkusernameandpassword(uname, p);
    // if (output == true) {
    
    // } else {
    //   this.msg = 'Invalid Username or Password';
    // }
  }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
