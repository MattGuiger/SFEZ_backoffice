import { Component, ViewChild } from '@angular/core';
import { ProfileService} from '../../services/profile.service';
import {CommonFunctionsService} from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { Options } from 'ng5-slider';
import { isNgTemplate } from '@angular/compiler';

declare var require: any;
const data: any = [];
@Component({
  selector: 'app-unitsorder',
  templateUrl: './unitsorder.component.html',
  styleUrls: ['./unitsorder.css']
})
export class UnitorderComponent {
  editing = {};
  rows = [];
  temp = [...data];
  orders : any[]=[];
  user :any;
  unitForm: FormGroup;  
  loadingIndicator = true;
  reorderable = true;
  closeResult: string;
  columns = [{ prop: 'name' }, { name: 'Type' }, { name: 'Username' }];
  territory = []=[];
  customer_order_window: number = 0;
  delivery_chg_amount: number = 0;
  delivery_radius: number = 0;
  delivery_time_offset: number = 0;
  customerorderwindow_options: Options = {
    floor: 0,
    ceil: 30
  };
  deliveryradious_options: Options = {
    floor: 0,
    ceil: 15
  };
  customerdeliverytime_options: Options = {
    floor: 0,
    ceil: 30
  };
  deliverycharge_options: Options = {
    floor: 0,
    ceil: 10,
    step:.25
  };

  @ViewChild(UnitorderComponent, { static: false }) table: UnitorderComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService
    ,private _CommonFunctionsService:CommonFunctionsService,
    private modalService: NgbModal,
    private _router : Router,
    private route: ActivatedRoute) {
      this.getAllOrder();
  }
 
getAllOrder(){
  this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getAllUnitOrder(this.user.company_id,this.user.unit_id).subscribe((res:any)=>{
    debugger
      this.orders = res.data;
      this.temp = this.orders;
      this.rows = this.orders;
  })
}

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
