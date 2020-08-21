import { Component, ViewChild } from '@angular/core';
import { ProfileService} from '../../services/profile.service';
import {CommonFunctionsService} from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

declare var require: any;
const data: any = require('./company.json');
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.css']
})
export class CompanyComponent {
  editing = {};
  rows = [];
  temp = [...data];
  comapny : any[]=[];
  countryList : any[] = [];
  user :any;
  loadingIndicator = true;
  reorderable = true;
  closeResult: string;




  @ViewChild(CompanyComponent, { static: false }) table: CompanyComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService
    ,private _CommonFunctionsService:CommonFunctionsService,
    private _AuthService : AuthService,
    private modalService: NgbModal,
    private _Router : Router,
    private route: ActivatedRoute) {
      this.getAllCompany();
      // this.getcountryList();
      // this.getAllTerritory();
  }

  getAllCompany(){
    this._ProfileService.getAllCompany().subscribe((res:any)=>{
      if(res.status==200 && res.data.length > 0){
        this.comapny = res.data.filter((item,index)=>{return !item.is_deleted});
        this.rows = this.comapny;
        this.temp = [...this.rows]
      }
    })
  }

  getcountryList(){
    this._AuthService.getcountryList().subscribe((res:any)=>{
      this.countryList = res;
    })
  }

viewCompany(event,row,type){
  this._Router.navigateByUrl('/forms/company/'+row.id+"/"+type);
}

// getAllTerritory(){
//   // this.user = this._CommonFunctionsService.checkUser().user;
//   this._ProfileService.getAllTerritory().subscribe((res:any)=>{
//       this.territory = res;
//       this.rows = this.territory;
//       this.temp = [...this.rows]
//   })
// }

deleteCompany(event,row){
  this._ProfileService.deleteCompany(row.id).subscribe((res:any)=>{
    if(res.status==200){
      this.toastr.success(res.message)
      this.getAllCompany();
    }else{
      this.toastr.error(res.message)
    }
  })
}
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
  }
  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
