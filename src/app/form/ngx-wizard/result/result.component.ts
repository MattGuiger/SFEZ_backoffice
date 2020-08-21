import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileService} from '../../../services/profile.service'
import { ToastrService } from 'ngx-toastr';

@Component ({
    selector:     'mt-wizard-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
    title = 'Thank You!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    companyId : any;
    companyProfile : any;
    
    constructor(private formDataService: FormDataService,   private _ProfileService:ProfileService,
        private toastr: ToastrService,
        private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        this.route.params.subscribe(params => {
            this.companyId = +params['id']; // (+) converts string 'id' to a number
            this.getCompanyInfo(this.companyId);
         });
    }

    getCompanyInfo(companyId){
        this._ProfileService.getCompanyprofile(companyId).subscribe((res:any)=>{
            this.companyProfile = res.data;
        })
    }

    //Submit button event Starts
    submit() {
        this.toastr.success('Excellent! Your vendor created successfully');
        this.formData = this.formDataService.resetFormData ();
        this.isFormValid = false;
    }
    //Submit button event Ends
}
