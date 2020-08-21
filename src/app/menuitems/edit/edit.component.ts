import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProfileService} from '../../services/profile.service'
import {CommonFunctionsService} from '../../services/commonFunctions.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  templateUrl: 'edit.component.html'
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

}
