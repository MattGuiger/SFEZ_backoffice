import { Component, ViewChild } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CommonFunctionsService } from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { Options } from 'ng5-slider';
import * as moment from 'moment';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../form/confirm-dialog/confirm-dialog.component';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DriverDialogComponent, DriverDialogModel } from '../driver-dialog/driver-dialog.component';


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
  datecuurent:any;
  deliveryHub: Object;
  weekData: Array<Object>;
  wagesDataArr: Array<Object>;

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

  orderDetails: any[] = [];
  company_id: any;
  rowWiseData: any[] = [];
  loadingData: boolean = true;
  data = "";
  dailyPayoutData: any[] = [];
  codBalance: any;


  shareddata = [
    {
      "driver": "steve",
      "hour_wages": 12,
      "mon": 2,
      "tue": 3,
      "wed": 4,
      "thu": 5,
      "fri": 6,
      "sat": 1,
      "sun": 3
    },
    {
      "driver": "steve",
      "hour_wages": 12,
      "mon": 2,
      "tue": 3,
      "wed": 4,
      "thu": 5,
      "fri": 6,
      "sat": 1,
      "sun": 3
    },
    {
      "driver": "steve",
      "hour_wages": 12,
      "mon": 2,
      "tue": 3,
      "wed": 4,
      "thu": 5,
      "fri": 6,
      "sat": 1,
      "sun": 3
    },
    {
      "driver": "steve",
      "hour_wages": 12,
      "mon": 2,
      "tue": 3,
      "wed": 4,
      "thu": 5,
      "fri": 6,
      "sat": 1,
      "sun": 3
    },
  ]

  //@ViewChild(FoodpckmgrorderComponent, { static: false }) table: FoodpckmgrorderComponent;
  @ViewChild('table') table: any;
  tab: any;
  weeklyRecon: any;
  date: any;
  sevendate: any;
  selectedstatus: any;
  cash_payouts: any;
  total_order_amount: any;
  sevendatef: any;
  sevendateb: any;
  driverdate: any;
  driverseven: any;
  constructor(private _ProfileService: ProfileService,
    private toastr: ToastrService,private _CommonFunctionsService: CommonFunctionsService,
    private modalService: NgbModal,
    private _router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,public datepipe: DatePipe) 
    {
    this.datecuurent =  this.datepipe.transform(Date.now(), 'yyyy-MM-dd')
    this.getAllOrder();
    this.getDailyPayout();
    this.foodParkUnits();
    this.goBack();
    this.goFront();
    this.deliveryHub = [];
    this.LoadHubData();
    this.date = moment().add(0,'d')
    this.sevendate = moment().add(7,'d')
    this.driverdate = moment().add(0,'d')
    this.driverseven = moment().add(7,'d')
  }

  LoadHubData() {
    this.deliveryHub = {
      hub_name: 'New Hub',
      drivers: [
        {
          id: 10020,
          first_name: 'Bob',
          last_name: 'Brown',
          cash_payouts: '$27.25',
          weekly_total: '$67.25',
          orders: [{
            vendor: 'PHO #3402',
            address: '530 NW 5th St',
            method: 'assets/images/cash.png',
            fee: '$1.25',
            tips: '$3.00'
          },
          {
            vendor: 'PHO #9902',
            address: '2414 NW 6th St',
            method: 'assets/images/bank.png',
            fee: '$25.00',
            tips: '$8.00'
          }],
          weekly_data: [{
            task: 'Deliveries & Tips',
            mon: '$28.00',
            tue: '$25.00',
            wed: '$18.00',
            thu: '$20.00',
            fri: '',
            sat: '',
            sun: '',
            total: '$91.00'
          },
          {
            task: '# of Deliveries',
            mon: '9',
            tue: '10',
            wed: '4',
            thu: '6',
            fri: '',
            sat: '',
            sun: '',
            total: '29'
          }]
        },
        {
          id: 10022,
          first_name: 'Martin',
          last_name: 'Buch',
          cash_payouts: '$45.50',
          weekly_total: '$90.75',
          orders: [{
            vendor: 'PHO #5452',
            address: '250 OW 5th St',
            method: 'assets/images/card.png',
            fee: '$20.25',
            tips: '$5.00'
          },
          {
            vendor: 'PHO #8952',
            address: '2364 LW 6th St',
            method: 'assets/images/cash.png',
            fee: '$22.00',
            tips: '$7.00'
          }],
          weekly_data: [{
            task: 'Deliveries & Tips',
            mon: '$35.00',
            tue: '$30.00',
            wed: '$25.00',
            thu: '$35.00',
            fri: '',
            sat: '',
            sun: '',
            total: '$125.00'
          },
          {
            task: '# of Deliveries',
            mon: '13',
            tue: '11',
            wed: '7',
            thu: '15',
            fri: '',
            sat: '',
            sun: '',
            total: '46'
          }]
        }]
    }
  }

  loadWagesData() {
    let obj = {
      task: 'Deliveries & Tips',
      mon: '$28.00',
      tue: '$25.00',
      wed: '$18.00',
      thu: '',
      fri: '',
      sat: '',
      sun: '',
      total: '$71.00'
    }
    this.wagesDataArr.push(obj);

    let obj1 = {
      task: '# of Deliveries',
      mon: '9',
      tue: '10',
      wed: '4',
      thu: '',
      fri: '',
      sat: '',
      sun: '',
      total: '23'
    }
    this.wagesDataArr.push(obj1);
  }

  loadWeekData() {
    let obj = {
      vendor: 'PHO #3402',
      address: '530 NW 5th St',
      method: 'assets/images/cash.png',
      fee: '$1.25',
      tips: '$3.00'
    }
    this.weekData.push(obj);
    let obj1 = {
      vendor: 'PHO #9902',
      address: '2414 NW 6th St',
      method: 'assets/images/bank.png',
      fee: '$25.00',
      tips: '$8.00'
    }
    this.weekData.push(obj1);
  }

  /** Get Daily Payout */
  getDailyPayout() {
    let totalBalance = 0;
    // const tempCompany_id = 11247
    const tempDate = {
      date: ""
    }
    const companyid = JSON.parse(localStorage.getItem('user'))
    const companyid_test = companyid['user'].company_id;
    
    this._ProfileService.getDailyPayout(companyid_test, tempDate).subscribe(
      // this._ProfileService.getDailyPayoutLists(this.company_id, this.data).subscribe(
      (res: any) => {
        this.tab = res.data
        var payoutContainer = []

        this.tab.forEach(function (resp) {
          if (resp.data.cod) {
            payoutContainer.push(resp.data.cod)

          }
          if (resp.data.online) {
            payoutContainer.push(resp.data.online)
          }

        })
        this.dailyPayoutData = payoutContainer
        this.dailyPayoutData = payoutContainer;
        this.codBalance = totalBalance;
      },
      (error: any) => {
        
      }
    );
  }


  datePick(event)
  {
  console.log(event.target.value,'value');
  this.datecuurent = event.target.value
  this.getAllOrder();
  if(this.selectedstatus == 'Void')
  {
    
//     const data =
//     {
//      "orderdate": this.datecuurent 
//     }
//    this.user = this._CommonFunctionsService.checkUser().user;
//    this._ProfileService.getVoidData(data).subscribe((res: any) => {
//    this.orders = res.data;
//    this.temp = this.orders;
//    this.rows = this.orders;
//  })
  }
  else
  {
  //  const data =
  //   {
  //    "orderdate": this.datecuurent 
  //   }
  //  this.user = this._CommonFunctionsService.checkUser().user;
  //  this._ProfileService.getRefundVoidData(data).subscribe((res: any) => {
  //    this.orders = res.data;
  //    this.temp = this.orders;
  //    this.rows = this.orders;

  //  })
  }
  }

  goBack()
  {
  this.date = moment(this.date).add(-7,'d')
  this.sevendate = moment(this.sevendate).add(-7,'d')
  this.sevendateb = this.sevendate.format('YYYY-MM-DD');
  console.log(this.sevendate.format('YYYY-MM-DD') ,'sevendate');
  this.getWeeklyRecon()
  }

  goFront()
  {
    this.date = moment(this.date).add(7,'d')
    this.sevendate = moment(this.sevendate).add(7,'d')
    this.sevendatef = moment(this.sevendate).add(7,'d').format('YYYY-MM-DD') 
    console.log(this.sevendate.format('YYYY-MM-DD'),'2021-01-05 10:29:23.105817+05:30');
    this.getWeeklyRecon()
  }


  goBackDriver()
  {
  this.driverdate = moment(this.driverdate).add(-7,'d')
  this.driverseven = moment(this.driverseven).add(-7,'d')
  }

  goFrontDriver()
  {
    this.driverdate = moment(this.driverdate).add(7,'d')
    this.driverseven = moment(this.driverseven).add(7,'d').format('YYYY-MM-DD') 

  }

  getAllDrivers(foodParkId) {
    
    const data = 
    {
      "startDate" : "2020-10-15",
      "endDate"   : "2020-10-22"
    }
    this._ProfileService.getAllDriversforRecon(foodParkId,data).subscribe((res: any) => {
      this.drivers = res.data;
     
    })

  }


  openModal(row)
  {
     const dialogData = new DriverDialogModel("Confirm Action", row);

     const dialogRef = this.dialog.open(DriverDialogComponent, {
       maxWidth: "600px",
       data: dialogData
     });
  }


  getAllOrder() {
    this.user = this._CommonFunctionsService.checkUser().user;
   this.getAllDrivers(this.user.food_park_id);
    const data ={
      "orderdate":this.datecuurent 
    }
    this._ProfileService.getallfoodparkmgrorder(this.user.food_park_id,data).subscribe((res: any) => {
      this.orders = res.data;
      this.temp = this.orders;
      this.rows = this.orders;
    })
  }


  orderActionFilter(event)
  {
    this.selectedstatus = event.target.value;
     if(event.target.value == 'Void')
     {
       const data =
       {
        "orderdate": this.datecuurent 
       }
      this.user = this._CommonFunctionsService.checkUser().user;
      this._ProfileService.getVoidData(data).subscribe((res: any) => {
      this.orders = res.data;
      this.temp = this.orders;
      this.rows = this.orders;
    })
     }
     else
     {
      const data =
       {
        "orderdate": this.datecuurent 
       }
      this.user = this._CommonFunctionsService.checkUser().user;
      this._ProfileService.getRefundVoidData(data).subscribe((res: any) => {
        this.orders = res.data;
        this.temp = this.orders;
        this.rows = this.orders;
  
      })
     }
  }

  getWeeklyRecon()
  {
    const data =
    {
      "startDate": this.sevendateb,
      "endDate": this.sevendatef
    }
    this._ProfileService.getWeeklyrecon(data).subscribe((res:any)=>
    {
      if(res.status == 200)
      {
        if(res.data.length > 0)
        {
          this.weeklyRecon = res.data 
          this.cash_payouts = res.data[0].cash_payout;
          this.total_order_amount = res.data[0].total_order_amount
          console.log(this.weeklyRecon,'weklyRecon');  
        }
      }
  })
  }

  loadOrderDummyData() {

    let objOrder = {
      id: 101,
      unit_name: 'Pho Loc#3',
      size: 'Medium',
      addOns: 'Extra condiments(+$2.75)',
      instructions: 'extra Spicy',
      delivery_address: {
        line_1: 'Rua da campina',
        line_2: 'Apt 2203'
      },
      desired_delivery_time: '2021-02-25T07:49:57.870Z',
      status: 'order_paid',
      initiation_time: '2021-02-25T07:09:57.870Z',
      order_id: '1234',
      context: 'cod',
      amount: '100.00',
      short_name: 'ZZZ',
    }
    this.rows.push(objOrder);

    objOrder = {
      id: 102,
      unit_name: 'Beef PhoX1',
      size: 'Regular',
      addOns: 'Extra condiments(+$2.75)',
      instructions: 'No Jalapenos',
      delivery_address: {
        line_1: '2921',
        line_2: 'Sw Pumice Ave'
      },
      desired_delivery_time: '2021-03-16T10:25:57.870Z',
      status: 'incomplete',
      initiation_time: '2021-03-16T09:50:57.870Z',
      order_id: '2154',
      context: 'bank',
      amount: '500.00',
      short_name: 'TAS',
    }
    this.rows.push(objOrder);

    objOrder = {
      id: 103,
      unit_name: 'Beef PhoX5',
      size: 'Larg',
      addOns: 'Extra condiments(+$2.75)',
      instructions: '---',
      delivery_address: {
        line_1: '2203',
        line_2: 'Rua parimode da'
      },
      desired_delivery_time: '2021-03-17T04:20:57.870Z',
      status: 'incomplete',
      initiation_time: '2021-03-17T03:45:57.870Z',
      order_id: '2156',
      context: 'card',
      amount: '250.00',
      short_name: 'ABC',
    }
    this.rows.push(objOrder);
    this.temp = this.rows;
  }

  /** Start accordion for order tab*/
  toggleExpandRow(row) 
  {
    this.rowWiseData = [];
    this.orderDetails = row;
    this.table.rowDetail.toggleExpandRow(row);
    const rowdata = this.temp.filter(d => d.id == row.id);
    this.rowWiseData = rowdata[0]?.order_items;
  }


  getUpdatevendor(item)
  {
    return [...item.split(' ')]
  }
  /** End */

  toggleExpandRowDailyout(row) {
    this.table.rowDetail.collapseAllRows();
    this.table.rowDetail.toggleExpandRow(row);
  }

  toggleExpandRowDailyCod(row) {
  
    this.table.rowDetail.collapseAllRows();
    this.table.rowDetail.toggleExpandRow(row);
  }

  /** Start select driver */
  selectdriver(event, row, value) 
  {
  }


  /** End */

  orderStatus(event, row) {
  }

  orderAction(event, row) {
    if (event == 'Refund') {
      this._ProfileService.refundAmountToCustomer(row.id).subscribe(res => {
        this.toastr.success("Refund Amount");

      })
    } else if (event == 'Void') {
      this._ProfileService.voidOrder(row.order_detail.id).subscribe(
        (voidResponse) => {
          this.toastr.success("Order removed successfully");
          this.getAllOrder();
        },
        (error) => {
        }
      )
    } else if (event.target.value == 'Delete') 
    {

    }

  }

  /** Filter by moltin id, company name, delivery address and customer name*/
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      let deliveryAddress = d.delivery_address?.line_1 + ' ' + d.delivery_address?.line_2;
      let ordrId = d.order_id;
      return deliveryAddress.toLowerCase().indexOf(val) !== -1 || ordrId == val || d.short_name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  getDate()
  {
    return this.date
  }


  getDateseven()
  {
    return this.sevendate
  }

  getDriverdate()
  {
    return this.driverdate
  }

  getDriverseven()
  {``
    return this.driverseven
  }
  /** end  */

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }


  /**Get food park units */
  unitOrderAndName: any[] = [];
  unitsId: any[] = [];
  totalDeliveryCount: any = 0;

  async foodParkUnits() {
    await this._ProfileService.foodParkUnits(this.user.food_park_id).subscribe(
      (response) => {
        if (response.data) {
          response.data.forEach(async (value) => {
            await this._ProfileService.getParticularUnitData(value.id).subscribe(
              async (unitResponse) => {
                let data = {
                  "unitId": unitResponse.data.id,
                  "unitName": unitResponse.data.name,
                  "unitOrder": 45 //unitResponse.data.order_count
                };
                this.unitOrderAndName.push(data);
                this.totalDeliveryCount = this.totalDeliveryCount + data.unitOrder;
                this.unitsId.push(value.id);
              },
              (unitError) => {
              }
            )
          })
          this.unitsDriver();
        }
      },
      (error) => {
      }
    )

  }

  driverCount: any = '';
  unitsDriver() {
    let unitsIdData = {
      "units": [2164, 2165]//this.unitsId
    }
    this._ProfileService.getUnitsDriver(unitsIdData).subscribe(
      (driverRespose) => {
        let getDriverId = [];
        if (driverRespose.data) {
          this.driverCount = driverRespose.data.length;
          driverRespose.data.forEach((valueDriver) => {
            valueDriver.forEach(async (valueExact) => {
              if (getDriverId.includes(valueExact.id) !== true) {
                getDriverId.push(valueExact.id);
                await this._ProfileService.getParticularDriverWages(valueExact.id).subscribe(
                  (wagesResponse) => {

                    if (wagesResponse.data && wagesResponse.data.result) {
                      this.manageWagesDriver(wagesResponse.data.result, wagesResponse.data.driver.first_name);
                    }
                  },
                  (wagesError) => {
                  }
                )
              }

            });
          });
        }
      },
      (driverError) => {
      }
    )
  }
  wagesData = [];
  oldData: any[] = [];
  makeData: any = {};
  manageWagesDriver(data, driverName) {

    let workTime = 0;
    var final = [];


    data.forEach((value) => {
      let date = new Date(value.work_date);
      let getDays = date.getDay();

      let day = new Date(value.work_date).getDay();
      if (day in final) {
        final[day] = final[day] + value.work_time;
      } else {
        final[day] = value.work_time;
      }

      this.makeData = {
        "driverId": value.driver_id,
        "driver": driverName,
        "hour_wages": value.per_hour_price,
        'mon': '1' in final ? final[1] : 0,
        'tue': '2' in final ? final[2] : 0,
        'wed': '3' in final ? final[3] : 0,
        'thu': '4' in final ? final[4] : 0,
        'fri': '5' in final ? final[5] : 0,
        'sat': '6' in final ? final[6] : 0,
        'sun': '0' in final ? final[0] : 0,
      }
      this.makeData['unitId'] = value.unit_id;
      this.makeData['total'] = parseInt(this.makeData['mon']) + parseInt(this.makeData['tue']) + parseInt(this.makeData['wed']) + parseInt(this.makeData['thu']) + parseInt(this.makeData['fri']) + parseInt(this.makeData['sat']) + parseInt(this.makeData['sun']);

    });

    this.wagesData.push(this.makeData);
    //this.wagesData = Array.from(this.wagesData.reduce((m, t) => m.set(t.name, t), new Map()).values());
    localStorage.setItem('wagesdata', JSON.stringify(this.wagesData));

    this.totalWagesDataList();
  }

  /** Save row */
  save(row, rowIndex) {
    this.isEditable[rowIndex] = !this.isEditable[rowIndex];
    let getLocalStorage: any = localStorage.getItem('wagesdata');
    getLocalStorage = JSON.parse(getLocalStorage);
    getLocalStorage = getLocalStorage[rowIndex];

    let editDay, editValue;
    if (row.mon != parseInt(getLocalStorage.mon)) { editDay = 1; editValue = row.mon; }
    if (row.tue != parseInt(getLocalStorage.tue)) { editDay = 2; editValue = row.tue; }
    if (row.wed != parseInt(getLocalStorage.wed)) { editDay = 3; editValue = row.wed; }
    if (row.thu != parseInt(getLocalStorage.thu)) { editDay = 4; editValue = row.thu; }
    if (row.fri != parseInt(getLocalStorage.fri)) { editDay = 5; editValue = row.fri; }
    if (row.sat != parseInt(getLocalStorage.sat)) { editDay = 6; editValue = row.sat; }
    if (row.sun != parseInt(getLocalStorage.sun)) { editDay = 7; editValue = row.sun; }

    let currentDate = new Date()
    let currentDay = currentDate.getDay();
    let exactDate = currentDay - editDay;
    let pasCurFutDate;
    if (Math.sign(exactDate) == -1) {
      pasCurFutDate = currentDate.getDate() + Math.abs(exactDate);
    } else {
      pasCurFutDate = currentDate.getDate() - Math.abs(exactDate);
    }
    let actualDate = this.getCurrentDate(String(pasCurFutDate).padStart(2, '0'));
    let addhour: any = parseInt(row.mon) + parseInt(row.tue) + parseInt(row.wed) + parseInt(row.thu) + parseInt(row.fri) + parseInt(row.sat) + parseInt(row.sun);
    let workTime: any = parseInt(addhour) - parseInt(row.total);

    let createWagesData = {
      "unit_id": row.unitId,
      "per_hour_price": row.hour_wages,
      "work_time": workTime,
      "work_date": actualDate
    }
    this._ProfileService.createDriverWages(row.driverId, createWagesData).subscribe(
      (wagesResponse) => {
        this.unitsDriver();
      },
      (wagesError) => {
      }
    );
  }
  /** end */

  /**Delete row */
  delete(row, rowIndex) {
    this.isEditable[rowIndex] = !this.isEditable[rowIndex]
  }
  /** end */

  currentDate: string;
  getCurrentDate(actualDate) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = actualDate;
    let year = dateObj.getFullYear();
    return month + ' ' + day + ',' + year;
  }

  /** Total Delivery wages table */
  totalDeliveryWagesData: any[] = [];
  sumTotalDeliveryWages: any = 0;
  totalWagesDataList() {
    this.wagesData.forEach((wagesValue, wagesKey) => {
      let data: any = {
        "driverName": wagesValue.driver,
        "wagesTotal": wagesValue.total * wagesValue.hour_wages,
        "driverId": wagesValue.driverId
      }
      this.totalDeliveryWagesData.push(data);
      this.sumTotalDeliveryWages = this.sumTotalDeliveryWages + parseInt(data.wagesTotal)
    });
    //this.totalDeliveryWagesData = Array.from(this.totalDeliveryWagesData.reduce((m, t) => m.set(t.name, t), new Map()).values());
    this.deliveryAllocation();
  }
  /** end */

  /** Delivery Allocation Table */
  deliveryAllocationList: any[] = [];
  commasUnitName: any = "";
  deliveryAllocation() {
    this.unitOrderAndName.forEach((valAllocation: any, valKey: any) => {
      let data: any = {
        "unitName": valAllocation.unitName,
        "subSidy": (this.sumTotalDeliveryWages * valAllocation.unitOrder) / this.totalDeliveryCount,
        //"subSidy": ((this.totalDeliveryWagesData[valKey]?.wagesTotal) *valAllocation.unitOrder)/this.totalDeliveryCount,
        "status": "unpaid",
        "sumTotalDeliveryWages": this.sumTotalDeliveryWages,
        "unitsOrder": valAllocation.unitOrder,
        "totalDeliveryCount": this.totalDeliveryCount,
        "unitId": valAllocation.unitId
      }
      if (valKey == 0) {
        this.commasUnitName = valAllocation.unitName;
      } else {
        this.commasUnitName = this.commasUnitName + "," + valAllocation.unitName;
      }
      this.deliveryAllocationList.push(data);
    });
  }

  subsidyTotalDeliveryWages: any;
  subsidyUnitsOrder: any;
  subsidyTotalDeliveryCount: any;
  subsidyUnitName: any;
  openSubsidy(subsidy, sumTotalDeliveryWages, unitsOrder, totalDeliveryCount, unitname) {
    this.subsidyTotalDeliveryWages = sumTotalDeliveryWages;
    this.subsidyUnitsOrder = unitsOrder;
    this.subsidyTotalDeliveryCount = totalDeliveryCount;
    this.subsidyUnitName = unitname;
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
