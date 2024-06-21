import {
  Component,
  QueryList,
  ViewChild,
  ElementRef,
  ViewChildren,
  Input,
} from "@angular/core";
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
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs';
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
  setdata: any[] = [
    {
      label: "Trip Fees & Tips",
    },
    {
      label: "# of Deliveries",
    },
    {
      label: "COD Cash Due",
    },
  ];

  daysKey = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
  hubs: any[];
  @Input() weeklyDateSeven: any;
  @Input() weeklyDate: any;
  @Input() weekChange: Observable<void>;
  @Input() hubChange: Observable<void>;
  @Input() selectedHub : any;
  private weekChangeSub: Subscription;
  private hubChangeSub: Subscription;
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
  }

  ngOnInit(): void {
    this.getInitData();
    this.weekChangeSub = this.weekChange.subscribe(() => {
      this.getInitData();
    });
    this.hubChangeSub = this.hubChange.subscribe(() => {
      this.getInitData();
    });
  }

  ngOnDestroy() {
    this.weekChangeSub.unsubscribe();
    this.hubChangeSub.unsubscribe();
  }

  getInitData() {
    this.getAllDrivers(this.selectedHub);
  }

  getAllDrivers(foodParkId) {
    const data = {
      startDate: this.datepipe.transform(this.weeklyDate, "yyyy-MM-dd"),
      endDate: this.datepipe.transform(this.weeklyDateSeven, "yyyy-MM-dd"),
    };
    this._ProfileService
      .getAllDriversforRecon(foodParkId, data)
      .subscribe((res: any) => {
        this.drivers = res.data;
        this.drivers.forEach((driver) => {
          let data = [
            {
              label: "Trip Fees & Tips",
              data: driver.tripfee_tipamount,
            },
            {
              label: "# of Deliveries",
              data: driver.Deliveries,
            },
            {
              label: "COD Cash Due",
              data: driver.COD_cash_due,
            },
          ];
          driver.data = data;
        });
      });
  }
}
