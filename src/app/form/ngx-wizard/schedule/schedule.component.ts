import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { ProfileService} from '../../../services/profile.service'


@Component({
    selector: 'mt-wizard-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
    title = 'STEP #5 Business Details';
    schedule: string;
    hours :string;
    facebook : string;
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
        let obj ={
            schedule : this.schedule,
            facebook : this.facebook,
            hours : this.hours
        }
        this._ProfileService.updateGoogleSheetDetails(this.companyId,obj).subscribe((res:any)=>{
            // this.toastr.success('E-Commerce google sheet details update successfully!');
            this.toastr.success('Weekly Schedule saved successfully!');
            this.router.navigateByUrl('/forms/ngx/address/'+this.companyId, { relativeTo: this.route.parent, skipLocationChange: true });
        })
        // this.router.navigateByUrl('/forms/ngx/address/11152', { relativeTo: this.route.parent, skipLocationChange: true });
        let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);           
    }

    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}