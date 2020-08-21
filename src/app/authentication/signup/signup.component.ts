
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // providers: [MyserviceService]
})
export class SignupComponent implements OnInit {
  msg = '';
  countryList : any[]=[];

  constructor( private routes: Router,private _AuthService:AuthService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getcountryList();
  }

  getcountryList(){
    this._AuthService.getcountryList().subscribe((res:any)=>{
      this.countryList = res;
    })
  }

  check(first_name: string, last_name: string,email,password,confirmpassword,company_name,country_id) {
    if(password!==confirmpassword){
      this.msg = 'Password and Confirm password should be same.';
      return;
    }
    this._AuthService.vendorRegistration({first_name:first_name,last_name:last_name,email:email,password:password,company_name:company_name,role:'OWNER',country_id:country_id}).subscribe((data:any)=>{
      this.toastr.success('Vendor Register Successfully!');
      this.routes.navigate(['/authentication/login']);
    },err=>{
      this.msg = 'Something went wrong! please try again.';
    })
  }

  signupform = true;
  recoverform = false;

  showRecoverForm() {
    this.signupform = !this.signupform;
    this.recoverform = !this.recoverform;
  }
}
