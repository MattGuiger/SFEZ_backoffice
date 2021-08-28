import { Component, ViewChild } from '@angular/core';
import { ProfileService} from '../../services/profile.service';
import {CommonFunctionsService} from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';

declare var require: any;
const data: any = require('./company.json');
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.css']
})
export class DriverComponent {
  editing = {};
  rows = [];
  temp = [...data];
  drivertemp = [...data];
  territory : any[]=[];
  drivers : any[]=[];
  user :any;
  loadingIndicator = true;
  reorderable = true;
  closeResult: string;
  columns = [{name:'Name'},{ prop: 'country' }, { name: 'State' }, { name: 'City' }];
  foodParkForm: FormGroup;  
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;


  @ViewChild(DriverComponent, { static: false }) table: DriverComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService,
    private router : Router
    ,private _CommonFunctionsService:CommonFunctionsService,
    private modalService: NgbModal,
    private route: ActivatedRoute) {
      this.getAllFoodPark();
  }

  onCheckboxChangeFn(event,row){
    this.router.navigateByUrl('/forms/foodparks/'+row.id)
  }

  selectHub(event){
    this.getAllDrivers(event.target.value);
  }
 
  getAllDrivers(foodParkId){
    this._ProfileService.getAllDrivers(foodParkId).subscribe((res:any)=>{
        this.drivers = res.data;
        // this.rows = this.drivers;
        this.drivertemp = [...this.drivers];
    })
  }

  
  onSubmit(){
    this._ProfileService.addFoodPark(this.foodParkForm.value).subscribe((res:any)=>{
          this.toastr.success('Territory Created successfully');
          document.getElementById("closeModal").click();
        this.getAllFoodPark();
    },
    error=>{
      this.toastr.error(error.error.message)
    })
  }


  open1(content1) {
		this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
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
  onSelectRed(item){
    
  }

getAllFoodPark(){
  // this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getAllFoodPark().subscribe((res:any)=>{
      this.territory = res;
      this.rows = this.territory;
      this.temp = [...this.rows];
      this.getAllDrivers(this.territory[0].id)
  })
}

 updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.first_name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.drivers = temp;
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
