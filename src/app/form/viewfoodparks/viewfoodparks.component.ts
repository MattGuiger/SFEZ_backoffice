import { Component, ViewChild } from '@angular/core';
import { ProfileService} from '../../services/profile.service';
import {CommonFunctionsService} from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';

declare var require: any;
const data: any = [];
@Component({
  selector: 'app-viewfoodparks',
  templateUrl: './viewfoodparks.component.html',
  styleUrls: ['./viewfoodparks.css']
})
export class ViewFoodParkComponent {
  editing = {};
  rows = [];
  temp = [...data];
  territory : any[]=[];
  user :any;
  loadingIndicator = true;
  reorderable = true;
  closeResult: string;
  columns = [{name:'Name'},{ prop: 'country' }, { name: 'State' }, { name: 'City' }];
  foodParkForm: FormGroup;  



  @ViewChild(ViewFoodParkComponent, { static: false }) table: ViewFoodParkComponent;
  constructor(private _ProfileService:ProfileService,
    private toastr: ToastrService,
    private router : Router
    ,private _CommonFunctionsService:CommonFunctionsService,
    private modalService: NgbModal,
    private route: ActivatedRoute) {
      this.getAllFoodPark();
      this.getAllTerritory();
      this.formInit();
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
  onCheckboxChangeFn(event,row){
    this.router.navigateByUrl('/form/foodparks/'+row.id)
  }
  getAllTerritory(){
    // this.user = this._CommonFunctionsService.checkUser().user;
    this._ProfileService.getAllTerritory().subscribe((res:any)=>{
        this.territory = res;
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
      this.temp = [...this.rows]
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
