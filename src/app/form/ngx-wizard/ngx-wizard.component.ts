import { CommonFunctionsService } from './../../services/commonFunctions.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'multi-step-wizard-app',
  templateUrl: './ngx-wizard.component.html',
  styleUrls: ['./ngx-wizard.component.scss']
})

export class NGXFormWizardComponent implements OnInit {
  @Input() tempFileData: any;
  userName: any;
  data = ["C-Corp", "S-Corp", "LLC", "Closed Group", "Sole Proprietorship", "Partnership", "Non-Profit"];
  selectedIndex: number = 1;
  showAge: any;
  myData: any;
  checkingId: any = "1";
  // checkId = localStorage.getItem('DisableRegForm');
  files: File[] = [];
  firstName: any;
  lastName: any;
  username: any;
  feathuredfiles: File[] = [];
  user: any;
  activeHub: any
  activeLocation: any
  // public mask = {
  //   guide: true,
  //   showMask: true,
  //   mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  // };
  iframeUrl: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private _ProfileService: ProfileService,
    private toastr: ToastrService,
    private commonFunctionsService: CommonFunctionsService,
    private sanitizer: DomSanitizer
  ) {
    // let url = `https://www.greenbyphone.com/ResellerSign_Up.aspx?ResellerClient_ID=${this.user?.id}1`
    let url = 'https://www.greenbyphone.com/ResellerSign_Up.aspx?ResellerClient_ID=115965';
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    const localStorageItem = this.commonFunctionsService.checkUser();
    this.userName = localStorageItem.user.username;
    console.log("username" + this.userName);
    this.activeHub = localStorageItem.user.food_park_id == "" ? null : localStorageItem.user.food_park_id
    this.activeLocation = localStorageItem.user.unit_id == "" ? null : localStorageItem.user.unit_id
    console.log("activeHubactiveHub" + this.activeHub);

    console.log("activeLocation" + this.activeLocation);

    this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
    this.checkingId = "register";
    const value = localStorage.getItem('user');
    if (value && value != 'undefined' && value != 'null') {
      const currentUser = JSON.parse(value);
      this.firstName = currentUser.user.first_name;
      this.lastName = currentUser.user.last_name;
      this.username = currentUser.user.username;
    }
    this.getlocationCompanyId()
    this.getDeliveryHubinCompany()
    this.getCompanyInfo()
  }
  locations2: any
  getlocationCompanyId() {
    this.user = this.commonFunctionsService.checkUser().user;
    if (this.user.company_id) {

      this._ProfileService.getlocationCompanyId(this.user.company_id).subscribe(res => {
        if (res.status == 200) {
          // console.log('getlocationCompanyId ',res.data)
          this.locations2 = res.data
        } else {
          console.log("operation Failed ")
        }
      })
    }
  }
  comapnydata: any
  getCompanyInfo() {
    this.user = this.commonFunctionsService.checkUser().user;
    this._ProfileService.getCompanyByCompanyId(this.user.company_id).subscribe(res => {
      this.comapnydata = res
      console.log('reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', res)

    })
  }
  getUserInfoAfterLogin() {
    this._ProfileService.getUserInfoAfterLogin().subscribe(res => {
      console.log('getUserInfoAfterLogingetUserInfoAfterLogin', res)
      if (res.status == 200) {
        localStorage.setItem('user', JSON.stringify(res))
        const localStorageItem = this.commonFunctionsService.checkUser();
        this.userName = localStorageItem.user.username;
        console.log("username" + this.userName);
        this.activeHub = localStorageItem.user.food_park_id == "" ? null : localStorageItem.user.food_park_id
        this.activeLocation = localStorageItem.user.unit_id == "" ? null : localStorageItem.user.unit_id
        console.log("activeHubactiveHub" + this.activeHub);

        console.log("activeLocation" + this.activeLocation);
      }

    })
  }
  deliveryHub: any
  getDeliveryHubinCompany() {
    this.user = this.commonFunctionsService.checkUser().user;

    if (this.user.company_id) {
      this._ProfileService.getDeliveryHubsInCompany(this.user.company_id).subscribe(res => {
        // console.log('res of',res)
        if (res.status == 200) {
          // console.log('thisssss deliveryHub',res.data)
          this.deliveryHub = res.data
        } else {

        }
      })
    }
  }

  updateCompanyForUnit(unit_id) {
    this.activeLocation = null
    this.user = this.commonFunctionsService.checkUser().user;
    const obj = {
      unit_id: unit_id
    }
    if (this.user.company_id) {
      this._ProfileService.getCompany_unitid(this.user.company_id, obj).subscribe(res => {
        if (res.status == 200) {
          this.getUserInfoAfterLogin()

          this.getlocationCompanyId()
          this.getDeliveryHubinCompany()
        }
      })
    }
  }
  updateCompanyForHub(food_park_id) {
    this.user = this.commonFunctionsService.checkUser().user;
    const obj = {
      food_park_id: food_park_id
    }
    if (this.user.company_id) {
      this._ProfileService.getCompany_foodparkid(this.user.company_id, obj).subscribe(res => {
        if (res.status == 200) {
          this.getUserInfoAfterLogin()
          this.getlocationCompanyId()
          this.getDeliveryHubinCompany()
        }
      })
    }
  }
  MerchantForm = new FormGroup({
    tax_id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}-?[0-9]{7}$")]),
    ssn: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$")]),
    Phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$")]),
    years: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{4}$")]),
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


  ageCalculator(event) {
    const active = event.target.value;
    if (active) {
      const showAge = (new Date()).getFullYear() - active;
      console.log(showAge)
    }
  }

  uploadCompanyProfile(formData) {
    this.user = this.commonFunctionsService.checkUser().user;
    this._ProfileService.uploadCompanyProfile(this.user.company_id, formData).subscribe((res: any) => {
      console.log('resss ', res.data[0].photo)
      localStorage.setItem('photo', res.data[0].photo);
      this.toastr.success('Photo upload successfully!')
    }, error => {
      this.toastr.error('failed to upload, please try again later')
    })
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    const formData = new FormData();
    formData.append('file', event.addedFiles[0]);
    this.tempFileData = formData;
    // localStorage.setItem('fileData', JSON.stringify(formData));
    this.uploadCompanyProfile(formData);
  }
  uploadFeaturePhoto(formData) {
    this.user = this.commonFunctionsService.checkUser().user;
    this._ProfileService.uploadFeaturePhoto(this.user.company_id, formData).subscribe((res: any) => {
      console.log('resss ', res.data[0].photo)
      localStorage.setItem('driving_license', res.data[0].featured_dish);
      this.toastr.success('Successfully uploaded!')
    }, error => {
      this.toastr.error('failed to upload, please try again later')
    })
  }
  onSelectfeathured(event) {
    console.log(event);
    this.feathuredfiles.push(...event.addedFiles);
    const formData = new FormData();
    formData.append('file', event.addedFiles[0]);
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
  onSubmit() {
    console.log(this.MerchantForm.value);
  }
  clickMe() {
    this.selectedIndex = 0;
  }
}