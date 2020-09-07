import { Component,OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {CommonFunctionsService} from '../services/commonFunctions.service'
import {Router} from '@angular/router'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'menuitems.component.html'
})
export class MenuitemsComponent implements OnInit{
  user:any;
  productList : any[]=[];
  processing : boolean = false;
  profile : any;
  constructor(private toastr: ToastrService,private _ProfileService: ProfileService,private slimLoader: SlimLoadingBarService,private _CommonFunctionsService:CommonFunctionsService,private _Router:Router){

  }

  ngOnInit(){
    this.getAllProductList();
    this.getCompanyProfile();
  }
  getAllProductList(){
    this.processing = true;
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllProductList(this.user.unit_id).subscribe((res:any)=>{
      this.productList = res.data;
      this.processing = false;
    },error=>{
      //debugger
    })
 }

 getCompanyProfile(){
  this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe((res:any)=>{
    this.profile = res.data;
    console.log(this.profile)
  },error=>{
   //  
  })
}

uploadGoogleMenuSheet(){
 this._ProfileService.uploadGoogleMenuSheet().subscribe((res:any)=>{
   this.toastr.success(res.success);
   this.getAllProductList();
 },error=>{
   this.toastr.error('Failed to upload, please try again later')
 })
}

 openProduct(item){
   this._Router.navigateByUrl('menuitems/view/'+item.category+'/'+item.id)
 }

 getDescription(description){
   return description.length > 80 ? description.substr(0,80)+"..." : description
 }

}
