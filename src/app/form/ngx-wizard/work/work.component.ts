import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { ProfileService} from '../../../services/profile.service'


@Component({
    selector: 'mt-wizard-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {
    // title = 'E-Commerce (Google Sheets) Details';
    title = 'STEP 2 : Tags';
    google_api_key: string;
    google_sheet_url :string;
    google_sheet_tab_name : string;
    tags = ['Pizza', 'Pasta', 'Parmesan'];
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
        // let obj ={
        //     google_sheet_url : this.google_sheet_url,
        //     google_api_key : this.google_api_key,
        //     google_sheet_tab_name : this.google_sheet_tab_name
        // }
        debugger
        let obj={
            tags : this.tags
        }
        this._ProfileService.updateGoogleSheetDetails(this.companyId,obj).subscribe((res:any)=>{
            // this.toastr.success('E-Commerce google sheet details update successfully!');
            this.toastr.success('Tags Update successfully!');
            this.router.navigateByUrl('/forms/ngx/description/'+this.companyId, { relativeTo: this.route.parent, skipLocationChange: true });
        })
        // this.router.navigateByUrl('/forms/ngx/description/11152', { relativeTo: this.route.parent, skipLocationChange: true });
        
        let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);       
        
    }

    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}