import { Component, QueryList, ViewChild, ElementRef, ViewChildren, Input } from '@angular/core';
import { ProfileService } from "../../../services/profile.service";
import { CommonFunctionsService } from "../../../services/commonFunctions.service";
import { ToastrService } from "ngx-toastr";
import { DatePipe } from "@angular/common";
@Component({
  selector: "app-daily-payout-order",
  templateUrl: "./daily-payout-order.component.html",
  styleUrls: ["./daily-payout-order.css"],
})
export class FoodpckmgrorderDailyPayoutOrderComponent {

  user: any;
  @ViewChild("dailyPayoutBank") dailyPayoutBank:any;
  @ViewChild("dailyPayoutCod") dailyPayoutCod:any;
  @Input() dailyPayoutData:any;
  constructor(
    private toastr: ToastrService,
    private _CommonFunctionsService: CommonFunctionsService,
    public datepipe: DatePipe
  ) {
    this.user = this._CommonFunctionsService.checkUser().user;
  }



  dailyPayoutonActivatebank (event){
    if(event.type == "dblclick"){
      this.dailyPayoutBank.rowDetail.collapseAllRows();
      this.dailyPayoutBank.rowDetail.toggleExpandRow(event.row);
    }
  }

  dailyPayoutonActivateCod (event){
    if(event.type == "dblclick"){
      this.dailyPayoutCod.rowDetail.collapseAllRows();
      this.dailyPayoutCod.rowDetail.toggleExpandRow(event.row);
    }
  }

  toggleExpandRowDailyout(row) {
    this.dailyPayoutBank.rowDetail.collapseAllRows();
      this.dailyPayoutBank.rowDetail.toggleExpandRow(row);
  }

  toggleExpandRowDailyCod(row,index) {
    this.dailyPayoutCod.rowDetail.collapseAllRows();
    this.dailyPayoutCod.rowDetail.toggleExpandRow(row);
  }
}
