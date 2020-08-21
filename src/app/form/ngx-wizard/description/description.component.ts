import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { ProfileService} from '../../../services/profile.service'


@Component({
    selector: 'mt-wizard-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss']
})

export class DescriptionComponent implements OnInit {
    title = 'STEP 3 : Tell Us What Makes You Unique';
    description : string;
    form: any;
    companyId :any;

    constructor(private router: Router,
        private _AuthService:AuthService,
        private toastr: ToastrService,
        private _ProfileService:ProfileService,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.companyId = +params['id'];
         });
    }

    save(form: any) {
        if (!form.valid)
            return;
        let obj={
            description : this.description
        }
        this._ProfileService.updateGoogleSheetDetails(this.companyId,obj).subscribe((res:any)=>{
            // this.toastr.success('E-Commerce google sheet details update successfully!');
            this.toastr.success('Saved successfully!');
            this.router.navigateByUrl('/forms/ngx/schedule/'+this.companyId, { relativeTo: this.route.parent, skipLocationChange: true });
        })
        // this.router.navigateByUrl('/forms/ngx/schedule/11152', { relativeTo: this.route.parent, skipLocationChange: true });
        let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);       
        
    }

    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}