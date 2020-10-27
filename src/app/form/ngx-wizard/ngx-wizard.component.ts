import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonFunctionsService } from './../../services/commonFunctions.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'multi-step-wizard-app',
    templateUrl: './ngx-wizard.component.html',
    styleUrls: ['./ngx-wizard.component.scss']
})

export class NGXFormWizardComponent implements OnInit {
    userName : any; 
    data = ["C-Corp", "S-Corp", "LLC", "Closed Group", "Sole Proprietorship", "Partnership", "Non-Profit" ];
  selectedIndex:number=1;
  showAge: any;
  myData: any;
  checkingId:any="1";
  checkId = localStorage.getItem('DisableRegForm');
  
  // public mask = {
  //   guide: true,
  //   showMask: true,
  //   mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  // };
 
    constructor(private router: Router,
        private route: ActivatedRoute,
        private commonFunctionsService: CommonFunctionsService) {
    }

    ngOnInit() {
        const localStorageItem = this.commonFunctionsService.checkUser();
        this.userName = localStorageItem.user.username;
        console.log("username"+ this.userName);
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
         this.checkingId ="2";
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

   
   
    onSubmit(){
      console.log(this.MerchantForm.value);
    }
    clickMe(){
        this.selectedIndex=0;
      }
}