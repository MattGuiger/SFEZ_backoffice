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
  company_id: any;
  rowWiseData:any[] = [];
  loadingData:boolean = true;
  data = "";
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
    
    //this.getCurrentDate();
      
  }
  /** Get Daily Payout */
  getDailyPayout(){
    let totalBalance = 0;
    // const tempCompany_id = 11247
    const tempDate = {
      date:""
    }
    this._ProfileService.getDailyPayout(11247, tempDate).subscribe(
      // this._ProfileService.getDailyPayoutLists(this.company_id, this.data).subscribe(
      (res:any) => {
        this.dailyPayoutData = res.data;
        res.data[0].data.forEach(function(val){
          totalBalance = totalBalance+(val.amount-val.deduction);
        });
        this.codBalance = totalBalance;
      },
      (error:any) => {
        console.log(error)
      }
    );
  }

  // getDailyPayout(){
  //   let totalBalance = 0;
  //   this._ProfileService.getDailyPayoutList().subscribe(
  //     (res:any) => {
  //       this.dailyPayoutData = res.data;
  //       res.data.forEach(function(val){
  //         totalBalance = totalBalance+(val.amount-val.deduction);
  //       });
  //       this.codBalance = totalBalance;
  //     },
  //     (error:any) => {
  //       console.log(error)
  //     }
  //   );
  // }
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
    console.log(row.order_detail.id);
    this._ProfileService.voidOrder(row.order_detail.id).subscribe(
      (voidResponse) => {
        console.log(voidResponse);
        this.toastr.success("Order removed successfully");
        this.getAllOrder();
      },
      (error) => {
        console.log(error);
      }
    )
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

  
  /**Get food park units */
  unitOrderAndName:any[] = [];
  unitsId:any[] = [];
  totalDeliveryCount:any=0;
  
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
                  "unitOrder":45 //unitResponse.data.order_count
                };
                this.unitOrderAndName.push(data); 
                this.totalDeliveryCount = this.totalDeliveryCount+data.unitOrder; 
                this.unitsId.push(value.id);
              },
              (unitError) =>{
                console.log(unitError);
              }
            )
          })

          console.log("testing", this.unitsId);
          this.unitsDriver();
        }  
      },
      (error) => {
        console.log(error);
      }
    )

  }

  driverCount:any = '';
  unitsDriver(){
    let unitsIdData = {
      "units":  [2164, 2165]//this.unitsId
    }
    this._ProfileService.getUnitsDriver(unitsIdData).subscribe(
      (driverRespose) => {
        // console.log("driverResponse",driverRespose);
        let getDriverId = [];
        if(driverRespose.data){
          this.driverCount = driverRespose.data.length;
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

  wagesData = [];
  oldData:any[] = [];
  makeData:any={};
  manageWagesDriver(data, driverName){
    
    let workTime = 0;
    var final = [];


    data.forEach((value) => {
      let date = new Date(value.work_date);
      let getDays = date.getDay();
      
      let day = new Date(value.work_date).getDay();
      if(day in final) {
        final[day] =  final[day] + value.work_time;
      } else {
        final[day] = value.work_time;
      }

      this.makeData = {
        "driverId":value.driver_id,
        "driver":driverName,
        "hour_wages": value.per_hour_price,
        'mon' : '1' in final ? final[1] : 0,
        'tue' : '2' in final ? final[2] : 0,
        'wed' : '3' in final ? final[3] : 0,
        'thu' : '4' in final ? final[4] : 0,
        'fri' : '5' in final ? final[5] : 0,
        'sat' : '6' in final ? final[6] : 0,
        'sun' : '0' in final ? final[0] : 0,
      }
      this.makeData['unitId'] = value.unit_id;
      this.makeData['total'] = parseInt(this.makeData['mon'])+parseInt(this.makeData['tue'])+parseInt(this.makeData['wed'])+parseInt(this.makeData['thu'])+parseInt(this.makeData['fri'])+parseInt(this.makeData['sat'])+parseInt(this.makeData['sun']);

    });

    this.wagesData.push(this.makeData);
    //this.wagesData = Array.from(this.wagesData.reduce((m, t) => m.set(t.name, t), new Map()).values());
    localStorage.setItem('wagesdata', JSON.stringify(this.wagesData));

    this.totalWagesDataList();
  }

  /** Save row */
  save(row, rowIndex){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex];
    console.log(row);
    let getLocalStorage:any = localStorage.getItem('wagesdata');
    getLocalStorage = JSON.parse(getLocalStorage);
    getLocalStorage = getLocalStorage[rowIndex];
    //console.log(getLocalStorage.mon);

    let editDay, editValue;
    if(row.mon != parseInt(getLocalStorage.mon)){editDay = 1;editValue=row.mon;}
    if(row.tue != parseInt(getLocalStorage.tue)){editDay = 2;editValue=row.tue;}
    if(row.wed != parseInt(getLocalStorage.wed)){editDay = 3;editValue=row.wed;}
    if(row.thu != parseInt(getLocalStorage.thu)){editDay = 4;editValue=row.thu;}
    if(row.fri != parseInt(getLocalStorage.fri)){editDay = 5;editValue=row.fri;}
    if(row.sat != parseInt(getLocalStorage.sat)){editDay = 6;editValue=row.sat;}
    if(row.sun != parseInt(getLocalStorage.sun)){editDay = 7;editValue=row.sun;}
    console.log("editday:"+editDay, "editValue:"+editValue);

    let currentDate = new Date()
    let currentDay = currentDate.getDay();
    let exactDate = currentDay - editDay;
    let pasCurFutDate; 
    if(Math.sign(exactDate) == -1){
      pasCurFutDate = currentDate.getDate() + Math.abs(exactDate);
    }else{
      pasCurFutDate = currentDate.getDate() - Math.abs(exactDate);
    }
    // console.log("pascurfut", String(pasCurFutDate).padStart(2, '0'));
    let actualDate = this.getCurrentDate(String(pasCurFutDate).padStart(2, '0'));
    // console.log(actualDate);
    let addhour:any = parseInt(row.mon)+parseInt(row.tue)+parseInt(row.wed)+parseInt(row.thu)+parseInt(row.fri)+parseInt(row.sat)+parseInt(row.sun); 
    let workTime:any = parseInt(addhour) - parseInt(row.total);

    let createWagesData = {
      "unit_id":row.unitId,
      "per_hour_price":row.hour_wages,
      "work_time":workTime,
      "work_date": actualDate
    }
    console.log(createWagesData);
    this._ProfileService.createDriverWages(row.driverId,createWagesData).subscribe(
      (wagesResponse) => {
        console.log(wagesResponse);
        this.unitsDriver();
      },
      (wagesError) => {
        console.log(wagesError);
      }
    );
  }
  /** end */

  /**Delete row */
  delete(row, rowIndex){
    this.isEditable[rowIndex]=!this.isEditable[rowIndex]
    console.log("Row deleted: "+ rowIndex);
  }
  /** end */

  currentDate:string;
  getCurrentDate(actualDate){
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = actualDate;
    let year = dateObj.getFullYear();
    return month+' '+day+ ','+year;
  }

  /** Total Delivery wages table */
  totalDeliveryWagesData:any[] = [];
  sumTotalDeliveryWages:any = 0;
  totalWagesDataList(){
    this.wagesData.forEach((wagesValue, wagesKey) => {
      let data:any = {
        "driverName":wagesValue.driver,
        "wagesTotal":wagesValue.total * wagesValue.hour_wages,
        "driverId":wagesValue.driverId
      }
      this.totalDeliveryWagesData.push(data);
      this.sumTotalDeliveryWages = this.sumTotalDeliveryWages+parseInt(data.wagesTotal)
    });
    //this.totalDeliveryWagesData = Array.from(this.totalDeliveryWagesData.reduce((m, t) => m.set(t.name, t), new Map()).values());
    // console.log(this.totalDeliveryWagesData);
    this.deliveryAllocation();
  }
  /** end */

  /** Delivery Allocation Table */
  deliveryAllocationList:any[] = []; 
  commasUnitName:any = "";
  deliveryAllocation(){
    console.log(this.unitOrderAndName);
    this.unitOrderAndName.forEach((valAllocation:any, valKey:any) => {
     // console.log("deliveryAllcocatin",this.totalDeliveryWagesData[valKey].wagesTotal)
      let data:any = {
        "unitName":valAllocation.unitName,
        "subSidy": (this.sumTotalDeliveryWages*valAllocation.unitOrder)/this.totalDeliveryCount,
        //"subSidy": ((this.totalDeliveryWagesData[valKey]?.wagesTotal) *valAllocation.unitOrder)/this.totalDeliveryCount,
        "status":"unpaid",
        "sumTotalDeliveryWages":this.sumTotalDeliveryWages,
        "unitsOrder":valAllocation.unitOrder,
        "totalDeliveryCount":this.totalDeliveryCount,
        "unitId":valAllocation.unitId
      }
      if(valKey == 0){
        this.commasUnitName = valAllocation.unitName;
      }else{
        this.commasUnitName = this.commasUnitName+","+valAllocation.unitName;
      }
      this.deliveryAllocationList.push(data);
    });
    console.log("Allocation", this.deliveryAllocationList);
    console.log("unitsname:"+this.commasUnitName);
  }

  subsidyTotalDeliveryWages:any;
  subsidyUnitsOrder:any;
  subsidyTotalDeliveryCount:any;
  subsidyUnitName:any;
  openSubsidy(subsidy,sumTotalDeliveryWages,unitsOrder,totalDeliveryCount, unitname) {
    this.subsidyTotalDeliveryWages= sumTotalDeliveryWages;
    this.subsidyUnitsOrder = unitsOrder;
    this.subsidyTotalDeliveryCount = totalDeliveryCount;
    this.subsidyUnitName = unitname;
    console.log(this.subsidyUnitName)
    this.modalService.open(subsidy, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  /** end */

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  

}
