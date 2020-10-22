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
  age: any;
  showAge: any;
  myData: any;

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
    }
    MerchantForm = new FormGroup({
      tax_id: new FormControl(),
      year: new FormControl()
      });
   
   
    ageCalculator(){
      if(this.age){
        const showAge = (new Date()).getFullYear()-this.age;
        console.log(showAge)
      }
    }
   

    clickMe(){
        this.selectedIndex=0;
      }
}