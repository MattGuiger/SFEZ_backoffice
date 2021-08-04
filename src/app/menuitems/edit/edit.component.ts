import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProfileService} from '../../services/profile.service'
import {CommonFunctionsService} from '../../services/commonFunctions.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  templateUrl: 'edit.component.html',
  styles:[`@import '~ngx-ui-switch/ui-switch.component.scss';`]
})
export class EditComponent implements OnInit{
  id:any;
  categoryId:any;
  productDetails:any;
  user : any;
  categories : any;

  constructor(private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _ProfileService: ProfileService,private _CommonFunctionsService:CommonFunctionsService){

  }

  ngOnInit(){
    this.activeRoute.params.subscribe(params => {
        this.id = params['id'];
        this.categoryId = params['categoryId'];
        this.getProductById(this.id,this.categoryId)
  })
  this.getCategory();
  }

  getCategory(){
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getCategory(this.user.company_id).subscribe((res:any)=>{
        this.categories = res.data;
    },error=>{
      this.toastr.error('something went wrong! please try again')
    })
  }

  getProductById(id,categoryId){
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getProductById(id,categoryId,this.user.company_id).subscribe((res:any)=>{
  
      if(res.status==200){
        this.productDetails = res.data[0];
        console.log(this.productDetails,'productDetails');
        
      }
      
    },error=>{
      this.toastr.error('something went wrong! please try again')

    })
  }

  parseFloat(num){
    return this._CommonFunctionsService.numberFormatt(num,2);
  }
  // goBack(){
  //   this._Router.navigateByUrl('/menuitems')
  // }
  onChange(event)
  {
    console.log(event,'event');
    const data =
    {
      "title" : this.productDetails.title,
      "price" : this.productDetails.title,
      "status" : this.productDetails.status,
      "description" : this.productDetails.description,
      "addOnMultiple" : this.productDetails.addonmultiple == 'null' ? this.productDetails.addonmultiple : "",
      "addOnPrice" : this.productDetails.addonprice == 'null' ?  this.productDetails.addonprice : "" ,
      "optionSingle" : this.productDetails.optionsingle == 'null' ? this.productDetails.optionsingle : "",
      "optionCategory" : this.productDetails.optioncategory,
      "instructions" : this.productDetails.instruction,
      "drill_in" : event ? 1 : 0
  }
  this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getstatusProf(data,this.user.company_id,this.productDetails.id).subscribe((res:any)=>
  {
    console.log(res);
    
  })

  }

}
