import { Component, OnInit } from '@angular/core';

import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'mt-wizard-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})

export class PersonalComponent implements OnInit {
    title = 'Step #1 Vendor';
    personal: Personal;
    form: any;
    countryList : any[]=[];


    constructor(private router: Router,
        private _AuthService:AuthService,
        private toastr: ToastrService,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        this.getcountryList();
    }
    
      getcountryList(){
        this._AuthService.getcountryList().subscribe((res:any)=>{
          this.countryList = res;
        })
      }
    
    changeCountry(event){
        console.log('changeCountry',event.target.value)
        this.personal.country_id=event.target.value
    }

    //Save button event Starts
    // save(form: any) {
    //     if (!form.valid)
    //         return;
    //     this.formDataService.setPersonal(this.personal);
    //     this._AuthService.vendorRegistration(this.personal).subscribe((res:any)=>{
    //         if(res.status=200){
    //             this.toastr.success('Vendor details saved successfully!');
    //             this.router.navigateByUrl('/forms/ngx/photo/'+res.user.company_id, { relativeTo: this.route.parent, skipLocationChange: true });
    //         }else{
    //             this.toastr.success(res.message);
    //         }
    //     })
    //     // this.router.navigateByUrl('/forms/ngx/photo/11152', { relativeTo: this.route.parent, skipLocationChange: true });

    //     let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
    //     if (firstState.length > 0) {          
    //     };       
    // }

    save(){
        this.router.navigateByUrl('/forms/ngx/photo', { relativeTo: this.route.parent, skipLocationChange: true });
    }


}
