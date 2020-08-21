import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  private territoryURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/territories';  
  private addUnitURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';  
  private foodparkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks'; 
  private addFoodParkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks';  
  private foodparkmgrURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/foodparkmgr';  
  private setManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfoodparkmgrtohub';  
  private setDriverManagersURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfooddrivertohub';  
  private addDriverURL = config.getEnvironmentVariable('endPoint') + 'auth/register'; 
  private companyURL = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/companies'; 
  private dailyPayout = config.getEnvironmentVariable('endPoint') + 'api/v1/mol/getVendorDriverWagesForOrders';

  constructor(private http: HttpClient) { }

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
  getallfoodparkmgr(): Observable<any> {
    return this.http.get(this.foodparkmgrURL);
  }
  getAllTerritory(): Observable<any> {
    return this.http.get(this.territoryURL);
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
  
  addFoodPark(data): Observable<any> {
    return this.http.post(this.addFoodParkURL,data);
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
