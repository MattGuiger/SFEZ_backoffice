(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuitems-menuitems-module"],{

/***/ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es2015.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es2015.js ***!
  \*********************************************************************/
/*! exports provided: UiSwitchComponent, UiSwitchModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return UI_SWITCH_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



function UiSwitchComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.getColor("checkedTextColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.checkedLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.checkedLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.getColor("uncheckedTextColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.uncheckedLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.uncheckedLabel);
} }
const _c0 = ["*"];
const UI_SWITCH_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UI_SWITCH_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => UiSwitchComponent)),
    multi: true,
};
class UiSwitchComponent {
    /**
     * @param {?=} config
     * @param {?=} cdr
     */
    constructor(config = {}, cdr) {
        this.cdr = cdr;
        /**
         * Emits changed value
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits DOM event
         */
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits changed value
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTouchedCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => { });
        this.onChangeCallback = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => { });
        this.size = (config && config.size) || 'medium';
        this.color = config && config.color;
        this.switchOffColor = config && config.switchOffColor;
        this.switchColor = config && config.switchColor;
        this.defaultBgColor = config && config.defaultBgColor;
        this.defaultBoColor = config && config.defaultBoColor;
        this.checkedLabel = config && config.checkedLabel;
        this.uncheckedLabel = config && config.uncheckedLabel;
        this.checkedTextColor = config && config.checkedTextColor;
        this.uncheckedTextColor = config && config.uncheckedTextColor;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set checked(v) {
        this._checked = v !== false;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set disabled(v) {
        this._disabled = v !== false;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set reverse(v) {
        this._reverse = v !== false;
    }
    /**
     * @return {?}
     */
    get reverse() {
        return this._reverse;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set loading(v) {
        this._loading = v !== false;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?=} flag
     * @return {?}
     */
    getColor(flag = '') {
        if (flag === 'borderColor') {
            return this.defaultBoColor;
        }
        if (flag === 'switchColor') {
            if (this.reverse) {
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            }
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (flag === 'checkedTextColor') {
            return this.reverse ? this.uncheckedTextColor : this.checkedTextColor;
        }
        if (flag === 'uncheckedTextColor') {
            return this.reverse ? this.checkedTextColor : this.uncheckedTextColor;
        }
        if (this.reverse) {
            return !this.checked ? this.color : this.defaultBgColor;
        }
        return this.checked ? this.color : this.defaultBgColor;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        // Component events
        this.change.emit(this.checked);
        this.valueChange.emit(this.checked);
        this.changeEvent.emit(event);
        // value accessor callbacks
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onToggle(event) {
        if (this.beforeChange) {
            this._beforeChange = this.beforeChange.subscribe((/**
             * @param {?} confirm
             * @return {?}
             */
            (confirm) => {
                if (confirm) {
                    this.onClick(event);
                }
            }));
        }
        else {
            this.onClick(event);
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
        if (this.cdr) {
            this.cdr.markForCheck();
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._beforeChange) {
            this._beforeChange.unsubscribe();
        }
    }
}
UiSwitchComponent.ɵfac = function UiSwitchComponent_Factory(t) { return new (t || UiSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](UI_SWITCH_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UiSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiSwitchComponent, selectors: [["ui-switch"]], hostBindings: function UiSwitchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiSwitchComponent_click_HostBindingHandler($event) { return ctx.onToggle($event); });
    } }, inputs: { size: "size", color: "color", switchOffColor: "switchOffColor", switchColor: "switchColor", defaultBgColor: "defaultBgColor", defaultBoColor: "defaultBoColor", checkedLabel: "checkedLabel", uncheckedLabel: "uncheckedLabel", checkedTextColor: "checkedTextColor", uncheckedTextColor: "uncheckedTextColor", checked: "checked", disabled: "disabled", reverse: "reverse", loading: "loading", beforeChange: "beforeChange" }, outputs: { change: "change", changeEvent: "changeEvent", valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([UI_SWITCH_CONTROL_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 4, vars: 20, consts: [["type", "button", "role", "switch", 1, "switch"], ["class", "switch-pane", 4, "ngIf"], [1, "switch-pane"], [1, "switch-label-checked"], [1, "switch-label-unchecked"]], template: function UiSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UiSwitchComponent_label_1_Template, 5, 8, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.getColor())("border-color", ctx.getColor("borderColor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked", ctx.checked)("disabled", ctx.disabled)("loading", ctx.loading)("switch-large", ctx.size === "large")("switch-medium", ctx.size === "medium")("switch-small", ctx.size === "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkedLabel || ctx.uncheckedLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.getColor("switchColor"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });
/** @nocollapse */
UiSwitchComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [UI_SWITCH_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
UiSwitchComponent.propDecorators = {
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    switchOffColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    switchColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultBgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultBoColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkedLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uncheckedLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkedTextColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uncheckedTextColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-switch',
                template: "<button\n  type=\"button\"\n  class=\"switch\"\n  role=\"switch\"\n  [attr.aria-checked]=\"checked\"\n  [class.checked]=\"checked\"\n  [class.disabled]=\"disabled\"\n  [class.loading]=\"loading\"\n  [class.switch-large]=\"size === 'large'\"\n  [class.switch-medium]=\"size === 'medium'\"\n  [class.switch-small]=\"size === 'small'\"\n  [style.background-color]=\"getColor()\"\n  [style.border-color]=\"getColor('borderColor')\"\n>\n  <label class=\"switch-pane\" *ngIf=\"checkedLabel || uncheckedLabel\">\n    <span\n      [attr.aria-label]=\"this.checkedLabel\"\n      class=\"switch-label-checked\"\n      [style.color]=\"getColor('checkedTextColor')\"\n      >{{ this.checkedLabel }}</span\n    >\n    <span\n      [attr.aria-label]=\"this.uncheckedLabel\"\n      class=\"switch-label-unchecked\"\n      [style.color]=\"getColor('uncheckedTextColor')\"\n      >{{ this.uncheckedLabel }}</span\n    >\n  </label>\n  <small [style.background]=\"getColor('switchColor')\">\n    <ng-content></ng-content>\n  </small>\n</button>\n",
                providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [UI_SWITCH_OPTIONS]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switchOffColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switchColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultBgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultBoColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkedLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uncheckedLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkedTextColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uncheckedTextColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], beforeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiSwitchModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: UiSwitchModule,
            providers: [
                { provide: UI_SWITCH_OPTIONS, useValue: config || {} }
            ]
        };
    }
}
UiSwitchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiSwitchModule });
UiSwitchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiSwitchModule_Factory(t) { return new (t || UiSwitchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiSwitchModule, { declarations: function () { return [UiSwitchComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]; }, exports: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        UiSwitchComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSwitchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    UiSwitchComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    UiSwitchComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ui-switch.es2015.js.map

/***/ }),

/***/ "./src/app/menuitems/edit/edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menuitems/edit/edit.component.ts ***!
  \**************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commonFunctions.service */ "./src/app/services/commonFunctions.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es2015.js");













function EditComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", (ctx_r0.productDetails == null ? null : ctx_r0.productDetails.category) == (item_r6 == null ? null : item_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function EditComponent_li_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const j_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", (ctx_r1.productDetails == null ? null : ctx_r1.productDetails.optioncategory) ? ctx_r1.productDetails == null ? null : ctx_r1.productDetails.optioncategory : "", " : ", item_r7, " (+", (ctx_r1.productDetails == null ? null : ctx_r1.productDetails.price[0] == null ? null : ctx_r1.productDetails.price[0].currency) == "USD" ? "$" : ctx_r1.productDetails == null ? null : ctx_r1.productDetails.price[0] == null ? null : ctx_r1.productDetails.price[0].currency, " ", ctx_r1.parseFloat(ctx_r1.productDetails == null ? null : ctx_r1.productDetails.optionsingleprice[j_r8]), ") ");
} }
function EditComponent_li_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r9, " (+", (ctx_r2.productDetails == null ? null : ctx_r2.productDetails.price[0] == null ? null : ctx_r2.productDetails.price[0].currency) == "USD" ? "$" : ctx_r2.productDetails == null ? null : ctx_r2.productDetails.price[0] == null ? null : ctx_r2.productDetails.price[0].currency, " ", ctx_r2.parseFloat(ctx_r2.productDetails == null ? null : ctx_r2.productDetails.addonprice[i_r10]), ")");
} }
function EditComponent_li_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditComponent_li_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11, "");
} }
function EditComponent_li_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/menuitems"]; };
class EditComponent {
    constructor(activeRoute, toastr, _ProfileService, _CommonFunctionsService) {
        this.activeRoute = activeRoute;
        this.toastr = toastr;
        this._ProfileService = _ProfileService;
        this._CommonFunctionsService = _CommonFunctionsService;
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this.id = params['id'];
            this.categoryId = params['categoryId'];
            this.getProductById(this.id, this.categoryId);
        });
        this.getCategory();
    }
    getCategory() {
        this.user = this._CommonFunctionsService.checkUser().user;
        this._ProfileService.getCategory(this.user.company_id).subscribe((res) => {
            this.categories = res.data;
        }, error => {
            this.toastr.error('something went wrong! please try again');
        });
    }
    getProductById(id, categoryId) {
        this.user = this._CommonFunctionsService.checkUser().user;
        this._ProfileService.getProductById(id, categoryId, this.user.company_id).subscribe((res) => {
            if (res.status == 200) {
                this.productDetails = res.data[0];
                console.log(this.productDetails, 'productDetails');
            }
        }, error => {
            this.toastr.error('something went wrong! please try again');
        });
    }
    parseFloat(num) {
        return this._CommonFunctionsService.numberFormatt(num, 2);
    }
    // goBack(){
    //   this._Router.navigateByUrl('/menuitems')
    // }
    onChange(event) {
        console.log(event, 'event');
        const data = {
            "title": this.productDetails.title,
            "price": this.productDetails.title,
            "status": this.productDetails.status,
            "description": this.productDetails.description,
            "addOnMultiple": this.productDetails.addonmultiple == 'null' ? this.productDetails.addonmultiple : "",
            "addOnPrice": this.productDetails.addonprice == 'null' ? this.productDetails.addonprice : "",
            "optionSingle": this.productDetails.optionsingle == 'null' ? this.productDetails.optionsingle : "",
            "optionCategory": this.productDetails.optioncategory,
            "instructions": this.productDetails.instruction,
            "drill_in": event ? 1 : 0
        };
        this.user = this._CommonFunctionsService.checkUser().user;
        this._ProfileService.getstatusProf(data, this.user.company_id, this.productDetails.id).subscribe((res) => {
            console.log(res);
        });
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["ng-component"]], decls: 87, vars: 14, consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], ["action", "#"], [1, "form-body"], [1, "card-title"], [1, "col-md-6"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", 1, "form-control", 3, "value"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "price", "aria-label", "price", "aria-describedby", "basic-addon1", 1, "form-control", 3, "value"], ["data-placeholder", "Choose a Category", "tabindex", "1", 1, "form-control"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "checked", "change"], [1, "card-title", "m-t-40"], [1, "col-md-12"], ["rows", "4", 1, "form-control"], [1, "col-md-3"], [1, "box-title", "m-t-40"], [4, "ngFor", "ngForOf"], [1, "col-md-9"], [1, "list-unstyled"], [4, "ngIf"], [1, "card-title", "m-t-20"], [1, "el-element-overlay"], [1, "el-card-item"], [1, "el-card-avatar", "el-overlay-1"], ["alt", "user", 3, "src"], [1, "el-overlay"], [1, "list-style-none", "el-info"], [1, "el-item"], ["href", "assets/images/gallery/chair3.jpg", 1, "btn", "default", "btn-outline", "image-popup-vertical-fit", "el-link"], [1, "sl-icon-magnifier"], ["href", "javascript:void(0);", 1, "btn", "default", "btn-outline", "el-link"], [1, "sl-icon-link"], [1, "form-actions", "m-t-40"], ["type", "button", 1, "btn", "btn-dark", 3, "routerLink"], [3, "value", "selected"], [1, "fa", "fa-check", "text-success"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EditComponent_option_31_Template, 2, 3, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ui-switch", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditComponent_Template_ui_switch_change_38_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Required Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, EditComponent_li_52_Template, 2, 4, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Add-ons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EditComponent_li_59_Template, 3, 3, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, EditComponent_li_60_Template, 2, 0, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, EditComponent_li_66_Template, 3, 1, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, EditComponent_li_67_Template, 2, 0, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Upload Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.productDetails == null ? null : ctx.productDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetails == null ? null : ctx.productDetails.price[0] == null ? null : ctx.productDetails.price[0].currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.productDetails == null ? null : ctx.productDetails.price[0].amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.productDetails == null ? null : ctx.productDetails.drill_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetails == null ? null : ctx.productDetails.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails == null ? null : ctx.productDetails.optionsingle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails == null ? null : ctx.productDetails.addonmultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.productDetails == null ? null : ctx.productDetails.addonmultiple));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails == null ? null : ctx.productDetails.instruction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.productDetails == null ? null : ctx.productDetails.instruction));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (ctx.productDetails == null ? null : ctx.productDetails.image) ? ctx.productDetails == null ? null : ctx.productDetails.image : "assets/images/gallery/noProduct.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["@import '~ngx-ui-switch/ui-switch.component.scss';"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'edit.component.html',
                styles: [`@import '~ngx-ui-switch/ui-switch.component.scss';`]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/menuitems/menuitems.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menuitems/menuitems.component.ts ***!
  \**************************************************/
