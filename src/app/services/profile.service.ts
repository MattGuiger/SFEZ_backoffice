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
  private addUnitURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';  
  private foodparkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks';
  private addFoodParkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks';
  private addTeleURL = config.getEnvironmentVariable('endPoint') + 'api/v1/bot/telegram-group'; 
  private Category = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/category';  

  private foodparkmgrURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/foodparkmgr';  
  private setManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfoodparkmgrtohub';  
  private setDriverManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfooddrivertohub';  
  private addDriverURL = config.getEnvironmentVariable('endPoint') + 'auth/register'; 
  private companyURL = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/companies'; 
  private dailyPayout = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/getVendorDriverWagesForOrders';
  private getManagerURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/getfoodparkmgrs';
  //private greenMoneyURL = config.getEnvironmentVariable('endPoint') + 'api/v1/payment/green-money-generate-widget/';
  private getUnitListURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/list-units';
  private addManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/create-manager';
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
  private unitLocationsHub = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/unit_locations/';

  
  private countriesURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/countries';
  private statesURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/territories/stateSearch';
  private authAccessURL = 'https://api.moltin.com/oauth/access_token';
  private fileUploadURL = 'https://api.moltin.com/v2/files';
  


  constructor(private http: HttpClient) { }

  // greenMoneyPayment(data):Observable<any> {
  //   return this.http.get(this.greenMoneyURL+data);
  // }
  getSingleTerritory(id):Observable<any>{
    return this.http.get(this.singleTerritoryUrl+id);
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

getHubwithTerriID(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/hubs/"+id);
}

getLocationswithTerriID(id):Observable<any>{
  return this.http.get(this.foodparkURL+"/units/"+id);
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

  setDriverToOrder(id,driverId,orderId): Observable<any> {
    return this.http.put(this.foodparkURL+"/"+id+"/orders/"+orderId,{driver_id:driverId});
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
  setManagers(data): Observable<any> {
    return this.http.post(this.setManagersURL,data);
  }
  setDriverManagers(data): Observable<any> {
    return this.http.post(this.setDriverManagersURL,data);
  }

  getAllManager(data):Observable<any>{
    return this.http.post(this.getManagerURL, data);
  }

  getCompanyprofile(id): Observable<any> {
    return this.http.get(this.getProfileURL+id);
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
  getCategory(companyId) : Observable<any> {
    return this.http.get(this.productListUrl+companyId+'/getactivecategoriesnames');
  }
  getProductById(id,categoryId,companyId) : Observable<any> {
    return this.http.get(this.productListUrl+companyId+'/categories/'+categoryId+"/menuitems/"+id);
  }
  getCompanyById(id) : Observable<any> {
    return this.http.get(this.companyURL+"/"+id);
  }
}
