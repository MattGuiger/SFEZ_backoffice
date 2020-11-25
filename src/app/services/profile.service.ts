import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { config } from '../app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private getProfileURL = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';
  private uploadGoogleSheetUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/uploadgooglesheetuploadmenuitems';
  private productListUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';
  private singleProductUrl = config.getEnvironmentVariable('endPoint') + '/api/v1/mol/companies/';
  private getProfileUserURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/users/';
  private updateUsergooglesheetUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/updatecompanies/';
  private companyProfileURl = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';  
  private updatecompanyProfileURl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/updateCompanyDetails/';  
  
  private companyFeaturedProfileURl = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';  
  private unitURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';   
  private editHubURL = config.getEnvironmentVariable('endPoint') + '/api/v1/rel/food_parks/editdeliveryhub/';  
  private addUnitURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';  
  private foodparkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks';
  private addFoodParkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks';
  private addTeleURL = config.getEnvironmentVariable('endPoint') + 'api/v1/bot/telegram-group'; 
  private Category = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/category';  

  private foodparkmgrURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/foodparkmgr';  
  private setManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfoodparkmgrtohub';  
  private setDriverManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfooddrivertohub';  
  private addDriverURL = config.getEnvironmentVariable('endPoint') + 'auth/register'; 
  private userInfo = config.getEnvironmentVariable('endPoint') + 'auth/userinfoafterlogin'; 

  private addDriverFoodParkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/foodparks/'; 
  private companyURL = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/companies'; 
  private companyURL1 = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/companies';

  private dailyPayout = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/getVendorDriverWagesForOrders';
  private dailyPayoutURL = config.getEnvironmentVariable('endPoint') + '/api/v1/rel/payout/dailypayoutsfororders';
  private getManagerURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/getfoodparkmgrs';
  private getManagerOnTerritoryURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/managers';
  //private greenMoneyURL = config.getEnvironmentVariable('endPoint') + 'api/v1/payment/green-money-generate-widget/';
  private getUnitListURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/list-units';
  private addManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/create-manager';
  private assignManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/assign-manager';

  private deleteManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/delete-manager';
  private updateProfileUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/users/update-profile/';
  private foodParkUnitsUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/get-units-by-foodpark/';
  private particularUnitUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/ord/list-unit-order/';
  private unitsDriverUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/get-drivers-for-units';
  private particularDriverWagesUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/ord/get-driver-wage/';
  private createWagesUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/ord/create-wage/';
  private voidOrderUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/ord/delete-order/';
  private singleTerritoryUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/territories/';
  private territoryURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/territories';
  private googldriveUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/google/';
   private googlsheetUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/google/googlesheetdetail';
  private unitLocationsHub = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/unit_locations/';
  private territoryDriverURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/driversinterritory';
  private companyDriverURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/drivers_company';
  private deliveryhub_units = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/deliveryhub_units/';

  private foodParkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel';
  private emailManagerURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/send-email-manager';
  private countriesURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/countries';
  private statesURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/territories/stateSearch';
  private authAccessURL = 'https://api.moltin.com/oauth/access_token';
  private fileUploadURL = 'https://api.moltin.com/v2/files';
  private singleStateUrl = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/states/';
  


  constructor(private http: HttpClient) { }

  // greenMoneyPayment(data):Observable<any> {
  //   return this.http.get(this.greenMoneyURL+data);
  // }
  getSingleTerritory(id):Observable<any>{
    return this.http.get(this.singleTerritoryUrl+id);
  }

  getUserInfoAfterLogin():Observable<any>{
    return this.http.get(this.userInfo);
  }
  // getAuthToken(data):Observable<any>{
  //   return this.http.post(this.authAccessURL, data);
  // }
  // fileUpload(data, authObject):Observable<any>{
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //     'Authorization': `Bearer ${authObject.auth_token}`
  //   })
  //   return this.http.post(this.fileUploadURL, { headers: headers });
  // }
  voidOrder(id):Observable<any>{
    return this.http.get(this.voidOrderUrl+id);
  }