/*! exports provided: MenuitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuitemsComponent", function() { return MenuitemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commonFunctions.service */ "./src/app/services/commonFunctions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _form_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/confirm-dialog/confirm-dialog.component */ "./src/app/form/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");



























const _c0 = ["ref"];
function MenuitemsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuitemsComponent_ng_template_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu Items Loading...! Please wait");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "border border-info": a0 }; };
function MenuitemsComponent_ng_template_12_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_12_div_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.getMenuItem(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r9.selectedCategoryList.indexOf(item_r11.id) != 0 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getTitle(item_r11.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getDescription(item_r11.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_ng_container_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.openProduct(item_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", item_r16.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.getTitle(item_r16.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.getDescription(item_r16.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r16.price[0].currency == "USD" ? "$" : item_r16.price[0].currency, " ", item_r16.price[0].amount, "");
} }
function MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_ng_container_1_Template, 20, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const cat_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cat_r14.id == item_r16.category);
} }
function MenuitemsComponent_ng_template_12_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r10.selectedCategoryList.indexOf(cat_r14.id) == 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r14.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.productList);
} }
function MenuitemsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_12_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click Category Below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_12_Template_input_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.toggleCheckAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MenuitemsComponent_ng_template_12_div_9_Template, 11, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Menu Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuitemsComponent_ng_template_12_ng_container_13_Template, 4, 3, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.processing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.productList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.isCheckAllCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categoryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.productList.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categoryList);
} }
function MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_label_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const category_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r34.googlesheetUrl(category_r31.image); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r31.image);
} }
function MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_label_1_Template, 4, 1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r31 = ctx.$implicit;
    const folder_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r31.category === folder_r27.foldername);
} }
function MenuitemsComponent_ng_template_13_ul_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.googleSheet);
} }
function MenuitemsComponent_ng_template_13_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_13_ul_7_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r28 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.checkGoogleDriveFlag === index_r28);
} }
function MenuitemsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Google Drive URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_13_Template_button_click_3_listener() { const modal_r25 = ctx.$implicit; return modal_r25.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuitemsComponent_ng_template_13_ul_7_Template, 2, 1, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_13_Template_button_click_9_listener() { const modal_r25 = ctx.$implicit; return modal_r25.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.drivefolders);
} }
function MenuitemsComponent_ng_template_16_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign in With Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r41.authentication_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r41.googleEmail, " ");
} }
function MenuitemsComponent_ng_template_16_mat_tab_5_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_5_div_20_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const category_r47 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r48.onChange($event, category_r47.category); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", category_r47 == null ? null : category_r47.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r47.category, "");
} }
function MenuitemsComponent_ng_template_16_mat_tab_5_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_5_div_42_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const addeditem_r50 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r51.onChange1($event, addeditem_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const addeditem_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", addeditem_r50, " ");
} }
function MenuitemsComponent_ng_template_16_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Available Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MenuitemsComponent_ng_template_16_mat_tab_5_div_20_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add Your Own");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.owncategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.addOwnCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.addItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.REMOVEITEM(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "< Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Selected Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MenuitemsComponent_ng_template_16_mat_tab_5_div_42_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.createFolderinDrive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Create Folders in Google Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.googleEmail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r42.authentication_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r42.owncategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.addedItems);
} }
function MenuitemsComponent_ng_template_16_mat_tab_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " # of uploaded images: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r59.imageCount);
} }
function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Item Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r66.img_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r66.menu_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r66.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", item_r66.price, " ");
} }
function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_33_div_1_Template, 14, 4, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const folder_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r66.folderId == folder_r61.folderid);
} }
function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r70.onFileSelectget($event, ctx_r70.folderset); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template_input_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const folder_r61 = ctx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r72.onFileSelect($event, folder_r61); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const folder_r61 = ctx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r73.submitSheetData(folder_r61.folderid, folder_r61.foldername, folder_r61); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_33_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const folder_r61 = ctx.$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r61.foldername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "category_description" + folder_r61.folderid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "menu_name" + folder_r61.folderid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "category_description" + folder_r61.folderid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "price" + folder_r61.folderid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.menuItemList);
} }
function MenuitemsComponent_ng_template_16_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Images | Google Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuitemsComponent_ng_template_16_mat_tab_6_span_6_Template, 5, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template, 35, 7, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r74.uploadGoogleMenuSheet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sync to Google Sheets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Custom Google Sheets Spreadsheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Thank you for providing your menu item details! InstaMarkt will finish creating your menu in Google Sheets. We will schedule a time with you to review that all this information is correct. Click on the link below to view menu details!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Vendors can make changes directly to their menu in Google Sheets by clicking on this shared link. Once ready, use the button below to update the menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Google Sheets Link (URL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_6_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.googlesheetUrl(ctx_r76.google_sheet_url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add-Ons and Instructions can be updated using Google Sheets. Click here to see the current Menu. Use \u201CSync to Google Sheets\u201D button to ensure that all updates are synchronized.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.checkImageCountFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.drivefolders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r43.google_sheet_url, " ");
} }
function MenuitemsComponent_ng_template_16_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Google Sheets | Add-Ons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_7_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.onFileSelect1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add More Menu Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Please take time to ensure that all of the menu details (includes descriptions, pricing, add-ons, special instructions, etc.) are accurate. Once ready, use the sync button below to create your online menu. We will also use this information in our Customer Ordering Bot. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Please feel free to email your menu to info@instamarkt.co and include your Vendor Name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Manual Copy of Image URL's");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "For those of you that are tech savvy, owners can copy the Image URL's from both Google Drive or Dropbox and paste them into the Google Sheets Spreadsheet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Google Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1. Login to Google Drive and upload all of your images first. Use folders for the Menu Categories (lunch, dinner, soups, etc.) if you wish. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2. After the images have been uploaded, select each image and click the \u201CShare Image\u201D button.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copy the link (as shown above) and paste the URL into Google Sheets (the one we created for you). Example URL: https://drive.google.com/file/d/1UAsbJZb66kBcaETVBT7nClg0B5k0c7yr/view?usp=sharing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuitemsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuitemsComponent_ng_template_16_mat_tab_4_Template, 12, 2, "mat-tab", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuitemsComponent_ng_template_16_mat_tab_5_Template, 45, 5, "mat-tab", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuitemsComponent_ng_template_16_mat_tab_6_Template, 32, 3, "mat-tab", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuitemsComponent_ng_template_16_mat_tab_7_Template, 45, 0, "mat-tab", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r5.demo1TabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showZerothTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showFirstTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showSecondTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showThirdTab);
} }
function MenuitemsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Google Drive URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_17_Template_button_click_3_listener() { const modal_r79 = ctx.$implicit; return modal_r79.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MenuitemsComponent_ng_template_17_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.onManagerSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r7.managerForm);
} }
class MenuitemsComponent {
    constructor(toastr, dialog, route, ngxService, modalService, _ProfileService, slimLoader, _CommonFunctionsService, _Router) {
        this.toastr = toastr;
        this.dialog = dialog;
        this.route = route;
        this.ngxService = ngxService;
        this.modalService = modalService;
        this._ProfileService = _ProfileService;
        this.slimLoader = slimLoader;
        this._CommonFunctionsService = _CommonFunctionsService;
        this._Router = _Router;
        this.productList = [];
        this.processing = false;
        this.date = "";
        this.counter = 0;
        this.addedItems = [];
        this.removei = [];
        this.checkBool = false;
        this.imageCount = 0;
        this.checkImageCountFlag = false;
        this.isChecked = 0;
        this.checkStatus = 1;
        this.showPage = 1;
        this.checkboxFlag = false;
        this.checkFolder = [];
        this.addedCategories = [];
        this.showTutorialTable = true;
        this.showBlueColoredTable = true;
        this.checkSecondFlag = false;
        this.showZerothTab = true;
        this.showFirstTab = false;
        this.showSecondTab = false;
        this.showThirdTab = false;
        this.showFourthTab = false;
        this.showFifthTab = false;
        this.checkingId = "tb2";
        this.demo1TabIndex = 0;
        this.owncategory = "";
        this.removeITEMS = [];
        this.formData = new FormData();
        this.menuItemList = [];
        this.tempMenuItem = '';
        this.categoryList = [];
        this.selectedCategoryList = [];
        this.isCheckAllCategory = true;
    }
    set content(content) {
        this.tabSet = content;
    }
    ;
    ngAfterViewInit() {
        if (this.googleEmail) {
            this.checkingId = 'tb2';
        }
    }
    onChange(event, item) {
        if (event.checked == true) {
            if (this.addedCategories.indexOf(item) == -1)
                this.addedCategories.push(item);
        }
    }
    REMOVEITEM() {
        this.removei.map((item, i) => {
            this.removeItemFromArray(item);
        });
    }
    addItems() {
        this.addedItems = this.addedCategories;
    }
    onChange1(event, item) {
        if (event.checked) {
            this.removei.push(item);
        }
    }
    removeCategories() {
        this.addedItems = this.addedCategories;
    }
    removeItemFromArray(item) {
        const index = this.addedCategories.indexOf(item);
        if (index > -1) {
            this.addedCategories.splice(index, 1);
        }
    }
    ngOnInit() {
        console.log(JSON.parse(localStorage.getItem('user')).user.id, 'hIII');
        this.getCompanyProfile();
        this.getgoogleauthntication();
        this.getAllCategories();
        this.getAllGoogleSheetDetails();
        this.route.params.subscribe(data => {
            this.googleEmail = data.email;
        });
        this.getFolderbyEmail();
    }
    onSelect(event) {
        const formData = new FormData();
        formData.append('file', event.addedFiles[0]);
    }
    getFolderbyEmail(isTabchange = false) {
        if (this.googleEmail) {
            const data = {
                email: this.googleEmail
            };
            this.ngxService.start();
            this._ProfileService.getFoldersCreatedInDrive(data).subscribe(res => {
                this.drivefolders = res.data;
                this.isChecked = 2;
                const tabCount = isTabchange ? 1 : 0;
                this.demo1TabIndex = tabCount;
                this.fetchFolder();
                this.showBlueColoredTable = false;
                this.showZerothTab = false;
                this.showFirstTab = true;
                this.showSecondTab = true;
                this.showThirdTab = true;
                this.showFourthTab = true;
                this.showFifthTab = true;
                this.ngxService.stop();
            });
        }
    }
    fetchFolder() {
        this.drivefolders.filter((value) => {
            this.checkFolder.push(value.foldername);
        });
    }
    testFetchFolder(category) {
        if (this.checkFolder.indexOf(category) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     *
     * @param event
     * @param folderId
     * @param category
     */
    onFileSelect(event, fileName) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.file = file;
            fileName.user_id = file.name;
            console.log(fileName, file);
        }
    }
    onFileSelectget(event, fileName) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.fileget = file;
            fileName.user_id = file.name;
            console.log(fileName, file);
        }
    }
    /**
     *
     * @param event
     * @param folderId
     * @param category
     */
    onCategoryImageSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.category_file = file;
        }
    }
    /**
     *
     * @param index
     */
    submitSheetData(folderId, category, folder) {
        let menu_name = $('#menu_name' + folderId).val().toString();
        let price = $('#price' + folderId).val().toString();
        let category_description = $('#category_description' + folderId).val().toString();
        if (menu_name !== "" && price !== "" && category_description !== "") {
            let formData1 = new FormData();
            formData1.append('file', this.file);
            formData1.append('folderId', folderId);
            formData1.append('email', this.googleEmail);
            formData1.append('category', category);
            formData1.append('menu_name', menu_name);
            formData1.append('price', price);
            formData1.append('category_description', category_description);
            $('#menu_name' + folderId).val("");
            $('#price' + folderId).val("");
            folder.user_id = "";
            $('#category_description' + folderId).val("");
            const reader = new FileReader();
            reader.onloadend = () => {
                this.tempMenuItem = {
                    folderId: folderId,
                    menu_name: menu_name,
                    price: price,
                    img_url: reader.result,
                    description: category_description
                };
            };
            reader.readAsDataURL(this.file);
            this.uploadImageToDrive(formData1, folderId, category);
        }
        else {
            this.toastr.error("Please fill all required fields");
        }
    }
    deleteFolder(index) {
        this.drivefolders.splice(index, 1);
    }
    returnZero() {
        return 0;
    }
    onFileSelect1(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
            // formData.append('folderId',folderId);
            // formData.append('email',this.googleEmail);
            // formData.append('category',category);
            this.user = this._CommonFunctionsService.checkUser().user;
            this._ProfileService.uploadaddons(formData, this.user.company_id).subscribe(res => {
                this.toastr.success('Upload Menu successfully');
            });
            ;
        }
    }
    uploadImageToDrive(formData, folderId, category) {
        this.user = this._CommonFunctionsService.checkUser().user;
        this.ngxService.start();
        this._ProfileService.uploadImageTodrive(this.user.company_id, formData).subscribe(res => {
            this.ngxService.stop();
            this.authentication_url = res.data;
            console.log(res.data, 'uploadimages');
            this.google_drive_url = res.data.drive_url;
            (this.tempMenuItem !== "") ? this.menuItemList.push(this.tempMenuItem) : "";
            this.tempMenuItem = "";
            this.toastr.success('Upload successfull to drive');
        }, error => {
            this.ngxService.stop();
            this.toastr.error('Failed to upload, please try again later');
        });
        this.getAllGoogleSheetDetails();
    }
    getMenuItem(category) {
        let index = this.selectedCategoryList.indexOf(category.id);
        if (index != -1) {
            this.selectedCategoryList.splice(index, 1);
        }
        else {
            this.selectedCategoryList.push(category.id);
        }
        this.filterProductList();
        this.isCheckAllCategory = this.categoryList.filter((item) => item.active).length == this.selectedCategoryList.length ? true : false;
    }
    toggleCheckAll() {
        if (this.isCheckAllCategory) {
            this.isCheckAllCategory = false;
            this.selectedCategoryList = [];
            this.filterProductList();
        }
        else {
            this.isCheckAllCategory = true;
            this.selectedCategoryList = this.categoryList.map((cat) => cat.id);
            this.filterProductList();
        }
    }
    filterProductList() {
        this.productList.forEach(item => {
            if (this.selectedCategoryList.indexOf(item.category) == -1) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        });
    }
    getAllProductList() {
        this.processing = true;
        this.user = this._CommonFunctionsService.checkUser().user;
        if (this.user.company_id) {
            this._ProfileService.getCategory(this.user.company_id).subscribe((res) => {
                this.categoryList = res.data;
                this.categoryList.forEach((item) => {
                    this.selectedCategoryList.push(item.id);
                    this.addedItems.push(item.name);
                });
            });
        }
        if (this.user.unit_id) {
            this._ProfileService.getAllProductList(this.user.company_id).subscribe((res) => {
                this.productList = res.data;
                this.processing = false;
                this.filterProductList();
            }, error => {
                //
            });
        }
        else {
            this.user.unit_id = localStorage.getItem("unit_id");
            this._ProfileService.getAllProductList(this.user.company_id).subscribe((res) => {
                this.productList = res.data;
                this.processing = false;
            }, error => {
                //
            });
        }
    }
    getgoogleauthntication() {
        this._ProfileService.getGoogleAuthenication().subscribe(res => {
            this.checkBool = true;
            this.isChecked += 1;
            this.authentication_url = res.data;
            console.log(this.authentication_url, 'authenticateurl');
            //this.toastr.success('Google account verified please move to step 2')
        });
    }
    onClickGetStarted() {
        this.showZerothTab = true;
        this.showTutorialTable = false;
    }
    googlesheetUrl(google_sheet_url) {
        window.open(google_sheet_url);
    }
    googleDriveUrl(google_drive_url) {
        window.open(google_drive_url);
    }
    getAllGoogleSheetDetails() {
        this.user = this._CommonFunctionsService.checkUser().user;
        this._ProfileService.getAllGoogleSheetDetails(this.date).subscribe((res) => {
            this.googleSheet = res.data;
            this.imageCount = res.data.length;
            this.checkImageCountFlag = true;
        }, error => {
            //  
        });
    }
    createFolderinDrive() {
        const data = {
            folder: this.addedItems,
            email: this.googleEmail,
            // user_id: '11744'
            user_id: JSON.parse(localStorage.getItem('user')).user.id
        };
        this._ProfileService.createfolderInGoogleDrive(data).subscribe(res => {
            //const tabCount = 2;
            this.demo1TabIndex = 1;
            this.toastr.success('Folders created successfully');
            this.getFolderbyEmail(true);
        });
    }
    onClick(event) {
        event.preventDefault();
        this.ref._checked = !this.ref._checked;
    }
    getCompanyProfile() {
        this.user = this._CommonFunctionsService.checkUser().user;
        if (this.user.unit_id) {
            this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe((res) => {
                this.profile = res.data;
                this.google_sheet_url = res.data.google_sheet_url;
            });
        }
        else {
            this.user.unit_id = localStorage.getItem("unit_id");
            this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe((res) => {
                this.profile = res.data;
                this.google_sheet_url = res.data.google_sheet_url;
            }, error => {
                //  
            });
        }
    }
    getProductList(event) {
        if (event.activeId === 'tb2') {
            this.getAllProductList();
        }
    }
    googleDrive_url(event, folderName, contentGoogleDriveUrl, index) {
        this.checkGoogleDriveFlag = index;
        this.selectedGoogleDriveFolder = folderName;
        this.modalService.open(contentGoogleDriveUrl, { ariaLabelledBy: 'modal-basic-title', windowClass: 'linkModal', size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    uploadGoogleMenuSheet() {
        this.ngxService.start();
        this._ProfileService.uploadGoogleMenuSheet().subscribe((res) => {
            this.ngxService.stop();
            if (res.success) {
                this.toastr.success("Sync successful");
                // this._ProfileService.uploadGoogleMenuSheet().subscribe((res: any) => {
                this.getAllProductList();
                // })
            }
        }, error => {
            this.toastr.error('Sync failed, Please try again later');
        });
    }
    getAllCategories() {
        this._ProfileService.getAllCategories().subscribe(res => {
            this.categories = res.data.map(x => (Object.assign(Object.assign({}, x), { status: false })));
            this.getAllProductList();
            setTimeout(() => {
                this.showSelectedCat();
            }, 1000);
        });
    }
    showSelectedCat() {
        this.user = this._CommonFunctionsService.checkUser().user;
        const data = { "email": this.user['username'] };
        this._ProfileService.getAllSecleted(data).subscribe((res) => {
            this.selectedcat = res.data;
            console.log(this.selectedcat, 'selected data');
            this.getStatusChange();
        });
    }
    getStatusChange() {
        // this.categories.map(x =>
        // {
        //   this.selectedcat.map(y => y.id == x.id , x.status = true)
        // })
        this.categories.forEach(element => {
            this.selectedcat.forEach(value => {
                if (element.id == value.id) {
                    return element.status = true;
                }
            });
        });
        console.log(this.categories, 'category data');
        this.categories.filter(o1 => this.selectedcat.some(o2 => o1.id === o2.id)).map(x => (Object.assign(Object.assign({}, x), { status: true })));
        // const result1 = this.categories.filter(function(o1){
        //   return this.selectedcat.some(function(o2){
        //      return o1.id == o2.id;         
        //    });
        //  });
        console.log(this.categories, 'status');
        // })
    }
    openProduct(item) {
        this.getAllProductList();
        this._Router.navigateByUrl('menuitems/view/' + item.category + '/' + item.id);
    }
    getDescription(description) {
        return description.length > 25 ? description.substr(0, 25) + "..." : description;
    }
    getTitle(description) {
        return description.length > 10 ? description.substr(0, 10) + "..." : description;
    }
    getgmailuser() {
        const message = `Please get authenticated with gmail account`;
        const dialogData = new _form_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]("Confirm Action", message);
        const dialogRef = this.dialog.open(_form_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            maxWidth: "500px",
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this._ProfileService.getGoogleAuthenication().subscribe(res => {
                    this.authentication_url = res.data;
                    console.log(this.authentication_url, 'dialogrefclose');
                });
            }
        });
    }
    /**
     * Add own category
     */
    addOwnCategory() {
        if (this.owncategory !== "") {
            this.ngxService.start();
            this._ProfileService.addOwnCategory({ category: this.owncategory }).subscribe((res) => {
                this.toastr.success("Category successfully added");
                this.categories.push(res.data[0]);
                this.owncategory = "";
                this.ngxService.stop();
            }, err => {
                this.ngxService.stop();
                this.toastr.error(err.error);
            });
        }
        else {
            this.toastr.error("Please insert category name.");
        }
    }
}
MenuitemsComponent.ɵfac = function MenuitemsComponent_Factory(t) { return new (t || MenuitemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MenuitemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuitemsComponent, selectors: [["ng-component"]], viewQuery: function MenuitemsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabset"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 19, vars: 2, consts: [[1, "row", "el-element-overlay"], [4, "ngIf"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [3, "activeId", "tabChange"], ["t", "ngbTabset"], ["title", "Menu Items", "id", "tb1"], ["ngbTabContent", ""], ["contentGoogleDriveUrl", ""], ["title", "Google Sheet | images", "id", "tb2"], ["content3", ""], [1, "card", "card-body"], ["class", "mt-5", 4, "ngIf"], [1, "row", 3, "hidden"], [1, "col-12", "pt-4", "font-weight-bold", "text-info"], [1, "float-right"], ["for", "select-all"], ["type", "checkbox", "name", "select-all", "id", "select-all", 1, "ml-2", 3, "checked", "click"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "mt-5"], [1, "col-lg-4", "col-md-6"], [1, "card", 3, "click"], [1, "el-card-item", "cursor-pointer", "p-2", 3, "ngClass"], [1, "d-flex", "no-block", "align-items-center"], [1, "col-lg-6"], [1, "m-b-0", "fix-ht-h4"], [1, "text-muted", "fix-ht-spn"], [1, "col-lg-6", "p-l-15", "image-fix-height"], ["onerror", "this.src = 'assets/images/noProduct.png'", "alt", "user", 1, "w-100", 3, "src"], [1, "col-12", "pt-2", "font-weight-bold", 3, "hidden"], [1, "col-lg-3", "col-md-6", 3, "hidden"], [1, "el-card-item"], [1, "el-card-avatar", "el-overlay-1"], ["onerror", "this.src = 'assets/images/noProduct.png'", "alt", "user", 1, "productimg", 3, "src"], [1, "el-overlay"], [1, "list-style-none", "el-info"], [1, "el-item"], ["href", "javascript:void(0);", 1, "btn", "default", "btn-outline", "el-link"], [1, "sl-icon-link"], [1, "m-l-15"], [1, "ml-auto", "m-r-15"], ["type", "button", 1, "btn", "btn-dark", "btn-circle"], [1, "modal-header", 2, "background-color", "#7460ee"], ["id", "modal-basic-title", 1, "modal-title", 2, "color", "#fff"], ["type", "button", "aria-label", "Close", "id", "closeModal", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["style", "margin-bottom: 1.5rem;", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-dark", 3, "click"], [2, "margin-bottom", "1.5rem"], [2, "cursor", "pointer", "color", "rgb(67, 133, 238)", 3, "click"], [1, "step_tabs"], [1, "container"], [3, "selectedIndex"], ["label", "1", 4, "ngIf"], ["label", "2", 4, "ngIf"], ["label", "3", 4, "ngIf"], [1, "row"], [1, "col-sm-4"], ["label", "1"], [1, "step_one"], [1, "mb-4"], [1, "col-md-4", "offset-md-4", "col-lg-4", "offset-lg-4"], [1, "icon_card"], [3, "href"], ["src", "../../assets/images/google.png", "alt", "google", 1, "drive"], [1, "btn", "btn-md", "btn-danger", "text-white"], [1, "fa", "fa-edit"], [1, "col-md-12", "col-lg-10", "offset-lg-1"], [1, "category_sec"], [1, "col-md-5"], [1, "category_area"], [1, "category_head"], [1, "category_checkbox"], ["appearance", "fill"], ["matInput", "", "placeholder", "Search", 1, "form-control"], [1, "mb-1", "font-weight-bold", "d-none"], [1, "custom-input", "mt-3"], ["type", "text", "name", "owncategory", "placeholder", "Add Your Own Category", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "px-3", "ml-2", 3, "click"], [1, "fa", "fa-plus"], [1, "col-md-2"], [1, "category_btn"], ["mat-raised-button", "", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-secondary", "btn-block", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-primary", "btn-block", "mt-4", 3, "click"], [3, "checked", "change"], [3, "change"], ["label", "2"], [1, "step_three_right"], [1, "sync_btn"], ["mat-raised-button", "", 1, "btn", 3, "click"], ["src", "../../assets/images/google-sheets.png", "alt", "", 2, "width", "25px", "margin", "-2px 0 0 10px"], [1, "row", "pt-5"], [2, "text-align", "left", "font-size", "18px", "margin-bottom", "1rem"], [1, "col-md-1"], ["src", "../../assets/images/folder@1X.png", "alt", ""], [1, "col-md-4"], [1, "custom-input"], ["name", "category_description", "required", "", "placeholder", "Category Description *", 1, "w-100", "custom-textarea", 3, "id"], [1, "custom-file", "mb-2", 2, "padding-bottom", "61px"], ["type", "file", "name", "fileget", "id", "customFile", "required", "", 1, "custom-file-input", 3, "change"], ["fileget", ""], ["for", "customFile", 1, "custom-file-label"], [1, "custom-input", "mb-2"], ["type", "text", "name", "menu_name", "placeholder", "Menu Item Name *", "required", "", 1, "w-100", 3, "id"], ["name", "category_description", "required", "", "placeholder", "Menu Item Description *", 1, "w-100", "custom-textarea", 3, "id"], ["type", "number", "name", "price", "required", "", "placeholder", "Menu Item Price (ex. $10.00)", 1, "w-100", 3, "id"], [1, "custom-file", "mb-2"], ["type", "file", "name", "file", "id", "customFile", "required", "", 1, "custom-file-input", 3, "change"], ["file", ""], [1, "d-block", "mt-2"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "col-md-7", "row"], [1, "col-md-12", "mt-3"], ["class", "col-6 mb-4 p-1 text-center menu-item-list", 4, "ngIf"], [1, "col-6", "mb-4", "p-1", "text-center", "menu-item-list"], [1, "w-50", "mb-1", 3, "src"], [1, "p-0", "mb-0", "font-weight-normal"], [1, "font-weight-bold"], ["label", "3"], [1, "step_one", "padding_area"], [1, "col-md-12", "text-center"], ["src", "/assets/images/menu-poster.jpg", 2, "width", "75%", "margin-bottom", "0.5rem"], [1, "step_four"], [1, "form-group"], ["for", "", 1, "label-control"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], [1, "add_btn"], ["mat-raised-button", "", 1, "btn", "btn-primary"], [1, "col-md-12", "pt-4"], [1, "col-md-3"], ["src", "../../assets/images/google-drive@1X.png", "alt", "  ", 1, "drive"], [1, "col-md-9"], ["src", "../../assets/images/Layer-5@1X.png", "alt", ""], ["src", "../../assets/images/Layer-6@1X.png", "alt", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "username", 1, "col-md-3", "col-form-label"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["name", "dp", "type", "text", "formControlName", "username", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-dark"]], template: function MenuitemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Menuitems listed here, and we can maname Menuitems by importing/syncing them from google spreadsheet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-tabset", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function MenuitemsComponent_Template_ngb_tabset_tabChange_9_listener($event) { return ctx.getProductList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuitemsComponent_ng_template_12_Template, 14, 6, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuitemsComponent_ng_template_13_Template, 11, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MenuitemsComponent_ng_template_16_Template, 12, 5, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MenuitemsComponent_ng_template_17_Template, 22, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.checkingId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    font-family: 'Poppins', sans-serif;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n    font-family: 'Poppins', sans-serif;\n}\np[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n.hero_section[_ngcontent-%COMP%] {\n    background: url('Rectangle-img.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    padding: 4rem 0;\n}\n.hero_content[_ngcontent-%COMP%]   .hero_img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n.hero_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    color: #fff;\n    font-weight: 600;\n    margin-bottom: 2rem;\n}\n.hero_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #fff;\n    margin-bottom: 2rem;\n    line-height: 28px;\n}\n.hero_content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 22px;\n    color: #fff;\n    font-weight: 600;\n    margin-bottom: 2rem;\n}\n\n\n.step_tabs[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n}\n  .mat-tab-label {\n    width: 60px;\n    height: 60px !important;\n    font-weight: 700;\n    padding: 0 !important;\n    background: #ddd;\n    margin: 0 5.5rem;\n    border-radius: 50px;\n    opacity: 1 !important;\n    min-width: auto !important;\n    color: #111;\n}\n  .mat-tab-label-active {\n    background-color: #2196f3;\n    color: #fff;\n}\n  .mat-tab-group.mat-primary .mat-ink-bar {\n    display: none;\n}\n  .mat-tab-labels {\n    justify-content: center;\n}\n  .mat-tab-label .mat-tab-label-content {\n    font-size: 24px;\n}\n  .mat-tab-labels {\n    position: relative;\n}\n  .mat-tab-labels:before {\n    content: '';\n    position: absolute;\n    top: 28px;\n    left: 10%;\n    border-bottom: 4px solid #ddd;\n    width: 80%;\n}\n  .mat-tab-body-content {\n    padding: 0 1rem;\n}\n  .mat-tab-nav-bar,   .mat-tab-header {\n    border-bottom: none !important;\n}\n\n\n.step_one[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 3rem 0;\n}\n.step_one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: 600;\n    margin-bottom: 2.5rem;\n}\n.step_one[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-weight: 500;\n    margin-bottom: 2.5rem;\n}\n.icon_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    \n    border: 1px solid #2196f3;\n    border-radius: 10px;\n    padding: 1.4rem;\n    margin-bottom: 1rem;\n    height: 129px;\n}\n.icon_card[_ngcontent-%COMP%]   img.dropbox[_ngcontent-%COMP%] {\n    width: 145px;\n}\n.icon_card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 2rem;\n    line-height: 28px;\n    font-weight: 600;\n    color: #2196f3;\n}\n\n\n  .mat-checkbox-inner-container {\n    \n}\n.category_area[_ngcontent-%COMP%] {\n    border: 1px solid #eee;\n}\n.category_head[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 1rem;\n    border-bottom: 1px solid #eee;\n}\n.category_head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    font-weight: 600;\n}\n.category_checkbox[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 1rem;\n}\n.form-control[_ngcontent-%COMP%] {\n    border: 1px solid #d5d5d5;\n    border-radius: 4px;\n    height: 40px;\n    padding-left: 0.5rem;\n    font-family: 'Montserrat', sans-serif;\n}\n  .mat-form-field-underline {\n    display: none;\n}\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n    padding: 0 !important;\n}\n  .mat-form-field {\n    width: 100% !important;\n}\n  .mat-checkbox-layout .mat-checkbox-label {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n}\n.category_sec[_ngcontent-%COMP%] {\n    border: 1px solid #dedede;\n    padding: 2rem;\n}\n  .mat-checkbox {\n    width: 100%;\n    display: block;\n}\n.category_btn[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n}\n\n\n.step_three_left[_ngcontent-%COMP%] {\n    text-align: left;\n}\n.step_three_left[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 18px;\n}\n.step_three_left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n    margin-bottom: 1rem;\n}\n.step_three_right[_ngcontent-%COMP%] {\n    text-align: left;\n}\n.step_three_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 500;\n}\n.step_three_right[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 700;\n}\n.step_three_right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n.step_three_right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n}\n.step_three_right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 55px;\n    margin-bottom: 1rem;\n}\n.step_three_right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 500;\n}\n.sync_btn[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 4rem;\n}\n.sync_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: #eee;\n    padding: 3px 30px;\n    box-shadow: none;\n}\n\n\n.step_four[_ngcontent-%COMP%] {\n    text-align: left;\n}\n.label-control[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\n.bot_img[_ngcontent-%COMP%] {\n    border: 1px solid #dedede;\n    padding: 1rem;\n}\n.bot_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.bot_txt[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-top: 5rem;\n}\n.bot_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-weight: 500;\n    font-size: 18px;\n}\n.add_btn[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 2rem 0;\n}\n\n\n.step_five[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n.padding_area[_ngcontent-%COMP%] {\n    padding: 3rem 5rem;\n}\n.spreadsheet_detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {    \n    font-size: 28px;\n    font-weight: 600;\n    margin-bottom: 2.5rem;\n    text-align: center;\n    padding: 4rem 0;\n}\n.spreadsheet_detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 18px;\n}\n.spreadsheet_detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n    margin-bottom: 2rem;\n}\n.p_t_note[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n}\n\n\n.step_six[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    font-size: 14px;\n}\n.step_six[_ngcontent-%COMP%] {\n    text-align: left;\n}\n.step_six[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-bottom: 2rem;\n}\n.step_six[_ngcontent-%COMP%]   .icon_card[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.menu-item-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .menu-item-list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n}\n\n@media only screen and (min-width: 1024px)and (max-width: 1365px)  {\n    .icon_card[_ngcontent-%COMP%]   img.dropbox[_ngcontent-%COMP%] {\n        width: 90%;\n    }\n    .category_sec[_ngcontent-%COMP%] {\n        padding: 1rem;\n    }\n    .category_sec[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n        padding: 0;\n    }\n    .bot_txt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n}\n\n\n@media only screen and (min-width: 768px)and (max-width: 1023px)  {\n      .mat-tab-label {\n        margin: 0 1.5rem;\n    }\n\n      .mat-tab-labels:before {\n        width: 100%;\n        left: 0;\n    }\n    .icon_card[_ngcontent-%COMP%]   img.dropbox[_ngcontent-%COMP%] {\n        width: 90%;\n    }\n    .category_sec[_ngcontent-%COMP%] {\n        padding: 1rem;\n    }\n    .category_sec[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n        padding: 0;\n    }\n    .padding_area[_ngcontent-%COMP%] {\n        padding: 3rem 0;\n    }\n    .bot_txt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n    .spreadsheet_detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n\n\n@media only screen and (max-width: 767px) {\n      .mat-tab-labels:before {\n        width: 100%;\n        left: 0;\n        top: 18px;\n    }\n      .mat-tab-label {\n        margin: 0 0.5rem;\n        height: 40px !important;\n        width: 40px !important;\n    }\n      .mat-tab-label .mat-tab-label-content {\n        font-size: 16px;\n    }\n    .category_btn[_ngcontent-%COMP%] {\n        padding-top: 0;\n        margin: 2rem 0;\n    }\n    .padding_area[_ngcontent-%COMP%] {\n        padding: 3rem 0;\n    }\n    .p_t_note[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n}\n\n.image-fix-height[_ngcontent-%COMP%]{\n    max-height: 82px;\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudWl0ZW1zL21lbnVpdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBLCtCQUErQjtBQUMvQjtJQUNJLG9DQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQSwrQkFBK0I7QUFJL0IsMkJBQTJCO0FBQzNCO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSw4QkFBOEI7QUFDbEM7QUFDQSwyQkFBMkI7QUFHM0IsMkJBQTJCO0FBQzNCO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBLDJCQUEyQjtBQUczQiwyQkFBMkI7QUFDM0I7SUFDSTt3QkFDb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQSwyQkFBMkI7QUFHM0IsNkJBQTZCO0FBQzdCO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQSw2QkFBNkI7QUFHN0IsNEJBQTRCO0FBQzVCO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBLDRCQUE0QjtBQUc1Qiw0QkFBNEI7QUFDNUI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0EsNEJBQTRCO0FBRzVCLDJCQUEyQjtBQUMzQjtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLDJCQUEyQjtBQUUzQjtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBLHdDQUF3QztBQUV4QztJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjtBQUVBLHdDQUF3QztBQUV4QyxvQ0FBb0M7QUFFcEM7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxPQUFPO0lBQ1g7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBLG9DQUFvQztBQUVwQyxzQ0FBc0M7QUFDdEM7SUFDSTtRQUNJLFdBQVc7UUFDWCxPQUFPO1FBQ1AsU0FBUztJQUNiO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjtBQUNBLHNDQUFzQztBQUV0QztJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW51aXRlbXMvbWVudWl0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmh0bWwsIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2ICxwIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxucCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4vKioqKiogSGVybyBTZWN0aW9uIENTUyAqKioqKioqL1xuLmhlcm9fc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL1JlY3RhbmdsZS1pbWcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmc6IDRyZW0gMDtcbn1cbi5oZXJvX2NvbnRlbnQgLmhlcm9faW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmhlcm9fY29udGVudCBoMiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5oZXJvX2NvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uaGVyb19jb250ZW50IGg0IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLyoqKioqIEhlcm8gU2VjdGlvbiBDU1MgKioqKioqKi9cblxuXG5cbi8qKioqKiBNYXQgVGFicyBDU1MgKioqKioqKi9cbi5zdGVwX3RhYnMge1xuICAgIHBhZGRpbmc6IDRyZW0gMDtcbn1cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBtYXJnaW46IDAgNS41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMTExO1xufVxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICBjb2xvcjogI2ZmZjtcbn1cbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjhweDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkZGQ7XG4gICAgd2lkdGg6IDgwJTtcbn1cbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbn1cbjo6bmctZGVlcCAubWF0LXRhYi1uYXYtYmFyLCBcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi8qKioqKiBNYXQgVGFicyBDU1MgKioqKioqKi9cblxuXG4vKioqKiogU3RlcCBPbmUgQ1NTICoqKioqKiovXG4uc3RlcF9vbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzcmVtIDA7XG59XG4uc3RlcF9vbmUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5zdGVwX29uZSBoNCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLmljb25fY2FyZCBpbWcge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxLjRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBoZWlnaHQ6IDEyOXB4O1xufVxuLmljb25fY2FyZCBpbWcuZHJvcGJveCB7XG4gICAgd2lkdGg6IDE0NXB4O1xufVxuLmljb25fY2FyZCBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMjE5NmYzO1xufVxuLyoqKioqIFN0ZXAgT25lIENTUyAqKioqKioqL1xuXG5cbi8qKioqKiBTdGVwIFR3byBDU1MgKioqKioqKi9cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA0cHggKi9cbn1cbi5jYXRlZ29yeV9hcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuLmNhdGVnb3J5X2hlYWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLmNhdGVnb3J5X2hlYWQgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2F0ZWdvcnlfY2hlY2tib3gge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ1ZDU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2F0ZWdvcnlfc2VjIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG46Om5nLWRlZXAgLm1hdC1jaGVja2JveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY2F0ZWdvcnlfYnRuIHtcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcbn1cbi8qKioqKiBTdGVwIFR3byBDU1MgKioqKioqKi9cblxuXG4vKioqKiogU3RlcCBUaHJlZSBDU1MgKioqKioqKi9cbi5zdGVwX3RocmVlX2xlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3RlcF90aHJlZV9sZWZ0IGg1IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn0gXG4uc3RlcF90aHJlZV9sZWZ0IGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uc3RlcF90aHJlZV9yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zdGVwX3RocmVlX2xlZnQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc3RlcF90aHJlZV9yaWdodCBoNSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uc3RlcF90aHJlZV9yaWdodCB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnN0ZXBfdGhyZWVfcmlnaHQgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5zdGVwX3RocmVlX3JpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5zdGVwX3RocmVlX3JpZ2h0IGxpIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnN5bmNfYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbi5zeW5jX2J0biBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgcGFkZGluZzogM3B4IDMwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi8qKioqKiBTdGVwIFRocmVlIENTUyAqKioqKioqL1xuXG5cbi8qKioqKiBTdGVwIEZvdXIgQ1NTICoqKioqKiovXG4uc3RlcF9mb3VyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmxhYmVsLWNvbnRyb2wge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm90X2ltZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuLmJvdF9pbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ib3RfdHh0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xufVxuLmJvdF90eHQgcHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hZGRfYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAycmVtIDA7XG59XG4vKioqKiogU3RlcCBGb3VyIENTUyAqKioqKioqL1xuXG5cbi8qKioqKiBTdGVwIEZpdmUgQ1NTICoqKioqKiovXG4uc3RlcF9maXZlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5wYWRkaW5nX2FyZWEge1xuICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcbn1cbi5zcHJlYWRzaGVldF9kZXRhaWwgaDIgeyAgICBcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRyZW0gMDtcbn1cbi5zcHJlYWRzaGVldF9kZXRhaWwgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc3ByZWFkc2hlZXRfZGV0YWlsIGltZyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ucF90X25vdGUge1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xufVxuLyoqKioqIFN0ZXAgRml2ZSBDU1MgKioqKioqKi9cblxuXG4vKioqKiogU3RlcCBTaXggQ1NTICoqKioqKiovXG4uc3RlcF9zaXggcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uc3RlcF9zaXgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3RlcF9zaXggaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uc3RlcF9zaXggLmljb25fY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyoqKioqIFN0ZXAgU2l4IENTUyAqKioqKioqL1xuXG4ubWVudS1pdGVtLWxpc3QgaDQsIC5tZW51LWl0ZW0tbGlzdCBoNSB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qKioqKioqIElQQUQgUHJvIE1lZGlhIFF1ZXJ5ICoqKioqKioqKiovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KWFuZCAobWF4LXdpZHRoOiAxMzY1cHgpICB7XG4gICAgLmljb25fY2FyZCBpbWcuZHJvcGJveCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICAgIC5jYXRlZ29yeV9zZWMge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgICAuY2F0ZWdvcnlfc2VjIC5jb2wtbWQtMiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5ib3RfdHh0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxufVxuXG4vKioqKioqKiBJUEFEIFBybyBNZWRpYSBRdWVyeSAqKioqKioqKioqL1xuXG4vKioqKioqKiBJUEFEIE1lZGlhIFF1ZXJ5ICoqKioqKioqKiovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpYW5kIChtYXgtd2lkdGg6IDEwMjNweCkgIHtcbiAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xuICAgICAgICBtYXJnaW46IDAgMS41cmVtO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHM6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIC5pY29uX2NhcmQgaW1nLmRyb3Bib3gge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAuY2F0ZWdvcnlfc2VjIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gICAgLmNhdGVnb3J5X3NlYyAuY29sLW1kLTIge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAucGFkZGluZ19hcmVhIHtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwO1xuICAgIH1cbiAgICAuYm90X3R4dCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAuc3ByZWFkc2hlZXRfZGV0YWlsIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLyoqKioqKiogSVBBRCBNZWRpYSBRdWVyeSAqKioqKioqKioqL1xuXG4vKioqKioqKiBNb2JpbGUgTWVkaWEgUXVlcnkgKioqKioqKioqKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDE4cHg7XG4gICAgfVxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMCAwLjVyZW07XG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmNhdGVnb3J5X2J0biB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICB9XG4gICAgLnBhZGRpbmdfYXJlYSB7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICB9XG4gICAgLnBfdF9ub3RlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxufVxuLyoqKioqKiogTW9iaWxlIE1lZGlhIFF1ZXJ5ICoqKioqKioqKiovXG5cbi5pbWFnZS1maXgtaGVpZ2h0e1xuICAgIG1heC1oZWlnaHQ6IDgycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuitemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'menuitems.component.html',
                styleUrls: ['./menuitems.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }, { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }, { type: _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ref']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabset"]]
        }] }); })();


