import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg = '';
  constructor( private routes: Router,private _AuthService:AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  check(uname: string, p: string) {
    this._AuthService.login({username:uname,password:p}).subscribe((data:any)=>{
      if(data.status==200){
        this.toastr.success('Login Successfully!');
        localStorage.setItem('user',JSON.stringify(data))
      if(data.user.profile_updated == false){
        // this.routes.navigate(['/sample-pages/profile']);  
        this.routes.navigate(['/forms']);
      }else{
        // this.routes.navigate(['/dashboard/dashboard2']);
        this.routes.navigate(['/forms']);
      }
      }else{
        this.msg=data.message;
        this.toastr.error(data.message);
      }
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
