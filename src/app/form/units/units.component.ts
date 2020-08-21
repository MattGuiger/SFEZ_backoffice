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
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.css']
})
export class UnitComponent {
  editing = {};
  rows = [];
  temp = [...data];
  units : any[]=[];
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

  @ViewChild(UnitComponent, { static: false }) table: UnitComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService
    ,private _CommonFunctionsService:CommonFunctionsService,
    private modalService: NgbModal,
    private _router : Router,
    private route: ActivatedRoute) {
      this.formInit();
      this.getAllUnits();
    // this.rows = data;
    // this.temp = [...data];
    // setTimeout(() => {
    //   this.loadingIndicator = false;
    // }, 1500);
  }
  formInit(){
    this.unitForm = new FormGroup({
      name: new FormControl(null),
      type : new FormControl(null),
      territory_id: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null),
      customer_order_window : new FormControl(null),
      delivery_chg_amount : new FormControl(null),
      delivery_radius : new FormControl(null),
      delivery_time_offset : new FormControl(null),
    });
    this.getAllTerritory();
  }
  getAllTerritory(){
    // this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllTerritory().subscribe((res:any)=>{
        this.territory = res;
    })
  }

  viewUnit(event,row){
    this._router.navigateByUrl('/forms/unit/'+row.id)
  }
  open1(content1) {
		this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
  }
  changeType(event){
    this.unitForm.value.type=event.target.value;
    debugger
  }
  
	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
  }
  
  onSubmit(){
    this.user = this._CommonFunctionsService.checkUser().user;
    this.unitForm.value.delivery_chg_amount = this.delivery_chg_amount;
    this.unitForm.value.delivery_radius = this.delivery_radius;
    this.unitForm.value.delivery_time_offset = this.delivery_time_offset;
    this.unitForm.value.customer_order_window = this.customer_order_window;
    this._ProfileService.addUnit(this.unitForm.value,this.user.company_id).subscribe((res:any)=>{
        if(res.status==200){
          this.toastr.success('Units Created successfully');
          document.getElementById("closeModal").click();
        this.getAllUnits();
        }
    },
    error=>{
      this.toastr.error(error.error.message)
    })
  }

getAllUnits(){
  this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getAllUnits(this.user.company_id).subscribe((res:any)=>{
      this.units = res;
      this.temp = this.units;
      this.rows = this.units;
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
    // this.table = data;
  }
  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