/***/ }),

/***/ "./src/app/menuitems/menuitems.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menuitems/menuitems.module.ts ***!
  \***********************************************/
/*! exports provided: MenuitemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuitemsModule", function() { return MenuitemsModule; });
/* harmony import */ var _menuitems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuitems.component */ "./src/app/menuitems/menuitems.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/menuitems/edit/edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _menuitems_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menuitems.routing */ "./src/app/menuitems/menuitems.routing.ts");
/* harmony import */ var _truncate_string_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./truncate-string.pipe */ "./src/app/menuitems/truncate-string.pipe.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material/material.module */ "./src/app/menuitems/material/material.module.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es2015.js");







// import { SpinnerComponent } from '../shared/spinner.component';











class MenuitemsModule {
}
MenuitemsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MenuitemsModule });
MenuitemsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MenuitemsModule_Factory(t) { return new (t || MenuitemsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarModule"].forRoot(),
            _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchModule"].forRoot({
                size: 'small',
                color: 'rgb(0, 189, 99)',
                switchColor: '#80FFA2',
                defaultBgColor: '#ff80dd',
                defaultBoColor: '#ff80dd',
                checkedLabel: 'on',
                uncheckedLabel: 'off'
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_menuitems_routing__WEBPACK_IMPORTED_MODULE_9__["EcomRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MenuitemsModule, { declarations: [_menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"],
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"],
        _truncate_string_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncateStringPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuitemsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"],
                    _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"],
                    _truncate_string_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncateStringPipe"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                    ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarModule"].forRoot(),
                    _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                    ngx_ui_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchModule"].forRoot({
                        size: 'small',
                        color: 'rgb(0, 189, 99)',
                        switchColor: '#80FFA2',
                        defaultBgColor: '#ff80dd',
                        defaultBoColor: '#ff80dd',
                        checkedLabel: 'on',
                        uncheckedLabel: 'off'
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_menuitems_routing__WEBPACK_IMPORTED_MODULE_9__["EcomRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/menuitems/menuitems.routing.ts":
/*!************************************************!*\
  !*** ./src/app/menuitems/menuitems.routing.ts ***!
  \************************************************/
/*! exports provided: EcomRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcomRoutes", function() { return EcomRoutes; });
/* harmony import */ var _menuitems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuitems.component */ "./src/app/menuitems/menuitems.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/menuitems/edit/edit.component.ts");


const EcomRoutes = [
    {
        path: '',
        children: [
            {
                path: 'view/:categoryId/:id',
                component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"],
                data: {
                    title: 'Edit Product',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'View Product' }
                    ]
                }
            },
            {
                path: '',
                component: _menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"],
            },
            {
                path: 'auth/:email',
                component: _menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"],
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/menuitems/truncate-string.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/menuitems/truncate-string.pipe.ts ***!
  \***************************************************/
/*! exports provided: TruncateStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateStringPipe", function() { return TruncateStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TruncateStringPipe {
    transform(value, length) {
        const biggestWord = 50;
        const elipses = "...";
        if (typeof value === "undefined")
            return value;
        if (value.length <= length)
            return value;
        if (length < elipses.length)
            return '';
        //.. truncate to about correct lenght
        let truncatedText = value.slice(0, length + biggestWord);
        //.. now nibble ends till correct length
        while (truncatedText.length > length - elipses.length) {
            let lastSpace = truncatedText.lastIndexOf(" ");
            if (lastSpace === -1) {
                truncatedText = "";
                break;
            }
            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');
        }
        ;
        return truncatedText + elipses;
    }
}
TruncateStringPipe.ɵfac = function TruncateStringPipe_Factory(t) { return new (t || TruncateStringPipe)(); };
TruncateStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncateString", type: TruncateStringPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncateString'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=menuitems-menuitems-module-es2015.js.map