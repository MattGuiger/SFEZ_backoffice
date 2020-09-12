import { Component, OnInit } from '@angular/core';

import { Address } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileService} from '../../../services/profile.service'
import { ToastrService } from 'ngx-toastr';
import { CommonFunctionsService } from 'src/app/services';


@Component({
    selector: 'mt-wizard-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss']
})

export class PhotoComponent implements OnInit {
    title = 'Photo/ Featured Dish';
    business_address: string;
    city : string;
    state : string;
    form: any;
    companyId : any;
    files: File[] = [];
    feathuredfiles: File[] = [];
    user : any;


    constructor(private router: Router,
        private _ProfileService:ProfileService,
        private toastr: ToastrService,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private _CommonFunctionsService : CommonFunctionsService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        // this.address = this.formDataService.getAddress();
        this.route.params.subscribe(params => {
            this.companyId = +params['id']; // (+) converts string 'id' to a number
         });
    }

    uploadCompanyProfile(formData){
        this.user = this._CommonFunctionsService.checkUser().user;
         this._ProfileService.uploadCompanyProfile(this.user.company_id,formData).subscribe((res:any)=>{
           this.toastr.success('Photo upload successfully!')
         },error=>{
            this.toastr.error('failed to upload, please try again later')
         })
      }
      
      uploadFeaturePhoto(formData){
        this.user = this._CommonFunctionsService.checkUser().user;
         this._ProfileService.uploadFeaturePhoto(this.user.company_id,formData).subscribe((res:any)=>{
            this.toastr.success('Feathured dish upload successfully!')
        },error=>{
            this.toastr.error('failed to upload, please try again later')
         })
      }

      onSelectfeathured(event) {
        console.log(event);
        this.feathuredfiles.push(...event.addedFiles);
        const formData = new FormData();
        formData.append('file',event.addedFiles[0]);
        this.uploadFeaturePhoto(formData);
      }
       
      onRemovefeathured(event) {
        console.log(event);
        this.feathuredfiles.splice(this.feathuredfiles.indexOf(event), 1);
      }

    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
        const formData = new FormData();
        formData.append('file',event.addedFiles[0]);
        this.uploadCompanyProfile(formData);
      }
       
      onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
      }

    //Save button event Starts
    save() {
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Save button event Ends

    //Cancel button event Starts
    cancel() {
        this.router.navigateByUrl('/forms/ngx/wizard', { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Cancel button event Ends
}