function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/AuthInterceptor.ts":
  /*!************************************!*\
    !*** ./src/app/AuthInterceptor.ts ***!
    \************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var _services_error_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/error-message.service */
    "./src/app/services/error-message.service.ts");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./globals */
    "./src/app/globals.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router, globals, commonFunctions, errorService, tostr) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
        this.globals = globals;
        this.commonFunctions = commonFunctions;
        this.errorService = errorService;
        this.tostr = tostr;
        this.count = 0;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          // this.globals.apiCounter++;
          var routerArray = this.router.url.split('/');
          console.log(this.router.url, 'router URL'); // req = req.clone({ headers: req.headers.set('Browser', this.deviceInfo.browser) });
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

          var token = '';
          var value = localStorage.getItem('user');
          var currentUser = JSON.parse(value);
          console.log('req.origin');

          var endPoint = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"].getEnvironmentVariable('endPoint');

          if (currentUser && currentUser.token) {
            token = currentUser.token;
            req = req.clone({
              headers: req.headers.set('Authorization', token)
            });
          }

          if (!req.headers.has('Content-Type')) {// req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
          }

          req = req.clone({
            headers: req.headers.set('Accept', 'application/json')
          });
          var handleRequest = next.handle(req);
          return handleRequest["catch"](function (err) {
            _this.globals.apiCounter--;

            if (err.status == 401) {// this.router.navigate(['/login']);
              // localStorage.removeItem('user');
              // this.commonFunctions.logout();
              // localStorage.removeItem('synchrobitAdmin');
              // this.tostr.error('Your session has expired. Please Sign In again.');
            } else if (err.status == 500) {
              _this.errorService.addErrors([{
                'error': 'Some server error has occured. Please try again later.',
                'status': '500'
              }]);
            } // document.getElementById("spinner").style.display = "none";
            // document.getElementById('siteLoader').classList.remove('is-active');
            // document.getElementById('app-wrapper').style.pointerEvents = 'auto';


            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"]["throw"](err);
          })["do"](function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
              _this.globals.apiCounter--;

              if (_this.globals.apiCounter == 0) {
                document.getElementById('siteLoader').classList.remove('is-active');
                document.getElementById('app-wrapper').style.pointerEvents = 'auto';
              }
            }
          });
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_7__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_index__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_message_service__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _globals__WEBPACK_IMPORTED_MODULE_7__["Globals"]
        }, {
          type: _services_index__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]
        }, {
          type: _services_error_message_service__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: Approutes */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Approutes", function () {
      return Approutes;
    });
    /* harmony import */


    var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./layouts/full/full.component */
    "./src/app/layouts/full/full.component.ts");
    /* harmony import */


    var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layouts/blank/blank.component */
    "./src/app/layouts/blank/blank.component.ts");
    /* harmony import */


    var _app_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _greenmoney_greenmoney_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./greenmoney/greenmoney.component */
    "./src/app/greenmoney/greenmoney.component.ts");

    var Approutes = [{
      path: 'green-money/:id',
      component: _greenmoney_greenmoney_component__WEBPACK_IMPORTED_MODULE_3__["GreenmoneyComponent"]
    }, {
      path: '',
      component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
      children: [// { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'green-money',
        component: _greenmoney_greenmoney_component__WEBPACK_IMPORTED_MODULE_3__["GreenmoneyComponent"]
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboards-dashboard-module */
          [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~dashboards-dashboard-module~form-forms-module~table-tables-module"), __webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboards/dashboard.module */
          "./src/app/dashboards/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'starter',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | starter-starter-module */
          "starter-starter-module").then(__webpack_require__.bind(null,
          /*! ./starter/starter.module */
          "./src/app/starter/starter.module.ts")).then(function (m) {
            return m.StarterModule;
          });
        }
      }, {
        path: 'component',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | component-component-module */
          [__webpack_require__.e("default~component-component-module~sample-pages-sample-pages-module"), __webpack_require__.e("component-component-module")]).then(__webpack_require__.bind(null,
          /*! ./component/component.module */
          "./src/app/component/component.module.ts")).then(function (m) {
            return m.ComponentsModule;
          });
        }
      }, {
        path: 'menuitems',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | menuitems-menuitems-module */
          [__webpack_require__.e("default~form-forms-module~menuitems-menuitems-module"), __webpack_require__.e("menuitems-menuitems-module")]).then(__webpack_require__.bind(null,
          /*! ./menuitems/menuitems.module */
          "./src/app/menuitems/menuitems.module.ts")).then(function (m) {
            return m.MenuitemsModule;
          });
        }
      }, {
        path: 'vendorregistration',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vendorregistration-vendorregistration-module */
          [__webpack_require__.e("common"), __webpack_require__.e("vendorregistration-vendorregistration-module")]).then(__webpack_require__.bind(null,
          /*! ./vendorregistration/vendorregistration.module */
          "./src/app/vendorregistration/vendorregistration.module.ts")).then(function (m) {
            return m.VendorRegistrationModule;
          });
        }
      }, {
        path: 'cards',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cards-cards-module */
          "cards-cards-module").then(__webpack_require__.bind(null,
          /*! ./cards/cards.module */
          "./src/app/cards/cards.module.ts")).then(function (m) {
            return m.CardsModule;
          });
        }
      }, {
        path: 'icons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | icons-icons-module */
          "icons-icons-module").then(__webpack_require__.bind(null,
          /*! ./icons/icons.module */
          "./src/app/icons/icons.module.ts")).then(function (m) {
            return m.IconsModule;
          });
        }
      }, {
        path: 'forms',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | form-forms-module */
          [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~dashboards-dashboard-module~form-forms-module~table-tables-module"), __webpack_require__.e("default~form-forms-module~menuitems-menuitems-module"), __webpack_require__.e("common"), __webpack_require__.e("form-forms-module")]).then(__webpack_require__.bind(null,
          /*! ./form/forms.module */
          "./src/app/form/forms.module.ts")).then(function (m) {
            return m.FormModule;
          });
        }
      }, {
        path: 'tables',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | table-tables-module */
          [__webpack_require__.e("default~dashboards-dashboard-module~form-forms-module~table-tables-module"), __webpack_require__.e("table-tables-module")]).then(__webpack_require__.bind(null,
          /*! ./table/tables.module */
          "./src/app/table/tables.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        }
      }, {
        path: 'charts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | charts-charts-module */
          [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null,
          /*! ./charts/charts.module */
          "./src/app/charts/charts.module.ts")).then(function (m) {
            return m.ChartModule;
          });
        }
      }, {
        path: 'widgets',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | widgets-widgets-module */
          "widgets-widgets-module").then(__webpack_require__.bind(null,
          /*! ./widgets/widgets.module */
          "./src/app/widgets/widgets.module.ts")).then(function (m) {
            return m.WidgetsModule;
          });
        }
      }, {
        path: 'ecom',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ecommerce-ecom-module */
          "ecommerce-ecom-module").then(__webpack_require__.bind(null,
          /*! ./ecommerce/ecom.module */
          "./src/app/ecommerce/ecom.module.ts")).then(function (m) {
            return m.EcomModule;
          });
        }
      }, {
        path: 'timeline',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | timeline-timeline-module */
          "timeline-timeline-module").then(__webpack_require__.bind(null,
          /*! ./timeline/timeline.module */
          "./src/app/timeline/timeline.module.ts")).then(function (m) {
            return m.TimelineModule;
          });
        }
      }, {
        path: 'extra-component',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | extra-component-extra-component-module */
          [__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("extra-component-extra-component-module")]).then(__webpack_require__.bind(null,
          /*! ./extra-component/extra-component.module */
          "./src/app/extra-component/extra-component.module.ts")).then(function (m) {
            return m.ExtraComponentModule;
          });
        }
      }, {
        path: 'apps',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | apps-apps-module */
          [__webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null,
          /*! ./apps/apps.module */
          "./src/app/apps/apps.module.ts")).then(function (m) {
            return m.AppsModule;
          });
        }
      }, {
        path: 'apps/email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | apps-email-mail-module */
          "apps-email-mail-module").then(__webpack_require__.bind(null,
          /*! ./apps/email/mail.module */
          "./src/app/apps/email/mail.module.ts")).then(function (m) {
            return m.MailModule;
          });
        }
      }, {
        path: 'maps',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | maps-maps-module */
          "maps-maps-module").then(__webpack_require__.bind(null,
          /*! ./maps/maps.module */
          "./src/app/maps/maps.module.ts")).then(function (m) {
            return m.MapsModule;
          });
        }
      }, {
        path: 'sample-pages',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sample-pages-sample-pages-module */
          [__webpack_require__.e("default~component-component-module~sample-pages-sample-pages-module"), __webpack_require__.e("sample-pages-sample-pages-module")]).then(__webpack_require__.bind(null,
          /*! ./sample-pages/sample-pages.module */
          "./src/app/sample-pages/sample-pages.module.ts")).then(function (m) {
            return m.SamplePagesModule;
          });
        }
      }]
    }, {
      path: '',
      component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["BlankComponent"],
      children: [{
        path: 'authentication',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | authentication-authentication-module */
          "authentication-authentication-module").then(__webpack_require__.bind(null,
          /*! ./authentication/authentication.module */
          "./src/app/authentication/authentication.module.ts")).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }]
    }, // {
    //   path: '**',
    //   redirectTo: '/authentication/404'
    // },
    {
      path: '**',
      redirectTo: '/login'
    }, {
      path: 'login',
      component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
    /* harmony import */


    var ng_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-http-loader */
    "./node_modules/ng-http-loader/__ivy_ngcc__/fesm2015/ng-http-loader.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(slimLoader, router) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.slimLoader = slimLoader;
        this.router = router; // Listen the navigation events to start or complete the slim bar loading

        this.sub = this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            _this2.slimLoader.start();
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {// this.slimLoader.complete();
          }
        }, function (error) {
          _this2.slimLoader.complete();
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.get(); // this.agmMap.triggerResize(true);  

          this.zoom = 16;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "get",
        value: function get() {
          var _this3 = this;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              if (position) {
                _this3.lat = position.coords.latitude;
                _this3.lng = position.coords.longitude;
                _this3.getAddress = (_this3.lat, _this3.lng);
                console.log(position); // this.apiloader.load().then(() => {  
                //     let geocoder = new google.maps.Geocoder;  
                //     let latlng = {  
                //         lat: this.lat,  
                //         lng: this.lng  
                //     };  
                //     geocoder.geocode({  
                //         'location': latlng  
                //     }, function(results) {  
                //         if (results[0]) {  
                //             this.currentLocation = results[0].formatted_address;  
                //             console.log(this.assgin);  
                //         } else {  
                //             console.log('Not found');  
                //         }  
                //     });  
                // });  
              }
            });
          }
        }
      }, {
        key: "mapClicked",
        value: function mapClicked($event) {
          this.latitude = $event.coords.lat, this.longitude = $event.coords.lng; // this.apiloader.load().then(() => {  
          //     // let geocoder = new google.maps.Geocoder;  
          //     let latlng = {  
          //         lat: this.latitude,  
          //         lng: this.longitude  
          //     };  
          //     // geocoder.geocode({  
          //         // 'location': latlng  
          //     // }, function(results) {  
          //     //     if (results[0]) {  
          //     //         this.currentLocation = results[0].formatted_address;  
          //     //         console.log(this.currentLocation);  
          //     //     } else {  
          //     //         console.log('Not found');  
          //     //     }  
          //     // });  
          // });  
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.agmMap = _t.first);
        }
      },
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng2-slim-loading-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ng-http-loader");
        }
      },
      directives: [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ng_http_loader__WEBPACK_IMPORTED_MODULE_4__["NgHttpLoaderComponent"]],
      styles: ["[_ngcontent-%COMP%]:ng-deep   .sebm-google-map-container-inner[_ngcontent-%COMP%]{\r\n    position: static !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpuZy1kZWVwIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyLWlubmVye1xyXG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        agmMap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.config.ts":
  /*!*******************************!*\
    !*** ./src/app/app.config.ts ***!
    \*******************************/

  /*! exports provided: config */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_deployment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../environments/deployment */
    "./src/environments/deployment.ts");

    var config =
    /*#__PURE__*/
    function () {
      function config() {
        _classCallCheck(this, config);
      }

      _createClass(config, null, [{
        key: "getEnvironmentVariable",
        value: function getEnvironmentVariable(value) {
          var serverip = 'https://api.instamarkt.co/'; // let serverip = 'http://161.35.1.231:1337/';
          //  let serverip = 'http://localhost:1337/';

          if (_environments_deployment__WEBPACK_IMPORTED_MODULE_1__["Production"]) {
            serverip = 'https://api.instamarkt.co/'; // serverip = 'http://161.35.1.231:1337/';
            // serverip = 'http://localhost:1337/';
          }

          return serverip;
        } //http://127.0.0.1:44663/browser/

      }, {
        key: "getDomainName",
        value: function getDomainName() {
          var domainName = 'https://www.dev.instamarkt.io/';

          if (_environments_deployment__WEBPACK_IMPORTED_MODULE_1__["Production"]) {
            domainName = 'https://www.instamarkt.io/';
          }

          return domainName;
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          var value = localStorage.getItem('user');
          var authHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
            'Content-Type': 'application/json'
          });

          if (value && value != 'undefined' && value != 'null') {
            var currentUser = JSON.parse(value);

            if (currentUser && currentUser.access_token) {
              var jwt = currentUser.access_token;
              authHeader.append('Authorization', 'Bearer ' + jwt);
            }
          }

          return authHeader;
        }
      }, {
        key: "getFileHeader",
        value: function getFileHeader() {
          var jwt = localStorage.getItem('synchrobit_exchange_admin_token');
          var authHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();

          if (jwt) {
            authHeader.append('Authorization', 'Bearer ' + jwt);
          }

          return authHeader;
        }
      }]);

      return config;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _AuthInterceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./AuthInterceptor */
    "./src/app/AuthInterceptor.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap-confirm */
    "./node_modules/ngx-bootstrap-confirm/__ivy_ngcc__/fesm2015/ngx-bootstrap-confirm.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _globals__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./globals */
    "./src/app/globals.ts");
    /* harmony import */


    var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./layouts/full/full.component */
    "./src/app/layouts/full/full.component.ts");
    /* harmony import */


    var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./layouts/blank/blank.component */
    "./src/app/layouts/blank/blank.component.ts");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/header-navigation/navigation.component */
    "./src/app/shared/header-navigation/navigation.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/breadcrumb/breadcrumb.component */
    "./src/app/shared/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _app_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../app/login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _services_error_message_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/error-message.service */
    "./src/app/services/error-message.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./shared/spinner.component */
    "./src/app/shared/spinner.component.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _greenmoney_greenmoney_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./greenmoney/greenmoney.component */
    "./src/app/greenmoney/greenmoney.component.ts");
    /* harmony import */


    var primeng_accordion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! primeng/accordion */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-accordion.js");
    /* harmony import */


    var ng_http_loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ng-http-loader */
    "./node_modules/ng-http-loader/__ivy_ngcc__/fesm2015/ng-http-loader.js"); // import {SignupComponent} from '../app/authentication/signup/signup.component'
    // import { NgxMaskModule } from 'ngx-mask';
    // import { TextMaskModule } from 'angular2-text-mask';
    //accordion and accordion tab


    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true,
      wheelSpeed: 1,
      wheelPropagation: true,
      minScrollbarLength: 20
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
        multi: true
      }, {
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
      }, _services_index__WEBPACK_IMPORTED_MODULE_15__["CommonFunctionsService"], _globals__WEBPACK_IMPORTED_MODULE_16__["Globals"], _services_error_message_service__WEBPACK_IMPORTED_MODULE_26__["ErrorMessageService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], // TextMaskModule,
      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_31__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__["NgxUiLoaderModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_33__["AccordionModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(), ng_http_loader__WEBPACK_IMPORTED_MODULE_34__["NgHttpLoaderModule"].forRoot(), ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_13__["SlimLoadingBarModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_27__["Approutes"], {
        useHash: false
      }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__["Ng2SearchPipeModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'
      }), ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_6__["NgxBootstrapConfirmModule"] // NgxMaskModule.forRoot()
      ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_29__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_17__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_18__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"], _app_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], _greenmoney_greenmoney_component__WEBPACK_IMPORTED_MODULE_32__["GreenmoneyComponent"] // SignupComponent
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], // TextMaskModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_31__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__["NgxUiLoaderModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_33__["AccordionModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"], ng_http_loader__WEBPACK_IMPORTED_MODULE_34__["NgHttpLoaderModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_13__["SlimLoadingBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__["Ng2SearchPipeModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_6__["NgxBootstrapConfirmModule"] // NgxMaskModule.forRoot()
        ],
        exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_29__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_17__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_18__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"], _app_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], _greenmoney_greenmoney_component__WEBPACK_IMPORTED_MODULE_32__["GreenmoneyComponent"] // SignupComponent
          ],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], // TextMaskModule,
          _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_31__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__["NgxUiLoaderModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_33__["AccordionModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(), ng_http_loader__WEBPACK_IMPORTED_MODULE_34__["NgHttpLoaderModule"].forRoot(), ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_13__["SlimLoadingBarModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_27__["Approutes"], {
            useHash: false
          }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__["Ng2SearchPipeModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
            apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'
          }), ngx_bootstrap_confirm__WEBPACK_IMPORTED_MODULE_6__["NgxBootstrapConfirmModule"] // NgxMaskModule.forRoot()
          ],
          exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
            multi: true
          }, {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
          }, _services_index__WEBPACK_IMPORTED_MODULE_15__["CommonFunctionsService"], _globals__WEBPACK_IMPORTED_MODULE_16__["Globals"], _services_error_message_service__WEBPACK_IMPORTED_MODULE_26__["ErrorMessageService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/globals.ts":
  /*!****************************!*\
    !*** ./src/app/globals.ts ***!
    \****************************/

  /*! exports provided: Globals */

  /***/
  function srcAppGlobalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Globals", function () {
      return Globals;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Globals = function Globals() {
      _classCallCheck(this, Globals);

      this.isDropdownOpen = false;
      this.activateMenu = false;
      this.apiCounter = 0;
    };

    Globals.ɵfac = function Globals_Factory(t) {
      return new (t || Globals)();
    };

    Globals.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Globals,
      factory: Globals.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Globals, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/greenmoney/greenmoney.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/greenmoney/greenmoney.component.ts ***!
    \****************************************************/

  /*! exports provided: GreenmoneyComponent */

  /***/
  function srcAppGreenmoneyGreenmoneyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GreenmoneyComponent", function () {
      return GreenmoneyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var GreenmoneyComponent =
    /*#__PURE__*/
    function () {
      function GreenmoneyComponent(route, _ProfileService, _renderer2, _document) {
        _classCallCheck(this, GreenmoneyComponent);

        this.route = route;
        this._ProfileService = _ProfileService;
        this._renderer2 = _renderer2;
        this._document = _document;
      }

      _createClass(GreenmoneyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var urlid = window.location.href.split('/');
          this.urlId = urlid[5];
          localStorage.setItem('orderID', this.urlId);
          var jqueryFile = document.createElement('script');
          jqueryFile.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
          document.head.appendChild(jqueryFile);
          window.open('https://admin.instamarkt.co/#/green-money/42a5e7d5-4b82-4368-a238-3661a78cd7eb', 'myWindow'); // this.greenMoney()
        }
      }, {
        key: "greenMoney",
        value: function greenMoney() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this._ProfileService.greenMoneyPayment(this.urlId).subscribe(function (response) {
                      var getResponse = response;
                      getResponse = getResponse.split('<script>');
                      var getFirstScript = getResponse[1].split('</script>');
                      var getSecondScript = getResponse[2].split('</script>');
                      var appendFirstScript = document.createElement('script');
                      appendFirstScript.innerHTML = getFirstScript[0];
                      document.head.appendChild(appendFirstScript);
                      var appendSecondScript = document.createElement('script');
                      appendSecondScript.innerHTML = getSecondScript[0];
                      document.head.appendChild(appendSecondScript);
                      setTimeout(function () {
                        var cashFlowScript = document.createElement('script');
                        cashFlowScript.innerHTML = "Cashflow.init({ target: $(\"#widget\")});\n\n          Cashflow.ready = function(id){\n              console.log(\"Session ID: \" + id);\n              Cashflow.open();\n          }\n\n          Cashflow.onFatalError = function(e) {\n              console.log(\"Verde widget failed on startup...\", e);\n          }\n\n          Cashflow.onCustomerCreation = function(id) {\n              console.log(\"Customer ID: \" + id);\n              localStorage.setItem('customerId', id);\n          }\n\n          Cashflow.onEnrollmentSuccess = function(id, data) {\n              console.log(\"Account ID: \" + id);\n              console.log(\"Enrollment Data: \" + data);\n              var getOrderID = localStorage.getItem('orderID');\n              var customerID = localStorage.getItem('customerId');\n\n              var arr = {\n                \"CustomerToken\":customerID,\n                \"AccountToken\":id\n              };\n\n              $.ajax({\n                method:'POST',\n                url:'https://api.instamarkt.co/api/v1/payment/green-money-generate-check/'+getOrderID,\n                data:JSON.stringify(arr),\n                contentType: 'application/json; charset=utf-8',\n                dataType: 'json',\n                success:function(data){\n                  console.log(data);\n                  localStorage.clear();\n                },\n                error: function(XMLHttpRequest, textStatus, errorThrown) { \n                  alert(\"Status: \" + textStatus); alert(\"Error: \" + errorThrown); \n                }    \n              })\n          }";
                        document.head.appendChild(cashFlowScript);
                      }, 5000);
                    }, function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return GreenmoneyComponent;
    }();

    GreenmoneyComponent.ɵfac = function GreenmoneyComponent_Factory(t) {
      return new (t || GreenmoneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    GreenmoneyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GreenmoneyComponent,
      selectors: [["app-greenmoney"]],
      decls: 1,
      vars: 0,
      consts: [["id", "widget"]],
      template: function GreenmoneyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["#widget[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    height: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JlZW5tb25leS9ncmVlbm1vbmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2dyZWVubW9uZXkvZ3JlZW5tb25leS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dpZGdldHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreenmoneyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-greenmoney',
          templateUrl: './greenmoney.component.html',
          styleUrls: ['./greenmoney.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/blank/blank.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/layouts/blank/blank.component.ts ***!
    \**************************************************/

  /*! exports provided: BlankComponent */

  /***/
  function srcAppLayoutsBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
      return BlankComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BlankComponent = function BlankComponent() {
      _classCallCheck(this, BlankComponent);
    };

    BlankComponent.ɵfac = function BlankComponent_Factory(t) {
      return new (t || BlankComponent)();
    };

    BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlankComponent,
      selectors: [["app-blank-layout"]],
      decls: 1,
      vars: 0,
      template: function BlankComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blank-layout',
          templateUrl: './blank.component.html',
          styleUrls: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/full/full.component.ts":
  /*!************************************************!*\
    !*** ./src/app/layouts/full/full.component.ts ***!
    \************************************************/

  /*! exports provided: FullComponent */

  /***/
  function srcAppLayoutsFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
      return FullComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/header-navigation/navigation.component */
    "./src/app/shared/header-navigation/navigation.component.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/breadcrumb/breadcrumb.component */
    "./src/app/shared/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function FullComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 27);
      }
    }

    function FullComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Layout Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_30_Template_input_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.options.theme = ctx_r6.options.theme == "light" ? "dark" : "light";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dark Theme");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_30_Template_input_change_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.options.sidebarpos = ctx_r8.options.sidebarpos == "fixed" ? "absolute" : "fixed";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fixed Sidebar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_30_Template_input_change_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.options.headerpos = ctx_r9.options.headerpos == "fixed" ? "absolute" : "fixed";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fixed Header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_30_Template_input_change_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.options.boxed = ctx_r10.options.boxed == "full" ? "boxed" : "full";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Boxed Layout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_30_Template_input_change_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.options.dir = ctx_r11.options.dir == "rtl" ? "ltr" : "rtl";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RTL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sidebar Types");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_30_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.options.sidebartype = $event;
        })("change", function FullComponent_ng_template_30_Template_input_change_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.options.sidebartype = "mini-sidebar";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mini Sidebar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_30_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.options.sidebartype = $event;
        })("change", function FullComponent_ng_template_30_Template_input_change_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.options.sidebartype = "iconbar";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Icon Sidebar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_30_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.options.sidebartype = $event;
        })("change", function FullComponent_ng_template_30_Template_input_change_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.options.sidebartype = "overlay";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Overlay Sidebar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_30_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.options.sidebartype = $event;
        })("change", function FullComponent_ng_template_30_Template_input_change_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.options.sidebartype = "full";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Full Sidebar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Logo Backgrounds");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.options.logobg = "skin1";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.options.logobg = "skin2";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.options.logobg = "skin3";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.options.logobg = "skin4";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_55_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.options.logobg = "skin5";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_57_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.options.logobg = "skin6";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Navbar Backgrounds");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_63_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.options.navbarbg = "skin1";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_65_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.options.navbarbg = "skin2";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_67_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.options.navbarbg = "skin3";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_69_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.options.navbarbg = "skin4";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_71_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.options.navbarbg = "skin5";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_73_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.options.navbarbg = "skin6";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sidebar Backgrounds");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_79_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.options.sidebarbg = "skin1";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_81_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.options.sidebarbg = "skin2";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_83_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.options.sidebarbg = "skin3";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_85_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.options.sidebarbg = "skin4";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_87_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.options.sidebarbg = "skin5";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_30_Template_a_click_89_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.options.sidebarbg = "skin6";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.theme == "dark" ? "checked" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.sidebarpos == "fixed" ? "checked" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.headerpos == "fixed" ? "checked" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.boxed == "boxed" ? "checked" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.dir == "rtl" ? "checked" : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);
      }
    }

    function FullComponent_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
      }
    }

    function FullComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chris Evans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Just see the my admin!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "9:30 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ray Hudson");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "I've sung a song! See you at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9:10 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lb James");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I am a singer!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "9:08 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Don Andres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Just see the my admin!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "9:02 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Chris Evans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Just see the my admin!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "9:30 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Ray Hudson");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "I've sung a song! See you at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "9:10 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lb James");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "I am a singer!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "9:08 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Don Andres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Just see the my admin!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "9:02 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Chris Evans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Just see the my admin!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "9:30 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Ray Hudson");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "I've sung a song! See you at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "9:10 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Lb James");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "I am a singer!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "9:08 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Don Andres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Just see the my admin!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "9:02 AM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx_r3.config);
      }
    }

    function FullComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 97);
      }
    }

    function FullComponent_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Activity Timeline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Meeting today ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 5pm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "you can write anything ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Send documents to Clark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem Ipsum is simply ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Go to the Doctor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "5 minutes ago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contrary to popular belief");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Stephen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "5 minutes ago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Approve meeting with tiger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Meeting today ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 5pm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "you can write anything ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Send documents to Clark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem Ipsum is simply ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Go to the Doctor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "5 minutes ago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Contrary to popular belief");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Stephen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "5 minutes ago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Approve meeting with tiger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "show-sidebar": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "show-service-panel": a0
      };
    };

    var FullComponent =
    /*#__PURE__*/
    function () {
      function FullComponent(router) {
        _classCallCheck(this, FullComponent);

        this.router = router;
        this.config = {};
        this.tabStatus = 'justified';
        this.isCollapsed = false;
        this.showSettings = false;
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.options = {
          theme: 'light',
          dir: 'ltr',
          layout: 'vertical',
          sidebartype: 'full',
          sidebarpos: 'fixed',
          headerpos: 'fixed',
          boxed: 'full',
          navbarbg: 'skin6',
          sidebarbg: 'skin5',
          logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)

        };
      }

      _createClass(FullComponent, [{
        key: "Logo",
        value: function Logo() {
          this.expandLogo = !this.expandLogo;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.router.url === '/') {
            this.router.navigate(['/dashboard/dashboard1']);
          }

          this.defaultSidebar = this.options.sidebartype;
          this.handleSidebar();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.handleSidebar();
        }
      }, {
        key: "handleSidebar",
        value: function handleSidebar() {
          this.innerWidth = window.innerWidth;

          switch (this.defaultSidebar) {
            case 'full':
            case 'iconbar':
              if (this.innerWidth < 1170) {
                this.options.sidebartype = 'mini-sidebar';
              } else {
                this.options.sidebartype = this.defaultSidebar;
              }

              break;

            case 'overlay':
              if (this.innerWidth < 767) {
                this.options.sidebartype = 'mini-sidebar';
              } else {
                this.options.sidebartype = this.defaultSidebar;
              }

              break;

            default:
          }
        }
      }, {
        key: "toggleSidebarType",
        value: function toggleSidebarType() {
          switch (this.options.sidebartype) {
            case 'full':
            case 'iconbar':
              this.options.sidebartype = 'mini-sidebar';
              break;

            case 'overlay':
              this.showMobileMenu = !this.showMobileMenu;
              break;

            case 'mini-sidebar':
              if (this.defaultSidebar === 'mini-sidebar') {
                this.options.sidebartype = 'full';
              } else {
                this.options.sidebartype = this.defaultSidebar;
              }

              break;

            default:
          }
        }
      }]);

      return FullComponent;
    }();

    FullComponent.ɵfac = function FullComponent_Factory(t) {
      return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullComponent,
      selectors: [["app-full-layout"]],
      hostBindings: function FullComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 38,
      vars: 25,
      consts: [["id", "main-wrapper", "data-layout", "vertical", "data-sidebartype", "full", 3, "ngClass", "dir"], [1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-md", 3, "ngClass"], [1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-md-none", 3, "click"], [3, "ngClass"], ["href", "/", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/logo-icon.png", "width", "100px", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "width", "100px", "alt", "homepage", 1, "light-logo"], [1, "logo-text", 2, "font-weight", "500"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse", 3, "ngbCollapse"], [1, "w-100", 3, "toggleSidebar"], [1, "left-sidebar", 3, "mouseover", "mouseout"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [1, "page-wrapper"], [1, "container-fluid"], [1, "customizer", 3, "ngClass"], ["href", "javascript:void(0)", 1, "service-panel-toggle", 3, "click"], [1, "fa", "fa-spin", "fa-cog"], [1, "customizer-body", "custom-pills", 3, "perfectScrollbar"], ["type", "pills", 3, "justify"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "chat-windows"], [1, "mdi", "mdi-wrench", "font-20"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-20", "m-t-10"], [1, "custom-control", "custom-checkbox", "m-t-10"], ["type", "checkbox", "name", "theme-view", "id", "theme-view", 1, "custom-control-input", 3, "change"], ["for", "theme-view", 1, "custom-control-label"], ["type", "checkbox", "name", "sidebar-position", "id", "sidebar-position", 1, "custom-control-input", 3, "change"], ["for", "sidebar-position", 1, "custom-control-label"], ["type", "checkbox", "name", "header-position", "id", "header-position", 1, "custom-control-input", 3, "change"], ["for", "header-position", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "change"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "rtl-layout", "id", "rtl-layout", 1, "custom-control-input", 3, "change"], ["for", "rtl-layout", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "m-t-10"], ["type", "radio", "name", "sidebar", "value", "mini-sidebar", "id", "minisidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "minisidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "iconbar", "id", "iconsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "iconsidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "overlay", "id", "overlaysidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "overlaysidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "full", "id", "fullsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "fullsidebar", 1, "custom-control-label"], [1, "theme-color"], [1, "theme-item"], ["href", "javascript:void(0)", "data-logobg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin6", 1, "theme-link", 3, "click"], [1, "mdi", "mdi-message-reply", "font-20"], [1, "mailbox", "list-style-none", "m-t-20"], [1, "message-center", "chat-scroll", 3, "perfectScrollbar"], ["href", "#", "id", "chat_user_1", "data-user-id", "1", 1, "message-item"], [1, "user-img"], ["src", "assets/images/users/1.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "online", 1, "profile-status", "online", "pull-right"], [1, "mail-contnet"], [1, "mail-desc"], [1, "time"], ["href", "#", "id", "chat_user_2", "data-user-id", "2", 1, "message-item"], ["src", "assets/images/users/2.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "busy", 1, "profile-status", "busy", "pull-right"], ["href", "#", "id", "chat_user_3", "data-user-id", "3", 1, "message-item"], ["src", "assets/images/users/3.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "away", 1, "profile-status", "away", "pull-right"], ["href", "#", "id", "chat_user_4", "data-user-id", "4", 1, "message-item"], ["src", "assets/images/users/4.jpg", "alt", "user", 1, "rounded-circle"], ["data-status", "offline", 1, "profile-status", "offline", "pull-right"], ["href", "#", "id", "chat_user_5", "data-user-id", "5", 1, "message-item"], ["href", "#", "id", "chat_user_6", "data-user-id", "6", 1, "message-item"], ["href", "#", "id", "chat_user_7", "data-user-id", "7", 1, "message-item"], ["href", "#", "id", "chat_user_8", "data-user-id", "8", 1, "message-item"], ["href", "#", "id", "chat_user_9", "data-user-id", "9", 1, "message-item"], ["href", "#", "id", "chat_user_10", "data-user-id", "10", 1, "message-item"], ["href", "#", "id", "chat_user_11", "data-user-id", "11", 1, "message-item"], ["href", "#", "id", "chat_user_12", "data-user-id", "12", 1, "message-item"], [1, "mdi", "mdi-star-circle", "font-20"], [1, "p-15"], [1, "m-t-20", "m-b-20"], [1, "steamline"], [1, "sl-item"], [1, "sl-left", "bg-success"], [1, "ti-user"], [1, "sl-right"], [1, "font-medium"], [1, "sl-date"], [1, "desc"], [1, "sl-left", "bg-info"], [1, "fas", "fa-image"], [1, "sl-left"], ["alt", "user", "src", "assets/images/users/2.jpg", 1, "rounded-circle"], ["alt", "user", "src", "assets/images/users/1.jpg", 1, "rounded-circle"], ["href", "javascript:void(0)"], [1, "sl-left", "bg-primary"], ["alt", "user", "src", "assets/images/users/4.jpg", 1, "rounded-circle"], ["alt", "user", "src", "assets/images/users/6.jpg", 1, "rounded-circle"]],
      template: function FullComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() {
            return ctx.showMobileMenu = !ctx.showMobileMenu;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Back Office ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_12_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-navigation", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_15_listener() {
            return ctx.toggleSidebarType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "aside", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_16_listener() {
            return ctx.Logo();
          })("mouseout", function FullComponent_Template_aside_mouseout_16_listener() {
            return ctx.Logo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "aside", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_24_listener() {
            return ctx.showSettings = !ctx.showSettings;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-tabset", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FullComponent_ng_template_29_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FullComponent_ng_template_30_Template, 90, 9, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FullComponent_ng_template_32_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, FullComponent_ng_template_33_Template, 135, 1, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FullComponent_ng_template_35_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FullComponent_ng_template_36_Template, 82, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.showMobileMenu))("dir", ctx.options.dir);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-theme", ctx.options.theme)("data-layout", ctx.options.layout)("data-sidebartype", ctx.options.sidebartype)("data-sidebar-position", ctx.options.sidebarpos)("data-header-position", ctx.options.headerpos)("data-boxed-layout", ctx.options.boxed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.options.navbarbg == "skin6" ? "navbar-light" : "navbar-dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-logobg", ctx.options.logobg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sidebarbg", ctx.options.sidebarbg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.showSettings));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("justify", ctx.tabStatus);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full-layout',
          templateUrl: './full.component.html',
          styleUrls: ['./full.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.msg);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "d-none": a0
      };
    };

    var _c1 = function _c1() {
      return ["/authentication/signup"];
    };

    var _c2 = function _c2(a0) {
      return {
        "d-block": a0
      };
    }; // import { IPGeolocationAPI } from 'ip-geolocation-api-sdk-typescript';


    var LoginComponent =
    /*#__PURE__*/
    function () {
      //  ipgeolocationApi = new IPGeolocationAPI("", false);
      function LoginComponent(routes, _AuthService, toastr) {
        _classCallCheck(this, LoginComponent);

        this.routes = routes;
        this._AuthService = _AuthService;
        this.toastr = toastr;
        this.msg = '';
        this.loginform = true;
        this.recoverform = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPosition(); // this.getIPAddress();
        } // Function to handle API response

      }, {
        key: "handleResponse",
        value: function handleResponse() {} //   let geolocationParams = new GeolocationParams();
        //   geolocationParams.setIPAddress('1.1.1.1'); 
        //   geolocationParams.setFields('geo,time_zone,currency');
        // this.ipgeolocationApi.getGeolocation(data=>{
        //   console.log()
        // })
        // Get complete geolocation for the calling machine's IP address
        // getIPAddress()
        // {
        // this._AuthService.getIP().subscribe((res:any)=>{
        //     this.ipAddress = res.ip;
        //     console.log('ipAddressipAddress',this.ipAddress)
        //     // let geolocationParams = new GeolocationParams();
        //   //   geolocationParams.setIPAddress(this.ipAddress); 
        //   //   geolocationParams.setFields('geo,time_zone,currency');
        //   // this.ipgeolocationApi.getGeolocation(data=>{
        //   //   console.log('datadatadatadatadatadatadata',data)
        //   // },geolocationParams)
        //   });
        // }

      }, {
        key: "check",
        value: function check(uname, p) {
          var _this4 = this;

          console.log('checkcheck', uname, p);

          this._AuthService.login({
            username: uname,
            password: p
          }).subscribe(function (data) {
            if (data.status == 200) {
              _this4.toastr.success('Login Successful');

              localStorage.setItem('user', JSON.stringify(data));

              if (data.user.profile_updated == false) {
                // this.routes.navigate(['/sample-pages/profile']);
                _this4.routes.navigate(['/forms']);
              } else {
                // this.routes.navigate(['/dashboard/dashboard2']);
                _this4.routes.navigate(['/forms']);
              }
            } else {
              _this4.msg = data.message;

              _this4.toastr.error(data.message);
            }
          }, function (err) {
            console.log('errrrr', err);
            _this4.msg = 'Invalid Username or Password';
          }); // const output = this.service.checkusernameandpassword(uname, p);
          // if (output == true) {
          // } else {
          //   this.msg = 'Invalid Username or Password';
          // }

        }
      }, {
        key: "showRecoverForm",
        value: function showRecoverForm() {
          this.loginform = !this.loginform;
          this.recoverform = !this.recoverform;
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          var _this5 = this;

          navigator.geolocation.getCurrentPosition(function (resp) {
            console.log('respsssssssss', resp);
            console.log('lng', resp.coords.longitude, 'lat', resp.coords.latitude);
            _this5.lat = resp.coords.latitude;
            _this5.lng = resp.coords.longitude; // this.lat = 44.264
            // this.lng = -121.175

            localStorage.setItem('latitude', _this5.lat);
            localStorage.setItem('longitude', _this5.lng);

            if (_this5.lat && _this5.lng) {
              _this5._AuthService.getstatecountry(_this5.lat, _this5.lng).subscribe(function (res) {
                if (res.status == 200) {
                  localStorage.setItem('state', res.data.state);
                  localStorage.setItem('country', res.data.country);
                  localStorage.setItem('state_id', res.data.state_id);
                  localStorage.setItem('country_id', res.data.country_id);
                  localStorage.setItem('state_name', res.data.state_name);
                }
              });
            }
          }, function (err) {
            console.log('errrorrr', err);

            if (err) {// this.showcountryInput = true
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 62,
      vars: 12,
      consts: [[1, "auth-wrapper", "login_card", 2, "position", "relative", "top", "60px"], ["src", "assets/images/big/instamarkt.jpg", 2, "width", "250px"], [1, "auth-box"], ["id", "loginform", 3, "ngClass"], [1, "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["id", "loginform", 1, "form-horizontal", "m-t-20", 3, "ngClass"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], [1, "col-xs-12"], ["type", "text", "required", "", "placeholder", "Username", 1, "form-control"], ["u1", ""], ["type", "password", "required", "", "placeholder", "Password", 1, "form-control"], ["p2", ""], [1, "form-group", "row"], [1, "col-md-12", "font-14"], [1, "custom-control", "custom-checkbox", 2, "text-align", "left"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], [1, "custom-control", "custom-checkbox"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-dark", "text-center", 3, "click"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center", "m-t-20"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", "text-uppercase", 3, "click"], [1, "form-group", "m-b-0"], [1, "col-sm-12", "text-center"], [1, "text-info", "m-l-5", 3, "routerLink"], ["id", "recoverform", 3, "ngClass"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "row", "m-t-20"], ["type", "email", "required", "", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["type", "submit", "name", "action", 1, "btn", "btn-block", "btn-lg", "btn-danger"], [1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back Office Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remember me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_28_listener() {
            return ctx.showRecoverForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Forgot pwd?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            return ctx.check(_r1.value, _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Don't have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Register Vendor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Recover Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Enter your Email and instructions will be sent to you!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.recoverform));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.recoverform));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx.recoverform));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.loginUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'auth/login';
        this.registrationURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'auth/register';
        this.countryURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/countries';
        this.territoryURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/territories/filter-territory';
        this.vndrNameURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';
        this.statecountry = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/getstateandcountry/';
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(data) {
          return this.http.post(this.loginUrl, data);
        }
      }, {
        key: "vendorRegistration",
        value: function vendorRegistration(data) {
          data['role'] = "OWNER";
          return this.http.post(this.registrationURL, data);
        }
      }, {
        key: "territory_id",
        value: function territory_id(count, state, data) {
          return this.http.post(this.territoryURL + '/' + count + "/state/" + state, data);
        }
      }, {
        key: "getcountryList",
        value: function getcountryList() {
          return this.http.get(this.countryURL);
        }
      }, {
        key: "getVendrName",
        value: function getVendrName(data) {
          return this.http.get(this.vndrNameURL + data);
        }
      }, {
        key: "getIP",
        value: function getIP() {
          return this.http.get("http://api.ipify.org/?format=json");
        }
      }, {
        key: "getstatecountry",
        value: function getstatecountry(lat, lng) {
          return this.http.get(this.statecountry + lat + '/' + lng);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/commonFunctions.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/commonFunctions.service.ts ***!
    \*****************************************************/

  /*! exports provided: CommonFunctionsService */

  /***/
  function srcAppServicesCommonFunctionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonFunctionsService", function () {
      return CommonFunctionsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // import { HttpInterceptor } from "../HttpIntercepter";


    var CommonFunctionsService =
    /*#__PURE__*/
    function () {
      function CommonFunctionsService(http, router) {
        _classCallCheck(this, CommonFunctionsService);

        this.http = http;
        this.router = router; // Google API Geocode

        this.fullNameRegex = new RegExp(/^[a-zA-Z]+(\s+[a-zA-Z]+)*$/);
        this.fNameRegex = new RegExp(/^[a-zA-Z]+$/);
        this.lNameRegex = new RegExp(/^[a-zA-Z]+$/);
        this.uNameRegex = new RegExp(/^[a-z0-9]+$/);
        this.conatctName = new RegExp(/^[a-zA-Z]*$/);
        this.contactRegex = new RegExp(/^\d+$/);
        this.emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|("."))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.emailRegexNew = new RegExp(/^[a-z][a-zA-Z0-9.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/);
        this.passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.|\<>?/:"'{}[_\-+=~`\]])[A-Za-z\d$@$!%*#?&.|\<>?/:"'{}[_\-+=~`\]]{8,20}$/);
        this.numericRegex = new RegExp(/(0|[1-9][0-9]*)$/); // amountRegex:  any = new RegExp(/[0-9]+(\.[0-9][0-9]?)?$/);

        this.amountRegex = new RegExp(/^[0-9]*(?:\.[0-9]*)?$/);
        this.ansRegex = new RegExp(/^(?=.*[\w\d]).+/);
        this.g2faRegex = new RegExp(/^([0-9]{6})+$/);
        this.passportRegex = new RegExp(/^[A-Za-z0-9]{6,20}$/);
        this.exact8Digits = new RegExp(/^[a-zA-Z0-9]{8,}$/);
        this.languagelist = [];
        this.noSpace = new RegExp(/^\S.*$/); // Google API Geocode
        // private googleAPIUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

        this.originGoogleAPi = "https://geolocation-db.com/json/"; // private googleAPIEndUrl = "&result_type=locality|country&key=AIzaSyAbxUHuncrj7MmHSRiFGL2kcusnYJaekJA";

        this.langListUrl = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].getEnvironmentVariable('endPoint') + 'api/Announcement/GetActiveLanguageList';
        this.getTerritoryURL = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/territories';
        this.getCountryURL = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/countries';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
          'Content-Type': 'application/json'
        });
      } // Google API Geolocation


      _createClass(CommonFunctionsService, [{
        key: "googleAPI",
        value: function googleAPI(latLong) {
          var _this6 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            fetch(_this6.originGoogleAPi, {
              "method": 'GET'
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              observer.next(data);
            })["catch"](function (err) {
              return observer.error(err);
            });
          }); // return Observable.create(observer => {
          //   fetch(this.googleAPIUrl + latLong + this.googleAPIEndUrl, {
          //     "method": 'GET'
          //   }).then(response => {
          //     return response.json();
          //   }).then(data => {
          //     observer.next(data);
          //   }).catch(err => observer.error(err));
          // });
        }
      }, {
        key: "getIpAddress",
        value: function getIpAddress() {
          return this.http.get('https://freegeoip.net/json/?callback', '').map(function (response) {
            return response.json();
          }); // return this.http.get('http://ip-api.com/json').map((response: Response) => response.json());
        }
      }, {
        key: "getTypeList",
        value: function getTypeList() {
          return [{
            id: 'TRUCK',
            name: 'TRUCK'
          }];
        }
      }, {
        key: "numberFormatt",
        value: function numberFormatt(num, digit) {
          return parseFloat(num).toFixed(2);
        }
      }, {
        key: "checkUser",
        value: function checkUser() {
          if (localStorage.getItem('user')) {
            var data = localStorage.getItem('user');
            var jsonData = JSON.parse(data);
            return jsonData;
          }
        }
      }, {
        key: "checkLoginUser",
        value: function checkLoginUser() {
          if (localStorage.getItem('user')) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "getActiveLanguageList",
        value: function getActiveLanguageList() {
          return this.http.get(this.langListUrl, {
            headers: this.headers
          }).map(function (response) {
            return response.json();
          });
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return this.http.get(this.getCountryURL);
        }
      }, {
        key: "getTerritory",
        value: function getTerritory() {
          return this.http.get(this.getTerritoryURL);
        }
      }, {
        key: "logout",
        value: function logout() {
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
      }]);

      return CommonFunctionsService;
    }();

    CommonFunctionsService.ɵfac = function CommonFunctionsService_Factory(t) {
      return new (t || CommonFunctionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CommonFunctionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommonFunctionsService,
      factory: CommonFunctionsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonFunctionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/error-message.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/error-message.service.ts ***!
    \***************************************************/

  /*! exports provided: ErrorMessageService */

  /***/
  function srcAppServicesErrorMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function () {
      return ErrorMessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/Subject */
    "./node_modules/rxjs-compat/_esm2015/Subject.js");

    var ErrorMessageService = function ErrorMessageService() {
      var _this7 = this;

      _classCallCheck(this, ErrorMessageService);

      this.errors = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

      this.addErrors = function (errors) {
        return _this7.errors.next(errors);
      };

      this.getErrors = function () {
        return _this7.errors.asObservable();
      };
    };

    ErrorMessageService.ɵfac = function ErrorMessageService_Factory(t) {
      return new (t || ErrorMessageService)();
    };

    ErrorMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorMessageService,
      factory: ErrorMessageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: CommonFunctionsService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _commonFunctions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./commonFunctions.service */
    "./src/app/services/commonFunctions.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonFunctionsService", function () {
      return _commonFunctions_service__WEBPACK_IMPORTED_MODULE_0__["CommonFunctionsService"];
    });
    /***/

  },

  /***/
  "./src/app/services/profile.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/profile.service.ts ***!
    \*********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.config */
    "./src/app/app.config.ts");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(http) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.getProfileURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';
        this.uploadGoogleSheetUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/uploadgooglesheetuploadmenuitems';
        this.productListUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';
        this.singleProductUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';
        this.getProfileUserURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/users/';
        this.updateUsergooglesheetUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/updatecompanies/';
        this.companyProfileURl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';
        this.updatecompanyProfileURl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/updateCompanyDetails/';
        this.companyFeaturedProfileURl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/mol/companies/';
        this.unitURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';
        this.editHubURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + '/api/v1/rel/food_parks/editdeliveryhub/';
        this.addUnitURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/companies/';
        this.foodparkURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks';
        this.addFoodParkURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks';
        this.addTeleURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/bot/telegram-group';
        this.Category = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/category';
        this.foodparkmgrURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/foodparkmgr';
        this.setManagersURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfoodparkmgrtohub';
        this.setDriverManagersURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/setfooddrivertohub';
        this.addDriverURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'auth/register';
        this.userInfo = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'auth/userinfoafterlogin';
        this.editManagersURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/update-manager/'; // private addDriverFoodParkURL = config.getEnvironmentVariable('endPoint') + 'api/v1/rel/foodparks/'; 

        this.addDriverFoodParkURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/';
        this.companyURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/mol/companies';
        this.companyURL1 = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/companies'; //https://api.instamarkt.co/api/v1/rel/payout/dailypayoutsfororders/11247

        this.dailyPayout = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/mol/getVendorDriverWagesForOrders';
        this.dailyPayoutURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/payout/dailypayoutsfororders';
        this.getManagerURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/getfoodparkmgrs';
        this.getManagerOnTerritoryURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/managers';
        this.greenMoneyURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/payment/green-money-generate-widget/';
        this.getUnitListURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/list-units';
        this.addManagersURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/create-manager';
        this.assignManagersURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/assign-manager';
        this.telegrambotURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/bot/';
        this.deleteManagersURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/delete-manager';
        this.updateProfileUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/users/update-profile/';
        this.foodParkUnitsUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/get-units-by-foodpark/';
        this.particularUnitUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/ord/list-unit-order/';
        this.unitsDriverUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/get-drivers-for-units';
        this.particularDriverWagesUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/ord/get-driver-wage/';
        this.createWagesUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/ord/create-wage/';
        this.voidOrderUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/ord/delete-order/';
        this.singleTerritoryUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/territories/';
        this.territoryURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/territories';
        this.googldriveUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/google/';
        this.googlsheetUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/google/googlesheetdetail';
        this.unitLocationsHub = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/deliveryhub_units/';
        this.territoryDriverURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/driversinterritory';
        this.companyDriverURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/drivers_company';
        this.deliveryhub_units = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/deliveryhub_units/';
        this.foodParkURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel';
        this.emailManagerURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/send-email-manager';
        this.countriesURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/countries';
        this.statesURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/territories/stateSearch';
        this.authAccessURL = 'https://api.moltin.com/oauth/access_token';
        this.fileUploadURL = 'https://api.moltin.com/v2/files';
        this.singleStateUrl = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/states/';
        this.foodParkManagerURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/foodparkmanagers';
        this.updateUnitURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/update-unit-data/';
        this.unitManagerURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/food_parks/unitmanagers';
        this.refundToCustomerURL = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + 'api/v1/rel/refund/customer/';
        this.googleUser = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + "/api/v1/rel/google/";
        this.molCategoryDetail = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + "api/v1/mol/companies/";
        this.getDriverByHub = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + "api/v1/ord/hub/food_parks/";
        this.weekreconbydate = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + "api/v1/rel/weekreconbydate/";
      }

      _createClass(ProfileService, [{
        key: "greenMoneyPayment",
        value: function greenMoneyPayment(data) {
          return this.http.get(this.greenMoneyURL + data);
        }
      }, {
        key: "getSingleTerritory",
        value: function getSingleTerritory(id) {
          return this.http.get(this.singleTerritoryUrl + id);
        }
      }, {
        key: "getUserInfoAfterLogin",
        value: function getUserInfoAfterLogin() {
          return this.http.get(this.userInfo);
        } // getAuthToken(data):Observable<any>{
        //   return this.http.post(this.authAccessURL, data);
        // }
        // fileUpload(data, authObject):Observable<any>{
        //   const headers = new HttpHeaders({
        //     'Content-Type': 'multipart/form-data',
        //     'Authorization': `Bearer ${authObject.auth_token}`
        //   })
        //   return this.http.post(this.fileUploadURL, { headers: headers });
        // }

      }, {
        key: "weeklyhubMaster",
        value: function weeklyhubMaster(id, data) {
          return this.http.post("https://api.instamarkt.co/api/v1/ord/hubmasters/".concat(id, "/weeklydata"), data);
        }
      }, {
        key: "weeklyhubMember",
        value: function weeklyhubMember(id, data) {
          return this.http.post("https://api.instamarkt.co/api/v1/ord/hubmembers/".concat(id, "/weeklydata"), data);
        }
      }, {
        key: "voidOrder",
        value: function voidOrder(id) {
          return this.http.get(this.voidOrderUrl + id);
        }
      }, {
        key: "getHubwithUnits",
        value: function getHubwithUnits(id) {
          return this.http.get(this.unitLocationsHub + id);
        }
      }, {
        key: "getDeliveryHubsInCompany",
        value: function getDeliveryHubsInCompany(id) {
          return this.http.get(this.foodparkURL + "/delivery_hubs/" + id); //onlu hubs
        }
      }, {
        key: "getDeliveryHubsCompany",
        value: function getDeliveryHubsCompany(id) {
          return this.http.get(this.foodparkURL + id + "/units"); //onlu hubs
        }
      }, {
        key: "getLocationListInCompany",
        value: function getLocationListInCompany(id) {
          return this.http.get(this.foodparkURL + "/listlocation/" + id); //location with company id
        }
      }, {
        key: "getDeliveryHubandUnits",
        value: function getDeliveryHubandUnits(id) {
          return this.http.get(this.deliveryhub_units + id); //deliveryhubs and location
        }
      }, {
        key: "getLocationsInTerritory_id",
        value: function getLocationsInTerritory_id(id) {
          return this.http.get(this.foodparkURL + "/listlocationinterritory/" + id); //list locations in territoyid
        }
      }, {
        key: "getDriverswithterriId",
        value: function getDriverswithterriId(id) {
          return this.http.get(this.territoryDriverURL + "/" + id);
        }
      }, {
        key: "getTerritoryDrivers",
        value: function getTerritoryDrivers(id) {
          return this.http.get(this.territoryDriverURL + "/" + id);
        }
      }, {
        key: "getDriverswithCompanyId",
        value: function getDriverswithCompanyId(id) {
          return this.http.get(this.companyDriverURL + "/" + id);
        }
      }, {
        key: "getEditUnits",
        value: function getEditUnits(company_id, id, data) {
          return this.http.put(this.unitURL + company_id + "/units/" + id, data);
        }
      }, {
        key: "getEditHub",
        value: function getEditHub(id, data) {
          return this.http.put(this.editHubURL + id, data);
        }
      }, {
        key: "onManagerEmailSubmit",
        value: function onManagerEmailSubmit(data) {
          return this.http.post(this.emailManagerURL, data);
        }
      }, {
        key: "getHubwithTerrId",
        value: function getHubwithTerrId(id) {
          return this.http.get(this.foodParkURL + "/listhubs/" + id);
        }
      }, {
        key: "getLocationwithTerrId",
        value: function getLocationwithTerrId(id) {
          return this.http.get(this.foodParkURL + "/listlocations/" + id);
        }
      }, {
        key: "getHubwithTerriID",
        value: function getHubwithTerriID(id) {
          return this.http.get(this.foodparkURL + "/hubs/" + id);
        }
      }, {
        key: "getLocationswithTerriID",
        value: function getLocationswithTerriID(id) {
          return this.http.get(this.foodparkURL + "/units/" + id);
        }
      }, {
        key: "getlocationCompanyId",
        value: function getlocationCompanyId(id) {
          return this.http.get(this.foodparkURL + "/listlocation/" + id);
        }
      }, {
        key: "createDriverWages",
        value: function createDriverWages(id, data) {
          return this.http.post(this.createWagesUrl + id, data);
        }
      }, {
        key: "getParticularDriverWages",
        value: function getParticularDriverWages(id) {
          return this.http.get(this.particularDriverWagesUrl + id);
        }
      }, {
        key: "getUnitsDriver",
        value: function getUnitsDriver(data) {
          return this.http.post(this.unitsDriverUrl, data);
        }
      }, {
        key: "refundAmountToCustomer",
        value: function refundAmountToCustomer(id) {
          return this.http.get(this.refundToCustomerURL + id);
        }
      }, {
        key: "getParticularUnitData",
        value: function getParticularUnitData(id) {
          return this.http.get(this.particularUnitUrl + id);
        }
      }, {
        key: "createlegrambot",
        value: function createlegrambot(token, companyId) {
          return this.http.post(this.telegrambotURL + 'create-telegram-support-bot/' + companyId, token);
        }
      }, {
        key: "uploadImageTodrive",
        value: function uploadImageTodrive(companyId, data) {
          return this.http.post(this.googldriveUrl + companyId + "/" + 'imageuploadtodrive', data);
        }
      }, {
        key: "uploadCategoryDetail",
        value: function uploadCategoryDetail(companyId, data) {
          return this.http.post(this.molCategoryDetail + companyId + "/" + 'categories', data);
        }
      }, {
        key: "removeCategoryMol",
        value: function removeCategoryMol(companyId, categoryId) {
          return this.http["delete"](this.molCategoryDetail + companyId + "/" + 'categories/' + categoryId);
        }
      }, {
        key: "updateCategoryDetail",
        value: function updateCategoryDetail(companyId, categoryId, data) {
          //this.companyProfileURl+companyId+"/"+"images"
          return this.http.put(this.molCategoryDetail + companyId + "/" + 'categories/' + categoryId, data);
        }
      }, {
        key: "foodParkUnits",
        value: function foodParkUnits(id) {
          return this.http.get(this.foodParkUnitsUrl + id);
        }
      }, {
        key: "updateUserProfile",
        value: function updateUserProfile(id, data) {
          return this.http.post(this.updateProfileUrl + id, data);
        }
      }, {
        key: "deleteManager",
        value: function deleteManager(data) {
          return this.http.post(this.deleteManagersURL, data);
        }
      }, {
        key: "addManagers",
        value: function addManagers(data) {
          return this.http.post(this.addManagersURL, data);
        }
      }, {
        key: "editManagers",
        value: function editManagers(data, user_id) {
          return this.http.put("".concat(this.editManagersURL).concat(user_id), data);
        }
      }, {
        key: "assignManager",
        value: function assignManager(data) {
          return this.http.put(this.assignManagersURL, data);
        }
      }, {
        key: "getAllUnitListData",
        value: function getAllUnitListData() {
          return this.http.get(this.getUnitListURL);
        }
      }, {
        key: "getCompanyprofileUser",
        value: function getCompanyprofileUser(id) {
          return this.http.get(this.getProfileUserURL + id);
        }
      }, {
        key: "updateComapnydetails",
        value: function updateComapnydetails(companyId, data) {
          return this.http.put(this.updatecompanyProfileURl + companyId, data);
        }
      }, {
        key: "uploadCompanyProfile",
        value: function uploadCompanyProfile(companyId, data) {
          return this.http.post(this.companyProfileURl + companyId + "/" + "images", data);
        }
      }, {
        key: "uploadFeaturePhoto",
        value: function uploadFeaturePhoto(companyId, data) {
          return this.http.post(this.companyFeaturedProfileURl + companyId + "/" + "featureddish", data);
        }
      }, {
        key: "getAllUnits",
        value: function getAllUnits(companyId) {
          return this.http.get(this.unitURL + companyId + '/units');
        }
      }, {
        key: "getAllFoodPark",
        value: function getAllFoodPark() {
          return this.http.get(this.foodparkURL);
        }
      }, {
        key: "getAllUnitsListWithFoodParkId",
        value: function getAllUnitsListWithFoodParkId(foodparkId) {
          return this.http.get(this.foodparkURL + '/' + foodparkId + '/units');
        }
      }, {
        key: "deleteUnitsListWithFoodParkId",
        value: function deleteUnitsListWithFoodParkId(data) {
          return this.http["delete"](this.foodparkURL + '/' + data.foodparkId + '/units' + '/' + data.unitId);
        }
      }, {
        key: "getAllDriversListWithFoodParkId",
        value: function getAllDriversListWithFoodParkId(foodparkId) {
          return this.http.get(this.foodparkURL + '/' + foodparkId + '/drivers');
        }
      }, {
        key: "deleteDriversWithFoodParkId",
        value: function deleteDriversWithFoodParkId(data) {
          console.log('dataataaa', data);
          return this.http["delete"](this.foodparkURL + '/' + data.foodparkId + '/drivers' + '/' + data.userId);
        }
      }, {
        key: "getallfoodparkmgr",
        value: function getallfoodparkmgr() {
          return this.http.get(this.foodparkmgrURL);
        }
      }, {
        key: "getAllTerritory",
        value: function getAllTerritory() {
          return this.http.get(this.territoryURL);
        }
      }, {
        key: "getAllCountries",
        value: function getAllCountries() {
          return this.http.get(this.countriesURL);
        }
      }, {
        key: "getAllState",
        value: function getAllState(data) {
          return this.http.post(this.statesURL, data);
        }
      }, {
        key: "getState",
        value: function getState(data) {
          return this.http.get("".concat(this.singleStateUrl, "filter/").concat(data));
        }
      }, {
        key: "getTerritory",
        value: function getTerritory(data) {
          return this.http.get("".concat(this.singleTerritoryUrl, "filter/").concat(data));
        }
      }, {
        key: "getAllCompany",
        value: function getAllCompany() {
          return this.http.get(this.companyURL);
        }
      }, {
        key: "deleteCompany",
        value: function deleteCompany(id) {
          return this.http["delete"](this.companyURL + "/" + id);
        }
      }, {
        key: "deleteTerritory",
        value: function deleteTerritory(id) {
          return this.http["delete"](this.territoryURL + "/" + id);
        }
      }, {
        key: "getAllDrivers",
        value: function getAllDrivers(foodParkId) {
          return this.http.get(this.foodparkURL + '/' + foodParkId + "/drivers");
        }
      }, {
        key: "getAllDriversforRecon",
        value: function getAllDriversforRecon(foodParkId, data) {
          return this.http.post(this.getDriverByHub + foodParkId + "/drivers", data);
        }
      }, {
        key: "getWeeklyrecon",
        value: function getWeeklyrecon(data) {
          // http://localhost:1338/api/v1/rel/weekreconbydate
          return this.http.post('https://api.instamarkt.co/api/v1/rel/weekreconbydate', data);
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          return this.http.get(this.Category);
        }
      }, {
        key: "addGoogleUser",
        value: function addGoogleUser(data) {
          return this.http.post(this.googleUser + 'adduser', data);
        }
      }, {
        key: "getGoogleUser",
        value: function getGoogleUser(id) {
          return this.http.get(this.googleUser + 'getuser/' + id);
        }
      }, {
        key: "getAllSecleted",
        value: function getAllSecleted(data) {
          return this.http.post("https://api.instamarkt.co/api/v1/rel/getSelectCategory", data);
        }
      }, {
        key: "getunitById",
        value: function getunitById(companyId, id) {
          return this.http.get(this.unitURL + '/' + companyId + "/units/" + id);
        }
      }, {
        key: "getAllUnitOrder",
        value: function getAllUnitOrder(companyId, id) {
          // return this.http.get(this.unitURL+companyId+"/units/"+id+"/active_orders");
          return this.http.get("https://api.instamarkt.co/api/v1/rel/food_parks/units/voidrefund/active_orders/30149");
        }
      }, {
        key: "getallfoodparkmgrorder",
        value: function getallfoodparkmgrorder(id, data) {
          // return this.http.get(this.foodparkURL+"/"+id+"/units/active_orders" Kumar i changed the api https://api.instamarkt.co/api/v1/rel/food_parks/units/voidrefund/active_orders/30235 this to https://api.instamarkt.co/api/v1/rel/food_parks/units/order/active_orders/30235);
          return this.http.put("https://api.instamarkt.co/api/v1/rel/food_parks/units/order/active_orders/".concat(id), data);
        }
      }, {
        key: "getVoidData",
        value: function getVoidData(data) {
          return this.http.post('https://api.instamarkt.co/api/v1/ord/voidorders', data);
        }
      }, {
        key: "getRefundVoidData",
        value: function getRefundVoidData(data) {
          return this.http.post('https://api.instamarkt.co/api/v1/ord/voidrefundgreenmoney', data);
        }
      }, {
        key: "getOrderProductDetails",
        value: function getOrderProductDetails() {
          return this.http.get('https://api.instamarkt.co/api/v1/ord/list-unit-order-items/2164');
        }
      }, {
        key: "addUnitToHub",
        value: function addUnitToHub(foodParkId, unitId) {
          return this.http.post(this.foodparkURL + "/" + foodParkId + "/" + "units", unitId);
        }
      }, {
        key: "getDailyPayoutList",
        value: function getDailyPayoutList() {
          return this.http.get(this.dailyPayout);
        }
      }, {
        key: "getDailyPayout",
        value: function getDailyPayout(company_id, data) {
          return this.http.post(this.dailyPayoutURL + "/" + company_id, data);
        }
      }, {
        key: "DriverDetails",
        value: function DriverDetails(food_id, id) {
          return this.http.get("https://api.instamarkt.co/api/v1/rel/food_parks/".concat(food_id, "/drivers/").concat(id));
        }
      }, {
        key: "getextraDeatils",
        value: function getextraDeatils() {
          return this.http.get("https://api.instamarkt.co/api/v1/rel/food_parks/30149/drivers/11994");
        }
      }, {
        key: "setDriverToOrder",
        value: function setDriverToOrder(id, driverId, orderId) {
          return this.http.put(this.foodparkURL + "/" + id + "/orders/" + orderId, {
            driver_id: driverId
          });
        }
      }, {
        key: "getCompany_unitid",
        value: function getCompany_unitid(id, updateId) {
          return this.http.put(this.unitURL + id + "/updateunitid", updateId);
        }
      }, {
        key: "getCompany_foodparkid",
        value: function getCompany_foodparkid(id, updateId) {
          return this.http.put(this.unitURL + id + "/updatefoodparkid", updateId);
        }
      }, {
        key: "addTerritory",
        value: function addTerritory(data) {
          return this.http.post(this.territoryURL, data);
        }
      }, {
        key: "addUnit",
        value: function addUnit(data, companyId) {
          return this.http.post(this.unitURL + companyId + '/units', data);
        }
      }, {
        key: "addFoodParkmgr",
        value: function addFoodParkmgr(data) {
          return this.http.post(this.addDriverURL, data);
        }
      }, {
        key: "vendorRegister",
        value: function vendorRegister(data) {
          return this.http.post(this.addDriverURL, data);
        }
      }, {
        key: "addFoodPark",
        value: function addFoodPark(data) {
          return this.http.post(this.addFoodParkURL, data);
        }
      }, {
        key: "addTele",
        value: function addTele(data) {
          return this.http.post(this.addTeleURL, data);
        }
      }, {
        key: "updateCompanyCredentials",
        value: function updateCompanyCredentials(companyId, data) {
          return this.http.put(this.unitURL + companyId, data);
        }
      }, {
        key: "addDriver",
        value: function addDriver(data) {
          return this.http.post(this.addDriverURL, data);
        }
      }, {
        key: "addfoodParkDriver",
        value: function addfoodParkDriver(foodParkId, data) {
          return this.http.post(this.addDriverFoodParkURL + foodParkId + "/drivers", data);
        }
      }, {
        key: "setManagers",
        value: function setManagers(data) {
          return this.http.post(this.setManagersURL, data);
        }
      }, {
        key: "setDriverManagers",
        value: function setDriverManagers(data) {
          return this.http.post(this.setDriverManagersURL, data);
        }
      }, {
        key: "getAllManager",
        value: function getAllManager(data) {
          return this.http.post(this.getManagerURL, data);
        }
      }, {
        key: "getManagerOnTerritoryid",
        value: function getManagerOnTerritoryid(data) {
          return this.http.get(this.getManagerOnTerritoryURL + "/" + data);
        }
      }, {
        key: "getCompanyprofile",
        value: function getCompanyprofile(id) {
          return this.http.get(this.getProfileURL + id);
        }
      }, {
        key: "uploadaddons",
        value: function uploadaddons(data, id) {
          return this.http.post(this.googldriveUrl + id + '/uploadmenu', data);
        }
      }, {
        key: "updateGoogleSheetDetails",
        value: function updateGoogleSheetDetails(id, data) {
          return this.http.put(this.updateUsergooglesheetUrl + id, data);
        }
      }, {
        key: "updateUnitData",
        value: function updateUnitData(id, data) {
          return this.http.put(this.updateUnitURL + id, data);
        }
      }, {
        key: "uploadGoogleMenuSheet",
        value: function uploadGoogleMenuSheet() {
          return this.http.post(this.uploadGoogleSheetUrl, '');
        }
      }, {
        key: "getAllProductList",
        value: function getAllProductList(id) {
          return this.http.get(this.productListUrl + id + '/menuitems');
        }
      }, {
        key: "getGoogleAuthenication",
        value: function getGoogleAuthenication() {
          return this.http.get(this.googldriveUrl + 'auth');
        }
      }, {
        key: "createfolderInGoogleDrive",
        value: function createfolderInGoogleDrive(data) {
          console.log('dataaaa', data);
          return this.http.post(this.googldriveUrl + 'createfolder', data);
        }
      }, {
        key: "getFoldersCreatedInDrive",
        value: function getFoldersCreatedInDrive(data) {
          console.log('dataaaa', data);
          return this.http.post(this.googldriveUrl + 'fetchfolderscreated', data);
        }
      }, {
        key: "getAllGoogleSheetDetails",
        value: function getAllGoogleSheetDetails(data) {
          return this.http.post(this.googlsheetUrl, data);
        }
      }, {
        key: "getCategory",
        value: function getCategory(companyId) {
          return this.http.get(this.productListUrl + companyId + '/getactivecategoriesnames');
        }
      }, {
        key: "getProductById",
        value: function getProductById(id, categoryId, companyId) {
          return this.http.get(this.productListUrl + companyId + '/categories/' + categoryId + "/menuitems/" + id);
        }
      }, {
        key: "getCompanyById",
        value: function getCompanyById(id) {
          return this.http.get(this.companyURL + "/" + id);
        }
      }, {
        key: "getstatusProf",
        value: function getstatusProf(data, comp_id, menu_id) {
          return this.http.put("https://api.instamarkt.co/api/v1/mol/companies/".concat(comp_id, "/menuitems/").concat(menu_id), data);
        }
      }, {
        key: "getCompanyByCompanyId",
        value: function getCompanyByCompanyId(id) {
          return this.http.get(this.companyURL1 + "/" + id);
        }
      }, {
        key: "getFoodParkManagerByCompanyId",
        value: function getFoodParkManagerByCompanyId(id) {
          return this.http.get(this.foodParkManagerURL + "/" + id);
        }
      }, {
        key: "getUnitManagerByCompanyId",
        value: function getUnitManagerByCompanyId(id) {
          return this.http.get(this.unitManagerURL + "/" + id);
        }
      }, {
        key: "addOwnCategory",
        value: function addOwnCategory(data) {
          return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_2__["config"].getEnvironmentVariable('endPoint') + "api/v1/rel/category", data);
        }
      }, {
        key: "getLocation",
        value: function getLocation(id) {
          return this.http.get("https://api.instamarkt.co/api/v1/rel/food_parks/location/".concat(id));
        }
      }, {
        key: "getWeekreconbydate",
        value: function getWeekreconbydate(id, data) {
          return this.http.post("".concat(this.weekreconbydate, "/").concat(id), data);
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/breadcrumb/breadcrumb.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
    \***********************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppSharedBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BreadcrumbComponent_ng_template_10_li_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r1.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
      }
    }

    function BreadcrumbComponent_ng_template_10_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var url_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r1.title);
      }
    }

    function BreadcrumbComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_ng_template_10_li_0_Template, 3, 2, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_template_10_li_1_Template, 2, 1, "li", 11);
      }

      if (rf & 2) {
        var last_r2 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r2);
      }
    }

    var BreadcrumbComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this8 = this;

        _classCallCheck(this, BreadcrumbComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return _this8.activatedRoute;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
          while (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) {
          return route.outlet === 'primary';
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) {
          return route.data;
        })).subscribe(function (event) {
          _this8.titleService.setTitle(event['title']);

          _this8.pageInfo = event;
        });
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
      return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
    };

    BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      inputs: {
        layout: "layout"
      },
      decls: 11,
      vars: 2,
      consts: [[1, "page-breadcrumb"], [1, "row"], [1, "col-5", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center"], [1, "col-7", "align-self-center"], [1, "d-flex", "no-block", "justify-content-end", "align-items-center"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["ngFor", "", 3, "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BreadcrumbComponent_ng_template_10_Template, 2, 2, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageInfo == null ? null : ctx.pageInfo.urls);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './breadcrumb.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      }, {
        layout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/header-navigation/navigation.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
    \******************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppSharedHeaderNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent(modalService, routes, commonService) {
        _classCallCheck(this, NavigationComponent);

        this.modalService = modalService;
        this.routes = routes;
        this.commonService = commonService;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {};
        this.showSearch = false; // This is for Notifications

        this.notifications = [{
          btn: 'btn-danger',
          icon: 'ti-link',
          title: 'Luanch Admin',
          subject: 'Just see the my new admin!',
          time: '9:30 AM'
        }, {
          btn: 'btn-success',
          icon: 'ti-calendar',
          title: 'Event today',
          subject: 'Just a reminder that you have event',
          time: '9:10 AM'
        }, {
          btn: 'btn-info',
          icon: 'ti-settings',
          title: 'Settings',
          subject: 'You can customize this template as you want',
          time: '9:08 AM'
        }, {
          btn: 'btn-primary',
          icon: 'ti-user',
          title: 'Pavan kumar',
          subject: 'Just see the my admin!',
          time: '9:00 AM'
        }]; // This is for Mymessages

        this.mymessages = [{
          useravatar: 'assets/images/users/1.jpg',
          status: 'online',
          from: 'Pavan kumar',
          subject: 'Just see the my admin!',
          time: '9:30 AM'
        }, {
          useravatar: 'assets/images/users/2.jpg',
          status: 'busy',
          from: 'Sonu Nigam',
          subject: 'I have sung a song! See you at',
          time: '9:10 AM'
        }, {
          useravatar: 'assets/images/users/2.jpg',
          status: 'away',
          from: 'Arijit Sinh',
          subject: 'I am a singer!',
          time: '9:08 AM'
        }, {
          useravatar: 'assets/images/users/4.jpg',
          status: 'offline',
          from: 'Pavan kumar',
          subject: 'Just see the my admin!',
          time: '9:00 AM'
        }];
        this.user = this.commonService.checkUser().user;
      }

      _createClass(NavigationComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.routes.navigate(['/login']);
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      outputs: {
        toggleSidebar: "toggleSidebar"
      },
      decls: 22,
      vars: 2,
      consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-md-block"], ["href", "javascript:void(0)", "data-sidebartype", "mini-sidebar", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "sl-icon-menu", "font-20"], [1, "navbar-nav", "float-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["src", "assets/images/users/nouser.jpeg", "alt", "user", "width", "31", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "user-dd"], [1, "with-arrow"], [1, "bg-primary"], [1, "d-flex", "no-block", "align-items-center", "p-15", "bg-primary", "text-white", "m-b-10"], [1, ""], ["src", "assets/images/users/nouser.jpeg", "alt", "user", "width", "60", 1, "img-circle"], [1, "m-l-10"], [1, "m-b-0"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() {
            return ctx.toggleSidebar.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_19_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username && ctx.user.username.split("@")[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html'
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]
        }];
      }, {
        toggleSidebar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/sidebar/menu-items.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/sidebar/menu-items.ts ***!
    \**********************************************/

  /*! exports provided: FOODPARKMGRROUTES, ADMINROUTE, UNITMGRROUTE, ROUTES */

  /***/
  function srcAppSharedSidebarMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOODPARKMGRROUTES", function () {
      return FOODPARKMGRROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADMINROUTE", function () {
      return ADMINROUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNITMGRROUTE", function () {
      return UNITMGRROUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });

    var FOODPARKMGRROUTES = [{
      path: '/forms/foodparks',
      title: 'Hub | Driver Mgmt',
      icon: '/assets/images/driver.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/hubs',
      title: 'Hubs',
      icon: '/assets/images/order_reconcillation.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/hubmanager',
      title: 'Hubs Managers',
      icon: '/assets/images/order_reconcillation.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/drivers',
      title: 'Drivers',
      icon: '/assets/images/driver.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/foodpcgmgrorder',
      title: 'Orders | Reconciliation',
      icon: '/assets/images/order_reconcillation.png',
      "class": '',
      extralink: false,
      submenu: []
    }];
    var ADMINROUTE = [{
      path: '/forms/territory',
      title: 'Territory',
      icon: '/assets/images/driver.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/foodparks',
      title: 'Hub | Driver Mgmt',
      icon: '/assets/images/driver.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/company',
      title: 'Company',
      icon: '/assets/images/driver.png',
      "class": '',
      extralink: false,
      submenu: []
    }];
    var UNITMGRROUTE = [{
      path: '/forms/units',
      title: 'Units',
      icon: 'icon-Globe',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/units/order',
      title: 'Order',
      icon: 'icon-Globe',
      "class": '',
      extralink: false,
      submenu: []
    }];
    var ROUTES = [// {
    //     path: '',
    //     title: 'Personal',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Dashboards',
    //     icon: 'icon-Car-Wheel',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/dashboard/dashboard1',
    //             title: 'Dashboard 1',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/dashboard/dashboard2',
    //             title: 'Dashboard 2',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/dashboard/dashboard3',
    //             title: 'Dashboard 3',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Apps',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/apps/email',
    //     title: 'Email',
    //     icon: 'icon-Mailbox-Empty',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
      path: '/forms',
      title: 'Vendor Registration',
      icon: '/assets/images/vendor.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/menuitems',
      title: 'Menu | Google Sheets',
      icon: '/assets/images/menu.png',
      "class": '',
      extralink: false,
      submenu: [// {
        //     path: '/menuitems/view/:id',
        //     title: 'View Products',
        //     icon: '',
        //     class: '',
        //     extralink: false,
        //     submenu: []
        // },
      ]
    }, {
      path: '/forms/foodpcgmgrorder',
      title: 'Orders | Reconciliation',
      icon: '/assets/images/order_reconcillation.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '/forms/hubs',
      title: 'Hub Mgmt | Drivers',
      icon: '/assets/images/driver.png',
      "class": '',
      extralink: false,
      submenu: []
    }, {
      path: '',
      title: 'Sync to Google Sheets',
      icon: '/assets/images/google-sheets.png',
      "class": 'directlink',
      extralink: false,
      submenu: []
    }];
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu-items */
    "./src/app/shared/sidebar/menu-items.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function SidebarComponent_li_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavItem_r1.icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
      }
    }

    function SidebarComponent_li_7_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_7_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.addExpandClass(sidebarnavItem_r1.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sidebarnavItem_r1["class"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, sidebarnavItem_r1.icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
      }
    }

    function SidebarComponent_li_7_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_7_a_3_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r10.addExpandClass(sidebarnavItem_r1.title);
          return ctx_r10.uploadGoogleMenuSheet();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, sidebarnavItem_r1["class"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
      }
    }

    function SidebarComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_7_div_1_Template, 4, 4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_7_a_2_Template, 4, 10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_7_a_3_Template, 4, 7, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sidebarnavItem_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.showMenu === sidebarnavItem_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1["class"] !== "directlink" && !sidebarnavItem_r1.extralink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1["class"] == "directlink");
      }
    }

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(modalService, router, route, commonServices, toastr, ngxService, _ProfileService) {
        _classCallCheck(this, SidebarComponent);

        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.commonServices = commonServices;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ProfileService = _ProfileService;
        this.showMenu = '';
        this.showSubMenu = '';
        this.firstName = '';
        this.lastName = '';
      } // this is for the open close


      _createClass(SidebarComponent, [{
        key: "addExpandClass",
        value: function addExpandClass(element) {
          if (element === this.showMenu) {
            this.showMenu = '0';
          } else {
            this.showMenu = element;
          }
        }
      }, {
        key: "addActiveClass",
        value: function addActiveClass(element) {
          if (element === this.showSubMenu) {
            this.showSubMenu = '0';
          } else {
            this.showSubMenu = element;
          }
        } // End open close

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = this.commonServices.checkUser();
          this.firstName = user.user.vendor_name; // this.lastName = user.user.last_name;

          if (user.user && user.user.role == 'ADMIN') {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ADMINROUTE"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }

          if (user.user && user.user.role == 'OWNER') {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }

          if (user.user && user.user.role == 'FOODPARKMGR') {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["FOODPARKMGRROUTES"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }

          if (user.user && user.user.role == 'UNITMGR') {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["UNITMGRROUTE"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }
        }
        /**
         * Sync to Google Sheets
         */

      }, {
        key: "uploadGoogleMenuSheet",
        value: function uploadGoogleMenuSheet() {
          var _this9 = this;

          this.ngxService.start();

          this._ProfileService.uploadGoogleMenuSheet().subscribe(function (res) {
            _this9.ngxService.stop();

            if (res.success) {
              _this9.toastr.success("Sync successful");
            }
          }, function (error) {
            _this9.toastr.error('Sync failed, Please try again later');
          });
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_4__["CommonFunctionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 8,
      vars: 3,
      consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], ["ngbDropdown", "", 1, "user-profile", "m-t-20"], [1, "user-content", "hide-menu", "m-t-10"], [1, "m-b-10", "user-name", "font-medium"], ["class", "sidebar-item", 3, "selected", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark active", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark active", "href", "javascript:void(0);", 3, "ngClass", "click", 4, "ngIf"], [1, "nav-small-cap"], ["width", "20", 1, "img-fluid", "mr-2", 3, "src"], [1, "hide-menu"], [1, "sidebar-link", "waves-effect", "waves-dark", "active", 3, "routerLink", "ngClass", "click"], ["href", "javascript:void(0);", 1, "sidebar-link", "waves-effect", "waves-dark", "active", 3, "ngClass", "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_li_7_Template, 4, 6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.firstName, " ", ctx.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html'
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["CommonFunctionsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]
        }, {
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/spinner.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/spinner.component.ts ***!
    \*********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SpinnerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please wait...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent(router, document) {
        var _this10 = this;

        _classCallCheck(this, SpinnerComponent);

        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            _this10.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            _this10.isSpinnerVisible = false;
          }
        }, function () {
          _this10.isSpinnerVisible = false;
        });
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      inputs: {
        backgroundColor: "backgroundColor"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "spineer_width"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 8, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div><br/><br/>\n          <div class=\"spineer_width\">Please wait...</div>\n        </div>\n    </div>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/deployment.ts":
  /*!****************************************!*\
    !*** ./src/environments/deployment.ts ***!
    \****************************************/

  /*! exports provided: Production */

  /***/
  function srcEnvironmentsDeploymentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Production", function () {
      return Production;
    });

    var Production = true;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Matt\SFEZ_backoffice\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map