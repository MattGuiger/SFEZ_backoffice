import { Component, OnInit } from '@angular/core';

import { Address } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileService} from '../../../services/profile.service'
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'mt-wizard-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})

export class AddressComponent implements OnInit {
    title = 'STEp 5 : Business Details';
    business_address: string;
    city : string;
    state : string;
    form: any;
    companyId : any;

    constructor(private router: Router,
        private _ProfileService:ProfileService,
        private toastr: ToastrService,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        // this.address = this.formDataService.getAddress();
        this.route.params.subscribe(params => {
            this.companyId = +params['id']; // (+) converts string 'id' to a number
         });
    }
    //Save button event Starts
    save(form: any) {
        let obj={
            business_address : this.business_address,
            // city :this.city,
            // state : this.state
        }
        if (!form.valid)
            return;
        this._ProfileService.updateComapnydetails(this.companyId,obj).subscribe((res:any)=>{
            this.toastr.success('Company Detail Updated successfully!');
            this.router.navigateByUrl('/forms/ngx/result/'+this.companyId, { relativeTo: this.route.parent, skipLocationChange: true });
            },error=>{
            
            })
        // this.formDataService.setAddress(this.address);
        let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
        
    }
    //Save button event Ends

    //Cancel button event Starts
    cancel() {
        this.router.navigateByUrl('work/'+this.companyId, { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Cancel button event Ends
}