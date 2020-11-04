import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

// import { IPGeolocationAPI } from 'ip-geolocation-api-sdk-typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg = '';
  lat: any
  lng: any
  ipAddress:any
  //  ipgeolocationApi = new IPGeolocationAPI("", false);
  constructor(private routes: Router, private _AuthService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getPosition();
    // this.getIPAddress();
  }

// Function to handle API response
 handleResponse() {
//   let geolocationParams = new GeolocationParams();
//   geolocationParams.setIPAddress('1.1.1.1'); 
//   geolocationParams.setFields('geo,time_zone,currency');
// this.ipgeolocationApi.getGeolocation(data=>{
//   console.log()
// })
}

// Get complete geolocation for the calling machine's IP address




  // getIPAddress()
  // {
  // this._AuthService.getIP().subscribe((res:any)=>{
  //     this.ipAddress = res.ip;
  //     console.log('ipAddressipAddress',this.ipAddress)
  //     // let geolocationParams = new GeolocationParams();
  //   //   geolocationParams.setIPAddress(this.ipAddress); 
  //   //   geolocationParams.setFields('geo,time_zone,currency');
  //   // this.ipgeolocationApi.getGeolocation(data=>{
  //   //   console.log('datadatadatadatadatadatadata',data)
  //   // },geolocationParams)
  //   });
  // }

  check(uname: string, p: string) {
    this._AuthService.login({ username: uname, password: p }).subscribe((data: any) => {
      if (data.status == 200) {
        this.toastr.success('Login Successfully!');
        localStorage.setItem('user', JSON.stringify(data))
        if (data.user.profile_updated == false) {
          // this.routes.navigate(['/sample-pages/profile']);
          this.routes.navigate(['/forms']);
        } else {
          // this.routes.navigate(['/dashboard/dashboard2']);
          this.routes.navigate(['/forms']);
        }
      } else {
        this.msg = data.message;
        this.toastr.error(data.message);
      }
    }, err => {
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

  getPosition() {
    navigator.geolocation.getCurrentPosition(resp => {
      console.log('respsssssssss')
      console.log('lng', resp.coords.longitude, 'lat', resp.coords.latitude)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
      localStorage.setItem('latitude', this.lat);
      localStorage.setItem('longitude', this.lng)
    }, (err) => {
      console.log('errrorrr', err)
      if (err) {
        // this.showcountryInput = true
      }
    })




  }
}
