import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs/Rx';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CommonFunctionsService } from '../../services/commonFunctions.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { forkJoin, fromEvent } from 'rxjs';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";

export interface Type {
  type: string;
  imageUrl: string;
}
declare var require: any;
const data: any = require('./company.json');
@Component({
  selector: 'app-foodparks',
  templateUrl: './foodparks.component.html',
  styleUrls: ['./foodparks.css']
})
export class FoodParkComponent implements OnInit , AfterViewInit {
  editing = {};
  locOrHubArr = [];
  @ViewChild("placesRef", { static: true }) placesRef: GooglePlaceDirective;
  public temp: Array<object> = [...data];
  public rows: Array<object> = [];
  options = {types:[],FoodParkComponent:{country : 'USA'}}
  @ViewChild('search', { static: false }) search: ElementRef;
  Livetype:Type[] = [{type:'RESTAURANT',imageUrl:'/assets/images/icon-500-restaurant.png'},
{type:'CAFÉ',imageUrl:'/assets/images/icon-500-cafe.png'},
{type:'BEER  ',imageUrl:'/assets/images/icon-500-beer.png'},
{type:'WINE',imageUrl:'/assets/images/icon-500-wine.png'},
{type:'FOOD TRUCK',imageUrl:'/assets/images/icon-500-food-truck.png'},
{type:'PIZZA',imageUrl:'/assets/images/pizza.svg'},
{type:'FARMER',imageUrl:'/assets/images/farmer.png'},
{type:'CHEF',imageUrl:'/assets/images/chef.png'},
{type:'GHOST KITCHEN',imageUrl:'/assets/images/Ghost-Kitchen.png'}];
  drivertemp = [...data];
  managertemp = [...data];
  locationOrHubObject: any;
  bgColor = 'rgba(0,0,0,0.5)'; // overlay background color
  confirmHeading = '';
  confirmContent = "Are you sure want to delete tsddshis?";
  confirmCanceltext = "Cancel";
  confirmOkaytext = "Okay";
  standard_delivery_charge:any;
  standard_trip_fee_for_driver :any;
  long_delivery_charge:any;
  long_trip_fee:any;

  minDaysValue :any;
  minDaysValuee:any;
  minDaysValue1:any;
  minDaysValue2:any;
  minDaysValue3:any;

  minDaysValuse = 10;
  selectedLocationRecord: any;
  selectedManagerRecord: any;
  selectedHubRecord: any;
  singleState: any[] = [];
  stateAndTerritoryObject: any;
  state: any[] = [];
  singleTerritory: any[] = [];
  territory: any[] = [];
  states: any[] = [];
  states2: any[] = [];
  countries: any[] = [];
  selectedState: any[] = [];
  selectArry: any[] = [];
  drivers: any[] = [];
  foodparkmgrList: any[] = [];
  setManager: any[] = [];
  setUnitManager: any[] = [];
  setdriverManager: any[] = [];
  companyId: any;
  user: any;
  tempHubResponse: any[] = [];
  tempLocationResponse: any[] = [];
  selectedHub: any;
  loadingIndicator = true;
  reorderable = true;
  registerCompanyDriver: any[] = []
  closeResult: string;
  columns = [{ name: 'Name' }, { prop: 'country' }, { name: 'State' }, { name: 'City' }];
  driverForm: FormGroup;
  driverTerritory: any;
  managerForm: FormGroup;
  managerRole: string = 'FOODPARKMGR';

  latt: any
  long: any
  territory_id1: any

  // lat = 44.058174;
  // lng = -121.315308;
  lat = 0
  lng = 0
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  selectedTerritory: any
  huborlocation: boolean = false;
  showManagerTab: boolean = false;
  allManager: any[] = [];
  showManager: any
  allUnitList: any[] = [];
  type: any[] = [];
  types:Type[] = [{type:'RESTAURANT',imageUrl:'/assets/images/icon-500-restaurant.png'},
  {type:'CAFÉ',imageUrl:'/assets/images/icon-500-cafe.png'},
  {type:'BEER  ',imageUrl:'/assets/images/icon-500-beer.png'},
  {type:'WINE',imageUrl:'/assets/images/icon-500-wine.png'},
  {type:'FOOD TRUCK',imageUrl:'/assets/images/icon-500-food-truck.png'},
  {type:'PIZZA',imageUrl:'/assets/images/pizza.svg'},
  {type:'FARMER',imageUrl:'/assets/images/farmer.png'},
  {type:'CHEF',imageUrl:'/assets/images/chef.png'},
  {type:'GHOST KITCHEN',imageUrl:'/assets/images/Ghost-Kitchen.png'}]
  typesForHub = [
    "MALL",
    "HOTEL",
    "EVENT",
    "FOODPARK",
    "FARMER"
  ]
  onLocationEditForm = new FormGroup({
    customer_order_window: new FormControl(event),
    delivery_radius: new FormControl(event),
    territory_id: new FormControl(),
    typename: new FormControl()
  });

  foodParkForm = new FormGroup({
    delivery_time_window: new FormControl(event),
    standard_delivery_charge: new FormControl(),
    standard_trip_fee_for_driver: new FormControl(),
    long_delivery_charge: new FormControl(),
    long_trip_fee: new FormControl(),

  });

  emailManageForm = new FormGroup({
    email: new FormControl('', Validators.required)
  });

