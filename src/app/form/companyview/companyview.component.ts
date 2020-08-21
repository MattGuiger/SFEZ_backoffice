import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProfileService} from '../../services/profile.service'
import {CommonFunctionsService} from '../../services/commonFunctions.service'
import { ToastrService } from 'ngx-toastr';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  templateUrl: 'companyview.component.html'
})
export class CompanyviewComponent implements OnInit{
  id:any;
  categoryId:any;
  companyDetails:any;
  user : any;
  companyForm: FormGroup;  

  type  :any;
  lat = -28.12;
  lng = 110.644;
  latA = -28.754764;
  lngA = 119.736246;
  zoom = 8;


  constructor(private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _ProfileService: ProfileService,private _CommonFunctionsService:CommonFunctionsService){
      this.formInit();
  }

  formInit(){
    this.companyForm = new FormGroup({
      name: new FormControl(null),
      description : new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      facebook: new FormControl(null),
      twitter : new FormControl(null),
      instagram : new FormControl(null),
      hours : new FormControl(null),
      schedule : new FormControl(null),

      business_address : new FormControl(null),
      city : new FormControl(null),
      state : new FormControl(null),
      country : new FormControl(null),
      tags : new FormControl(null),
      distance_range : new FormControl(null),
      delivery_chg_amount : new FormControl(null),

      photo : new FormControl(null),
      featured_dish : new FormControl(null),
      thumbnail : new FormControl(null),
      latitude : new FormControl(null),
      longitude : new FormControl(null),
      order_sys_id : new FormControl(null),
      base_slug : new FormControl(null),  
      default_cat : new FormControl(null),  
      daily_special_cat_id : new FormControl(null),  
      user_id : new FormControl(null),  
    });
    console.log('hasdjashdj',this.companyForm.value)
  }

  ngOnInit(){
    this.activeRoute.params.subscribe(params => {
        this.id = params['id'];
        this.type = params['type']=='view' ? true : null;
        this.getCompanyById(this.id)
  })
  }

  getCompanyById(id){
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getCompanyById(id).subscribe((res:any)=>{
      if(res.status==200){
        this.companyDetails = res.data;
        this.companyForm.patchValue({
          name: this.companyDetails.name,
          description : this.companyDetails.description,
          email: this.companyDetails.email,
          phone: this.companyDetails.phone,
          facebook: this.companyDetails.facebook,
          twitter : this.companyDetails.twitter,
          instagram : this.companyDetails.instagram,
          hours : this.companyDetails.hours,
          schedule : this.companyDetails.schedule,
    
          business_address : this.companyDetails.business_address,
          city : this.companyDetails.city,
          state : this.companyDetails.state,
          country : this.companyDetails.country,
          tags : this.companyDetails.tags,
          distance_range : this.companyDetails.distance_range,
          delivery_chg_amount : this.companyDetails.delivery_chg_amount,

          photo : this.companyDetails.photo,
          featured_dish : this.companyDetails.featured_dish,
          thumbnail : this.companyDetails.thumbnail,
          latitude : this.companyDetails.latitude,
          longitude : this.companyDetails.longitude,
          order_sys_id : this.companyDetails.order_sys_id,
          base_slug : this.companyDetails.base_slug,  
          default_cat : this.companyDetails.default_cat,  
          daily_special_cat_id : this.companyDetails.daily_special_cat_id,  
          user_id : this.companyDetails.user_id, 

        })
      }
      
    },error=>{
      this.toastr.error('something went wrong! please try again')

    })
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat=$event.coords.lat;
    this.lng=$event.coords.lng;
    this.companyForm.value.latitude = this.lat;
    this.companyForm.value.longitude = this.lng;
  }

  onSubmit(){
    this._ProfileService.updateComapnydetails(this.id,this.companyForm.value).subscribe((res:any)=>{
      if(res.status==200){
        this.toastr.success('Company details update successfully!');
      }else{
        this.toastr.error('something went wrong!');
      }
      
    })
  }
  parseFloat(num){
    return this._CommonFunctionsService.numberFormatt(num,2);
  }
  // goBack(){
  //   this._Router.navigateByUrl('/menuitems')
  // }

}
