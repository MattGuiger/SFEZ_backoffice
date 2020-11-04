
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core'; 
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // providers: [MyserviceService]
})
export class SignupComponent implements OnInit {
  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;  
    private sub: any;
    getAddress: any;
    lat: any;
    lng: any;
    latitude: any;
    longitude: any;
    zoom: any;
  msg = '';
  countryList : any[]=[];

  constructor( private routes: Router,private _AuthService:AuthService,private toastr: ToastrService,  private apiloader: MapsAPILoader) { }

  ngOnInit() {
    this.getcountryList();
    this.get()  
    this.agmMap.triggerResize(true);  
     this.zoom = 16;  
  }

  getcountryList(){
    this._AuthService.getcountryList().subscribe((res:any)=>{
      this.countryList = res;
    })
  }

  get() {  
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position: Position) => {  
            if (position) {  
                this.lat = position.coords.latitude;  
                this.lng = position.coords.longitude;  
                this.getAddress = (this.lat, this.lng)  
                console.log(position)  
                this.apiloader.load().then(() => {  
                    let geocoder = new google.maps.Geocoder;  
                    let latlng = {  
                        lat: this.lat,  
                        lng: this.lng  
                    };  
                    geocoder.geocode({  
                        'location': latlng  
                    }, function(results) {  
                        if (results[0]) {  
                            this.currentLocation = results[0].formatted_address;  
                            console.log(this.assgin);  
                        } else {  
                            console.log('Not found');  
                        }  
                    });  
                });  
            }  
        })  
    }  
}   
mapClicked($event: MouseEvent) {  
    this.latitude = $event.coords.lat,  
        this.longitude = $event.coords.lng  
    this.apiloader.load().then(() => {  
        let geocoder = new google.maps.Geocoder;  
        let latlng = {  
            lat: this.latitude,  
            lng: this.longitude  
        };  
        geocoder.geocode({  
            'location': latlng  
        }, function(results) {  
            if (results[0]) {  
                this.currentLocation = results[0].formatted_address;  
                console.log(this.currentLocation);  
            } else {  
                console.log('Not found');  
            }  
        });  
    });  
} 
  check(first_name: string, last_name: string,email,password,confirmpassword,company_name,country_id) {
    if(password!==confirmpassword){
      this.msg = 'Password and Confirm password should be same.';
      return;
    }
    if(first_name === null || first_name === ""){
      this.msg = 'First name is required';
      return;
    }
    if(last_name === null || last_name === ""){
      this.msg = 'Last name is required';
      return;
    }
    if(email === null || email === ""){
      this.msg = 'Email is required';
      return;
    }
    if(password === null || password === ""){
      this.msg = 'Password is required';
      return;
    }
    if(confirmpassword === null || confirmpassword === ""){
      this.msg = 'Confirmpassword is required';
      return;
    }
    if(country_id === null || country_id === ""){
      this.msg = 'Country is required';
      return;
    }
    if(company_name === null || company_name === ""){
      this.msg = 'Vendor name is required';
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
