import { Component, ViewChild } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CommonFunctionsService } from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { Options } from 'ng5-slider';
import { isNgTemplate } from '@angular/compiler';
import { async } from '@angular/core/testing';


declare var require: any;
const data: any = [];
@Component({
  selector: 'app-foodpckmgrorder',
  templateUrl: './foodpckmgrorder.component.html',
  styleUrls: ['./foodpckmgrorder.css']
})
export class FoodpckmgrorderComponent {
  editing = {};
  isEditable = {};
  rows = [];
  temp = [...data];
  orders: any[] = [];
  user: any;
  drivers: any[] = [];
  unitForm: FormGroup;
  loadingIndicator = true;
  reorderable = true;
  closeResult: string;
  columns = [{ prop: 'name' }, { name: 'Type' }, { name: 'Username' }];
  territory = [] = [];
  customer_order_window: number = 0;
  delivery_chg_amount: number = 0;
  delivery_radius: number = 0;
  delivery_time_offset: number = 0;
  customerorderwindow_options: Options = {
    floor: 0,
    ceil: 30
  };
  deliveryradious_options: Options = {
    floor: 0,
    ceil: 15
  };
  customerdeliverytime_options: Options = {
    floor: 0,
    ceil: 30
  };
  deliverycharge_options: Options = {
    floor: 0,
    ceil: 10,
    step: .25
  };
  
  orderDetails:any[] = [];
  rowWiseData:any[] = [];
  loadingData:boolean = true;

  dailyPayoutData:any[] = [];
  codBalance:any;


  shareddata = [
    {
      "driver":"steve",
      "hour_wages": 12,
      "mon":2,
      "tue":3,
      "wed":4,
      "thu":5,
      "fri":6,
      "sat":1,
      "sun":3
    },
    {
      "driver":"steve",
      "hour_wages": 12,
      "mon":2,
      "tue":3,
      "wed":4,
      "thu":5,
      "fri":6,
      "sat":1,
      "sun":3
    },
    {
      "driver":"steve",
      "hour_wages": 12,
      "mon":2,
      "tue":3,
      "wed":4,
      "thu":5,
      "fri":6,
      "sat":1,
      "sun":3
    },
    {
      "driver":"steve",
      "hour_wages": 12,
      "mon":2,
      "tue":3,
      "wed":4,
      "thu":5,
      "fri":6,
      "sat":1,
      "sun":3
    },
  ]
 

  //@ViewChild(FoodpckmgrorderComponent, { static: false }) table: FoodpckmgrorderComponent;
  @ViewChild('table') table: any; 
  constructor(private _ProfileService: ProfileService,
    private toastr: ToastrService
    , private _CommonFunctionsService: CommonFunctionsService,
    private modalService: NgbModal,
    private _router: Router,
    private route: ActivatedRoute) {
    this.getAllOrder();
    this.getDailyPayout();
    this.foodParkUnits(); 
      
  }
  /** Get Daily Payout */
  getDailyPayout(){
    let totalBalance = 0;
    this._ProfileService.getDailyPayoutList().subscribe(
      (res:any) => {
        this.dailyPayoutData = res.data;
        res.data.forEach(function(val){
          totalBalance = totalBalance+(val.amount-val.deduction);
        });
        this.codBalance = totalBalance;
      },
      (error:any) => {
        console.log(error)
      }
    );
  }

  getAllDrivers(foodParkId) {
    this._ProfileService.getAllDrivers(foodParkId).subscribe((res: any) => {
      this.drivers = res.data;
    })
  }

  getAllOrder() {
    this.user = this._CommonFunctionsService.checkUser().user;
    this.getAllDrivers(this.user.food_park_id);
    this._ProfileService.getallfoodparkmgrorder(this.user.id).subscribe((res: any) => {
      this.orders = res.data;
      this.temp = this.orders;
      this.rows = this.orders;
      console.log(this.rows); 
    })
  }

  
  /** Start accordion for order tab*/
  toggleExpandRow(row) {
    this.rowWiseData = [];
    this.orderDetails = row;
    this.table.rowDetail.collapseAllRows();
    this.table.rowDetail.toggleExpandRow(row);
    //this.loadingData = true;

    this._ProfileService.getOrderProductDetails().subscribe((res:any) => {
      this.loadingData = false;
      const rowdata = res.data.filter(d => d.id == row.id);
      this.rowWiseData = rowdata[0]?.order_items;
    });

  }
  /** End */

