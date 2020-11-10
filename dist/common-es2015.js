(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/form/ngx-wizard/data/formData.model.ts":
/*!********************************************************!*\
  !*** ./src/app/form/ngx-wizard/data/formData.model.ts ***!
  \********************************************************/
/*! exports provided: FormData, Personal, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personal", function() { return Personal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
//Wizard form data class Starts
class FormData {
    constructor() {
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.password = '';
        this.company_name = '';
        this.country_id = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    clear() {
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.company_name = '';
        this.password = '';
        this.country_id = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
//Wizard form data class Ends
//Personal tab data class starts
class Personal {
    constructor() {
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.password = '';
        this.company_name = '';
        this.country_id = '';
    }
}
//Personal tab data class ends
//Address tab data class starts
class Address {
    constructor() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
//Address tab data class Ends


/***/ }),

/***/ "./src/app/form/ngx-wizard/data/formData.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/form/ngx-wizard/data/formData.service.ts ***!
  \**********************************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formData.model */ "./src/app/form/ngx-wizard/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/form/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/form/ngx-wizard/workflow/workflow.model.ts");






class FormDataService {
    constructor(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    //Get Personal Tab Data
    getPersonal() {
        // Return the Personal data
        var personal = {
            first_name: this.formData.first_name,
            last_name: this.formData.last_name,
            email: this.formData.email,
            company_name: this.formData.company_name,
            password: this.formData.password,
            country_id: this.formData.country_id
        };
        return personal;
    }
    //Set Personal Tab Data
    setPersonal(data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.first_name = data.first_name;
        this.formData.last_name = data.last_name;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].personal);
    }
    //Get Work Tab Data
    getWork() {
        // Return the work type
        return this.formData.work;
    }
    //Set Work Tab Data
    setWork(data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].work);
    }
    //Get Address Tab Data
    getAddress() {
        // Return the Address data
        var address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }
    //Set Address Tab Data
    setAddress(data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].address);
    }
    getFormData() {
        // Return the entire Form Data
        return this.formData;
    }
    resetFormData() {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }
    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    }
}
FormDataService.ɵfac = function FormDataService_Factory(t) { return new (t || FormDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"])); };
FormDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormDataService, factory: FormDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/form/ngx-wizard/workflow/workflow.model.ts":
/*!************************************************************!*\
  !*** ./src/app/form/ngx-wizard/workflow/workflow.model.ts ***!
  \************************************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
const STEPS = {
    personal: 'personal',
    work: 'work',
    address: 'address',
    result: 'result'
};


/***/ }),

/***/ "./src/app/form/ngx-wizard/workflow/workflow.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/form/ngx-wizard/workflow/workflow.service.ts ***!
  \**************************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.model */ "./src/app/form/ngx-wizard/workflow/workflow.model.ts");



class WorkflowService {
    constructor() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].personal, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].address, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].result, valid: false }
        ];
    }
    validateStep(step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    }
    resetSteps() {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(element => {
            element.valid = false;
        });
    }
    getFirstInvalidStep(step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            let item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    }
}
WorkflowService.ɵfac = function WorkflowService_Factory(t) { return new (t || WorkflowService)(); };
WorkflowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkflowService, factory: WorkflowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map