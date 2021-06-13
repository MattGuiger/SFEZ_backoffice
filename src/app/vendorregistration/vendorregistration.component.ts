import { Component,OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {CommonFunctionsService} from '../services/commonFunctions.service'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'vendorregistration.component.html'
})
export class VendorRegistrationComponent implements OnInit{
  user:any;
  productList : any[]=[];
  title = 'Please tell us about yourself.';

  form: any;

  constructor(
    private router: Router,

    private route: ActivatedRoute,
    private toastr: ToastrService,private _ProfileService: ProfileService,private slimLoader: SlimLoadingBarService,private _CommonFunctionsService:CommonFunctionsService,private _Router:Router){
  }

  ngOnInit(){
    this.getAllProductList();
  }
  getAllProductList(){
  
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllProductList(this.user.company_id).subscribe((res:any)=>{
      this.productList = res;
     
    },error=>{
      debugger
    })
 }
 openProduct(item){
   this._Router.navigateByUrl('menuitems/view/'+item.category+'/'+item.id)
 }

 getDescription(description){
   return description.length > 80 ? description.substr(0,80)+"..." : description
 }







 //Save button event Starts

 //Save button event Ends


}
