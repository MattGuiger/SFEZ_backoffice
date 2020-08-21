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
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.css']
})
export class TerritoryComponent {
  editing = {};
  rows = [];
  temp = [...data];
  territory : any[]=[];
  countryList : any[] = [];
  user :any;

  lat = -28.12;
  lng = 110.644;
  latA = -28.754764;
  lngA = 119.736246;
  zoom = 4;

  loadingIndicator = true;
  reorderable = true;
  closeResult: string;
  columns = [{name:'Territory'},{ prop: 'country' }, { name: 'State' }, { name: 'City' }];
  territoryForm: FormGroup;  



  @ViewChild(TerritoryComponent, { static: false }) table: TerritoryComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService
    ,private _CommonFunctionsService:CommonFunctionsService,
    private _AuthService : AuthService,
    private modalService: NgbModal,
    private route: ActivatedRoute) {
      this.getcountryList();
      this.getAllTerritory();
      this.formInit();
    // this.rows = data;
    // this.temp = [...data];
    // setTimeout(() => {
    //   this.loadingIndicator = false;
    // }, 1500);
  }

  formInit(){
    this.territoryForm = new FormGroup({
      territory: new FormControl(null),
      country: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      timezone: new FormControl(null),
      latitude: new FormControl(null),
      longitude: new FormControl(null),
    });
  }

  onSubmit(){
    this._ProfileService.addTerritory(this.territoryForm.value).subscribe((res:any)=>{
        if(res.status==200){
          this.toastr.success('Territory Created successfully');
          document.getElementById("closeModal").click();
        this.getAllTerritory();
        }
    },
    error=>{
      this.toastr.error(error.error.message)
    })
  }

  getcountryList(){
    this._AuthService.getcountryList().subscribe((res:any)=>{
      this.countryList = res;
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
    debugger
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat=$event.coords.lat;
    this.lng=$event.coords.lng;
    this.territoryForm.value.latitude = this.lat;
    this.territoryForm.value.longitude = this.lng;
  }

getAllTerritory(){
  // this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getAllTerritory().subscribe((res:any)=>{
      this.territory = res;
      this.rows = this.territory;
      this.temp = [...this.rows]
  })
}
deleteTerritory(event,row){
  this._ProfileService.deleteTerritory(row.id).subscribe((res:any)=>{
    if(res.status==200){
      this.toastr.success(res.message)
      this.getAllTerritory();
    }else{
      this.toastr.error(res.message)
    }
  })
}
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.territory.toLowerCase().indexOf(val) !== -1 || !val;
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