  hubFoodParkForm = new FormGroup({
    state: new FormControl('', Validators.required),
    territory_id: new FormControl(),
    location: new FormControl(' ', Validators.required),
    name: new FormControl('', Validators.required),
    trip_fee: new FormControl(0, Validators.required),
    address: new FormControl('', Validators.required)
  });

  locationFoodParkForm = new FormGroup({
    // country_id: new FormControl('', Validators.required),
    // state_id: new FormControl('', Validators.required),
    territory_id: new FormControl(),
    username: new FormControl(),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl(' ', Validators.required)
  });
  filteredStateOptions: Observable<string[]>;

  hubData = [
    {
      "name": "KLM",
      "manager": "Manger Name",
      "deliveryIcon": true,
      "codIcon": true,
      "takeoutIcon": true,
    },
    {
      "name": "PQR",
      "manager": "Manger Name",
      "deliveryIcon": true,
      "codIcon": true,
      "takeoutIcon": true,
    }
  ];
  registerVendor: any[] = [
    {
      name: "Vendor name",
      manager: "Manager name",
    }
  ];
  driverDataByTeritory = [];
  driverData: any
  // driverData = [
  //   {
  //     "name": "Kid Rock",
  //     "phone": "480-921-8847",
  //   }
  // ];
  registerDriver = [];

  @ViewChild('table', { static: false }) table;
  UnitList: any;
  locations: any;
  locations2: any
  deliveryHub: any;
  deliveryHubUnits: any;
  Hublocations: any;
  hubDelivery: any;
   toppings = new FormControl();

  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selectedToppings;
  selectedStates: any
  state_name: any
  l_country_id: any
  l_state_id: any
  arr: any[];
  arr1: any[];
  getTerritoryId: any;
  state_id1: any
  locationsList: any;
  user_id: any;
  location_name: any;
  locationfilter: any;
  managerlistData = [];
  constructor(private _ProfileService: ProfileService,
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialog,
    private _AuthService: AuthService,
    private _CommonFunctionsService: CommonFunctionsService,
    private modalService: NgbModal,
    private route: ActivatedRoute) {
    localStorage.getItem('state');
    localStorage.getItem('country')
    this.l_state_id = localStorage.getItem('state_id');
    this.l_country_id = localStorage.getItem('country_id')
    this.state_name = localStorage.getItem('state_name')
    this.user = this._CommonFunctionsService.checkUser().user;
    this.state_id1 = this.user.state_id
    this.getAllState();
    this.getTerritory_id()
    this.territory_id()
    // this.getAllState();
    this.getAllTerritory();
    this.getAllCountries();
    this.getAllStates();
    this.getAllFoodPark();
    this.formInit();
    this.driverformInit();
    this.managerFormInit();
    this.getallfoodparkmgr();
    this.getFoodParkManager();
    this.getUnitManager();
    // this.getAllUnitList();
    this.getAllUnitWithFoodParkId();
    this.getAllDriversWithFoodParkId();
    this.getlocationOnTerritoryId()
    this.getTerritoryDrivers();
    this.getlocationsAndHub()
    this.getlocationCompanyId()
    // this.getlocationsAndHub()
    // this.gethubswithterriId()
    this.getDeliveryHubAndLocationsInCompany()
    this.getDeliveryHubinCompany()

    if (this.user.role == 'FOODPARKMGR' || this.user.role == 'OWNER') {
      this.showManagerTab = true;
    }
    this.getAllManger();

    // this.rows = data;
    // this.temp = [...data];
    // setTimeout(() => {
    //   this.loadingIndicator = false;
    // }, 1500);
    this.getSingleTerritory();


  }

