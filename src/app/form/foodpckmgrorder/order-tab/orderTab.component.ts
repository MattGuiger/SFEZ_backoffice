import { Component, QueryList, ViewChild, ElementRef, ViewChildren, Input, OnInit } from '@angular/core';
import { ProfileService } from "../../../services/profile.service";
import { CommonFunctionsService } from "../../../services/commonFunctions.service";
import {
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { Options } from "ng5-slider";
import * as moment from "moment";
import { DatePipe } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

declare var require: any;
const data: any = [];

@Component({
  selector: "app-order-tab",
  templateUrl: "./orderTab.component.html",
  styleUrls: ["./orderTab.css"],
})
export class FoodpckmgrorderOrderComponent implements OnInit{
  filterOrders: any;

  user: any;
  @Input() datecuurent: any;
  hubs : any[];
  selectedHub: any;
  date;
  @ViewChild("table") table: any;
  orders;
  @Input() dateChange: Observable<void>;
  private eventsSubscription: Subscription;

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
    this.selectedHub = this.user.food_park_id;
  }

  ngOnInit(): void {
    this.eventsSubscription = this.dateChange.subscribe(()=>{
      this.getAllOrder()
    });
    this.getAllOrder()
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  toggleExpandRow(row){
    this.table.rowDetail.toggleExpandRow(row);
  }

  onActivate(event){
    if(event.type == "dblclick"){
      this.table.rowDetail.toggleExpandRow(event.row);
      this.orders.filter((d) => d.id == event.row.id);
    }
  }

  getAllOrder() {
    this.user = this._CommonFunctionsService.checkUser().user;
    //this.getAllDrivers(this.user.food_park_id);
    const data = {
      orderdate: this.datecuurent,
    };
    this._ProfileService
      .getallfoodparkmgrorder(this.user.food_park_id, data)
      .subscribe((res: any) => {
        let groupOrders = [];
        if(res.data[0].grouporders){
          res.data[0].grouporders.forEach(order => {
            let orderDetail = order.order_detail;
            orderDetail.group = order.group;
            groupOrders.push(orderDetail);
          });
        }
        this.orders = [... res.data[0].orders,...res.data[0].changeorders,...groupOrders]
        this.filterOrders = [...this.orders];
        // this.columnsWithSearch = ['order_id','customer_name','delivery_address_details.city','delivery_address_details.county','delivery_address_details.line_1',
        // 'delivery_address_details.line_2','delivery_address_details.company_name'
        // ];
      });
  }

    /** Filter by moltin id, company name, delivery address and customer name*/
    updateFilter(event) {
      const val = event.target.value.toLowerCase();
      const temp = this.orders.filter(function (d) {
        let deliveryAddress =
          d.delivery_address?.line_1 + " " + d.delivery_address?.line_2;
        let ordrId = d.order_id;
        return (
          deliveryAddress.toLowerCase().indexOf(val) !== -1 ||
          ordrId == val ||
          d.short_name.toLowerCase().indexOf(val) !== -1 ||
          !val
        );
      });
      //this.rows = temp;
    }

}
