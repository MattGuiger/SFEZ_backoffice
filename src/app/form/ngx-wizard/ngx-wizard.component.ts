import { CommonFunctionsService } from './../../services/commonFunctions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
    selector: 'multi-step-wizard-app',
    templateUrl: './ngx-wizard.component.html',
    styleUrls: ['./ngx-wizard.component.scss']
})

export class NGXFormWizardComponent implements OnInit {
  @Input() tempFileData: any;  
  userName : any; 
    data = ["C-Corp", "S-Corp", "LLC", "Closed Group", "Sole Proprietorship", "Partnership", "Non-Profit" ];
  selectedIndex:number=1;
  showAge: any;
  myData: any;
  checkingId:any="1";
  checkId = localStorage.getItem('DisableRegForm');
  files: File[] = [];
  firstName: any;
  lastName: any;
  username: any;
  feathuredfiles: File[] = [];
  user : any;
  
  // public mask = {
  //   guide: true,
  //   showMask: true,
  //   mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  // };
 
    constructor(private router: Router,
        private route: ActivatedRoute,
        private _ProfileService:ProfileService,
        private toastr: ToastrService,
        private commonFunctionsService: CommonFunctionsService) {
    }

    ngOnInit() {
        const localStorageItem = this.commonFunctionsService.checkUser();
        this.userName = localStorageItem.user.username;
        console.log("username"+ this.userName);
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
         this.checkingId ="2";
         const value = localStorage.getItem('user');
        if (value && value != 'undefined' && value != 'null') {
          const currentUser = JSON.parse(value);
          this.firstName = currentUser.user.first_name;
          this.lastName = currentUser.user.last_name;
          this.username = currentUser.user.username;
        }
        
    }
    MerchantForm = new FormGroup({
      tax_id: new FormControl('', [Validators.required,  Validators.pattern("^[0-9]{2}-?[0-9]{7}$")]),
      ssn: new FormControl('', [Validators.required,  Validators.pattern("^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$")]),
      Phone: new FormControl('',[Validators.required,  Validators.pattern("^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$")]),
      years: new FormControl('',[Validators.required,  Validators.pattern("^[0-9]{4}$")]),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      account_no: new FormControl('', Validators.required),
      routing_no: new FormControl('', Validators.required),
      id_no: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)

      });
   
   
    ageCalculator(event){
      const active = event.target.value;
      if(active){
        const showAge = (new Date()).getFullYear()-active;
        console.log(showAge)
      }
    }

    uploadCompanyProfile(formData){
      this.user = this.commonFunctionsService.checkUser().user;
       this._ProfileService.uploadCompanyProfile(this.user.company_id,formData).subscribe((res:any)=>{
         console.log('resss ',res.data[0].photo)
         localStorage.setItem('photo',res.data[0].photo );
         this.toastr.success('Photo upload successfully!')
       },error=>{
          this.toastr.error('failed to upload, please try again later')
      })
    }
    onSelect(event) {
      console.log(event);
      this.files.push(...event.addedFiles);
      const formData = new FormData();
      formData.append('file',event.addedFiles[0]);
      this.tempFileData = formData;
      // localStorage.setItem('fileData', JSON.stringify(formData));
      this.uploadCompanyProfile(formData);
    }
    uploadFeaturePhoto(formData){
      this.user = this.commonFunctionsService.checkUser().user;
       this._ProfileService.uploadFeaturePhoto(this.user.company_id,formData).subscribe((res:any)=>{
        console.log('resss ',res.data[0].photo)
        localStorage.setItem('driving_license',res.data[0].featured_dish );
          this.toastr.success('driving_license upload successfully!')
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
    onRemove(event) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }
   
    onSubmit(){
      console.log(this.MerchantForm.value);
    }
    clickMe(){
        this.selectedIndex=0;
      }
}