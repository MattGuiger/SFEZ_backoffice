import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = config.getEnvironmentVariable('endPoint') + 'auth/login';
  private registrationURL = config.getEnvironmentVariable('endPoint') + 'auth/register';
  private countryURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/countries';
  private territoryURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/territories/filter-territory';
  private vndrNameURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }

  vendorRegistration(data): Observable<any> {
    data['role']="OWNER";
    return this.http.post(this.registrationURL, data);
  }
  territory_id(count,state,data): Observable<any> {
    return this.http.post(this.territoryURL+'/'+count+"/state/"+state,data);
  }
  getcountryList(): Observable<any> {
    return this.http.get(this.countryURL);
  }
  getVendrName(data): Observable<any> {
    return this.http.get(this.vndrNameURL+data);
  }
  getIP(): Observable<any>{
   return this.http.get("http://api.ipify.org/?format=json")
  }
  
}
