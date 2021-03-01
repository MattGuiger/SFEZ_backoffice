import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service'
import { CommonFunctionsService } from 'src/app/services';

@Component({
  selector: 'mt-wizard-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  title = 'STEP #5 Business Details';

  hours: number[] = [];
  getTime: number[] = [];
  facebook: string;
  allData: any;
  schedule: any[] = [];
  form: any;
  result: any[] = [];
  companyId: any;
  selectedIndex: number = 1;
  hoursArr: FormArray;
  teleGroupName: any;
  count = 0
  telegramAccessToken: any
  scheduleFormData: FormGroup;
  itemForm: FormGroup;
  myForm: FormGroup;
  arr: FormArray;
  public startTimeArray: string[] = [
    "12:00 AM", "12:30 AM",
    "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM",
    "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
    "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM",
    "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00 PM",
    "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM",
    "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM",
    "11:30 PM"
  ];
  numbers: any[] = [];
  data: any[] = [];
  newStorage: any[] = [];
  user: any
  constructor(private router: Router,
    private _AuthService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _CommonFunctionsService: CommonFunctionsService,
    private _ProfileService: ProfileService,
    private route: ActivatedRoute, 
    private formDataService: FormDataService,
    private workflowService: WorkflowService,
  ) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.numbers = new Array(24).fill(1).map((x, i) => i + 1);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.companyId = + params['id'];
    });
    this.scheduleFormData = this.fb.group({
      facebook: [''],
      telegram_id: [],
      name: "",
      schedule: [this.schedule],
      hours: [this.getTime],
      arr: this.fb.array([this.createItem()])
    })

    let vendroData = JSON.parse(localStorage.getItem('vendroData'));
    if(vendroData){
      this.scheduleFormData.patchValue({
        "facebook":vendroData.facebook,
        "telegram_id":vendroData.telegram_id,
        "name":vendroData.name,
        "schedule":vendroData.schedule,
        "hours":vendroData.hours,
        // "arr":vendroData.arr,
      });
    }
  }

  onSubmit() {
    //merge local storage data
    this.allData = this.mergeData();
    this.allData.schedule = this.schedule.join(',');
    this.allData.hours = this.getTime.join('-');
    this.scheduleFormData.value.featured_dish = localStorage.getItem('featured_dish');
    this.scheduleFormData.value.photo = localStorage.getItem('photo');
    this._ProfileService.updateCompanyCredentials(this.user.company_id, this.allData).subscribe((res: any) => {
      this.toastr.success('Success');
      this.clearLocalstorage();
      this.router.navigate(['/forms']);
      document.getElementById("closeModal").click();
    }, error => {
      this.toastr.error(error.error.message)
    })
  }

  clearLocalstorage() {
    let removeKeys = ["tagsFormData", "descriptionFormData", "companyId", "first_name", "featured_dish", "photo", "company_name", "company_name1"]
    removeKeys.forEach(k => localStorage.removeItem(k))
  }

  mergeData() {
    const tagsFormData = JSON.parse(localStorage.getItem("tagsFormData"));
    const descriptionFormData = JSON.parse(localStorage.getItem("descriptionFormData"));
    const scheduleFormData = this.scheduleFormData.value;
    const combinedObject = { ...tagsFormData, ...descriptionFormData, ...scheduleFormData };
    return combinedObject;
  }

  getHours(event) {
    this.getTime.push(event.target.value)
  }

  weekday(event) {
    if (event.target.checked) {
      this.addValue(event.target)
    } else {
      this.removeValue(event.target)
    }
  }

  addValue(val) {
    this.schedule.push(val.value)
  }

  removeValue(val) {
    let index = this.schedule.indexOf(val.value)
    if (index > -1) {
      this.schedule.splice(index, 1)
    }
  }

  onSelect(time) {
    if (this.count < 2) {
      this.getTime.push(time)
      this.count++
    }
  }

  createItem() {
    return this.fb.group({
      schedule: [this.schedule],
      hours: [this.getTime]
    })
  }
  
  save(form: any) {
    if (!form.valid)
      return 1;
    let obj = {
      schedule: this.schedule,
      facebook: this.facebook,
      hours: this.hours
    }
    this._ProfileService.updateGoogleSheetDetails(this.companyId, obj).subscribe((res: any) => {
      this.toastr.success('Weekly Schedule saved successfully!');
      this.router.navigateByUrl('/forms/ngx/address/' + this.companyId, { relativeTo: this.route.parent, skipLocationChange: true });
    })
    let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
    this.selectedIndex = 0;
  }

  routeToFb() {
    window.open(this.scheduleFormData.value.facebook)
  }

  routeToTelegram() {
    window.open("https://telegram.org/#t9gram.com");
  }

  addGroupName() {
    this._ProfileService.createlegrambot({ token: this.scheduleFormData.value.telegram_id }, this.user.company_id).subscribe(res => {
      if (res.status == 200) {
        this.toastr.success('Telegram Bot Created successfully')
      }
    })
  }

  cancel() {
    this.router.navigateByUrl('/forms/ngx/description', { relativeTo: this.route.parent, skipLocationChange: true });
  }
}