import {
  Component,
  QueryList,
  ViewChild,
  ElementRef,
  ViewChildren,
} from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { CommonFunctionsService } from "../../services/commonFunctions.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from "moment";

import { DatePipe } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { Subject } from 'rxjs';

const data: any = [];
@Component({
  selector: "app-foodpckmgrorder",
  templateUrl: "./foodpckmgrorder.component.html",
  styleUrls: ["./foodpckmgrorder.css"],
})
export class FoodpckmgrorderComponent {
  rows = [];
  orders: any[] = [];
  filterOrders: any[] = [];
  user: any;
  unitForm: FormGroup;
  datecuurent: any;
  datecurrentDailyPayout: any;

  company_id: any;
  data = "";
  dailyPayoutData: any[] = [];
  dataChage: Subject<void> = new Subject<void>();
  weekChange: Subject<void> = new Subject<void>();
  hubChange: Subject<void> = new Subject<void>();

  //@ViewChild(FoodpckmgrorderComponent, { static: false }) table: FoodpckmgrorderComponent;
  @ViewChild("table") table: any;
  @ViewChildren("dailyPayoutBank") dailyPayoutBank: QueryList<any>;
  @ViewChildren("dailyPayoutCod") dailyPayoutCod: QueryList<any>;

  date: any;
  selectedstatus: any;
  cash_payouts: any;
  total_order_amount: any;
  sevendatef: any;
  tabforCod: any;
  grpay: any;
  changeOrders: [];
  allOrders = [];
  hubmasterdat: any;
  currentOrderTab = "1";
  weeklyDate: any;
  weeklyDateSeven: any;
  hubs:any;
  selectedHub:any;
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
    this.datecurrentDailyPayout = this.datepipe.transform(
      Date.now(),
      "yyyy-MM-dd"
    );
    this.date = moment().add(0, "d");
    this.weeklyDate = moment().startOf('isoWeek');
    this.weeklyDateSeven =  moment().endOf('isoWeek');
    this.selectedHub = this.user.food_park_id;
    this.getUnitHubs();
    //this.getDailyPayout();
  }

  changeOrderTab(event){
    if (event.nextId == '2') {
      this.getDailyPayout();
      this.currentOrderTab = "2";
    }
  }

  /** Get Daily Payout */
  getDailyPayout() {
    const tempDate = {
      orderdate: this.datecuurent,
    };

    this._ProfileService
      .getDailyPayout(this.user.company_id, tempDate)
      .subscribe(
        (res: any) => {
          this.dailyPayoutData = res.data;
        },
        (error: any) => {}
      );
  }

  datePick(event) {
    console.log(event.target.value, "value");
    this.datecuurent = event.target.value;
    if( this.currentOrderTab == "2"){
      this.getDailyPayout();
    }else{
      this.dataChage.next();
    }
  }

  goBackWeek() {
    this.weeklyDate = moment(this.weeklyDate).add(-7, "d");
    this.weeklyDateSeven = moment(this.weeklyDateSeven).add(-7, "d");
    
    setTimeout(()=>{
      this.weekChange.next();
    },100)
  }

  goFrontWeek() {
    this.weeklyDate = moment(this.weeklyDate).add(7, "d");
    this.weeklyDateSeven = moment(this.weeklyDateSeven)
      .add(7, "d")
      .format("YYYY-MM-DD");
     
      setTimeout(()=>{
        this.weekChange.next();
      },100)
  }

  getUnitHubs(){
    this._ProfileService.getHubwithUnits(this.user.company_id).subscribe(data=>{
      this.hubs = data.data;
     // this.getAllDrivers(this.hubs[0].food_park_id);
    })
  }

  selectHub(hub){
    this.selectedHub = hub;
    setTimeout(()=>{
      this.hubChange.next(hub);
    },100)
  }

  // orderActionFilter(event) {
  //   this.selectedstatus = event.target.value;
  //   if (event.target.value == "Void") {
  //     const data = {
  //       orderdate: this.datecuurent,
  //     };
  //     this.user = this._CommonFunctionsService.checkUser().user;
  //     this._ProfileService.getVoidData(data).subscribe((res: any) => {
  //       this.orders = res.data;
  //       this.temp = this.orders;
  //       this.rows = this.orders;
  //     });
  //   } else {
  //     const data = {
  //       orderdate: this.datecuurent,
  //     };
  //     this.user = this._CommonFunctionsService.checkUser().user;
  //     this._ProfileService.getRefundVoidData(data).subscribe((res: any) => {
  //       this.orders = res.data;
  //       this.temp = this.orders;
  //       this.rows = this.orders;
  //     });
  //   }
  // }

  getDate() {
    return this.date;
  }

  currentDate: string;
}
