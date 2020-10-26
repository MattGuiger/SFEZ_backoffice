import { routes } from './../../../apps/email/mail.module';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { ProfileService} from '../../../services/profile.service'
import { local } from 'd3';


@Component({
    selector: 'mt-wizard-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
    title = 'STEP #5 Business Details';
    
    hours :string;
    facebook : string;
    allData:any;
    schedule: any[] = [];
    form: any;
    result:any[]=[];
    // dayArr :any[]= [];
    companyId :any;
    selectedIndex:number=1;
    hoursArr: FormArray;
    

    scheduleFormData = new FormGroup({
      hours: new FormControl('', Validators.required),
      // name: new FormControl(),
      schedule: new FormControl(this.schedule),
      facebook: new FormControl('www.facebook.com/'),
      // button1: new FormControl(),
      // button2: new FormControl(),
      // button3: new FormControl(),
      // button4: new FormControl(),
      // button5: new FormControl(),
      // button6: new FormControl(),
      // button7: new FormControl()      
      });
      
    data: any[] = [];
    newStorage:any[]=[];
    // newStorage2:any[]=[11,22,"Ef"];

    constructor(private router: Router,
        private _AuthService:AuthService,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private _ProfileService:ProfileService,
        private route: ActivatedRoute, private formDataService: FormDataService,
        private workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.companyId = +params['id'];
         });
        //  this.scheduleFormData = this.fb.group({
        //   dayArr: this.fb.array([])
        // });
    }

    // onChange(day: string, isChecked: boolean) {
    //   const userFormArray = <FormArray>this.scheduleFormData.controls.dayArr;
    //   if (isChecked) {
    //     userFormArray.push(new FormControl(day));
    //     console.log(userFormArray)
    //   } else {
    //     let index = userFormArray.controls.findIndex(x => x.value == day)
    //     userFormArray.removeAt(index);
    //     console.log(userFormArray)
    //   }
    // }

    onSubmit(){
      //store data in localstorage
  //     console.log("work"+ JSON.stringify(this.scheduleFormData.value));
  // const data = localStorage.setItem('scheduleFormData', JSON.stringify(this.scheduleFormData.value));

     //merge local storage data
    //  this.mergeLocalStorageData(this.newStorage, this.scheduleFormData);
    this.allData = this.mergeData();

console.log('all megre data',this.allData)
      //post request with all the data
      const company_id= localStorage.getItem('companyId');
      // this.scheduleFormData.value.facebook = "www.facebook.com/machotacos";
      // this.scheduleFormData.value.schedule = "0,1,2,3,4,5";
      this.scheduleFormData.value.featured_dish = localStorage.getItem('featured_dish');
      this.scheduleFormData.value.photo = localStorage.getItem('photo');

    this._ProfileService.updateCompanyCredentials(company_id, this.allData).subscribe((res: any) => {
      // this.toastr.success('Telegram group Created successfully');
      this.toastr.success('Success');
      this.clearLocalstorage();
      this.router.navigate(['/forms']);
      document.getElementById("closeModal").click();
      
      // window.localStorage.removeItem("tagsFormData")
      // window.localStorage.removeItem("descriptionFormData")
      // window.localStorage.removeItem("companyId")
      // window.localStorage.removeItem("first_name")
      // window.localStorage.removeItem("featured_dish")
      // window.localStorage.removeItem("photo")
      // window.localStorage.removeItem("company_name")
      // window.localStorage.removeItem("company_name1")
      
      
      
    },
      error => {
        this.toastr.error(error.error.message)
      })
     
    }

    clearLocalstorage() {
      let removeKeys = ["tagsFormData", "descriptionFormData", "companyId", "first_name", "featured_dish", "photo", "company_name", "company_name1"]
      removeKeys.forEach(k => localStorage.removeItem(k))
    }

    mergeData(){
    //   this.newStorage.push(this.scheduleFormData.value);
    // localStorage.setItem("New Storage", JSON.stringify(this.newStorage));
    // this.result= JSON.parse(localStorage.getItem("New Storage"));
    //  stored.push(this.newStorage2);

   
    
    // const personalFormData = JSON.parse(localStorage.getItem("personalFormData"));
    // const workFormData = JSON.parse(localStorage.getItem("workFormData"));
    const tagsFormData = JSON.parse(localStorage.getItem("tagsFormData"));
    const descriptionFormData = JSON.parse(localStorage.getItem("descriptionFormData"));
    const scheduleFormData = this.scheduleFormData.value;
    // const dayData = this.onChange;
    // const combinedObject = {...personalFormData, ...workFormData, ...tagsFormData, ...descriptionFormData, ...scheduleFormData};
    const combinedObject = {...tagsFormData, ...descriptionFormData, ...scheduleFormData};

    return combinedObject;
    
    // this.result.push(JSON.parse(localStorage.getItem("tagsFormData")));
    //  localStorage.setItem("New Storage", JSON.stringify(this.result));
    //  let result1 = JSON.parse(localStorage.getItem("New Storage"));
    //  console.log(result1);

    //   this.result.push(JSON.parse(localStorage.getItem("descriptionFormData")));
    //  localStorage.setItem("New Storage", JSON.stringify(this.result));
    //  let result2= JSON.parse(localStorage.getItem("New Storage"));

    //  this.result.push(JSON.parse(localStorage.getItem("workFormData")));
    //  localStorage.setItem("New Storage", JSON.stringify(this.result));
    //  let result3 = JSON.parse(localStorage.getItem("New Storage"));

    //  this.result.push(JSON.parse(localStorage.getItem("scheduleFormData")));
    //  localStorage.setItem("New Storage", JSON.stringify(this.result));
    //  let result4 = JSON.parse(localStorage.getItem("New Storage"));

    //  this.result.push(JSON.parse(localStorage.getItem("personalFormData")));
    //  localStorage.setItem("New Storage", JSON.stringify(this.result));
    //  let result5 = JSON.parse(localStorage.getItem("New Storage"));
    //  console.log(result5);
    }

    //merging all the data in local storage
    // mergeLocalStorageData(name, data) {
      
    //    let oldData: any = localStorage.getItem(name);
    //    try{
    //         oldData = JSON.parse(oldData);
    //    }
    //    catch(e) {
    //     oldData = [];
    //       }
    //    localStorage.setItem( name, JSON.stringify(oldData.concat(data)));
    //      }
    // schedule[]
    weekday(event){
        // console.log(event.target.value)
        // console.log(event.target.checked)
        if(event.target.checked){
         this.addValue(event.target)
          } else {
            this.removeValue(event.target)
          }
    }
    addValue(val){
      this.schedule.push(val.value)
      console.log(this.schedule)
    }
    removeValue(val){
      let index = this.schedule.indexOf(val.value)
      if (index > -1){
        this.schedule.splice(index, 1)
      }
      console.log(this.schedule)
    }
    onAddHours(){
      this.hoursArr.push(this.createItemFormGroup());
    }

    createItemFormGroup(): FormGroup{
      return this.fb.group({
        hours: null,
      schedule: null,
      facebook: null,
      });
    }
    

    save(form: any) {
        console.log("telegram save");
        if (!form.valid)
            return 1;
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
        this.selectedIndex=0;    
        
        //telegram
        this._ProfileService.addTele(this.result).subscribe((res: any) => {
            this.toastr.success('Telegram group Created successfully');
            document.getElementById("closeModal").click();
            
          },
            error => {
              this.toastr.error(error.error.message)
            })

    }

    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}