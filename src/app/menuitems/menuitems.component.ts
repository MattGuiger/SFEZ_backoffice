import { Component,OnInit, ViewChild } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {CommonFunctionsService} from '../services/commonFunctions.service'
import {ActivatedRoute, Router} from '@angular/router'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';
import { Route } from '@angular/compiler/src/core';

@Component({
  templateUrl: 'menuitems.component.html',
  styleUrls:['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit{
  user:any;
  productList : any[]=[];
  processing : boolean = false;
  googleSheet: any;
  profile : any;
  date = "";
  arr: any;
  categories: any;
  myroute:any
  @ViewChild('ref') ref;
  constructor(private toastr: ToastrService,
    private _ProfileService: ProfileService,
    private slimLoader: SlimLoadingBarService,
    private _CommonFunctionsService:CommonFunctionsService,
    private route:ActivatedRoute,
    private _Router:Router){

  }

  ngOnInit(){
    this.getAllProductList();
    this.getCompanyProfile();
    this.getgoogleauthntication()
    this.getAllCategories();
    this.getAllGoogleSheetDetails()
    // this.route.params.subscribe(res=>{
    //   console.log('res msumm',res)
    // })
   let resttt= this._Router.url
   console.log('res msumm',resttt)
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
 getAllGoogleSheetDetails(){
  this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getAllGoogleSheetDetails(this.date).subscribe((res:any)=>{
    this.googleSheet = res.data;
    console.log('Google Sheet'+this.googleSheet)
  },error=>{
   //  
  })
 }
 getgoogleauthntication(){
 let googgleData = this._ProfileService.getGoogleAuthenication();
console.log('googgleData',googgleData)
}
onClick(event) {
  event.preventDefault();
//  console.log('onClick event.checked ' + event.checked);
// console.log('onClick event.target.checked '+event.target.checked);
  console.log('onClick this.ref._checked '+ this.ref._checked);

  this.ref._checked = !this.ref._checked;
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
getAllCategories(){
  this._ProfileService.getAllCategories().subscribe(res=>{
    this.categories=res.data
  })
}
 openProduct(item){
   this._Router.navigateByUrl('menuitems/view/'+item.category+'/'+item.id)
 }

 getDescription(description){
   return description.length > 25 ? description.substr(0,25)+"..." : description
 }
 getTitle(description){
  return description.length > 10 ? description.substr(0,10)+"..." : description
}
}
