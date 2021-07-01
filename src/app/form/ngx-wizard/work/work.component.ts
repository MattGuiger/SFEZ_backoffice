import { CommonFunctionsService } from './../../../services/commonFunctions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service'

export interface Type {
  type: string;
  imageUrl: string;
}

@Component({
  selector: 'mt-wizard-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {
  title = 'STEP #2 Type';
  google_api_key: string;
  google_sheet_url: string;
  unitName: string;
  google_sheet_tab_name: string;
  tags = ['Pizza', 'Pasta', 'Parmesan'];
  form: any;
  companyId: any;
  pass: any;
type:Type[] = [{type:'RESTAURANT',imageUrl:'/assets/images/icon-500-restaurant.png'},
{type:'CAFÉ',imageUrl:'/assets/images/icon-500-cafe.png'},
{type:'BEER  ',imageUrl:'/assets/images/icon-500-beer.png'},
{type:'WINE',imageUrl:'/assets/images/icon-500-wine.png'},
{type:'FOOD TRUCK',imageUrl:'/assets/images/icon-500-food-truck.png'},
{type:'PIZZA',imageUrl:'/assets/images/pizza.svg'},
{type:'FARMER',imageUrl:'/assets/images/farmer.png'},
{type:'CHEF',imageUrl:'/assets/images/chef.png'},
{type:'GHOST KITCHEN',imageUrl:'/assets/images/Ghost-Kitchen.png'}]
  user: any;
  comapnydata: any
  workFormData = new FormGroup({
    type: new FormControl('', Validators.required),
  });
  latt: string;
  long: string;
  territory_id1: any
  constructor(private router: Router,
    private _AuthService: AuthService,
    private toastr: ToastrService,
    private _CommonFunctionsService: CommonFunctionsService,
    private _ProfileService: ProfileService,
    private route: ActivatedRoute, 
  ) {
    this.user = this._CommonFunctionsService.checkUser().user;
  }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.companyId = +params['id'];
    });
    this.getCompanyInfo()
    this.territory_id()
    this.getlocationCompanyId();
  }

  getCompanyInfo() {
    this._ProfileService.getCompanyByCompanyId(this.user.company_id).subscribe(res => {
      this.comapnydata = res
    })
  }

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

  territory_id() {
    this.latt = localStorage.getItem('latitude');
    this.long = localStorage.getItem('longitude');
    let data = {
      latitude: this.latt,
      longitude: this.long
    }
    this._AuthService.territory_id(this.user.country, this.user.state, data).subscribe((res: any) => {
      this.territory_id1 = res.data.id;
      localStorage.setItem("territory_id", this.territory_id1)
    })
  }

  locationsList: any;
  getlocationCompanyId() {
    if (this.user.company_id) {
      this._ProfileService.getlocationCompanyId(this.user.company_id).subscribe(res => {
        if (res.status == 200) {
          this.locationsList = res.data[0].type;
          this.workFormData.patchValue({"type":this.locationsList});
        }
      })
    }
  }

  onSubmit() {
    if (this.comapnydata) {
      this.workFormData.value.name = this.comapnydata.name + ' LOC1';
      this.workFormData.value.username = this.comapnydata.name + "_mgr1";
      this.workFormData.value.password = this.generateP();
      this.workFormData.value.territory_id = localStorage.getItem('territory_id');
      this.workFormData.value.number = 1
      this._ProfileService.addUnit(this.workFormData.value, this.comapnydata.id).subscribe(res => {
        if (res.status == 200) {
          this.getUserInfoAfterLogin()
          localStorage.setItem("unit_id", res.data[0].id)
          this._ProfileService.getCompany_unitid(this.comapnydata.id, { unit_id: res.data[0].id }).subscribe(res => {
            this.toastr.success("Vendor Registered Successfully.")
            this.getUserInfoAfterLogin()
            this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true });
          })
        }
      }, error => {
        this.toastr.error(' Username exist already. Please go to the location tab to create new unit in hub management.')
        this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true });
      })
    }
  }

  cancel() {
    this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
  }

  getUserInfoAfterLogin() {
    this._ProfileService.getUserInfoAfterLogin().subscribe(res => {
      if (res.status == 200) {
        localStorage.setItem('user', JSON.stringify(res))
      }

    })
  }
}
