import { CommonFunctionsService } from './../../../services/commonFunctions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    title = 'STEP #2 Type';
    google_api_key: string;
    google_sheet_url: string;
    unitName: string;
    google_sheet_tab_name : string;
    tags = ['Pizza', 'Pasta', 'Parmesan'];
    form: any;
    companyId :any;
    pass: any;
    user: any;
    // workFormData = new FormGroup({
    //     workType: new FormControl(),
    //     schedule: new FormControl(),
    //     schedulehour: new FormControl()       
    //     });
        workFormData = new FormGroup({
            // name: new FormControl(localStorage.getItem('first_name')+ ' LOC'),
            // name: new FormControl(localStorage.getItem('company_name1')+ ' LOC'),
            // username: new FormControl('', Validators.required),
            // username: new FormControl(),
            // password: new FormControl(),
            // password: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            // unit: new FormControl() ,
            // email: new FormControl()


            });
    constructor(private router: Router,
        private _AuthService:AuthService,
        private toastr: ToastrService,
        private _CommonFunctionsService: CommonFunctionsService,
        private _ProfileService:ProfileService,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
            this.user = this._CommonFunctionsService.checkUser().user;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.companyId = +params['id'];
         });
         
    }

    // save(form: any) {
    //     if (!form.valid)
    //         return;
    //     // let obj ={
    //     //     google_sheet_url : this.google_sheet_url,
    //     //     google_api_key : this.google_api_key,
    //     //     google_sheet_tab_name : this.google_sheet_tab_name
    //     // }
    //     debugger
    //     let obj={
    //         tags : this.tags
    //     }
    //     this._ProfileService.updateGoogleSheetDetails(this.companyId,obj).subscribe((res:any)=>{
    //         // this.toastr.success('E-Commerce google sheet details update successfully!');
    //         this.toastr.success('Tags Update successfully!');
    //         this.router.navigateByUrl('/forms/ngx/description/'+this.companyId, { relativeTo: this.route.parent, skipLocationChange: true });
    //     })
    //     // this.router.navigateByUrl('/forms/ngx/description/11152', { relativeTo: this.route.parent, skipLocationChange: true });
    //     let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);       
    // }
    // onSubmit(){
    //     this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true }); 
    // }
    generateP() {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';
        let i;
            for (i = 1; i <= 8; i++) {
                var char = Math.floor(Math.random()
                    * str.length + 1);
                pass += str.charAt(char)
            }
          return pass;
    }
    onSubmit(){
        console.log("work"+ JSON.stringify(this.workFormData.value));
        console.log(this.user.role);
        this.workFormData.value.name = localStorage.getItem('first_name')+ ' LOC';
        const comapany_id= localStorage.getItem('companyId');
        const id= localStorage.getItem('Id');
        const fname = localStorage.getItem('first_name').split('');
        const fName = fname[0]+fname[1]+fname[2];
        this.workFormData.value.username = fName + "_mgr1@gmail.com";
        this.workFormData.value.password = this.generateP();
        // this.workFormData.value.delivery_radius =""
        this.workFormData.value.territory_id=this.user.territory_id;
        // this.workFormData.value.number=""
        // this._ProfileService.addUnit(this.workFormData.value).subscribe(res=>{
        this._ProfileService.addUnit(this.workFormData.value,comapany_id).subscribe(res=>{
            if(res.status==200){
                //  this._ProfileService.getCompany_unitid(id, res.user.id).subscribe(res=>{
                //   res.user.unit_id = res.user.id
                //   this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true });
                //  })
                this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true });
               }  
        })
        // this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true });   
    }
        cancel() {
            this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
// {
    //             "name": "ww",
    //            "username": "ww",
    //            "password": "vvv",
    //             "type": "RESTAURANT",
    //             "territory_id":  "41",
    //             "number": 1
    //         } 