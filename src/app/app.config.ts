import { Headers } from '@angular/http';
import { Production } from '../environments/deployment';

export class config {

  public static getEnvironmentVariable(value) {
    let serverip = 'https://api.instamarkt.co/';    // let serverip = 'http://161.35.1.231:1337/';
  //  let serverip = 'http://localhost:1337/';
    if (Production) {
      serverip = 'https://api.instamarkt.co/';
      
      // serverip = 'http://161.35.1.231:1337/';
      // serverip = 'http://localhost:1337/';
    }
    return serverip;
  }

  //http://127.0.0.1:44663/browser/

  public static getDomainName() {
    let domainName = 'https://www.dev.instamarkt.io/';
    if (Production) {
      domainName = 'https://www.instamarkt.io/';
    }
    return domainName;
  }



  public static getHeader() {
    const value = localStorage.getItem('user');
    const authHeader = new Headers({ 'Content-Type': 'application/json' });
    if (value && value != 'undefined' && value != 'null') {
      const currentUser = JSON.parse(value);

      if (currentUser && currentUser.access_token) {
        let jwt = currentUser.access_token;
        authHeader.append('Authorization', 'Bearer ' + jwt);
      }
    }
    return authHeader;
  }


  public static getFileHeader() {
    const jwt = localStorage.getItem('synchrobit_exchange_admin_token');
    const authHeader = new Headers();
    if (jwt) {
      authHeader.append('Authorization', 'Bearer ' + jwt);
    }
    return authHeader;
  }
}
