import { Injectable, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { CommonFunctionsService } from './services/index';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { config } from './app.config';
import { ErrorMessageService } from './services/error-message.service';
import { Globals } from './globals';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private count = 0;
  deviceInfo;
  constructor(private router: Router, private globals: Globals,
    private commonFunctions: CommonFunctionsService,
    private errorService: ErrorMessageService,
    private tostr: ToastrService,
    ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.globals.apiCounter++;
    let routerArray = this.router.url.split('/');
    console.log(this.router.url,'router URL')
    // req = req.clone({ headers: req.headers.set('Browser', this.deviceInfo.browser) });

    // if (this.router.url != '/dashboard') {
    //   if (this.globals.apiCounter == 1) {
    //     document.getElementById('siteLoader').classList.add('is-active');
    //     document.getElementById('app-wrapper').style.pointerEvents = 'none';
    //   }
    // } else {
    //   if (req.url.includes('AddOrder')) {
    //     document.getElementById('siteLoader').classList.add('is-active');
    //     document.getElementById('app-wrapper').style.pointerEvents = 'none';
    //   }
    //   if (req.url.includes('cancelOrder')) {
    //     document.getElementById('siteLoader').classList.add('is-active');
    //     document.getElementById('app-wrapper').style.pointerEvents = 'none';
    //   }
    // }
    // if (routerArray[1] == 'exchange' || routerArray[1] == ' ') {
    //   document.getElementById('siteLoader').classList.remove('is-active');
    //   document.getElementById('app-wrapper').style.pointerEvents = 'auto';

    // }
    let token = '';
    const value: string = localStorage.getItem('user');
    const currentUser = JSON.parse(value);
    
console.log('req.origin')
    const endPoint = config.getEnvironmentVariable('endPoint');
    if (currentUser && currentUser.token) {
      token = currentUser.token;
      req = req.clone({ headers: req.headers.set('Authorization', token) });
    }
    if (!req.headers.has('Content-Type')) {
      // req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    const handleRequest: Observable<HttpEvent<any>> = next.handle(req);

    return handleRequest.catch((err: any) => {
      this.globals.apiCounter--;

      if (err.status == 401) {

        // this.router.navigate(['/login']);
        // localStorage.removeItem('user');
        // this.commonFunctions.logout();
        // localStorage.removeItem('synchrobitAdmin');
        // this.tostr.error('Your session has expired. Please Sign In again.');
      } else if (err.status == 500) {
        this.errorService.addErrors([{ 'error': 'Some server error has occured. Please try again later.', 'status': '500' }]);
      }

      // document.getElementById("spinner").style.display = "none";
      // document.getElementById('siteLoader').classList.remove('is-active');
      // document.getElementById('app-wrapper').style.pointerEvents = 'auto';

      return Observable.throw(err);
    }).do(event => {
      if (event instanceof HttpResponse) {
        this.globals.apiCounter--;
        if (this.globals.apiCounter == 0) {
          document.getElementById('siteLoader').classList.remove('is-active');
          document.getElementById('app-wrapper').style.pointerEvents = 'auto';
        }
      }
    });
  }
}