getHubwithUnits(id):Observable<any>{
  return this.http.get(this.unitLocationsHub+id);   
}
getDeliveryHubsInCompany(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/delivery_hubs/"+id);//onlu hubs
}
getDeliveryHubsCompany(id):Observable<any>{
  return this.http.get(this.foodparkURL+id+"/units");//onlu hubs
}
getLocationListInCompany(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/listlocation/"+id); //location with company id
}
getDeliveryHubandUnits(id):Observable<any>{
  return this.http.get(this.deliveryhub_units+id); //deliveryhubs and location
}
getLocationsInTerritory_id(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/listlocationinterritory/"+id); //list locations in territoyid
}
getDriverswithterriId(id):Observable<any>{
  return this.http.get(this.territoryDriverURL+"/"+id);
}
getTerritoryDrivers(id):Observable<any>{
  return this.http.get(this.territoryDriverURL+"/"+id);
}
getDriverswithCompanyId(id):Observable<any>{
  return this.http.get(this.companyDriverURL+"/"+id);
}
getEditUnits(company_id,id,data): Observable<any> {
  return this.http.put(this.unitURL+company_id+"/units/"+id,data);
}
getEditHub(id,data): Observable<any> {
  return this.http.put(this.editHubURL+id,data);
}
onManagerEmailSubmit(data):Observable<any>{
  return this.http.post(this.emailManagerURL, data);
}
getHubwithTerrId(id):Observable<any>{
  return this.http.get(this.foodParkURL+"/listhubs/"+id);
}
getLocationwithTerrId(id):Observable<any>{
  return this.http.get(this.foodParkURL+"/listlocations/"+id);
}
getHubwithTerriID(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/hubs/"+id);
}
getLocationswithTerriID(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/units/"+id);
}
getlocationCompanyId(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/listlocation/"+id);
}
  createDriverWages(id,data):Observable<any>{
    return this.http.post(this.createWagesUrl+id, data);
  }
  getParticularDriverWages(id):Observable<any>{
    return this.http.get(this.particularDriverWagesUrl+id);
  }
  getUnitsDriver(data):Observable<any>{
    return this.http.post(this.unitsDriverUrl, data);
  }
  getParticularUnitData(id):Observable<any>{
    return this.http.get(this.particularUnitUrl+id);
  }
  uploadImageTodrive(companyId,data):Observable<any>{
    //this.companyProfileURl+companyId+"/"+"images"
    return this.http.post(this.googldriveUrl+companyId+"/"+'imageuploadtodrive',data);
  }

  foodParkUnits(id):Observable<any> {
    return this.http.get(this.foodParkUnitsUrl+id);
  }

  updateUserProfile(id,data):Observable<any> {
    return this.http.post(this.updateProfileUrl+id, data);
  }

  deleteManager(data): Observable<any> {
    return this.http.post(this.deleteManagersURL, data);
  }

  addManagers(data): Observable<any> {
    return this.http.post(this.addManagersURL,data);
  }
  assignManager(data): Observable<any> {
    return this.http.put(this.assignManagersURL,data);
  }

  getAllUnitListData():Observable<any> {
    return this.http.get(this.getUnitListURL);
  }

  getCompanyprofileUser(id): Observable<any> {
    return this.http.get(this.getProfileUserURL+id);
  }
  
  updateComapnydetails(companyId,data): Observable<any> {
    return this.http.put(this.updatecompanyProfileURl+companyId,data);
  }

  uploadCompanyProfile(companyId,data): Observable<any> {
    return this.http.post(this.companyProfileURl+companyId+"/"+"images",data);
  }
  uploadFeaturePhoto(companyId,data): Observable<any> {
    return this.http.post(this.companyFeaturedProfileURl+companyId+"/"+"featureddish",data);
  }
  
  getAllUnits(companyId): Observable<any> {
    return this.http.get(this.unitURL+companyId+'/units');
  }
  getAllFoodPark(): Observable<any> {
    return this.http.get(this.foodparkURL);
  }

  getAllUnitsListWithFoodParkId(foodparkId): Observable<any> {
    return this.http.get(this.foodparkURL+'/'+foodparkId+'/units');
  }
 deleteUnitsListWithFoodParkId(data): Observable<any> {
    return this.http.delete(this.foodparkURL+'/'+data.foodparkId+'/units'+'/'+data.unitId);
  }

  getAllDriversListWithFoodParkId(foodparkId): Observable<any> {
    return this.http.get(this.foodparkURL+'/'+foodparkId+'/drivers');
  }
  deleteDriversWithFoodParkId(data): Observable<any> {
    console.log('dataataaa',data);
    
    return this.http.delete(this.foodparkURL+'/'+data.foodparkId+'/drivers'+'/'+data.userId);
  }
  getallfoodparkmgr(): Observable<any> {
    return this.http.get(this.foodparkmgrURL);
  }
  getAllTerritory(): Observable<any> {
    return this.http.get(this.territoryURL);
  }
  getAllCountries(): Observable<any> {
    return this.http.get(this.countriesURL);
  }
  getAllState(data): Observable<any> {
    return this.http.post(this.statesURL, data);
  }
  getState(data): Observable<any> {
    return this.http.get(`${this.singleStateUrl}filter/${data}`);
  }
  getTerritory(data): Observable<any> {
    return this.http.get(`${this.singleTerritoryUrl}filter/${data}`);
  }
  getAllCompany(): Observable<any> {
    return this.http.get(this.companyURL);
  }
  deleteCompany(id): Observable<any> {
    return this.http.delete(this.companyURL+"/"+id);
  }
  deleteTerritory(id): Observable<any> {
    return this.http.delete(this.territoryURL+"/"+id);
  }
  getAllDrivers(foodParkId): Observable<any> {
    return this.http.get(this.foodparkURL+'/'+foodParkId+"/drivers");
  }
  getAllCategories(): Observable<any> {
    return this.http.get(this.Category);
  }
  getunitById(companyId,id): Observable<any> {
    return this.http.get(this.unitURL+'/'+companyId+"/units/"+id);
  }
  getAllUnitOrder(companyId,id): Observable<any> {
    // return this.http.get(this.unitURL+companyId+"/units/"+id+"/active_orders");
    return this.http.get("http://localhost:1337/api/v1/ord/companies/11144/units/25/active_orders");
  }

  getallfoodparkmgrorder(id): Observable<any> {
    // http://localhost:1337/api/v1/rel/food_parks/30111/units/active_orders
    //return this.http.get(this.foodparkURL+"/"+id+"/units/active_orders");
    return this.http.get('https://api.instamarkt.co/api/v1/mol/companies/11154/getunassignedOrders');
  }

  getOrderProductDetails():Observable<any> {
    return this.http.get('https://api.instamarkt.co/api/v1/ord/list-unit-order-items/2164');
  }
