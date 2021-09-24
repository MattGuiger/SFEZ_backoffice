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
import {
  DriverDialogComponent,
  DriverDialogModel,
} from "../../driver-dialog/driver-dialog.component";

declare var require: any;
const data: any = [];
@Component({
  selector: "app-driver-tab",
  templateUrl: "./drivers.component.html",
  styleUrls: ["./drivers.css"],
})
export class FoodpckmgrorderDriverComponent {
  displayedColumns: string[] = [
    "Schedule",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  setdata: any[] = [{
    "label":"Trip Fees & Tips"
  },{
    "label":"# of Deliveries"
  },{
    "label":"COD Cash Due"
  }];

  user: any;
  datecuurent: any;
  tab: any;
  date: any;
  sevendate: any;
  sevendatef: any;
  sevendateb: any;
  driverdate: any;
  driverseven: any;
  drivers: any[];
  hubs : any[];
  selectedHub: any;
  constructor(
    private _ProfileService: ProfileService,
    private toastr: ToastrService,
    private _CommonFunctionsService: CommonFunctionsService,
    private modalService: NgbModal,
    private _router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.datecuurent = this.datepipe.transform(Date.now(), "yyyy-MM-dd");
    this.date = moment().add(0, "d");
    this.driverdate = moment().add(0, "d");
    this.driverseven = moment().add(7, "d");
    this.getUnitHubs();
    this.getAllDrivers(this.user.food_park_id);
    this.selectedHub = this.user.food_park_id;
  }



  goBackDriver() {
    this.driverdate = moment(this.driverdate).add(-7, "d");
    this.driverseven = moment(this.driverseven).add(-7, "d");
    this.getAllDrivers(this.user.food_park_id)
  }

  getUnitHubs(){
    this._ProfileService.getHubwithUnits(this.user.company_id).subscribe(data=>{
      this.hubs = data.data;
     // this.getAllDrivers(this.hubs[0].food_park_id);
    })
  }

  selectHub(id){
    this.getAllDrivers(id)
  }

  goFrontDriver() {
    this.driverdate = moment(this.driverdate).add(7, "d");
    this.driverseven = moment(this.driverseven)
      .add(7, "d")
      .format("YYYY-MM-DD");
    this.getAllDrivers(this.user.food_park_id)
  }

  getAllDrivers(foodParkId) {
    const data = {
      startDate: this.datepipe.transform(this.driverdate, "yyyy-MM-dd"),
      endDate: this.datepipe.transform(this.driverseven, "yyyy-MM-dd")
    };
    this._ProfileService
      .getAllDriversforRecon(foodParkId, data)
      .subscribe((res: any) => {
        this.drivers = res.data;
        this.drivers.forEach(driver=>{
          let data = [
            {
              "label":"Trip Fees & Tips",
              "data":driver.tripfee_tipamount
            },
            {
              "label":"# of Deliveries",
              "data":driver.Deliveries
            },
            {
              "label":"COD Cash Due",
              "data":driver.COD_cash_due
            }
          ]
          driver.data=data;
        })
      });
  }

  getDate() {
    return this.date;
  }

  getDriverdate() {
    return this.driverdate;
  }

  getDriverseven() {
    ``;
    return this.driverseven;
  }
 

}