  ngOnInit() {
   this._ProfileService.getLocation(this.user.company_id).subscribe((res:any)=>
   {
     this.location_name = res.data
     console.log(res,'thislocation')
   })
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.states.filter(option => option.toLowerCase().includes(filterValue));
  // }
  managerList = []
  managerListFoodpark = []
  getFoodParkManager() {
    if (this.user.company_id) {
      this._ProfileService.getFoodParkManagerByCompanyId(this.user.company_id).subscribe(res => {
        if (res.status == 200) {
          this.arr = res.data
          this.managerList.push(...this.arr)
          this.managerlistData.push(...this.arr)
        }

      })
    }
  }
  managerListUnitMgr = []
  getUnitManager() {
    if (this.user.company_id) {
      this._ProfileService.getUnitManagerByCompanyId(this.user.company_id).subscribe(res => {
        if (res.status == 200) {
          
          this.arr1 = res.data
          this.managerList.push(...this.arr1)
          this.managerlistData.push(...this.arr1)
        }
      })
    }

  }

  updateUnitData(id, isActive, type) {

    if (type == 'delivery') {
      this._ProfileService.updateUnitData(id, { delivery: !isActive }).subscribe(res => {
        if (res.status = 200) {
          this.toastr.success('Unit updated successfully!')
          this.getDeliveryHubAndLocationsInCompany()
        }
      })
    } else if (type == 'cash_on_delivery') {
      this._ProfileService.updateUnitData(id, { cash_on_delivery: !isActive }).subscribe(res => {
        if (res.status = 200) {
          this.toastr.success('Unit updated successfully!')
          this.getDeliveryHubAndLocationsInCompany()

        }
      })

    } else if (type == 'takeout') {
      this._ProfileService.updateUnitData(id, { takeout: !isActive }).subscribe(res => {
        if (res.status = 200) {
          this.toastr.success('Unit updated successfully!')
          this.getDeliveryHubAndLocationsInCompany()
      
        }
      })
    }
  }


greenPay()
{
  this.router.navigate(['/green-money/42a5e7d5-4b82-4368-a238-3661a78cd7eb'])
}



  getTerritoryIds() {
    this.latt = localStorage.getItem('latitude');
    this.long = localStorage.getItem('longitude');
    let data = {
      latitude: this.latt,
      longitude: this.long
    }
    this._AuthService.territory_id(this.user.country, this.user.state, data).subscribe((res: any) => {
      this.getTerritoryId = res.data.id;
 
      localStorage.setItem("territory_id", this.getTerritoryId)
    })
  }

  getDeliveryHubAndLocationsInCompany() {
    if (this.user.company_id) {
      this._ProfileService.getDeliveryHubandUnits(this.user.territory_id).subscribe(res => {
      
        if (res.status == 200) {
       debugger
          this.deliveryHubUnits = res.data
          let units = []
          units = res.data
          units.map(el => {
            this.unithub.push(...el.data)
          })

         
        } else {
        }
      })
    }
  }
  updateFiltdata(event) 
  {
    const val = event.target.value.toLowerCase();
     console.log(event.target.value,'event')
    // filter our data
    debugger
    const temp = this.locationsList.filter(function(d) {
      return d.unit_name.toLowerCase().indexOf(val) !== -1 || !val;
    });
if(event.target.value == '')
{
  this.getlocationCompanyId()
}
    // update the rows
    this.locationfilter = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  updateFiltmanager(event) 
  {
    const val = event.target.value.toLowerCase();
     console.log(event.target.value,'event')
     console.log(this.managerList,'list')
    // filter our data
    debugger
    const temp = this.managerList.filter(function(d) {
      return d.first_name.toLowerCase().indexOf(val) !== -1 || d.last_name.toLowerCase().indexOf(val) !== -1 || !val;
    });
// if(event.target.value == '')
// {
//   this.getlocationCompanyId()
// }
    // update the rows
    this.managerlistData = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  getDeliveryHubinCompany() {
    if (this.user.company_id) {
      this._ProfileService.getDeliveryHubsInCompany(this.user.company_id).subscribe(res => {
    
        if (res.status == 200) {
          console.log('-------------->>>', res.data)
          this.deliveryHub = res.data
        } else {
        }
      })
    }
  }
  getDeliveryHubCompany() {
    if (this.user.company_id) {
      this._ProfileService.getDeliveryHubsCompany(this.user.company_id).subscribe(res => {

        if (res.status == 200) {
          this.hubDelivery = res.data
        } else {
        }
      })
    }
  }
  getLocationInTerritoy() {
    if (this.territory_id1) {
      this._ProfileService.getLocationsInTerritory_id(this.territory_id1).subscribe(res => {
        this.Hublocations = res.data
      })
    }
  }
  territory_id() {
    this.latt = localStorage.getItem('latitude');
    this.long = localStorage.getItem('longitude');
    let data = {
      latitude: this.latt,
      longitude: this.long
    }
    this._AuthService.territory_id(this.user.country, this.user.state, data).subscribe((res: any) => {
      if (res.status == 200) {
        this.territory_id1 = res.data?.id;
        this.getlocationOnTerritoryId()
        this.getLocationInTerritoy()
      }

      // localStorage.setItem("territory_id",this.territory_id1)
    })
  }
  formInit() {
    // this.onLocationEditForm = new FormGroup({});
  }
  driverformInit() {
    this.driverForm = new FormGroup({
      first_name: new FormControl(null),
      hub_id: new FormControl(null),
      territory_id: new FormControl(null),
      last_name: new FormControl(null),
      password: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
    });
  }

  public AddressChange(address: any) {
    //setting address from API to local variable
    console.log(address);
    this.lat = address.geometry.location.lat()
    this.lng = address.geometry.location.lng()
    let length = address.address_components.length

  }

  managerFormInit() {
    this.managerForm = new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      username: new FormControl(null),
      // password: new FormControl(null),
      // unitId: new FormControl(null),
      territory_id: new FormControl(null)
    });
  }
  onCheckboxChangeFn(event, row) {
    this.router.navigateByUrl('/forms/foodparks/' + row.id)
  }
  placeMarker(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.hubFoodParkForm.value.latitude = this.lat;
    this.hubFoodParkForm.value.longitude = this.lng;
  }

  /** select hub or location */
  selectHubOrLoc(event) {
    if (event.target.value == "Hub") {
      this.huborlocation = false;
      this.managerRole = "FOODPARKMGR";
    } else {
      this.huborlocation = true;
      this.managerRole = "UNITMGR";
    }
  }

  /** end */

  /** get all unit list */
  getAllUnitList() {
    this._ProfileService.getAllUnitListData().subscribe(
      (response: any) => {
       
        this.allUnitList = response.data;
      },
      (error) => {
 
      }
    )
  }
  /** end */

  getAllUnitWithFoodParkId() {
    console.log('this.useris', this.user);

    if (this.user.food_park_id) {
      this._ProfileService.getAllUnitsListWithFoodParkId(this.user.food_park_id).subscribe(
        (response: any) => {
        
          this.UnitList = response.data;
        },
        (error) => {
   
        }
      )
    }
  }
  getTerritory_id() {
    this.latt = localStorage.getItem('latitude');
    this.long = localStorage.getItem('longitude');
    let data = {
      latitude: this.latt,
      longitude: this.long
    }
    this._AuthService.territory_id(this.user.country, this.user.state, data).subscribe((res: any) => {
      this.territory_id1 = res.data?.id;
      console.log("territory_id" + this.territory_id1);
      this.getDriverswithCompanyId()
      this.getDriverswithterriId()
      this.getManagerOnTerritoryid()
      // this.getManagerOnTerritoryid()
    })
  }
  getAllDriversWithFoodParkId() {
    if (this.user.food_park_id) {
      this._ProfileService.getAllDriversListWithFoodParkId(this.user.food_park_id).subscribe(
        (response: any) => {
          console.log('DrvierData per foodparid list', response.data)
          this.driverData = response.data;
        },
        (error) => {
   
        }
      )
    }
  }
  getlocationOnTerritoryId() {
    if (this.territory_id1) {
      this._ProfileService.getLocationswithTerriID(this.territory_id1).subscribe(res => {
        if (res.status == 200) {
         
          this.locations = res.data
        } else {
        }
      })
    }
  }
  getlocationCompanyId() {
    if (this.user.company_id) {

      this._ProfileService.getlocationCompanyId(this.user.company_id).subscribe(res => {
        if (res.status == 200) {
          this.locationsList = res.data
          this.locationfilter = res.data
        } else {
        }
      })
    }
  }
  //   getDriverswithCompanyId() {
  //     if (this.user.company_id) {
  //       // const tempCompany_id = 11275
  //       this._ProfileService.getDriverswithCompanyId(this.user.company_id).subscribe(res => {
  //         if (res.status == 200) {
  //           console.log('getDriverswithCompanyId: ', res.data)
  //           // this.registerCompanyDriver = res.data[0].data
  //           // for(let i =0; i< res.data.length; i++){
  //           // var arrofDriverWithCompanyid = []
  //           // arrofDriverWithCompanyid.push(res.data[i].data)
  //           // console.log("arrofDriverWithCompanyid "+arrofDriverWithCompanyid)
  //           // }
  //           // console.log("arrofDriverWithCompanyid "+arrofDriverWithCompanyid)
  //           // this.registerCompanyDriver = arrofDriverWithCompanyid
  //         } else {
  //         }
  //       })
  //     }
  // }
  getDriverswithCompanyId() {
    if (this.user.company_id) {
      // const tempCompany_id = 11275
      this._ProfileService.getDriverswithCompanyId(this.user.company_id).subscribe(res => {
        if (res.status == 200) {
          console.log('getDriverswithCompanyId: ', res.data)
          this.driverDataByTeritory = res.data
          // this.registerCompanyDriver = res.data[0].data
          // for(let i =0; i< res.data.length; i++){
          // var arrofDriverWithCompanyid = []
          // arrofDriverWithCompanyid.push(res.data[i].data)
          // console.log("arrofDriverWithCompanyid "+arrofDriverWithCompanyid)
          // }
          // console.log("arrofDriverWithCompanyid "+arrofDriverWithCompanyid)
          // this.registerCompanyDriver = arrofDriverWithCompanyid
        } else {
        }
      })
    }
  }
  getDriverswithterriId() {
    if (this.territory_id1) {
      // const territory_id=41;
      this._ProfileService.getDriverswithterriId(this.territory_id1).subscribe(res => {
        if (res.status == 200) {
          this.registerDriver = res.data
        } else {
        }
      })
    }
  }
  addVendor(foodParkId, unitId) {
    const data = {
      unit_id: unitId
    }

    this._ProfileService.addUnitToHub(foodParkId, data).subscribe(res => {
      if (res["status"] == 200) {
        this.toastr.success("Vendor added to hub")
        // this.getlocationOnTerritoryId()
        this.getDeliveryHubAndLocationsInCompany()
        // this.gethubswithterriId()
        // this.getlocationsAndHub()
        this.getLocationInTerritoy()
        this.getDeliveryHubinCompany()
      } else if (res["status"] == 404) {
        this.toastr.success("Vendor is already added in the Hub ")
      } else {
        this.toastr.success("Error Creating Request")
      }
    })
  }
  getTerritoryDrivers() {
    if (this.territory_id1) {
      this._ProfileService.getTerritoryDrivers(this.territory_id1).subscribe(res => {
        if (res.status == 200) {
          this.deliveryHubUnits = res.data
        } else {
        }
      })
    }
  }
  unithub: any[] = [];
  getlocationsAndHub() {
    if (this.user.territory_id) {
      this._ProfileService.getHubwithUnits(this.user.territory_id).subscribe(res => {
        if (res.status == 200) {
          this.deliveryHubUnits = res.data
          let units = []
          units = res.data
          units.map(el => {
            this.unithub.push(el.data)
          })
        } else {
        }
      })
    }
  }
  removeUnit(unitId, foodparkId) {
    const message = `Are you sure you want to do this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "500px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      // this.result = dialogResult;
      if (dialogResult) {
        let unit_data = {
          foodparkId: foodparkId,
          unitId: unitId
        }
        this._ProfileService.deleteUnitsListWithFoodParkId(unit_data).subscribe(
          (response: any) => {
            this.toastr.success("Vendor Removed Successfully")
            this.getDeliveryHubAndLocationsInCompany()
            this.getlocationsAndHub()
            this.getLocationInTerritoy()
            this.getDeliveryHubinCompany()
            this.getlocationCompanyId()
            this.getDeliveryHubCompany()
          },
          (error) => {
     
            this.toastr.error(error)

          }
        )
      }
    });


  }
  deleteLocation(row) {
    const message = `Are you sure you want to do this?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "500px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      // this.result = dialogResult;
      if (dialogResult) {
        if (this.user.food_park_id) {
          let unit_data = {
            foodparkId: this.user.food_park_id,
            unitId: row.unit_id
          }
          console.log(unit_data);

          //return
          this._ProfileService.deleteUnitsListWithFoodParkId(unit_data).subscribe(
            (response: any) => {
              // this.UnitList = response.data;
              this.getAllUnitWithFoodParkId()
              this.toastr.error(response.message)

            },
            (error) => {
       
              this.toastr.error(error)

            }
          )
        }
      } else {
        // this.toastr.error('Please select the hub and manager')

      }
    });
  }

  removeDriver(userId, foodParkId) {

    console.log(foodParkId);

    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "500px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      // this.result = dialogResult;
      if (dialogResult) {
        if (foodParkId && userId) {
          let unit_data = {
            foodparkId: foodParkId,
            userId: userId
          }
          this._ProfileService.deleteDriversWithFoodParkId(unit_data).subscribe(
            (response: any) => {
              // this.UnitList = response.data;
              this.getDriverswithCompanyId();
              this.getAllDriversWithFoodParkId()
            },
            (error) => {
       
            }
          )
        }
      }
    })

  }
  getallfoodparkmgr() {
    this._ProfileService.getallfoodparkmgr().subscribe((res: any) => {
      this.foodparkmgrList = res.data;
    })
  }
  selectHub(event, row, value) {
    this.setManager.push({ manager_id: event.target.value, hub_id: row.food_park_id });
    this.setManagers();
  }
  selectLocation(event, row, value) {
    this.setUnitManager.push({ manager_id: event.target.value, unit_id: row.unit_id });

  }
  setManagersforlocation() {
    if (this.setUnitManager.length > 0) {
      this._ProfileService.assignManager({ list: this.setUnitManager }).subscribe((res: any) => {
        if (res.status == 200) {
          this.toastr.success('Managers assigned successfully');
          this.getlocationCompanyId()
          this.setUnitManager = []
        }
        // 
      },
        error => {
          this.toastr.error(error.error.message)
        })
    } else {
      this.toastr.error('Please select the hub and manager')
    }
  }
  selectdriverHub(event, row, value) {
    this.setdriverManager.push({ driver_id: row.id, hub_id: event.target.value });
  }

  getAllTerritory() {
    // var obj = {
    //   country_id: event.target.value
    // }
    // this._ProfileService.getAllTerritory(obj).subscribe((res: any) => {
    //   console.log(res);
    //   this.territory = res;
    // })
  }

  getTerritory(event) {
    let stateData = event.target.value;
    const strData = stateData.split(",");
    console.log(strData);
    this.stateAndTerritoryObject = {
      id: strData[0],
      name: strData[1]
    }
    const state_id = this.stateAndTerritoryObject.id;
    console.log(state_id)
    this._ProfileService.getTerritory(state_id).subscribe((res: any) => {
      console.log(res,'singleTerritory');

      this.singleTerritory = res;
    })
  }
  
  getTerritoryForEdit(event) {

    let state_id = event.target.value;

    this._ProfileService.getTerritory(state_id).subscribe((res: any) => {
      console.log(res,'singleTerritory1');

      this.singleTerritory = res;
    })
  }

  getLatLong(event) {
    console.log('eventtttt', event.target.value, this.selectedTerritory)
    this.lat = this.selectedTerritory.latitude
    this.lng = this.selectedTerritory.longitude
    this.hubFoodParkForm.value.territory_id = this.selectedTerritory.id
  }

  getState(event) {
    const country_id = event.target.value;
    this._ProfileService.getState(country_id).subscribe((res: any) => {
      console.log(res);
      this.singleState = res;
    })
  }

  getAllState() {
    var obj = {
      stateSearch: ""
    }
    this._ProfileService.getAllState(obj).subscribe((res: any) => {
      this.states = res;
    })
  }
  getAllCountries() {
    this._ProfileService.getAllCountries().subscribe((res: any) => {
      this.countries = res;
    })
  }
  getAllStates() {
    if (this.user.country_id) {
      this._ProfileService.getState(this.user.country_id).subscribe((res: any) => {
        this.states2 = res.data;
        const d = this.states2.find(val => {
          // console.log(' val.name', val.id)
          return val.id == this.user.state_id
        })
        this._ProfileService.getTerritory(d.id).subscribe((res: any) => {
          console.log(res,'singleterirtiyt3');

          this.singleTerritory = res;
          this.selectedTerritory = res.territory[0]?.id
        })
      })
    } else {
      this._ProfileService.getState(this.user.country_id).subscribe((res: any) => {
        this.states2 = res.data;
      })
    }

  }
  getAllFoodPark() {
    this.selectArry = []
    // forkJoin([
    //   this._ProfileService.getAllFoodPark(),
    //   this._ProfileService.getAllUnitListData()
    // ]).subscribe(
    //   ([allFoodParkResponse, allUnitListResponse]) => {
    //     // const tempArray = [allFoodParkResponse.data, ...allUnitListResponse.data]
    //     allFoodParkResponse.filter((value)=>{
    //       this.selectArry.push({name:value.name})
    //     })
    //     allUnitListResponse.data.filter((value)=>{
    //       this.selectArry.push({name:value.name})
    //     })
    //     console.log(' this.selectArry', this.selectArry) 
    //   })
    forkJoin([
      this._ProfileService.getDeliveryHubsInCompany(this.user.company_id),
      this._ProfileService.getLocationListInCompany(this.user.company_id)
    ]).subscribe(
      ([hubResponse, locationResponse]) => {
        // const tempArray = [allFoodParkResponse.data, ...allUnitListResponse.data]
        hubResponse.data.filter((value) => {
          this.tempHubResponse.push(value)
          this.selectArry.push({ name: value.name, id: value.food_park_id, type: 'hub' })
        })
        locationResponse.data.filter((value) => {
          this.tempLocationResponse.push(value)
          this.selectArry.push({ name: value.unit_name, id: value.unit_id, type: 'loc' })
        })
      })
  }


  ngAfterViewInit(): void {
  
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    fromEvent(this.search.nativeElement, 'keydown')
      .pipe(
        debounceTime(550),
        map(x => x['target']['value'])
      )
      .subscribe(value => {
        
        this.updateFilter(value);
      });
  }


  updateFilter(val: any) {
  console.log(val,'value')
    const value = val.toString().toLowerCase().trim();
    // get the amount of columns in the table
    const count = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.temp[0]);
    // assign filtered matches to the active datatable
    this.rows = this.temp.filter(item => {
      // iterate through each row's column data
      for (let i = 0; i < count; i++) {
        // check for a match
        if (
          (item[keys[i]] &&
            item[keys[i]]
              .toString()
              .toLowerCase()
              .indexOf(value) !== -1) ||
          !value
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }




  foodParkSFormSaveData(data) {
    console.log("Ash" + data);
  }
  getAllDrivers(foodParkId) {
    this._ProfileService.getAllDrivers(foodParkId).subscribe((res: any) => {
      this.drivers = res.data;
      // this.rows = this.drivers;
      this.drivertemp = [...this.drivers];
    })
  }
  setManagers() {
    if (this.setManager.length > 0) {
      this._ProfileService.setManagers({ list: this.setManager }).subscribe((res: any) => {
        if (res.status == 200) {
          this.toastr.success('Managers assign successfully');
          this.getDeliveryHubinCompany()
          this.setManager = []
        }
        // 
      },
        error => {
          this.toastr.error(error.error.message)
        })
    } else {
      this.toastr.error('Please select the hub and manager')
    }
  }
  changeselectHub(event) {
    this.selectedHub = parseInt(event.target.value);
    this.getAllDrivers(event.target.value);
  }
  setDriverManagers() {
    if (this.setdriverManager.length > 0) {
      this._ProfileService.setDriverManagers({ list: this.setdriverManager }).subscribe((res: any) => {
        this.toastr.success('Driver assign successfully');
        // 
      },
        error => {
          this.toastr.error(error.error.message)
        })
    } else {
      this.toastr.error('Please select the hub and driver')
    }
  }
  onSubmitLocationForm() {
    debugger
    this.locationFoodParkForm.value.territory_id = this.locationFoodParkForm.value.territory_id ? this.locationFoodParkForm.value.territory_id : this.territory_id1;
    // this.locationFoodParkForm.value.country_id=this.l_country_id
    // this.locationFoodParkForm.value.state_id= this.locationFoodParkForm.value.state_id?this.locationFoodParkForm.value.state_id:this.l_state_id

    this.locationFoodParkForm.value.number = 1
    this._ProfileService.addUnit(this.locationFoodParkForm.value, this.user.company_id).subscribe((res: any) => {
      if (res.status == 200) {
        this.toastr.success('Unit Created successfully');
        // this.locations2 = res.data
        document.getElementById("closeModal").click();
        // this.getAllFoodPark();
        this.getlocationCompanyId()
        this.getlocationOnTerritoryId()

        this.getAllFoodPark()

      }

    },
      error => {
        this.toastr.error(error.error.message);
      })
  }

  onSubmit() {
    this.hubFoodParkForm.value.company_id = this.user.company_id;
    this.hubFoodParkForm.value.type = 'EVENT'
    this.hubFoodParkForm.value.state = this.hubFoodParkForm.value.territory_id.state ? this.hubFoodParkForm.value.territory_id.state : this.user.state
    this.hubFoodParkForm.value.territory_id = this.hubFoodParkForm.value.territory_id.id ? this.hubFoodParkForm.value.territory_id.id : this.territory_id1

    this._ProfileService.addFoodPark(this.hubFoodParkForm.value).subscribe((res: any) => {
      // console.log('ressssssssssssssssss',res)
      if (res.status == 200) {
        this.toastr.success('Hub Created successfully');
        document.getElementById("closeModal").click();
        // this.getAllFoodPark();  

        this.hubFoodParkForm.reset()
        this.getDeliveryHubAndLocationsInCompany()
        this.getLocationInTerritoy()
        this.getDeliveryHubinCompany()
        this.getAllFoodPark()
        //vaishnavi
      } else {
        this.toastr.success('Something Went Wrong');

      }

    },
      error => {
        this.toastr.error(error.error.message)
      })
  }

  onDriverSubmit() {
    this.driverForm.value.role = 'DRIVER';
    this._ProfileService.addDriver(this.driverForm.value).subscribe((res: any) => {
      if (res.status == 200) {
        this.toastr.success('Driver Added Successfully');
        document.getElementById("closeModal").click();
        this.getAllFoodPark();
      } else {
        this.toastr.error(res.message)
      }
    },
      error => {
        this.toastr.error(error.error.message)
      })
  }


  addFoodParkDriver(driverId, foodParkId) {
    console.log(driverId);
    this._ProfileService.addfoodParkDriver(foodParkId, { user_id: driverId }).subscribe((res: any) => {
      if (res.status == 200) {
        this.toastr.success('Driver Created successfully');

        this.getDriverswithCompanyId();
      } else {
        this.toastr.error(res.message)
      }
    },
      error => {
        this.toastr.error(error.error.message)
      })
  }

  /** manager tab*/
  territoryName: any;
  getSingleTerritory() {
    if (this.user.territory_id) {
      this._ProfileService.getSingleTerritory(this.user.territory_id).subscribe(
        (territoryResponse) => {
          this.territoryName = territoryResponse.territory;
        },
        (error) => {
   
        }
      )
    }

  }
  foodmarkmgr = []
  unitmgr = []
  getManagerOnTerritoryid() {
    if (this.territory_id1) {
      // const territory_id=41;
      this._ProfileService.getManagerOnTerritoryid(this.territory_id1).subscribe((res: any) => {
        if (res.status == 200) {
          this.showManager = res.data;
          if (this.showManager.role == 'FOODPARKMGR') {
            // this.arr.push(this.showManager)
            // console.log("heyss",this.arr)
          }
          this.showManager.filter((el, i) => {
          
            if (el.role == 'FOODPARKMGR') {

              this.foodmarkmgr.push(el)
      
            }
          })
          this.showManager.filter((el, i) => {
            if (el.role == 'UNITMGR') {
              this.unitmgr.push(el)
            }
          })
          // this.arr = this.foodmarkmgr
        } else {
          this.toastr.error(res.message)
        }
      },
        error => {
          //this.toastr.error(error.error.message)
        })
    }
  }
  getAllManger() {
    let data = {
      "managerId": this.user.manager_id,
      "user_id": this.user.id
    }
    this._ProfileService.getAllManager(data).subscribe((res: any) => {
      if (res.status == 200) {
        this.allManager = res.data;
        this.managertemp = [...this.allManager];
      } else {
        this.toastr.error(res.message)
      }
    },
      error => {
        //this.toastr.error(error.error.message)
      })
  }
  editDeliveryHub() {
  }
  formatLabel1(value: number) {
    // if (value <= 15) {
    //   return (value*4.25);
    // }
    return '$' + value * 4.25;
  }
  formatLabel2(value: number) {
    return '$' + value * 7.00;
  }
  formatLabel3(value: number) {
    return '$' + value * 1.00;
  }
  onManagerSubmit(value) {
    console.log(value,'value')
    if (this.locationOrHubObject.type == 'loc')
    this.managerForm.value.unitId = this.locationOrHubObject.id
    else
    this.managerForm.value.food_park_id = this.locationOrHubObject.id
    // this.managerForm.value.type = this.locationOrHubObject.type;
    this.managerForm.value.territory_id = this.territory_id1
    this.managerForm.value.company_id = this.user.company_id
    if(value == 1)
    {
      this._ProfileService.addManagers(this.managerForm.value).subscribe((res: any) => {
        if (res.status == 200) {
          this.toastr.success('Manager created and Email sent successfully');
          // this.toastr.success('Email sent successfully');
          this.huborlocation = false;
          this.getUnitManager()
          document.getElementById("closeModal").click();
          this.getAllManger();
          this.getFoodParkManager();
          this.getManagerOnTerritoryid()
          // this.getFoodParkManager()
          // this.getUnitManager()
          // window.location.reload()
        } else {
          this.toastr.error(res.message)
        }
      },
        error => {
          this.toastr.error(error.error.message)
        })
  
    }
    else
    {
      this.managerForm.value.unitId = this.locationOrHubObject.id
      this._ProfileService.editManagers(this.managerForm.value,
        this.user_id).subscribe((res:any)=>
      {
        if (res.status == 200) {
          this.toastr.success('Manager Edited successfully');
          // this.toastr.success('Email sent successfully');
          this.huborlocation = false;
          document.getElementById("closeModal").click();
           this.getAllManger();
           this.getUnitManager();
           this.getFoodParkManager();
          // this.getManagerOnTerritoryid()
          // this.getFoodParkManager()
          // this.getUnitManager()
          // window.location.reload()
        } else {
          this.toastr.error(res.message)
        }
      },
        error => {
          this.toastr.error(error.error.message)
      
      })
    }
  
    this.managerForm.reset();
  }
  selectLocationOrHub(event) {

    let data = event.target.value;
    const strData = data.split(",");
    console.log(strData);
    this.locationOrHubObject = {
      name: strData[0],
      id: strData[1],
      type: strData[2]
    }
  }
  deleteManager($event, row) {
    console.log(row);
    let data;
    if (row?.unitid) {
      console.log('if');
      data = {
        "user_id": row.user_id,
        "unit_id": row.unitid
      }
    } else {
      console.log('else');
      data = {
        "user_id": row.user_id,
        "food_park_id": row.foodparkid
      }
    }
    this._ProfileService.deleteManager(data).subscribe(
      (response) => {
        if (response.status == 200) {
          this.toastr.success('Manager deleted successfull');
       
          this.getAllManger();
          this.getFoodParkManager();
          this.getUnitManager();
        }
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    )
  }
  /** end */
  open1(content1) {
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDriver(content2) {
    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openManager(content3,isEdit,editable) {
    console.log(editable,'edittable')
    this.user_id = editable.user_id
    if(isEdit)
    {
      this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }else
    {
      this.managerForm.controls['first_name'].setValue(editable.first_name);
      this.managerForm.controls['last_name'].setValue(editable.last_name);
      this.managerForm.controls['username'].setValue(editable.username);
      this.managerForm.controls['territory_id'].setValue(editable.territory_id);
      this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
   
  }

  openLocations(content4) {
    this.modalService.open(content4, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  customer_order_window: any
  delivery_radius: any
  standard_delivery: any
  long_delivery: any
  openEditLocations(content4, row) {
    this.selectedLocationRecord = row;
    this.customer_order_window = !!row.customer_order_window ? row.customer_order_window : 20;
    this.delivery_radius = !!row.delivery_radius ? row.delivery_radius : 15;
    this.long_delivery = !!row.long_delivery_charge ? row.long_delivery_charge : 7;
    this.standard_delivery = !!row.standard_delivery_charge ? row.standard_delivery_charge : 3;

    this.modalService.open(content4, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  

  openEditDeilveryHub(content4, row) {

    this.selectedHubRecord = row;

    this.minDaysValue = !!row.delivery_time_window ? parseInt(row.delivery_time_window).toFixed(2) : 15;
    this.standard_delivery_charge = !!row.standard_delivery_charge ? parseInt(row.standard_delivery_charge).toFixed(2) : 4.5;
    this.standard_trip_fee_for_driver = !!row.standard_trip_fee_for_driver ? parseInt(row.standard_trip_fee_for_driver).toFixed(2) : 3.25;
    this.long_delivery_charge = !!row.long_delivery_charge ? parseInt(row.long_delivery_charge).toFixed(2) : 7
    this.long_trip_fee = !!row.long_trip_fee ? parseInt(row.long_trip_fee).toFixed(2) : 4.5;

    this.modalService.open(content4, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }
  onSelectRed(item) {
    
  }
  updateDriverFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const drivertemp = this.drivertemp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.drivers = drivertemp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    console.log("this table", this.table)
  }
  cancelModal() {
    // this.modalService.close(false)
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  viewManager(event, row, type) {
    this.router.navigateByUrl('/forms/manager/' + row.id + "/" + type);
  }

  sendEmail(event, data, row) {
    // this.router.navigateByUrl('/forms/manager/'+row.id+"/"+type);
    this.selectedManagerRecord = row;

    this.modalService.open(data, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  onDeliveryHubSubmit() {
    this.foodParkForm.value.delivery_time_window = this.minDaysValue
    this.foodParkForm.value.standard_delivery_charge = this.standard_delivery_charge
    this.foodParkForm.value.standard_trip_fee_for_driver = this.standard_trip_fee_for_driver
    this.foodParkForm.value.long_delivery_charge = this.long_delivery_charge
    this.foodParkForm.value.long_trip_fee = this.long_trip_fee

    this.foodParkForm.value.state = this.state_id1;
    this.foodParkForm.value.territory_id = this.territory_id1;
    this.foodParkForm.value.type = 'EVENT';

    this._ProfileService.getEditHub(this.selectedHubRecord.food_park_id, this.foodParkForm.value).subscribe(res => {
      // this.modalService.dismissAll()
      if (res.status == 200) {
        console.log('Edit ', res.data)
        // this.deliveryHubUnits = res.data
        this.getDeliveryHubAndLocationsInCompany()
        this.getlocationCompanyId()
        this.getDeliveryHubinCompany()
        this.toastr.success(res.message)
        this.modalService.dismissAll()
      } else {
        this.toastr.error(res.error)
        this.modalService.dismissAll()
      }
    })
  }

  /**
   *   customer_order_window: new FormControl(event),
    // delivery_radius: new FormControl(event)
    delivery_radius: new FormControl(event),
    territory_id:new FormControl()
   */
  onLocationEditSubmit() {
    console.log(' this.selectedLocationRecord.unit_id', this.selectedLocationRecord.unit_id)
    this.onLocationEditForm.value.customer_order_window = this.customer_order_window
    this.onLocationEditForm.value.delivery_radius = this.delivery_radius
    this.onLocationEditForm.value.standard_delivery_charge = this.standard_delivery
    this.onLocationEditForm.value.long_delivery_charge = this.long_delivery
    console.log('this.onLocationEditForm.value', this.onLocationEditForm.value)


    this._ProfileService.getEditUnits(this.user.company_id, this.selectedLocationRecord.unit_id, this.onLocationEditForm.value).subscribe(res => {
      // this.modalService.dismissAll()
      if (res) {
        console.log('Edit ', res)
        // this.deliveryHubUnits = res.data
        this.toastr.success("Location Edited Successfully")
        this.modalService.dismissAll()
        this.getlocationCompanyId()
      } else {
        this.toastr.error(res.error)
        this.modalService.dismissAll()
      }
    })
  }
  onManagerEmailSubmit() {
    this._ProfileService.onManagerEmailSubmit(this.emailManageForm.value).subscribe(res => {
      if (res.status == 200) {
        console.log('Edit ', res.data)
        this.deliveryHubUnits = res.data
        this.toastr.success(res.message)
        this.modalService.dismissAll()
        this.getFoodParkManager()
      } else {

        this.toastr.error(res.error)
      }
    })
  }
}
