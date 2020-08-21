import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { HttpInterceptor } from "../HttpIntercepter";
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { config } from '../app.config';
import { Observable } from 'rxjs';

@Injectable()

export class CommonFunctionsService {
  // Google API Geocode

  fullNameRegex: any = new RegExp(/^[a-zA-Z]+(\s+[a-zA-Z]+)*$/);
  fNameRegex: any = new RegExp(/^[a-zA-Z]+$/);
  lNameRegex: any = new RegExp(/^[a-zA-Z]+$/);
  uNameRegex: any = new RegExp(/^[a-z0-9]+$/);
  conatctName: any = new RegExp(/^[a-zA-Z]*$/);
  
  contactRegex: any = new RegExp(/^\d+$/);

  emailRegex: any = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|("."))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  emailRegexNew: any = new RegExp(/^[a-z][a-zA-Z0-9.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/)
  passwordRegex: any = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.|\<>?/:"'{}[_\-+=~`\]])[A-Za-z\d$@$!%*#?&.|\<>?/:"'{}[_\-+=~`\]]{8,20}$/);
  numericRegex: any = new RegExp(/(0|[1-9][0-9]*)$/);
  // amountRegex:  any = new RegExp(/[0-9]+(\.[0-9][0-9]?)?$/);
  amountRegex: any = new RegExp(/^[0-9]*(?:\.[0-9]*)?$/);
  ansRegex: any = new RegExp(/^(?=.*[\w\d]).+/);
  g2faRegex: any = new RegExp(/^([0-9]{6})+$/);
  passportRegex: any = new RegExp(/^[A-Za-z0-9]{6,20}$/);
  exact8Digits: any = new RegExp(/^[a-zA-Z0-9]{8,}$/);
  languagelist: any = []

  noSpace: any = new RegExp(/^\S.*$/);
  // Google API Geocode
  // private googleAPIUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
  private originGoogleAPi = "https://geolocation-db.com/json/";
  // private googleAPIEndUrl = "&result_type=locality|country&key=AIzaSyAbxUHuncrj7MmHSRiFGL2kcusnYJaekJA";

  private langListUrl = config.getEnvironmentVariable('endPoint') + 'api/Announcement/GetActiveLanguageList';
  
  private getTerritoryURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/territories';
  private getCountryURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/countries';
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http,
    private router: Router) {
      
  
  }
  // Google API Geolocation
  googleAPI(latLong) {

    return Observable.create(observer => {
      fetch(this.originGoogleAPi, {
        "method": 'GET'
      }).then(response => {
        return response.json();
      }).then(data => {
        observer.next(data);
      }).catch(err => observer.error(err));
    });
    // return Observable.create(observer => {
    //   fetch(this.googleAPIUrl + latLong + this.googleAPIEndUrl, {
    //     "method": 'GET'
    //   }).then(response => {
    //     return response.json();
    //   }).then(data => {
    //     observer.next(data);
    //   }).catch(err => observer.error(err));
    // });

  }


  getIpAddress() {
    return this.http.get('https://freegeoip.net/json/?callback', '').map((response: Response) => response.json());
    // return this.http.get('http://ip-api.com/json').map((response: Response) => response.json());
  } 

  getTypeList(){
    return [
      {id:'TRUCK',name:'TRUCK'}
    ];
  }

  numberFormatt(num,digit){
      return parseFloat(num).toFixed(2);
  }
  checkUser() {
    if (localStorage.getItem('user')) {
      var data = localStorage.getItem('user');
      var jsonData = JSON.parse(data);
      return jsonData;
    }
  }
  checkLoginUser() {
    if (localStorage.getItem('user')) {
      return true;
    }
    else {
      return false;
    }
  }

  getActiveLanguageList() {
    return this.http.get(this.langListUrl, { headers: this.headers }).map((response: Response) => response.json());
  }

  getCountries() {
    return this.http.get(this.getCountryURL);
  }
  getTerritory(){
    return this.http.get(this.getTerritoryURL);
  }

  logout() {
    localStorage.removeItem('synchrobitUser');
    localStorage.removeItem('myOrderList');
    localStorage.removeItem('myTxList');
    localStorage.removeItem('myWalletList');
    localStorage.removeItem('fromCoinBalance');
    localStorage.removeItem('toCoinBalance');
    localStorage.removeItem('fromWalletExist');
    localStorage.removeItem('toWalletExist');
    localStorage.removeItem('txFee');
  }
}
