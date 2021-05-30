import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProfileService} from '../../services/profile.service';
import {CommonFunctionsService} from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

declare var require: any;
const data: any = require('./company.json');
@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.css']
})
export class HubComponent implements AfterViewInit {
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
  lat = -28.12;
  lng = 110.644;
  latA = -28.754764;
  lngA = 119.736246;
  zoom = 4;
  @ViewChild('search', { static: false }) search: ElementRef;
  @ViewChild('map1', { static: true }) map1;
  @ViewChild(HubComponent, { static: false }) table: HubComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService,
    private router : Router
    ,private _CommonFunctionsService:CommonFunctionsService,
    private modalService: NgbModal,
    private route: ActivatedRoute) {
      this.getAllFoodPark();
      this.getAllTerritory();
      this.formInit();
  }

  formInit(){
    this.foodParkForm = new FormGroup({
      name: new FormControl(null),
      territory_id: new FormControl(null),
      latitude: new FormControl(null),
      longitude: new FormControl(null),
    });
  }
  onCheckboxChangeFn(event,row){
    this.router.navigateByUrl('/forms/foodparks/'+row.id)
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

  onDriverSubmit(){
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

  openDriver(content2) {
		this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
  }

  //Filter hub manage Aryan//
  
  ngAfterViewInit(): void {

    fromEvent(this.search.nativeElement, 'keydown')
      .pipe(
        debounceTime(550),
        map(x => x['target']['value'])
      )
      .subscribe(value => {
        this.updateFilter(value);
      });
  }


  updateFilter(val: any) {
    const value = val.toString().toLowerCase().trim();
    // get the amount of columns in the table
    const count = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.temp[0]);
    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
      // iterate through each row's column data
      for (let i = 0; i < count; i++) {
        // check for a match
        if (
          (item[keys[i]] &&
            item[keys[i]]
              .toString()
              .toLowerCase()
              .indexOf(value) !== -1) ||
          !value
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
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
      this.territory = res;
      this.rows = this.territory;
      this.temp = [...this.rows];
      this.getAllDrivers(this.territory[0].id)
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

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat=$event.coords.lat;
    this.lng=$event.coords.lng;
    this.foodParkForm.value.latitude = this.lat;
    this.foodParkForm.value.longitude = this.lng;
  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //   // filter our data
  //   const temp = this.temp.filter(function(d) {
  //     return d.name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });
  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table = data;
  // }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
