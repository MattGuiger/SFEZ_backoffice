import { Component,OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {CommonFunctionsService} from '../services/commonFunctions.service'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'ngx-toastr';

import { Personal } from '../../app/form/ngx-wizard/data/formData.model';
import { FormDataService } from '../../app/form/ngx-wizard/data/formData.service';
import { WorkflowService } from "../../app/form/ngx-wizard/workflow/workflow.service";
import { STEPS } from "../../app/form/ngx-wizard/workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'vendorregistration.component.html'
})
export class VendorRegistrationComponent implements OnInit{
  user:any;
  productList : any[]=[];
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;

  constructor(private workflowService: WorkflowService,
    private router: Router,
    private formDataService: FormDataService,
    private route: ActivatedRoute,
    private toastr: ToastrService,private _ProfileService: ProfileService,private slimLoader: SlimLoadingBarService,private _CommonFunctionsService:CommonFunctionsService,private _Router:Router){
  }

  ngOnInit(){
    this.getAllProductList();
    
    this.personal = this.formDataService.getPersonal();
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
 save(form: any) {
     if (!form.valid)
         return;

     this.formDataService.setPersonal(this.personal);

     let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
     if (firstState.length > 0) {          
     };       
     this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
 }
 //Save button event Ends


}
