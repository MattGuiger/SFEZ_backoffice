
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { AgmMap, MouseEvent, MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // providers: [MyserviceService]
})
export class SignupComponent implements OnInit {
  msg = '';
  countryList: any[] = [];
  showcountryInput: Boolean = false
  currentLocation: any
  lat: any
  lng: any
  constructor(private routes: Router,
    private _AuthService: AuthService,
    private toastr: ToastrService,
    private apiloader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.getcountryList();
    this.getPosition()
  }

  getcountryList() {
    this._AuthService.getcountryList().subscribe((res: any) => {
      this.countryList = res;
    })
  }

  check(first_name: string, last_name: string, email, password, confirmpassword, company_name) {
    if (password !== confirmpassword) {
      this.msg = 'Password and Confirm password should be same.';
      return;
    }
    if (first_name === null || first_name === "") {
      console.log('first_name', first_name)
      this.msg = 'First name is required';
      return;
    }
    // if(first_name){
    //   this.msg = 'First name is required';
    //   return;
    // }
    if (last_name === null || last_name === "") {
      this.msg = 'Last name is required';
      return;
    }
    if (email === null || email === "") {
      this.msg = 'Email is required';
      return;
    }
    if (password === null || password === "") {
      this.msg = 'Password is required';
      return;
    }
    if (confirmpassword === null || confirmpassword === "") {
      this.msg = 'Confirmpassword is required';
      return;
    }
    // if (country_id === null || country_id === "") {
    //   this.msg = 'Country is required';
    //   return;
    // }
    if (company_name === null || company_name === "") {
      this.msg = 'Vendor name is required';
      return;
    }

    if (this.lng && this.lat) {
      this._AuthService.vendorRegistration({
        first_name: first_name, last_name: last_name, email: email,
        password: password, company_name: company_name, role: 'OWNER',latitude:this.lat,longitude:this.lng
      }).subscribe((data: any) => {
        this.toastr.success('Vendor Register Successfully!');
        this.routes.navigate(['/authentication/login']);
      }, err => {
        this.msg = 'Something went wrong! please try again.';
      })
    }

  }

  signupform = true;
  recoverform = false;

  showRecoverForm() {
    this.signupform = !this.signupform;
    this.recoverform = !this.recoverform;
  }


  getPosition() {
    navigator.geolocation.getCurrentPosition(resp => {
      console.log('respsssssssss')
      console.log('lng', resp.coords.longitude, 'lat', resp.coords.latitude)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
      // this.apiloader.load().then(() => {
      //   let geocoder = new google.maps.Geocoder;
      //   let latlng = {lat: resp.coords.longitude, lng:resp.coords.latitude};

      //   geocoder.geocode({'location': latlng}, function(results) {
      //       if (results[0]) {
      //         this.currentLocation= results[0].formatted_address;

      //       console.log(this.currentLocation);
      //       } else {
      //         console.log('Not found');
      //       }
      //   });
      // })
      // resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
    }, (err) => {
      console.log('errrorrr', err)
      if (err) {
        this.showcountryInput = true
      }
    })

    //   navigator.permissions.query({
    //     name: 'geolocation'
    // }).then(function(result) {
    //   console.log('respsssssssss',result)
    // })


  }

}