addUnitToHub(foodParkId,unitId){
  return this.http.post(this.foodparkURL+"/"+foodParkId+"/"+"units",unitId)
}
  getDailyPayoutList():Observable<any> {
    return this.http.get(this.dailyPayout);
  }
  getDailyPayout(company_id, data): Observable<any> {
    return this.http.post(this.dailyPayoutURL+"/"+ company_id, data);
  }
  setDriverToOrder(id,driverId,orderId): Observable<any> {
    return this.http.put(this.foodparkURL+"/"+id+"/orders/"+orderId,{driver_id:driverId});
  }
  getCompany_unitid(id,updateId): Observable<any> {
    return this.http.put(this.unitURL+id+"/updateunitid",updateId);
  }
  getCompany_foodparkid(id,updateId): Observable<any> {
    return this.http.put(this.unitURL+id+"/updatefoodparkid",updateId);
  }
  addTerritory(data): Observable<any> {
    return this.http.post(this.territoryURL,data);
  }
  addUnit(data,companyId): Observable<any> {
    return this.http.post(this.unitURL+companyId+'/units',data);
  }
  addFoodParkmgr(data): Observable<any> {
    return this.http.post(this.addDriverURL,data);
  }
  vendorRegister(data): Observable<any> {
    return this.http.post(this.addDriverURL,data);
  }
  addFoodPark(data): Observable<any> {
    return this.http.post(this.addFoodParkURL,data);
  }
  addTele(data): Observable<any> {
    return this.http.post(this.addTeleURL,data);
  }
  updateCompanyCredentials(companyId,data): Observable<any> {
    return this.http.put(this.unitURL+companyId,data);
  }
  addDriver(data): Observable<any> {
    return this.http.post(this.addDriverURL,data);
  }
  addfoodParkDriver(foodParkId,data): Observable<any> {
    return this.http.post(this.addDriverFoodParkURL+foodParkId+"/drivers",data);
  }
  setManagers(data): Observable<any> {
    return this.http.post(this.setManagersURL,data);
  }
  setDriverManagers(data): Observable<any> {
    return this.http.post(this.setDriverManagersURL,data);
  }
  getAllManager(data):Observable<any>{
    return this.http.post(this.getManagerURL, data);
  }
  getManagerOnTerritoryid(data):Observable<any>{
    return this.http.get(this.getManagerOnTerritoryURL+"/"+ data);
  }
  getCompanyprofile(id): Observable<any> {
    return this.http.get(this.getProfileURL+id);
  }
 uploadaddons(data,id){
  return this.http.post(this.googldriveUrl+id+'/uploadmenu',data);
 }
 
  updateGoogleSheetDetails(id,data)  : Observable<any> {
    return this.http.put(this.updateUsergooglesheetUrl+id,data);
  }

  uploadGoogleMenuSheet()  : Observable<any> {
    return this.http.post(this.uploadGoogleSheetUrl,'');
  }
  getAllProductList(id) : Observable<any> {
    return this.http.get(this.productListUrl+id+'/menuitems');
  }
  getGoogleAuthenication() : Observable<any> {
    return this.http.get(this.googldriveUrl+'auth');
  }
  createfolderInGoogleDrive(data) : Observable<any> {
    console.log('dataaaa',data)
    return this.http.post(this.googldriveUrl+'createfolder',data);
  }
  getFoldersCreatedInDrive(data) : Observable<any> {
    console.log('dataaaa',data)
    return this.http.post(this.googldriveUrl+'fetchfolderscreated',data);
  }
  getAllGoogleSheetDetails(data) : Observable<any> {
    return this.http.post(this.googlsheetUrl,data);
  }
  getCategory(companyId) : Observable<any> {
    return this.http.get(this.productListUrl+companyId+'/getactivecategoriesnames');
  }
  getProductById(id,categoryId,companyId) : Observable<any> {
    return this.http.get(this.productListUrl+companyId+'/categories/'+categoryId+"/menuitems/"+id);
  }
  getCompanyById(id) : Observable<any> {
    return this.http.get(this.companyURL+"/"+id);
  }

  getCompanyByCompanyId(id) : Observable<any> {
    return this.http.get(this.companyURL1+"/"+id);
  }

 
}
