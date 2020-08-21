import { Component, ViewChild } from '@angular/core';
import { ProfileService} from '../../services/profile.service';
import {CommonFunctionsService} from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

declare var require: any;
const data: any = [];
@Component({
  selector: 'app-hubmanager',
  templateUrl: './hubmanager.component.html',
  styleUrls: ['./hubmanager.css']
})
export class HubmemberComponent {
  editing = {};
  rows = [];
  temp = [...data];
  drivertemp = [...data];
  territory : any[]=[];
  territory1 : any[]=[];
  drivers : any[]=[];
  countryList : any[]=[];
  foodparkList : any[]=[];
  user :any;
  loadingIndicator = true;
  reorderable = true;
  closeResult: string;
  columns = [{name:'Name'},{ prop: 'country' }, { name: 'State' }, { name: 'City' }];
  foodParkMgrForm: FormGroup;  
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;


  @ViewChild(HubmemberComponent, { static: false }) table: HubmemberComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService,
    private router : Router
    ,private _CommonFunctionsService:CommonFunctionsService,
    private modalService: NgbModal,
    private _AuthService : AuthService,
    private route: ActivatedRoute) {
      this.getcountryList();
      this.getAllFoodParkList();
      this.getAllTerritory();
      this.getAllFoodPark();
      this.driverformInit();
  }

  driverformInit(){
    this.foodParkMgrForm = new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      // territory_id: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      country_id  :new FormControl(null),
      food_park_id: new FormControl(null)
    });
  }
  
  getcountryList(){
    this._AuthService.getcountryList().subscribe((res:any)=>{
      this.countryList = res;
    })
  }

  getAllTerritory(){
    // this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllTerritory().subscribe((res:any)=>{
        this.territory1 = res;
    })
  }



  onSubmit(){
    this.foodParkMgrForm.value.role="FOODPARKMGR";
    this._ProfileService.addFoodParkmgr(this.foodParkMgrForm.value).subscribe((res:any)=>{
          this.toastr.success('Manager Created successfully');
          this.foodParkMgrForm.reset();
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
  this._ProfileService.getallfoodparkmgr().subscribe((res:any)=>{
      this.territory = res.data;
      this.rows = this.territory;
      this.temp = [...this.rows];
  })
}

getAllFoodParkList(){
  // this.user = this._CommonFunctionsService.checkUser().user;
  this._ProfileService.getAllFoodPark().subscribe((res:any)=>{
      this.foodparkList = res;
  })
}

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.first_name.toLowerCase().indexOf(val) !== -1 || !val;
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
