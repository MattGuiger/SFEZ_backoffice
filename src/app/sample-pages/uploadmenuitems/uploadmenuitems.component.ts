import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../services/profile.service'
import { NotifierService } from 'angular-notifier';
import {CommonFunctionsService} from '../../services/commonFunctions.service'
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'

@Component({
  templateUrl: 'uploadmenuitems.component.html'
})
export class UploadmenuitemsComponent implements OnInit{
  profile :any;
  user : any;
  profileuser:any;
  uploading :Boolean =false
 constructor(private router : Router,private toastr: ToastrService,private _ProfileService:ProfileService,private _NotifierService:NotifierService,private _CommonFunctionsService:CommonFunctionsService){

 }
 ngOnInit(){
  this.getCompanyProfile();
  this.getCompanyProfileUser();
 }

 getCompanyProfile(){
   this.user = this._CommonFunctionsService.checkUser().user;
   this._ProfileService.getCompanyprofile(this.user.company_id).subscribe((res:any)=>{
     this.profile = res.data;
   },error=>{
    //  
   })
 }

 getCompanyProfileUser(){
  this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getCompanyprofileUser(this.user.id).subscribe((res:any)=>{
    this.profileuser = res.data;
  },error=>{
    // 
  })
}

 uploadGoogleMenuSheet(){
   this.uploading = true;
  this._ProfileService.uploadGoogleMenuSheet().subscribe((res:any)=>{
    this.uploading = false;
    this.toastr.success(res.success);
    this.router.navigateByUrl('/menuitems');
    
  },error=>{
    this.uploading = false;
    this.toastr.error('Failed to upload, please try again later')
  })
 }

 updateGoogleSheetDetails(google_api_key,google_sheet_url,google_sheet_tab_name){
   let obj={
    google_api_key:google_api_key,
    google_sheet_url : google_sheet_url,
    google_sheet_tab_name :google_sheet_tab_name
   }
  this.uploading = true;
 this._ProfileService.updateGoogleSheetDetails(this.profile.id,obj).subscribe((res:any)=>{
   this.uploading = false;
   this.toastr.success('Details updated successfully!');
 },error=>{
   this.uploading = false;
   this.toastr.error('Failed to update, please try again later')
 })
}


}
