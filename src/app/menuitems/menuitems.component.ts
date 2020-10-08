import { Component,OnInit, ViewChild } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {CommonFunctionsService} from '../services/commonFunctions.service'
import {Router} from '@angular/router'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'menuitems.component.html',
  styleUrls:['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit{
  user:any;
  productList : any[]=[];
  processing : boolean = false;
  profile : any;
  categories: any;
  addedItems=[]
  addedCategories=[]
  @ViewChild('ref') ref;
  authentication_url: any;
  constructor(private toastr: ToastrService,private _ProfileService: ProfileService,private slimLoader: SlimLoadingBarService,private _CommonFunctionsService:CommonFunctionsService,private _Router:Router){

  }
  onChange(event,item) {
    // can't event.preventDefault();
    console.log('onChange event.checked '+ event.checked,item)
    if(event.checked){
      this.addedCategories.push(item)
    }else{
      this.removeItemFromArray(item)
    }
    
  }
  
  addItems(){
    console.log('addedItems',this.addedCategories)
   this.addedItems= this.addedCategories
  }
  onChange1(event,item) {
    // can't event.preventDefault();
    console.log('onChange event.checked '+ event.checked,item)
    if(event.checked){
      this.removeItemFromArray(item)
    }
  }
  removeCategories(){
    this.addedItems =this.addedCategories
  }
  removeItemFromArray(item){
    const index = this.addedCategories.indexOf(item);
  if (index > -1) {
    this.addedCategories.splice(index, 1);
  }
  }
  ngOnInit(){
    // this.getAllProductList();
    // this.getCompanyProfile();
    this.getgoogleauthntication()
    this.getAllCategories();
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
 getgoogleauthntication(){
  this._ProfileService.getGoogleAuthenication().subscribe(res=>{
    console.log('googgleData',res.data)
    this.authentication_url=res.data
 });

}
createFolderinDrive(){
  const data={
    folder:this.addedItems
  }
console.log('folderss data',data)

this._ProfileService.createfolderInGoogleDrive(data).subscribe(res=>{
console.log('folderss',res)
})
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
