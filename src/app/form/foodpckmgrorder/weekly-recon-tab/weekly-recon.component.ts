import { Component, QueryList, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { ProfileService } from "../../../services/profile.service";
import { CommonFunctionsService } from "../../../services/commonFunctions.service";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { Options } from "ng5-slider";
import * as moment from "moment";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from "../../../form/confirm-dialog/confirm-dialog.component";
import { DatePipe } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";

declare var require: any;
const data: any = [];
@Component({
  selector: "app-weekly-recon-tab",
  templateUrl: "./weekly-recon.component.html",
  styleUrls: ["./weekly-recon.css"],
})
export class FoodpckmgrorderWeeklyReconComponent {
  displayedColumns: string[] = [
    "Schedule",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Total"
  ];
  setdata: any[] = [{
    "label":"Cash"
  },{
    "label":"Bank"
  },{
    "label":"Payout"
  },
  {
    "label":"Sub Total"
  }
];

 daysKey= ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  user: any;
  datecuurent: any;
  tab: any;
  date: any;
  sevendate: any;
  sevendatef: any;
  weeklyDateSeven: any;
  weeklyDate: any;
  hubs : any[];
  selectedHub: any;
  masterDetails : any;
  authAdjustmentData: any;
  constructor(
    private _ProfileService: ProfileService,
    private toastr: ToastrService,
    private _CommonFunctionsService: CommonFunctionsService,
    public datepipe: DatePipe
  ) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.datecuurent = this.datepipe.transform(Date.now(), "yyyy-MM-dd");
    this.date = moment().add(0, "d");
    this.weeklyDate = moment().startOf('week');
    this.weeklyDateSeven =  moment().endOf('week')
    this.getUnitHubs();
    this.getWeekreconbydate(this.user.food_park_id);
    this.getAuthAdjustment(this.user.food_park_id);
    this.selectedHub = this.user.food_park_id;
  }

  getWeekreconbydate(id){
    const reqData = {
      startDate: this.datepipe.transform(this.weeklyDate, "yyyy-MM-dd"),
      endDate: this.datepipe.transform(this.weeklyDateSeven, "yyyy-MM-dd")
    };
    this._ProfileService.getWeekreconbydate(id,reqData).subscribe((data : any)=>{

      this.masterDetails = data;
       this.masterDetails.data.forEach(member=>{
         member.cash.total = this.getTotalOfDay(member.cash).toFixed(2);
         member.bank.total = this.getTotalOfDay(member.bank).toFixed(2);
         member.bank.payout = this.getTotalOfDay(member.payout).toFixed(2);
          let data = [
            {
              "label":"Cash",
              "data":member.cash
            },
            {
              "label":"Banks",
              "data":member.bank
            },
            {
              "label":"Payout",
              "data":member.payout
            },
            {
              "label":"Sub Total",
              data: this.getSubTotal(member)
            }
          ]
          member.data=data;
        })
        this.getMasterPayoutDatails();
    })
  }

  getMasterPayoutDatails(){
    this.masterDetails.hubmaster.hub_comps.total = this.getTotalOfDay(this.masterDetails.hubmaster.hub_comps).toFixed(2);
    this.masterDetails.hubmaster.deliveries.total = this.getTotalOfDay(this.masterDetails.hubmaster.deliveries).toFixed(2);
    let data = [
      {
        "label":"Hub Comps",
        "data":this.masterDetails.hubmaster.hub_comps
      },
      {
        "label":"# of Deliveries",
        "data":this.masterDetails.hubmaster.deliveries
      }
    ];
    this.masterDetails.hubmaster = data;
  }

  getAuthAdjustment(id){
    const reqData = {
      startDate: this.datepipe.transform(this.weeklyDate, "yyyy-MM-dd"),
      endDate: this.datepipe.transform(this.weeklyDateSeven, "yyyy-MM-dd")
    };
    this._ProfileService.getAuthAdjustment(id,reqData).subscribe((data:any)=>{
      this.authAdjustmentData = data.data[0];
    });
  }


  getSubTotal (member){
    let subTotal:any = {};
    this.daysKey.forEach(day=>{
      subTotal[day] = this.getDaySubTotal(member,day);
    })
    subTotal.total = this.getTotalOfDay(subTotal);
    return subTotal;
  }

  getTotalOfDay(data){
    let total = 0;
    this.daysKey.forEach(day=>{
      total += data && data[day]?parseFloat(data[day]):0;
    })
    return total;
  }

  getDaySubTotal(member,day){
    return ((member.cash[day]?parseFloat(member.cash[day]):0) 
          + (member.bank[day]?parseFloat(member.bank[day]):0) 
          + (member.payout[day]?parseFloat(member.payout[day]):0)).toFixed(2)
  }


  goBackDriver() {
    this.weeklyDate = moment(this.weeklyDate).add(-7, "d");
    this.weeklyDateSeven = moment(this.weeklyDateSeven).add(-7, "d");
    this.getWeekreconbydate(this.selectedHub);
    this.getAuthAdjustment(this.selectedHub)
  }

  getUnitHubs(){
    this._ProfileService.getHubwithUnits(this.user.company_id).subscribe(data=>{
      this.hubs = data.data;
     // this.getAllDrivers(this.hubs[0].food_park_id);
    })
  }

  selectHub(id){
    this.getWeekreconbydate(id)
  }

  goFrontDriver() {
    this.weeklyDate = moment(this.weeklyDate).add(7, "d");
    this.weeklyDateSeven = moment(this.weeklyDateSeven)
      .add(7, "d")
      .format("YYYY-MM-DD");
      this.getWeekreconbydate(this.selectedHub);
      this.getAuthAdjustment(this.selectedHub)
  }

  getDate() {
    return this.date;
  }

}
