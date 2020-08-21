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
  selector: 'app-foodparks',
  templateUrl: './foodparks.component.html',
  styleUrls: ['./foodparks.css']
})
export class FoodParkComponent {
  editing = {};
  rows = [];
  temp = [...data];
  drivertemp = [...data];
  territory : any[]=[];
  drivers : any[]=[];
  foodparkmgrList : any[] = [];
  setManager : any[] = [];
  setdriverManager : any[] = [];
  user :any;
  selectedHub: any;
  loadingIndicator = true;
  reorderable = true;
  closeResult: string;
  columns = [{name:'Name'},{ prop: 'country' }, { name: 'State' }, { name: 'City' }];
  foodParkForm: FormGroup;  
  driverForm : FormGroup;
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;


  @ViewChild(FoodParkComponent, { static: false }) table: FoodParkComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService,
    private router : Router
    ,private _CommonFunctionsService:CommonFunctionsService,
    private modalService: NgbModal,
    private route: ActivatedRoute) {
      this.getAllTerritory();
      this.getAllFoodPark();
      this.formInit();
      this.driverformInit();
      this.getallfoodparkmgr();
      this.user = this._CommonFunctionsService.checkUser().user;
    // this.rows = data;
    // this.temp = [...data];
    // setTimeout(() => {
    //   this.loadingIndicator = false;
    // }, 1500);
  }

  formInit(){
    this.foodParkForm = new FormGroup({
      name: new FormControl(null),
      territory_id: new FormControl(null),
      latitude: new FormControl(null),
      longitude: new FormControl(null),
    });
  }
  driverformInit(){
    this.driverForm = new FormGroup({
      first_name: new FormControl(null),
      hub_id: new FormControl(null),
      territory_id: new FormControl(null),
      last_name: new FormControl(null),
      password: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
    });
  }
  onCheckboxChangeFn(event,row){
    this.router.navigateByUrl('/forms/foodparks/'+row.id)
  }
  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat=$event.coords.lat;
    this.lng=$event.coords.lng;
    this.foodParkForm.value.latitude = this.lat;
    this.foodParkForm.value.longitude = this.lng;
  }

  getallfoodparkmgr(){
    this._ProfileService.getallfoodparkmgr().subscribe((res:any)=>{
        this.foodparkmgrList = res.data;
    })
  }
  selectHub(event,row,value){
    this.setManager.push({manager_id:row.id,hub_id:event.target.value});
  }

  selectdriverHub(event,row,value){
    this.setdriverManager.push({driver_id:row.id,hub_id:event.target.value});
  }

  getAllTerritory(){
    // this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllTerritory().subscribe((res:any)=>{
        this.territory = res;
    })
  }
  getAllDrivers(foodParkId){
    this._ProfileService.getAllDrivers(foodParkId).subscribe((res:any)=>{
        this.drivers = res.data;
        // this.rows = this.drivers;
        this.drivertemp = [...this.drivers];
    })
  }

  setManagers(){
    if(this.setManager.length>0){
    this._ProfileService.setManagers({list : this.setManager}).subscribe((res:any)=>{
      this.toastr.success('Managers assign successfully');
        // 
    },
    error=>{
      this.toastr.error(error.error.message)
    })
  }else{
    this.toastr.error('Please select the hub and manager')
  }
  }
  changeselectHub(event){
    this.selectedHub = parseInt(event.target.value);
    this.getAllDrivers(event.target.value);
  }
  setDriverManagers(){
    if(this.setdriverManager.length>0){
    this._ProfileService.setDriverManagers({list : this.setdriverManager}).subscribe((res:any)=>{
      this.toastr.success('Driver assign successfully');
        // 
    },
    error=>{
      this.toastr.error(error.error.message)
    })
  }else{
    this.toastr.error('Please select the hub and driver')
  }
  }


  onSubmit(){
    this.foodParkForm.value.latitude=12.032;
    this.foodParkForm.value.longitude=12.032;
    this._ProfileService.addFoodPark(this.foodParkForm.value).subscribe((res:any)=>{
          this.toastr.success('Territory Created successfully');
          document.getElementById("closeModal").click();
        this.getAllFoodPark();
    },
    error=>{
      this.toastr.error(error.error.message)
    })
  }

  onDriverSubmit(){
    this.driverForm.value.role='DRIVER';
    this._ProfileService.addDriver(this.driverForm.value).subscribe((res:any)=>{
      if(res.status==200){
          this.toastr.success('Driver Created successfully');
          document.getElementById("closeModal").click();
        this.getAllFoodPark();
      }else{
        this.toastr.error(res.message)
      }
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

  openDriver(content2) {
		this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    debugger
  }

getAllFoodPark(){
  // this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getAllFoodPark().subscribe((res:any)=>{
      // this.territory = res;
      this.rows = res;
      this.temp = [...this.rows];
      this.selectedHub = parseInt(res[0].id);
      this.getAllDrivers(res[0].id)
  })
}

  updateDriverFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const drivertemp = this.drivertemp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.drivers = drivertemp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
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
