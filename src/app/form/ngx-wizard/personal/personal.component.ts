import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonFunctionsService } from './../../../services/commonFunctions.service';
import { Component, OnInit, Input, AbstractType } from '@angular/core';

import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/services/profile.service';




@Component({
    selector: 'mt-wizard-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})

export class PersonalComponent implements OnInit {
    @Input() tempFileData: any;
    title = 'Step #1 Vendor';
    personal: Personal;
    form: any;
    countryList : any[]=[];
    business_address: string;
    city : string;
    state : string;
    // form: any;
    data: any[]=[];
    companyId : any;
    personalDetailsForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      vendor_name: new FormControl()
      });
    files: File[] = [];
    feathuredfiles: File[] = [];
    user : any;

    constructor(private router: Router,
        private _AuthService:AuthService,
        private toastr: ToastrService,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private commonFunctionsService: CommonFunctionsService,
        private workflowService: WorkflowService,
        private _ProfileService:ProfileService,
        private _CommonFunctionsService : CommonFunctionsService,
) {
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

    onSubmit(){
      console.log("personal"+ JSON.stringify(this.personalDetailsForm.value));
      // const data = localStorage.setItem('personalFormData', JSON.stringify(this.personalDetailsForm.value));
      this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    }

    // save(){
    //     this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    // }


    // uploadCompanyProfile(formData, authObject){
    //   this.user = this._CommonFunctionsService.checkUser().user;
    //    this._ProfileService.fileUpload(formData, authObject).subscribe((res:any)=>{
    //      this.toastr.success('Photo upload successfully!')
    //    },error=>{
    //       this.toastr.error('failed to upload, please try again later')
    //    })
    // }

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
      localStorage.setItem('fileData', JSON.stringify(formData));
      this.uploadFeaturePhoto(formData);
    }
     
    onRemovefeathured(event) {
      console.log(event);
      this.feathuredfiles.splice(this.feathuredfiles.indexOf(event), 1);
    }

  // onSelect(event) {
  //     console.log(event);
  //     let authObject;
  //     const data = {
  //         "client_id": "eDlPjoMabiu84tszlmr9gcpgm1YJXOJoSZxCBooYuW",
  //         "grant_type": "client_credentials",
  //         "client_secret": "hqvxfSwzIz9RP3nTLP3SbDZUUDDpfMteRJtfm3rOv3"
  //     }
  //     this._ProfileService.getAuthToken(data).subscribe((res:any)=>{
  //       this.toastr.success('token created successfully')
  //       authObject = res;
  //       this.files.push(...event.addedFiles);
  //     const formData = new FormData();
  //     formData.append('file',event.addedFiles[0]);
  //     this.uploadCompanyProfile(formData, authObject);
  //   },error=>{
  //       this.toastr.error('Unable to get token')
  //    })
  //   }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    const formData = new FormData();
    formData.append('file',event.addedFiles[0]);
    this.tempFileData = formData;
    // localStorage.setItem('fileData', JSON.stringify(formData));
    this.uploadCompanyProfile(formData);
  }
     
    onRemove(event) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }

  //Save button event Starts
  save1() {
      this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
  }
  //Save button event Ends

  //Cancel button event Starts
  cancel() {
      this.router.navigateByUrl('/forms/ngx/wizard', { relativeTo: this.route.parent, skipLocationChange: true });
  }
  //Cancel button event Ends
  registerVendor(){
console.log('personalDetailsForm',this.personalDetailsForm.value)
  }
}
