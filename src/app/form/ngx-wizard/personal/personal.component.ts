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
  formVal = {}
  personalDetailsForm = new FormGroup({
    // first_name: new FormControl('', Validators.required),
    // last_name: new FormControl('', Validators.required),
    // email: new FormControl('', Validators.required),
    // territory_id: new FormControl('', Validators.required),
    // password: new FormControl('', Validators.required),
    // state_id: new FormControl('', Validators.required),
    company_name: new FormControl(),
    // distance_range: new FormControl('', Validators.required),

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
      this.vndr_name = res.name;
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
      console.log("territory_id" + this.territoryid);
      localStorage.setItem("territory_id",this.territoryid)
    })
  }
  getTerritory(event) {
    let stateData = event.target.value;
    const strData = stateData.split(",");
    console.log(strData);
    this.stateAndTerritoryObject = {
      id: strData[0],
      name: strData[1]
    }
    const state_id = this.stateAndTerritoryObject.id;
    this._ProfileService.getTerritory(state_id).subscribe((res: any) => {
      console.log(res);

      this.singleTerritory = res.territory;
    })
  }
  changeCountry(event) {
    console.log('changeCountry', event.target.value)
    this.personal.country_id = event.target.value
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
  // placeMarker(event) {
  //   this.lat = event.coords.lat;
  //   this.lng = event.coords.lng;
  //   this.hubFoodParkForm.value.latitude = this.lat;
  //   this.hubFoodParkForm.value.longitude = this.lng;
  // }

  onSubmit() {
    console.log("personal" + JSON.stringify(this.personalDetailsForm.value));
    const pics = {
      featured_dish: localStorage.getItem('featured_dish'),
      photo: localStorage.getItem('photo'),
      description: "",
      schedule: "",
      tags: "",
      hours: "",
      facebook: ""
    }
    console.log('picspicspics', pics)
    this._ProfileService.updateCompanyCredentials(this.user.company_id, pics).subscribe((res: any) => {
      console.log('resresres', res)
      if (res.status == 200) {
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
      } else {
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
      }
    })


    // this.personalDetailsForm.value.first_name=this.user.first_name;
    // this.personalDetailsForm.value.last_name=this.user.last_name;
    // this.personalDetailsForm.value.email=this.user.username;
    // this.personalDetailsForm.value.role=this.user.role;
    // this.personalDetailsForm.value.country_id = this.user.country_id;
    // this.personalDetailsForm.value.territory_id =  this.territoryid;
    // this.personalDetailsForm.value.latitude =  this.latt;
    // this.personalDetailsForm.value.longitude =  this.long;

    // // const data = localStorage.setItem('personalFormData', JSON.stringify(this.personalDetailsForm.value));
    // this._ProfileService.vendorRegister(this.personalDetailsForm.value).subscribe((res: any)=>{
    //   if(res.status==200){
    //    console.log("Testing personal")
    //     localStorage.setItem('companyId',res.user.company_id)
    //     localStorage.setItem('Id',res.user.id)
    //     localStorage.setItem('first_name', res.user.first_name)
    //     localStorage.setItem('company_name1', this.personalDetailsForm.value.company_name)
    //     this._ProfileService.getCompanyprofile(res.user.company_id).subscribe(res=>{
    //       localStorage.setItem('company_name', res.name);
    //     })
    //     this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    //   } else {
    //     console.log('error step1');
    //   //   localStorage.setItem('companyId', '11179')
    //   // localStorage.setItem('first_name', 'Malibu')
    //   // this._ProfileService.getCompanyprofile('11179').subscribe(res=>{
    //   //   localStorage.setItem('company_name', res.name);
    //   // })
    //   // this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    //   //   this.toastr.error(res.message)
    //   }
    // })
    // // this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
  }
  // onSubmit(){
  //   this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
  // }

  placeMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.personalDetailsForm.value.latitude = this.lat;
    this.personalDetailsForm.value.longitude = this.lng;
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
      console.log(res);
      this.singleState = res.territory;
    })
  }

  uploadCompanyProfile(formData) {
    this.user = this._CommonFunctionsService.checkUser().user;
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
    this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.uploadFeaturePhoto(this.user.company_id, formData).subscribe((res: any) => {
      console.log('resss ', res.data[0].photo)
      localStorage.setItem('featured_dish', res.data[0].featured_dish);
      this.toastr.success('Feathured dish upload successfully!')
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
}
