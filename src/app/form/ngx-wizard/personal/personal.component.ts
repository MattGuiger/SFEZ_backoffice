import { routes } from './../../../apps/email/mail.module';
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
  countries: any[] = [];
  states: any[] = [];
  state: any[] = [];
  countryList: any[] = [];
  singleTerritory: any[] = [];
  stateAndTerritoryObject: any;
  territory: any = [];
  latt: any;
  long: any;
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  business_address: string;
  territoryid: any;
  city: string;
  singleState: any[] = [];

  // form: any;
  data: any[] = [];
  companyId: any;
  vndr_name: any;
  vndr_logo: any;
  vndr_dish: any;
  formVal = {}
  personalDetailsForm = new FormGroup({
    name: new FormControl(),
  });
  files: File[] = [];
  feathuredfiles: File[] = [];
  user: any;

  constructor(private router: Router,
    private _AuthService: AuthService,
    private toastr: ToastrService,
    private formDataService: FormDataService,
    // private commonFunctionsService: CommonFunctionsService,
    private workflowService: WorkflowService,
    private _ProfileService: ProfileService,
    private _CommonFunctionsService: CommonFunctionsService,
    private route: ActivatedRoute) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.getAllCountries();
    this.getAllStates();

  }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    this.getcountryList();
    this.territory_id();
    this.vendor_name();
  }

  vendor_name() {
    this._AuthService.getVendrName(this.user.company_id).subscribe((res: any) => {
      this.vndr_dish = res.featured_dish;
      this.vndr_logo = res.photo;
      localStorage.setItem("vendroData", JSON.stringify(res));
      this.personalDetailsForm.patchValue({ "name": res.name });
    })
  }

  getcountryList() {
    this._AuthService.getcountryList().subscribe((res: any) => {
      this.countryList = res;
    })
  }

  territory_id() {
    this.latt = localStorage.getItem('latitude');
    this.long = localStorage.getItem('longitude');
    let data = {
      latitude: this.latt,
      longitude: this.long
    }
    this._AuthService.territory_id(this.user.country, this.user.state, data).subscribe((res: any) => {
      this.territoryid = res.data.id;
      localStorage.setItem("territory_id", this.territoryid)
    })
  }

  getTerritory(event) {
    let stateData = event.target.value;
    const strData = stateData.split(",");
    this.stateAndTerritoryObject = {
      id: strData[0],
      name: strData[1]
    }
    const state_id = this.stateAndTerritoryObject.id;
    this._ProfileService.getTerritory(state_id).subscribe((res: any) => {
      this.singleTerritory = res.territory;
    })
  }

  changeCountry(event) {
    this.personal.country_id = event.target.value
  }

  onSubmit() {
    let vendroData = JSON.parse(localStorage.getItem("vendroData"));
    const data = {
      tags: vendroData.tags,
      description: vendroData.description,
      facebook: vendroData.facebook,
      telegram_id: vendroData.telegram_id,
      schedule: vendroData.schedule,
      hours: vendroData.hours,
      name: this.personalDetailsForm.value.name
    }
    this._ProfileService.updateCompanyCredentials(this.user.company_id, data).subscribe((res: any) => {
      if (res.status == 200) {
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
      } else {
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
      }
    })

  }

  placeMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.personalDetailsForm.value.latitude = this.lat;
    this.personalDetailsForm.value.longitude = this.lng;
  }

  getAllCountries() {
    this._ProfileService.getAllCountries().subscribe((res: any) => {
      this.countries = res;
    })
  }

  getAllStates() {
    this._ProfileService.getState(this.user.country_id).subscribe((res: any) => {
      this.states = res.data;
    })
  }

  getState(event) {
    const country_id = event.target.value;
    this._ProfileService.getState(country_id).subscribe((res: any) => {
      this.singleState = res.territory;
    })
  }

  uploadCompanyProfile(formData) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.uploadCompanyProfile(this.user.company_id, formData).subscribe((res: any) => {
      localStorage.setItem('photo', res.data[0].photo);
      this.toastr.success('Photo uploaded successfully!')
    }, error => {
      this.toastr.error('failed to upload, please try again later')
    })
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    const formData = new FormData();
    formData.append('file', event.addedFiles[0]);
    this.tempFileData = formData;
    this.uploadCompanyProfile(formData);
  }

  uploadFeaturePhoto(formData) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.uploadFeaturePhoto(this.user.company_id, formData).subscribe((res: any) => {
      localStorage.setItem('featured_dish', res.data[0].featured_dish);
      this.toastr.success('Featured Dish Uploaded Successfully!')
    }, error => {
      this.toastr.error('failed to upload, please try again later')
    })
  }

  onSelectfeathured(event) {
    this.feathuredfiles.push(...event.addedFiles);
    const formData = new FormData();
    formData.append('file', event.addedFiles[0]);
    localStorage.setItem('fileData', JSON.stringify(formData));
    this.uploadFeaturePhoto(formData);
  }

  onRemovefeathured(event) {
    this.feathuredfiles.splice(this.feathuredfiles.indexOf(event), 1);
  }

  onRemove(event) {
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
  registerVendor() {
  }
}
