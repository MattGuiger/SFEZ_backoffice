import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../services/profile.service'
import { NotifierService } from 'angular-notifier';
import {CommonFunctionsService} from '../../services/commonFunctions.service'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
  profile :any;
  user : any;
  countryList : any[]=[];
  profileForm: FormGroup;

 constructor(private _AuthService:AuthService,private toastr: ToastrService,private _ProfileService:ProfileService,private _NotifierService:NotifierService,private _CommonFunctionsService:CommonFunctionsService){
    this.managerFormInit();
 }
 ngOnInit(){
  this.getCountryList();
  //this.getCompanyProfile();
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
   })
}



// updateComapnydetails(tags,schedule,hours,twitter,instagram,facebook,distance_range,description,delivery_chg_amount,phone,email,name,business_address,country_id,state,city){
//   this.user = this._CommonFunctionsService.checkUser().user;
//   let obj = {
//     tags:tags,
//     schedule : schedule,
//     hours : hours,
//     twitter : twitter,
//     instagram : instagram,
//     facebook : facebook,
//     distance_range : distance_range,
//     description : description,
//     delivery_chg_amount : delivery_chg_amount,
//     phone : phone,
//     email : email,
//     name : name,
//     business_address : business_address,
//     country_id : country_id,
//     state : state,
//     city : city
//   } 
//   this._ProfileService.updateComapnydetails(this.user.company_id,obj).subscribe((res:any)=>{
//     this.toastr.success('Company Detail Updated successfully!');
//     this.getCompanyProfile();
//   },error=>{
//     
//   })
// }




uploadCompanyProfile(formData){
  this.user = this._CommonFunctionsService.checkUser().user;
   this._ProfileService.uploadCompanyProfile(this.user.company_id,formData).subscribe((res:any)=>{
     this.getCompanyProfile();
   },error=>{
     
   })
}

 getCompanyProfile(){
   this.user = this._CommonFunctionsService.checkUser().user;
   this._ProfileService.getCompanyprofile(this.user.company_id).subscribe((res:any)=>{
     this.profile = res.data;
    //  console.log(this.profile);

   },error=>{
    
   })
 }

 uploadGoogleMenuSheet(){
  this._ProfileService.uploadGoogleMenuSheet().subscribe((res:any)=>{
    
  },error=>{
    this._NotifierService.notify('error','Failed to upload, please try again later...!')
  })
 }

 /** Sarwan work Start */

 managerFormInit() {
  this.profileForm = new FormGroup({
    zip: new FormControl(null),
    state_id: new FormControl(null),
    phone: new FormControl(null),
    username: new FormControl(null),
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    city: new FormControl(null),
    country_id: new FormControl(null)
  });
}



onManagerSubmit(){
  this.user = this._CommonFunctionsService.checkUser().user;
  console.log(this.user.id);
  console.log(this.profileForm.value);
  
   this._ProfileService.updateUserProfile(this.user.id, this.profileForm.value).subscribe(
     (response) => {
       if(response.status == 200){
         this.toastr.success('Profile updated successfully');
       }
     },
     (error) => {
       console.log(error);
       this.toastr.error('Something went wrong')
     }
   )
 }

}
