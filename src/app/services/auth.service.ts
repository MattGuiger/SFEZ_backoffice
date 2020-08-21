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

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }

  vendorRegistration(data): Observable<any> {
    data['role']="OWNER";
    return this.http.post(this.registrationURL, data);
  }

  getcountryList(): Observable<any> {
    return this.http.get(this.countryURL);
  }
  
  
}