  toggleExpandRowDailyout(row){
    console.log(row);
    this.table.rowDetail.collapseAllRows();
    this.table.rowDetail.toggleExpandRow(row);
  }

  toggleExpandRowDailyCod(row){
    console.log("sarwa",row);
    this.table.rowDetail.collapseAllRows();
    this.table.rowDetail.toggleExpandRow(row);
  }

  /** Start select driver */
  selectdriver(event, row, value) {
    console.log(event);
    console.log(row);
    console.log(value);
    // this._ProfileService.setDriverToOrder(this.user.food_park_id, parseInt(event.target.value), row.orders[0].id).subscribe((res: any) => {
    //   if (res.status == 200) {
    //     this.toastr.success("Driver assign successfully!")
    //   } else {
    //     this.toastr.error("Something went wrong!")
    //   }
    // })
  }
  /** End */

  orderStatus(event,row){
    console.log(event.target.value);
    console.log(row);
  }

  orderAction(event, row){
    console.log(event.target.value);
  }

  /** Filter by moltin id, company name, delivery address and customer name*/
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      let deliveryAddress = d.delivery_address_details?.line_1 +' '+ d.delivery_address_details?.line_2;
      let ordrId = d.id;
      return deliveryAddress.toLowerCase().indexOf(val) !== -1 || ordrId == val || d.customer_name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  /** end  */

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  // Save row
  save(row, rowIndex){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex]
    console.log(row);
    console.log("Row saved: "+ rowIndex);
  }

  // Delete row
  delete(row, rowIndex){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex]
    console.log("Row deleted: "+ rowIndex);
  }
  
  /**Get food park units */
  unitOrderAndName:any[] = [];
  unitsId:any[] = [];
  async foodParkUnits(){
    await this._ProfileService.foodParkUnits(this.user.food_park_id).subscribe(
      (response) => {
        console.log(response.data);
        if(response.data){
          response.data.forEach(async (value) => {
            await this._ProfileService.getParticularUnitData(value.id).subscribe(
              async (unitResponse) => {
                let data = {
                  "unitId": unitResponse.data.id,
                  "unitName":unitResponse.data.name,
                  "unitOrder":unitResponse.data.order_count
                };
                this.unitOrderAndName.push(data);  
                this.unitsId.push(value.id);
                await this.unitsDriver();

              },
              (unitError) =>{
                console.log(unitError);
              }
            )
          })
        }  
      },
      (error) => {
        console.log(error);
      }
    )
  }

  unitsDriver(){
    let unitsIdData = {
      "units": [2164, 2165]//this.unitsId
    }
    this._ProfileService.getUnitsDriver(unitsIdData).subscribe(
      (driverRespose) => {
        let getDriverId = [];
        if(driverRespose.data){
          driverRespose.data.forEach((valueDriver) => {
            valueDriver.forEach(async (valueExact) =>{
              if(getDriverId.includes(valueExact.id) !== true){
                getDriverId.push(valueExact.id);
                await this._ProfileService.getParticularDriverWages(valueExact.id).subscribe(
                  (wagesResponse) => {
                    if(wagesResponse.data && wagesResponse.data.result){
                      this.manageWagesDriver(wagesResponse.data.result, wagesResponse.data.driver.first_name);
                    }
                  },
                  (wagesError) => {
                    console.log(wagesError);
                  }
                )
              }             
            
            });
          });
        }  
      },
      (driverError) => {
        console.log(driverError);
      }
    )
  }

  manageWagesDriver(data, driverName){
    //console.log(data);
    let daysName = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    let wagesData = [];
    let workTime = 0;
    var holder = {}
    var final = [];
    data.forEach((value) => {
      
      console.log(value);
      let date = new Date(value.work_date);
      let getDays = date.getDay();
     

      let day = new Date(value.work_date).getDay();
      if(day in final) {
        daysName[final[day]] =  final[day] + value.work_time;
      } else {
        daysName[final[day]] = value.work_time;
      }

      console.log(final);
      
      // let makeData = {
      //   "driver":driverName,
      //   "hour_wages": value.per_hour_price,
      // }
      // makeData[daysName[getDays]] = final;
      // wagesData.push(makeData);
      
      // if(value.work_date.includes(splitDate[0])){
      //   console.log('hello');
      // }else{
      //   console.log('bye');
      // }
      // workTime = value.work_time;
      // console.log('worktime', workTime);

      
      //console.log(wagesData);
    });

  }


}
