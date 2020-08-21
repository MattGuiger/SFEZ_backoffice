import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../services/profile.service'
import { NotifierService } from 'angular-notifier';
import {CommonFunctionsService} from '../../services/commonFunctions.service'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';


@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
  profile :any;
  user : any;
  countryList : any[]=[];

 constructor(private _AuthService:AuthService,private toastr: ToastrService,private _ProfileService:ProfileService,private _NotifierService:NotifierService,private _CommonFunctionsService:CommonFunctionsService){

 }
 ngOnInit(){
  this.getCountryList();
  this.getCompanyProfile();
 }

 getCountryList(){
  this._AuthService.getcountryList().subscribe((res:any)=>{
    this.countryList = res;
  })
 }

 onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file',file);
    this.uploadCompanyProfile(formData);
  }
}

onFileSelectFeaturephoto(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file',file);
    this.uploadFeaturePhoto(formData);
  }
}
uploadFeaturePhoto(formData){
  this.user = this._CommonFunctionsService.checkUser().user;
   this._ProfileService.uploadFeaturePhoto(this.user.company_id,formData).subscribe((res:any)=>{
     this.getCompanyProfile();
   },error=>{
     debugger
   })
}



updateComapnydetails(tags,schedule,hours,twitter,instagram,facebook,distance_range,description,delivery_chg_amount,phone,email,name,business_address,country_id,state,city){
  this.user = this._CommonFunctionsService.checkUser().user;
  let obj = {
    tags:tags,
    schedule : schedule,
    hours : hours,
    twitter : twitter,
    instagram : instagram,
    facebook : facebook,
    distance_range : distance_range,
    description : description,
    delivery_chg_amount : delivery_chg_amount,
    phone : phone,
    email : email,
    name : name,
    business_address : business_address,
    country_id : country_id,
    state : state,
    city : city
  } 
  this._ProfileService.updateComapnydetails(this.user.company_id,obj).subscribe((res:any)=>{
    this.toastr.success('Company Detail Updated successfully!');
    this.getCompanyProfile();
  },error=>{
    debugger
  })
}

uploadCompanyProfile(formData){
  this.user = this._CommonFunctionsService.checkUser().user;
   this._ProfileService.uploadCompanyProfile(this.user.company_id,formData).subscribe((res:any)=>{
     this.getCompanyProfile();
   },error=>{
     debugger
   })
}

 getCompanyProfile(){
   this.user = this._CommonFunctionsService.checkUser().user;
   this._ProfileService.getCompanyprofile(this.user.company_id).subscribe((res:any)=>{
     this.profile = res.data;
     debugger
   },error=>{
     debugger
   })
 }

 uploadGoogleMenuSheet(){
  this._ProfileService.uploadGoogleMenuSheet().subscribe((res:any)=>{
    debugger
  },error=>{
    this._NotifierService.notify('error','Failed to upload, please try again later...!')
  })
 }

}
