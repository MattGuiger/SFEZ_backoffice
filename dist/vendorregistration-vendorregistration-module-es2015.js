(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendorregistration-vendorregistration-module"],{

/***/ "./src/app/vendorregistration/vendorregistration.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/vendorregistration/vendorregistration.component.ts ***!
  \********************************************************************/
/*! exports provided: VendorRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRegistrationComponent", function() { return VendorRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commonFunctions.service */ "./src/app/services/commonFunctions.service.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_form_ngx_wizard_data_formData_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/form/ngx-wizard/data/formData.service */ "./src/app/form/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _app_form_ngx_wizard_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/form/ngx-wizard/workflow/workflow.service */ "./src/app/form/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _app_form_ngx_wizard_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/form/ngx-wizard/workflow/workflow.model */ "./src/app/form/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

















class VendorRegistrationComponent {
    constructor(workflowService, router, formDataService, route, toastr, _ProfileService, slimLoader, _CommonFunctionsService, _Router) {
        this.workflowService = workflowService;
        this.router = router;
        this.formDataService = formDataService;
        this.route = route;
        this.toastr = toastr;
        this._ProfileService = _ProfileService;
        this.slimLoader = slimLoader;
        this._CommonFunctionsService = _CommonFunctionsService;
        this._Router = _Router;
        this.productList = [];
        this.title = 'Please tell us about yourself.';
    }
    ngOnInit() {
        this.getAllProductList();
        this.personal = this.formDataService.getPersonal();
    }
    getAllProductList() {
        this.user = this._CommonFunctionsService.checkUser().user;
        this._ProfileService.getAllProductList(this.user.company_id).subscribe((res) => {
            this.productList = res;
        }, error => {
            debugger;
        });
    }
    openProduct(item) {
        this._Router.navigateByUrl('menuitems/view/' + item.category + '/' + item.id);
    }
    getDescription(description) {
        return description.length > 80 ? description.substr(0, 80) + "..." : description;
    }
    //Save button event Starts
    save(form) {
        if (!form.valid)
            return;
        this.formDataService.setPersonal(this.personal);
        let firstState = this.workflowService.getFirstInvalidStep(_app_form_ngx_wizard_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_7__["STEPS"].work);
        if (firstState.length > 0) {
        }
        ;
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
VendorRegistrationComponent.ɵfac = function VendorRegistrationComponent_Factory(t) { return new (t || VendorRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_form_ngx_wizard_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_form_ngx_wizard_data_formData_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
VendorRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VendorRegistrationComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function VendorRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'vendorregistration.component.html'
            }]
    }], function () { return [{ type: _app_form_ngx_wizard_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _app_form_ngx_wizard_data_formData_service__WEBPACK_IMPORTED_MODULE_5__["FormDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }, { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"] }, { type: _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vendorregistration/vendorregistration.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vendorregistration/vendorregistration.module.ts ***!
  \*****************************************************************/
/*! exports provided: VendorRegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRegistrationModule", function() { return VendorRegistrationModule; });
/* harmony import */ var _vendorregistration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendorregistration.component */ "./src/app/vendorregistration/vendorregistration.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _vendorregistration_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendorregistration.routing */ "./src/app/vendorregistration/vendorregistration.routing.ts");






// import { SpinnerComponent } from '../shared/spinner.component';







class VendorRegistrationModule {
}
VendorRegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VendorRegistrationModule });
VendorRegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VendorRegistrationModule_Factory(t) { return new (t || VendorRegistrationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
            ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_vendorregistration_routing__WEBPACK_IMPORTED_MODULE_8__["EcomRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VendorRegistrationModule, { declarations: [_vendorregistration_component__WEBPACK_IMPORTED_MODULE_0__["VendorRegistrationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VendorRegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _vendorregistration_component__WEBPACK_IMPORTED_MODULE_0__["VendorRegistrationComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                    ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_vendorregistration_routing__WEBPACK_IMPORTED_MODULE_8__["EcomRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/vendorregistration/vendorregistration.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/vendorregistration/vendorregistration.routing.ts ***!
  \******************************************************************/
/*! exports provided: EcomRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcomRoutes", function() { return EcomRoutes; });
/* harmony import */ var _vendorregistration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendorregistration.component */ "./src/app/vendorregistration/vendorregistration.component.ts");

const EcomRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _vendorregistration_component__WEBPACK_IMPORTED_MODULE_0__["VendorRegistrationComponent"],
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=vendorregistration-vendorregistration-module-es2015.js.map