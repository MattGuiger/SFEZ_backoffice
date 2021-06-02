function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuitems-menuitems-module"], {
  /***/
  "./src/app/menuitems/edit/edit.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/menuitems/edit/edit.component.ts ***!
    \**************************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppMenuitemsEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
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


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/commonFunctions.service */
    "./src/app/services/commonFunctions.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", (ctx_r0.productDetails == null ? null : ctx_r0.productDetails.category) == (item_r6 == null ? null : item_r6.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
      }
    }

    function EditComponent_li_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;
        var j_r8 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", (ctx_r1.productDetails == null ? null : ctx_r1.productDetails.optioncategory) ? ctx_r1.productDetails == null ? null : ctx_r1.productDetails.optioncategory : "", " : ", item_r7, " (+", (ctx_r1.productDetails == null ? null : ctx_r1.productDetails.price[0] == null ? null : ctx_r1.productDetails.price[0].currency) == "USD" ? "$" : ctx_r1.productDetails == null ? null : ctx_r1.productDetails.price[0] == null ? null : ctx_r1.productDetails.price[0].currency, " ", ctx_r1.parseFloat(ctx_r1.productDetails == null ? null : ctx_r1.productDetails.optionsingleprice[j_r8]), ") ");
      }
    }

    function EditComponent_li_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r9, " (+", (ctx_r2.productDetails == null ? null : ctx_r2.productDetails.price[0] == null ? null : ctx_r2.productDetails.price[0].currency) == "USD" ? "$" : ctx_r2.productDetails == null ? null : ctx_r2.productDetails.price[0] == null ? null : ctx_r2.productDetails.price[0].currency, " ", ctx_r2.parseFloat(ctx_r2.productDetails == null ? null : ctx_r2.productDetails.addonprice[i_r10]), ")");
      }
    }

    function EditComponent_li_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditComponent_li_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11, "");
      }
    }

    function EditComponent_li_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/menuitems"];
    };

    var EditComponent =
    /*#__PURE__*/
    function () {
      function EditComponent(activeRoute, toastr, _ProfileService, _CommonFunctionsService) {
        _classCallCheck(this, EditComponent);

        this.activeRoute = activeRoute;
        this.toastr = toastr;
        this._ProfileService = _ProfileService;
        this._CommonFunctionsService = _CommonFunctionsService;
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.categoryId = params['categoryId'];

            _this.getProductById(_this.id, _this.categoryId);
          });
          this.getCategory();
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this2 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.getCategory(this.user.company_id).subscribe(function (res) {
            _this2.categories = res.data;
          }, function (error) {
            _this2.toastr.error('something went wrong! please try again');
          });
        }
      }, {
        key: "getProductById",
        value: function getProductById(id, categoryId) {
          var _this3 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.getProductById(id, categoryId, this.user.company_id).subscribe(function (res) {
            if (res.status == 200) {
              _this3.productDetails = res.data[0];
            }
          }, function (error) {
            _this3.toastr.error('something went wrong! please try again');
          });
        }
      }, {
        key: "parseFloat",
        value: function parseFloat(num) {
          return this._CommonFunctionsService.numberFormatt(num, 2);
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]));
    };

    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["ng-component"]],
      decls: 93,
      vars: 14,
      consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], ["action", "#"], [1, "form-body"], [1, "card-title"], [1, "col-md-6"], [1, "form-group"], [1, "control-label"], ["type", "text", "id", "firstName", 1, "form-control", 3, "value"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "price", "aria-label", "price", "aria-describedby", "basic-addon1", 1, "form-control", 3, "value"], ["data-placeholder", "Choose a Category", "tabindex", "1", 1, "form-control"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "customRadioInline1", "name", "customRadioInline1", 1, "custom-control-input", 3, "checked"], ["for", "customRadioInline1", 1, "custom-control-label"], ["type", "radio", "id", "customRadioInline2", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline2", 1, "custom-control-label"], [1, "card-title", "m-t-40"], [1, "col-md-12"], ["rows", "4", 1, "form-control"], [1, "col-md-3"], [1, "box-title", "m-t-40"], [4, "ngFor", "ngForOf"], [1, "col-md-9"], [1, "list-unstyled"], [4, "ngIf"], [1, "card-title", "m-t-20"], [1, "el-element-overlay"], [1, "el-card-item"], [1, "el-card-avatar", "el-overlay-1"], ["alt", "user", 3, "src"], [1, "el-overlay"], [1, "list-style-none", "el-info"], [1, "el-item"], ["href", "assets/images/gallery/chair3.jpg", 1, "btn", "default", "btn-outline", "image-popup-vertical-fit", "el-link"], [1, "sl-icon-magnifier"], ["href", "javascript:void(0);", 1, "btn", "default", "btn-outline", "el-link"], [1, "sl-icon-link"], [1, "form-actions", "m-t-40"], ["type", "button", 1, "btn", "btn-dark", 3, "routerLink"], [3, "value", "selected"], [1, "fa", "fa-check", "text-success"]],
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Publish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Draft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Product Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "textarea", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Required Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, EditComponent_li_58_Template, 2, 4, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Add-ons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, EditComponent_li_65_Template, 3, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, EditComponent_li_66_Template, 2, 0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, EditComponent_li_72_Template, 3, 1, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, EditComponent_li_73_Template, 2, 0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Upload Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.productDetails == null ? null : ctx.productDetails.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetails == null ? null : ctx.productDetails.price[0] == null ? null : ctx.productDetails.price[0].currency);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.productDetails == null ? null : ctx.productDetails.price[0].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", (ctx.productDetails == null ? null : ctx.productDetails.status) == "live");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'edit.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
        }, {
          type: _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menuitems/menuitems.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/menuitems/menuitems.component.ts ***!
    \**************************************************/

  /*! exports provided: MenuitemsComponent */

  /***/
  function srcAppMenuitemsMenuitemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuitemsComponent", function () {
      return MenuitemsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/commonFunctions.service */
    "./src/app/services/commonFunctions.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _form_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../form/confirm-dialog/confirm-dialog.component */
    "./src/app/form/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var _c0 = ["ref"];

    function MenuitemsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuitemsComponent_ng_template_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu Items Loading...! Please wait");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "border border-info": a0
      };
    };

    function MenuitemsComponent_ng_template_12_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_12_div_9_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var item_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.getMenuItem(item_r11);
        });

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
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r9.selectedCategoryList.indexOf(item_r11.id) != 0 - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getTitle(item_r11.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getDescription(item_r11.description));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_ng_container_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r18.openProduct(item_r16);
        });

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
      }

      if (rf & 2) {
        var item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

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
      }
    }

    function MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_ng_container_1_Template, 20, 6, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r16 = ctx.$implicit;

        var cat_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cat_r14.id == item_r16.category);
      }
    }

    function MenuitemsComponent_ng_template_12_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuitemsComponent_ng_template_12_ng_container_13_ng_container_3_Template, 2, 1, "ng-container", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var cat_r14 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r10.selectedCategoryList.indexOf(cat_r14.id) == 0 - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r14.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.productList);
      }
    }

    function MenuitemsComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_12_Template_input_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.toggleCheckAll();
        });

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
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    function MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_label_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_label_1_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var category_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r34.googlesheetUrl(category_r31.image);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r31.image);
      }
    }

    function MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_label_1_Template, 4, 1, "label", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r31 = ctx.$implicit;

        var folder_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r31.category === folder_r27.foldername);
      }
    }

    function MenuitemsComponent_ng_template_13_ul_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_13_ul_7_div_1_div_1_Template, 2, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.googleSheet);
      }
    }

    function MenuitemsComponent_ng_template_13_ul_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_13_ul_7_div_1_Template, 2, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r28 = ctx.index;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.checkGoogleDriveFlag === index_r28);
      }
    }

    function MenuitemsComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Google Drive URL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_13_Template_button_click_3_listener() {
          var modal_r25 = ctx.$implicit;
          return modal_r25.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuitemsComponent_ng_template_13_ul_7_Template, 2, 1, "ul", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_13_Template_button_click_9_listener() {
          var modal_r25 = ctx.$implicit;
          return modal_r25.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.drivefolders);
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign in With Google");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r41.authentication_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r41.googleEmail, " ");
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_5_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_5_div_20_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var category_r48 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          ctx_r49.onChange($event, category_r48.category);
          return false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r48.category, "");
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_5_div_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_5_div_42_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var addeditem_r51 = ctx.$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r52.onChange1($event, addeditem_r51);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var addeditem_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", addeditem_r51, " ");
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Available Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MenuitemsComponent_ng_template_16_mat_tab_5_div_20_Template, 3, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add Your Own");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r54.owncategory = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r56.addOwnCategory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r57.addItems();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add >");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r58.REMOVEITEM();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "< Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Selected Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MenuitemsComponent_ng_template_16_mat_tab_5_div_42_Template, 3, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_5_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r59.createFolderinDrive();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Create Folders in Google Drive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

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
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_6_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " # of uploaded images: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r60.imageCount);
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Item Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Item Price:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r66.img_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r66.menu_name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r66.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", item_r66.price, " ");
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_26_div_1_Template, 14, 4, "div", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r66 = ctx.$implicit;

        var folder_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r66.folderId == folder_r62.folderid);
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Category: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 109, 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template_input_change_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var folder_r62 = ctx.$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r70.onFileSelect($event, folder_r62);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var folder_r62 = ctx.$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r72.submitSheetData(folder_r62.folderid, folder_r62.foldername, folder_r62);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Upload ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_ng_container_26_Template, 2, 1, "ng-container", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var folder_r62 = ctx.$implicit;

        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r62.foldername);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "menu_name" + folder_r62.folderid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "category_description" + folder_r62.folderid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "price" + folder_r62.folderid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r62.user_id ? folder_r62.user_id : "Choose File");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.menuItemList);
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu Images | Google Drive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuitemsComponent_ng_template_16_mat_tab_6_span_6_Template, 5, 1, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MenuitemsComponent_ng_template_16_mat_tab_6_ng_container_8_Template, 28, 6, "ng-container", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_6_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r73.uploadGoogleMenuSheet();
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_16_mat_tab_6_Template_a_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r75.googlesheetUrl(ctx_r75.google_sheet_url);
        });

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
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.checkImageCountFlag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.drivefolders);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r43.google_sheet_url, " ");
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Google Sheets | Add-Ons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Upload Files");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuitemsComponent_ng_template_16_mat_tab_7_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r76.onFileSelect1($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Choose file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 131);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Manual Copy of Image URL's");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "For those of you that are tech savvy, owners can copy the Image URL's from both Google Drive or Dropbox and paste them into the Google Sheets Spreadsheet.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Google Drive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1. Login to Google Drive and upload all of your images first. Use folders for the Menu Categories (lunch, dinner, soups, etc.) if you wish. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2. After the images have been uploaded, select each image and click the \u201CShare Image\u201D button.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copy the link (as shown above) and paste the URL into Google Sheets (the one we created for you). Example URL: https://drive.google.com/file/d/1UAsbJZb66kBcaETVBT7nClg0B5k0c7yr/view?usp=sharing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_8_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4. Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r79 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("1. Menu Item Name: ", item_r79.value.menuItemName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("2. Menu Item Description: ", item_r79.value.menuItemDescription, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("3. Menu Item Price: ", item_r79.value.menuItemPrice, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("5. Category:", item_r79.value.category, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("6. Add-Ons: ", item_r79.value.addOnMultiple, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("7. Add-Ons Price: ", item_r79.value.addOnPrice, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("8. Required Category: ", item_r79.value.category, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("9. Required Selections: ", item_r79.value.optionSingle, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("10. Required Price: ", item_r79.value.optionSinglePrice, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("11. Instructions: ", item_r79.value.instructions, " ");
      }
    }

    function MenuitemsComponent_ng_template_16_mat_tab_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step 5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Spreadsheet Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuitemsComponent_ng_template_16_mat_tab_8_div_7_Template, 28, 10, "div", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 1, ctx_r45.googleSheet, ctx_r45.returnZero));
      }
    }

    function MenuitemsComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuitemsComponent_ng_template_16_mat_tab_4_Template, 12, 2, "mat-tab", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuitemsComponent_ng_template_16_mat_tab_5_Template, 45, 5, "mat-tab", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuitemsComponent_ng_template_16_mat_tab_6_Template, 32, 3, "mat-tab", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuitemsComponent_ng_template_16_mat_tab_7_Template, 45, 0, "mat-tab", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MenuitemsComponent_ng_template_16_mat_tab_8_Template, 9, 4, "mat-tab", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showFourthTab);
      }
    }

    function MenuitemsComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Google Drive URL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuitemsComponent_ng_template_17_Template_button_click_3_listener() {
          var modal_r81 = ctx.$implicit;
          return modal_r81.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MenuitemsComponent_ng_template_17_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.onManagerSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 135);

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
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r7.managerForm);
      }
    }

    var MenuitemsComponent =
    /*#__PURE__*/
    function () {
      function MenuitemsComponent(toastr, dialog, route, ngxService, modalService, _ProfileService, slimLoader, _CommonFunctionsService, _Router) {
        _classCallCheck(this, MenuitemsComponent);

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

      _createClass(MenuitemsComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.googleEmail) {
            this.checkingId = 'tb2';
          }
        }
      }, {
        key: "onChange",
        value: function onChange(event, item) {
          if (event.checked == true) {
            if (this.addedCategories.indexOf(item) == -1) this.addedCategories.push(item);
          }
        }
      }, {
        key: "REMOVEITEM",
        value: function REMOVEITEM() {
          var _this4 = this;

          this.removei.map(function (item, i) {
            _this4.removeItemFromArray(item);
          });
        }
      }, {
        key: "addItems",
        value: function addItems() {
          this.addedItems = this.addedCategories;
        }
      }, {
        key: "onChange1",
        value: function onChange1(event, item) {
          if (event.checked) {
            this.removei.push(item);
          }
        }
      }, {
        key: "removeCategories",
        value: function removeCategories() {
          this.addedItems = this.addedCategories;
        }
      }, {
        key: "removeItemFromArray",
        value: function removeItemFromArray(item) {
          var index = this.addedCategories.indexOf(item);

          if (index > -1) {
            this.addedCategories.splice(index, 1);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.getAllProductList();
          this.getCompanyProfile();
          this.getgoogleauthntication();
          this.getAllCategories();
          this.getAllGoogleSheetDetails();
          this.route.params.subscribe(function (data) {
            _this5.googleEmail = data.email;
          });
          this.getFolderbyEmail();
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          var formData = new FormData();
          formData.append('file', event.addedFiles[0]);
        }
      }, {
        key: "getFolderbyEmail",
        value: function getFolderbyEmail() {
          var _this6 = this;

          var isTabchange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.googleEmail) {
            var data = {
              email: this.googleEmail
            };
            this.ngxService.start();

            this._ProfileService.getFoldersCreatedInDrive(data).subscribe(function (res) {
              console.log('getFoldersCreatedInDrive', res);
              _this6.drivefolders = res.data;
              _this6.isChecked = 2;
              var tabCount = isTabchange ? 1 : 0;
              _this6.demo1TabIndex = tabCount; // if (this.showFirstTab) {
              //   const tabCount = 2;
              //   this.demo1TabIndex = tabCount;
              // }

              _this6.fetchFolder();

              _this6.showBlueColoredTable = false;
              _this6.showZerothTab = false;
              _this6.showFirstTab = true;
              _this6.showSecondTab = true;
              _this6.showThirdTab = true;
              _this6.showFourthTab = true;
              _this6.showFifthTab = true;

              _this6.ngxService.stop();
            });
          }
        }
      }, {
        key: "fetchFolder",
        value: function fetchFolder() {
          var _this7 = this;

          this.drivefolders.filter(function (value) {
            _this7.checkFolder.push(value.foldername);
          });
        }
      }, {
        key: "testFetchFolder",
        value: function testFetchFolder(category) {
          if (this.checkFolder.indexOf(category) !== -1) {
            return true;
          } else {
            return false;
          }
        }
        /**
         *
         * @param event
         * @param folderId
         * @param category
         */

      }, {
        key: "onFileSelect",
        value: function onFileSelect(event, fileName) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.file = file;
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

      }, {
        key: "onCategoryImageSelect",
        value: function onCategoryImageSelect(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.category_file = file;
          }
        }
        /**
         *
         * @param index
         */

      }, {
        key: "submitSheetData",
        value: function submitSheetData(folderId, category, folder) {
          var _this8 = this;

          var menu_name = $('#menu_name' + folderId).val().toString();
          var price = $('#price' + folderId).val().toString();
          var category_description = $('#category_description' + folderId).val().toString();

          if (menu_name !== "" && price !== "" && category_description !== "") {
            var formData1 = new FormData();
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
            var reader = new FileReader();

            reader.onloadend = function () {
              _this8.tempMenuItem = {
                folderId: folderId,
                menu_name: menu_name,
                price: price,
                img_url: reader.result,
                description: category_description
              };
            };

            reader.readAsDataURL(this.file);
            this.uploadImageToDrive(formData1, folderId, category);
          } else {
            this.toastr.error("Please fill all required fields");
          }
        }
      }, {
        key: "deleteFolder",
        value: function deleteFolder(index) {
          this.drivefolders.splice(index, 1);
        }
      }, {
        key: "returnZero",
        value: function returnZero() {
          return 0;
        }
      }, {
        key: "onFileSelect1",
        value: function onFileSelect1(event) {
          var _this9 = this;

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var formData = new FormData();
            formData.append('file', file); // formData.append('folderId',folderId);
            // formData.append('email',this.googleEmail);
            // formData.append('category',category);

            this.user = this._CommonFunctionsService.checkUser().user;

            this._ProfileService.uploadaddons(formData, this.user.company_id).subscribe(function (res) {
              _this9.toastr.success('Upload Menu successfully');
            });

            ;
          }
        }
      }, {
        key: "uploadImageToDrive",
        value: function uploadImageToDrive(formData, folderId, category) {
          var _this10 = this;

          this.user = this._CommonFunctionsService.checkUser().user;
          this.ngxService.start();

          this._ProfileService.uploadImageTodrive(this.user.company_id, formData).subscribe(function (res) {
            _this10.ngxService.stop();

            _this10.authentication_url = res.data;
            console.log(res.data, 'uploadimages');
            _this10.google_drive_url = res.data.drive_url;
            _this10.tempMenuItem !== "" ? _this10.menuItemList.push(_this10.tempMenuItem) : "";
            _this10.tempMenuItem = "";

            _this10.toastr.success('Upload successfull to drive');
          }, function (error) {
            _this10.ngxService.stop();

            _this10.toastr.error('Failed to upload, please try again later');
          });

          this.getAllGoogleSheetDetails();
        }
      }, {
        key: "getMenuItem",
        value: function getMenuItem(category) {
          var index = this.selectedCategoryList.indexOf(category.id);

          if (index != -1) {
            this.selectedCategoryList.splice(index, 1);
          } else {
            this.selectedCategoryList.push(category.id);
          }

          this.filterProductList();
          this.isCheckAllCategory = this.categoryList.filter(function (item) {
            return item.active;
          }).length == this.selectedCategoryList.length ? true : false;
        }
      }, {
        key: "toggleCheckAll",
        value: function toggleCheckAll() {
          if (this.isCheckAllCategory) {
            this.isCheckAllCategory = false;
            this.selectedCategoryList = [];
            this.filterProductList();
          } else {
            this.isCheckAllCategory = true;
            this.selectedCategoryList = this.categoryList.map(function (cat) {
              return cat.id;
            });
            this.filterProductList();
          }
        }
      }, {
        key: "filterProductList",
        value: function filterProductList() {
          var _this11 = this;

          this.productList.forEach(function (item) {
            if (_this11.selectedCategoryList.indexOf(item.category) == -1) {
              item.active = true;
            } else {
              item.active = false;
            }
          });
        }
      }, {
        key: "getAllProductList",
        value: function getAllProductList() {
          var _this12 = this;

          this.processing = true;
          this.user = this._CommonFunctionsService.checkUser().user;

          if (this.user.company_id) {
            this._ProfileService.getCategory(this.user.company_id).subscribe(function (res) {
              _this12.categoryList = res.data;

              _this12.categoryList.forEach(function (item) {
                _this12.selectedCategoryList.push(item.id);
              });
            });
          }

          if (this.user.unit_id) {
            this._ProfileService.getAllProductList(this.user.unit_id).subscribe(function (res) {
              _this12.productList = res.data;
              _this12.processing = false;
            }, function (error) {//debugger
            });
          } else {
            this.user.unit_id = localStorage.getItem("unit_id");

            this._ProfileService.getAllProductList(this.user.unit_id).subscribe(function (res) {
              _this12.productList = res.data;
              _this12.processing = false;
            }, function (error) {//debugger
            });
          }
        }
      }, {
        key: "getgoogleauthntication",
        value: function getgoogleauthntication() {
          var _this13 = this;

          this._ProfileService.getGoogleAuthenication().subscribe(function (res) {
            _this13.checkBool = true;
            _this13.isChecked += 1;
            _this13.authentication_url = res.data;
            console.log(_this13.authentication_url, 'authenticateurl'); //this.toastr.success('Google account verified please move to step 2')
          });
        }
      }, {
        key: "onClickGetStarted",
        value: function onClickGetStarted() {
          this.showZerothTab = true;
          this.showTutorialTable = false;
        }
      }, {
        key: "googlesheetUrl",
        value: function googlesheetUrl(google_sheet_url) {
          window.open(google_sheet_url);
        }
      }, {
        key: "googleDriveUrl",
        value: function googleDriveUrl(google_drive_url) {
          window.open(google_drive_url);
        }
      }, {
        key: "getAllGoogleSheetDetails",
        value: function getAllGoogleSheetDetails() {
          var _this14 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.getAllGoogleSheetDetails(this.date).subscribe(function (res) {
            _this14.googleSheet = res.data;
            _this14.imageCount = res.data.length;
            _this14.checkImageCountFlag = true;
          }, function (error) {//  
          });
        }
      }, {
        key: "createFolderinDrive",
        value: function createFolderinDrive() {
          var _this15 = this;

          var data = {
            folder: this.addedItems,
            email: this.googleEmail,
            // user_id: '11744'
            user_id: ''
          };

          this._ProfileService.createfolderInGoogleDrive(data).subscribe(function (res) {
            //const tabCount = 2;
            _this15.demo1TabIndex = 1;

            _this15.toastr.success('Folders created successfully');

            _this15.getFolderbyEmail(true);
          });
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          event.preventDefault();
          this.ref._checked = !this.ref._checked;
        }
      }, {
        key: "getCompanyProfile",
        value: function getCompanyProfile() {
          var _this16 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          if (this.user.unit_id) {
            this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe(function (res) {
              _this16.profile = res.data;
              _this16.google_sheet_url = res.data.google_sheet_url;
            });
          } else {
            this.user.unit_id = localStorage.getItem("unit_id");

            this._ProfileService.getCompanyprofile(this.user.unit_id).subscribe(function (res) {
              _this16.profile = res.data;
              _this16.google_sheet_url = res.data.google_sheet_url;
            }, function (error) {//  
            });
          }
        }
      }, {
        key: "getProductList",
        value: function getProductList(event) {
          if (event.activeId === 'tb2') {
            this.getAllProductList();
          }
        }
      }, {
        key: "googleDrive_url",
        value: function googleDrive_url(event, folderName, contentGoogleDriveUrl, index) {
          var _this17 = this;

          this.checkGoogleDriveFlag = index;
          this.selectedGoogleDriveFolder = folderName;
          this.modalService.open(contentGoogleDriveUrl, {
            ariaLabelledBy: 'modal-basic-title',
            windowClass: 'linkModal',
            size: 'lg'
          }).result.then(function (result) {
            _this17.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this17.closeResult = "Dismissed ".concat(_this17.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "uploadGoogleMenuSheet",
        value: function uploadGoogleMenuSheet() {
          var _this18 = this;

          this.ngxService.start();

          this._ProfileService.uploadGoogleMenuSheet().subscribe(function (res) {
            _this18.ngxService.stop();

            if (res.success) {
              _this18.toastr.success("Sync successful"); // this._ProfileService.uploadGoogleMenuSheet().subscribe((res: any) => {


              _this18.getAllProductList(); // })

            }
          }, function (error) {
            _this18.toastr.error('Sync failed, Please try again later');
          });
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this19 = this;

          this._ProfileService.getAllCategories().subscribe(function (res) {
            _this19.categories = res.data;
          });
        }
      }, {
        key: "openProduct",
        value: function openProduct(item) {
          this.getAllProductList();

          this._Router.navigateByUrl('menuitems/view/' + item.category + '/' + item.id);
        }
      }, {
        key: "getDescription",
        value: function getDescription(description) {
          return description.length > 25 ? description.substr(0, 25) + "..." : description;
        }
      }, {
        key: "getTitle",
        value: function getTitle(description) {
          return description.length > 10 ? description.substr(0, 10) + "..." : description;
        }
      }, {
        key: "getgmailuser",
        value: function getgmailuser() {
          var _this20 = this;

          var message = "Please get authenticated with gmail account";
          var dialogData = new _form_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(_form_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            maxWidth: "500px",
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              _this20._ProfileService.getGoogleAuthenication().subscribe(function (res) {
                _this20.authentication_url = res.data;
                console.log(_this20.authentication_url, 'dialogrefclose');
              });
            }
          });
        }
        /**
         * Add own category
         */

      }, {
        key: "addOwnCategory",
        value: function addOwnCategory() {
          var _this21 = this;

          if (this.owncategory !== "") {
            this.ngxService.start();

            this._ProfileService.addOwnCategory({
              category: this.owncategory
            }).subscribe(function (res) {
              _this21.toastr.success("Category successfully added");

              _this21.categories.push(res.data[0]);

              _this21.owncategory = "";

              _this21.ngxService.stop();
            }, function (err) {
              _this21.ngxService.stop();

              _this21.toastr.error(err.error);
            });
          } else {
            this.toastr.error("Please insert category name.");
          }
        }
      }, {
        key: "content",
        set: function set(content) {
          this.tabSet = content;
        }
      }]);

      return MenuitemsComponent;
    }();

    MenuitemsComponent.ɵfac = function MenuitemsComponent_Factory(t) {
      return new (t || MenuitemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    MenuitemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuitemsComponent,
      selectors: [["ng-component"]],
      viewQuery: function MenuitemsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabset"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ref = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      decls: 19,
      vars: 2,
      consts: [[1, "row", "el-element-overlay"], [4, "ngIf"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [3, "activeId", "tabChange"], ["t", "ngbTabset"], ["title", "Menu Items", "id", "tb1"], ["ngbTabContent", ""], ["contentGoogleDriveUrl", ""], ["title", "Google Sheet | images", "id", "tb2"], ["content3", ""], [1, "card", "card-body"], ["class", "mt-5", 4, "ngIf"], [1, "row", 3, "hidden"], [1, "col-12", "pt-4", "font-weight-bold", "text-info"], [1, "float-right"], ["for", "select-all"], ["type", "checkbox", "name", "select-all", "id", "select-all", 1, "ml-2", 3, "checked", "click"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "mt-5"], [1, "col-lg-4", "col-md-6"], [1, "card", 3, "click"], [1, "el-card-item", "cursor-pointer", "p-2", 3, "ngClass"], [1, "d-flex", "no-block", "align-items-center"], [1, "col-lg-6"], [1, "m-b-0", "fix-ht-h4"], [1, "text-muted", "fix-ht-spn"], [1, "col-lg-6", "p-l-15", "image-fix-height"], ["onerror", "this.src = 'assets/images/noProduct.png'", "alt", "user", 1, "w-100", 3, "src"], [1, "col-12", "pt-2", "font-weight-bold", 3, "hidden"], [1, "col-lg-3", "col-md-6", 3, "hidden"], [1, "el-card-item"], [1, "el-card-avatar", "el-overlay-1"], ["onerror", "this.src = 'assets/images/noProduct.png'", "alt", "user", 1, "productimg", 3, "src"], [1, "el-overlay"], [1, "list-style-none", "el-info"], [1, "el-item"], ["href", "javascript:void(0);", 1, "btn", "default", "btn-outline", "el-link"], [1, "sl-icon-link"], [1, "m-l-15"], [1, "ml-auto", "m-r-15"], ["type", "button", 1, "btn", "btn-dark", "btn-circle"], [1, "modal-header", 2, "background-color", "#7460ee"], ["id", "modal-basic-title", 1, "modal-title", 2, "color", "#fff"], ["type", "button", "aria-label", "Close", "id", "closeModal", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["style", "margin-bottom: 1.5rem;", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-dark", 3, "click"], [2, "margin-bottom", "1.5rem"], [2, "cursor", "pointer", "color", "rgb(67, 133, 238)", 3, "click"], [1, "step_tabs"], [1, "container"], [3, "selectedIndex"], ["label", "1", 4, "ngIf"], ["label", "2", 4, "ngIf"], ["label", "3", 4, "ngIf"], ["label", "5", 4, "ngIf"], [1, "row"], [1, "col-sm-4"], ["label", "1"], [1, "step_one"], [1, "mb-4"], [1, "col-md-4", "offset-md-4", "col-lg-4", "offset-lg-4"], [1, "icon_card"], [3, "href"], ["src", "../../assets/images/google.png", "alt", "google", 1, "drive"], [1, "btn", "btn-md", "btn-danger", "text-white"], [1, "fa", "fa-edit"], [1, "col-md-12", "col-lg-10", "offset-lg-1"], [1, "category_sec"], [1, "col-md-5"], [1, "category_area"], [1, "category_head"], [1, "category_checkbox"], ["appearance", "fill"], ["matInput", "", "placeholder", "Search", 1, "form-control"], [1, "mb-1", "font-weight-bold", "d-none"], [1, "custom-input", "mt-3"], ["type", "text", "name", "owncategory", "placeholder", "Add Your Own Category", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "px-3", "ml-2", 3, "click"], [1, "fa", "fa-plus"], [1, "col-md-2"], [1, "category_btn"], ["mat-raised-button", "", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-secondary", "btn-block", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-primary", "btn-block", "mt-4", 3, "click"], [3, "change"], ["label", "2"], [1, "step_three_right"], [1, "sync_btn"], ["mat-raised-button", "", 1, "btn", 3, "click"], ["src", "../../assets/images/google-sheets.png", "alt", "", 2, "width", "25px", "margin", "-2px 0 0 10px"], [1, "row", "pt-5"], [2, "text-align", "left", "font-size", "18px", "margin-bottom", "1rem"], [1, "col-md-1"], ["src", "../../assets/images/folder@1X.png", "alt", ""], [1, "col-md-4"], [1, "custom-input", "mb-2"], ["type", "text", "name", "menu_name", "placeholder", "Menu Item Name *", "required", "", 1, "w-100", 3, "id"], [1, "custom-input"], ["name", "category_description", "required", "", "placeholder", "Menu Item Description *", 1, "w-100", "custom-textarea", 3, "id"], ["type", "number", "name", "price", "required", "", "placeholder", "Menu Item Price *", 1, "w-100", 3, "id"], [1, "custom-file", "mb-2"], ["type", "file", "name", "file", "id", "customFile", "required", "", 1, "custom-file-input", 3, "change"], ["file", ""], ["for", "customFile", 1, "custom-file-label"], [1, "d-block", "mt-2"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "col-md-7", "row"], [1, "col-md-12", "mt-3"], ["class", "col-6 mb-4 p-1 text-center menu-item-list", 4, "ngIf"], [1, "col-6", "mb-4", "p-1", "text-center", "menu-item-list"], [1, "w-50", "mb-1", 3, "src"], [1, "p-0", "mb-0", "font-weight-normal"], [1, "font-weight-bold"], ["label", "3"], [1, "step_one", "padding_area"], [1, "col-md-12", "text-center"], ["src", "/assets/images/menu-poster.jpg", 2, "width", "75%", "margin-bottom", "0.5rem"], [1, "step_four"], [1, "form-group"], ["for", "", 1, "label-control"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], [1, "add_btn"], ["mat-raised-button", "", 1, "btn", "btn-primary"], [1, "col-md-12", "pt-4"], [1, "col-md-3"], ["src", "../../assets/images/google-drive@1X.png", "alt", "  ", 1, "drive"], [1, "col-md-9"], ["src", "../../assets/images/Layer-5@1X.png", "alt", ""], ["src", "../../assets/images/Layer-6@1X.png", "alt", ""], ["label", "5"], [2, "text-align", "center"], ["class", "spreadsheet_detail", 4, "ngFor", "ngForOf"], [1, "spreadsheet_detail"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "username", 1, "col-md-3", "col-form-label"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["name", "dp", "type", "text", "formControlName", "username", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-dark"]],
      template: function MenuitemsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function MenuitemsComponent_Template_ngb_tabset_tabChange_9_listener($event) {
            return ctx.getProductList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuitemsComponent_ng_template_12_Template, 14, 6, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuitemsComponent_ng_template_13_Template, 11, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MenuitemsComponent_ng_template_16_Template, 13, 6, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MenuitemsComponent_ng_template_17_Template, 22, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productList.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.checkingId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 28px;\r\n    font-weight: 500;\r\n}\r\n\r\n.hero_section[_ngcontent-%COMP%] {\r\n    background: url('Rectangle-img.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    padding: 4rem 0;\r\n}\r\n.hero_content[_ngcontent-%COMP%]   .hero_img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 2rem;\r\n}\r\n.hero_content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    margin-bottom: 2rem;\r\n}\r\n.hero_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    margin-bottom: 2rem;\r\n    line-height: 28px;\r\n}\r\n.hero_content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n.step_tabs[_ngcontent-%COMP%] {\r\n    padding: 4rem 0;\r\n}\r\n  .mat-tab-label {\r\n    width: 60px;\r\n    height: 60px !important;\r\n    font-weight: 700;\r\n    padding: 0 !important;\r\n    background: #ddd;\r\n    margin: 0 5.5rem;\r\n    border-radius: 50px;\r\n    opacity: 1 !important;\r\n    min-width: auto !important;\r\n    color: #111;\r\n}\r\n  .mat-tab-label-active {\r\n    background-color: #2196f3;\r\n    color: #fff;\r\n}\r\n  .mat-tab-group.mat-primary .mat-ink-bar {\r\n    display: none;\r\n}\r\n  .mat-tab-labels {\r\n    justify-content: center;\r\n}\r\n  .mat-tab-label .mat-tab-label-content {\r\n    font-size: 24px;\r\n}\r\n  .mat-tab-labels {\r\n    position: relative;\r\n}\r\n  .mat-tab-labels:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 28px;\r\n    left: 10%;\r\n    border-bottom: 4px solid #ddd;\r\n    width: 80%;\r\n}\r\n  .mat-tab-body-content {\r\n    padding: 0 1rem;\r\n}\r\n  .mat-tab-nav-bar,   .mat-tab-header {\r\n    border-bottom: none !important;\r\n}\r\n\r\n\r\n.step_one[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 3rem 0;\r\n}\r\n.step_one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    margin-bottom: 2.5rem;\r\n}\r\n.step_one[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    margin-bottom: 2.5rem;\r\n}\r\n.icon_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    \r\n    border: 1px solid #2196f3;\r\n    border-radius: 10px;\r\n    padding: 1.4rem;\r\n    margin-bottom: 1rem;\r\n    height: 129px;\r\n}\r\n.icon_card[_ngcontent-%COMP%]   img.dropbox[_ngcontent-%COMP%] {\r\n    width: 145px;\r\n}\r\n.icon_card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin-bottom: 2rem;\r\n    line-height: 28px;\r\n    font-weight: 600;\r\n    color: #2196f3;\r\n}\r\n\r\n\r\n  .mat-checkbox-inner-container {\r\n    \r\n}\r\n.category_area[_ngcontent-%COMP%] {\r\n    border: 1px solid #eee;\r\n}\r\n.category_head[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 1rem;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.category_head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-weight: 600;\r\n}\r\n.category_checkbox[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 1rem;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n    border: 1px solid #d5d5d5;\r\n    border-radius: 4px;\r\n    height: 40px;\r\n    padding-left: 0.5rem;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n  .mat-form-field-underline {\r\n    display: none;\r\n}\r\n  .mat-form-field-appearance-fill .mat-form-field-flex {\r\n    padding: 0 !important;\r\n}\r\n  .mat-form-field {\r\n    width: 100% !important;\r\n}\r\n  .mat-checkbox-layout .mat-checkbox-label {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 500;\r\n}\r\n.category_sec[_ngcontent-%COMP%] {\r\n    border: 1px solid #dedede;\r\n    padding: 2rem;\r\n}\r\n  .mat-checkbox {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.category_btn[_ngcontent-%COMP%] {\r\n    padding-top: 8rem;\r\n}\r\n\r\n\r\n.step_three_left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.step_three_left[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n}\r\n.step_three_left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    margin-bottom: 1rem;\r\n}\r\n.step_three_right[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.step_three_left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n}\r\n.step_three_right[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n}\r\n.step_three_right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n.step_three_right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-right: 1rem;\r\n}\r\n.step_three_right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 55px;\r\n    margin-bottom: 1rem;\r\n}\r\n.step_three_right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n}\r\n.sync_btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 4rem;\r\n}\r\n.sync_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: #eee;\r\n    padding: 3px 30px;\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.step_four[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.label-control[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n}\r\n.bot_img[_ngcontent-%COMP%] {\r\n    border: 1px solid #dedede;\r\n    padding: 1rem;\r\n}\r\n.bot_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.bot_txt[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-top: 5rem;\r\n}\r\n.bot_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n}\r\n.add_btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 2rem 0;\r\n}\r\n\r\n\r\n.step_five[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 2rem;\r\n}\r\n.padding_area[_ngcontent-%COMP%] {\r\n    padding: 3rem 5rem;\r\n}\r\n.spreadsheet_detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {    \r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    margin-bottom: 2.5rem;\r\n    text-align: center;\r\n    padding: 4rem 0;\r\n}\r\n.spreadsheet_detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-size: 18px;\r\n}\r\n.spreadsheet_detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n.p_t_note[_ngcontent-%COMP%] {\r\n    padding-top: 8rem;\r\n}\r\n\r\n\r\n.step_six[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n    font-size: 14px;\r\n}\r\n.step_six[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.step_six[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    margin-bottom: 2rem;\r\n}\r\n.step_six[_ngcontent-%COMP%]   .icon_card[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.menu-item-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .menu-item-list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 12px !important;\r\n}\r\n\r\n@media only screen and (min-width: 1024px)and (max-width: 1365px)  {\r\n    .icon_card[_ngcontent-%COMP%]   img.dropbox[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n    .category_sec[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n    }\r\n    .category_sec[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .bot_txt[_ngcontent-%COMP%] {\r\n        padding-top: 0;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (min-width: 768px)and (max-width: 1023px)  {\r\n      .mat-tab-label {\r\n        margin: 0 1.5rem;\r\n    }\r\n\r\n      .mat-tab-labels:before {\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    .icon_card[_ngcontent-%COMP%]   img.dropbox[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n    .category_sec[_ngcontent-%COMP%] {\r\n        padding: 1rem;\r\n    }\r\n    .category_sec[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .padding_area[_ngcontent-%COMP%] {\r\n        padding: 3rem 0;\r\n    }\r\n    .bot_txt[_ngcontent-%COMP%] {\r\n        padding-top: 0;\r\n    }\r\n    .spreadsheet_detail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 767px) {\r\n      .mat-tab-labels:before {\r\n        width: 100%;\r\n        left: 0;\r\n        top: 18px;\r\n    }\r\n      .mat-tab-label {\r\n        margin: 0 0.5rem;\r\n        height: 40px !important;\r\n        width: 40px !important;\r\n    }\r\n      .mat-tab-label .mat-tab-label-content {\r\n        font-size: 16px;\r\n    }\r\n    .category_btn[_ngcontent-%COMP%] {\r\n        padding-top: 0;\r\n        margin: 2rem 0;\r\n    }\r\n    .padding_area[_ngcontent-%COMP%] {\r\n        padding: 3rem 0;\r\n    }\r\n    .p_t_note[_ngcontent-%COMP%] {\r\n        padding-top: 0;\r\n    }\r\n}\r\n\r\n.image-fix-height[_ngcontent-%COMP%]{\r\n    max-height: 82px;\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudWl0ZW1zL21lbnVpdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0EsK0JBQStCO0FBQy9CO0lBQ0ksb0NBQXdEO0lBQ3hELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBLCtCQUErQjtBQUkvQiwyQkFBMkI7QUFDM0I7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOztJQUVJLDhCQUE4QjtBQUNsQztBQUNBLDJCQUEyQjtBQUczQiwyQkFBMkI7QUFDM0I7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0EsMkJBQTJCO0FBRzNCLDJCQUEyQjtBQUMzQjtJQUNJO3dCQUNvQjtBQUN4QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBLDJCQUEyQjtBQUczQiw2QkFBNkI7QUFDN0I7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBLDZCQUE2QjtBQUc3Qiw0QkFBNEI7QUFDNUI7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0EsNEJBQTRCO0FBRzVCLDRCQUE0QjtBQUM1QjtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQSw0QkFBNEI7QUFHNUIsMkJBQTJCO0FBQzNCO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EsMkJBQTJCO0FBRTNCO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUEsd0NBQXdDO0FBRXhDO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBRUEsd0NBQXdDO0FBRXhDLG9DQUFvQztBQUVwQztJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLE9BQU87SUFDWDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBRUEsb0NBQW9DO0FBRXBDLHNDQUFzQztBQUN0QztJQUNJO1FBQ0ksV0FBVztRQUNYLE9BQU87UUFDUCxTQUFTO0lBQ2I7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBQ0Esc0NBQXNDO0FBRXRDO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbnVpdGVtcy9tZW51aXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2ICxwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxucCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLyoqKioqIEhlcm8gU2VjdGlvbiBDU1MgKioqKioqKi9cclxuLmhlcm9fc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvUmVjdGFuZ2xlLWltZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogNHJlbSAwO1xyXG59XHJcbi5oZXJvX2NvbnRlbnQgLmhlcm9faW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4uaGVyb19jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmhlcm9fY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbi5oZXJvX2NvbnRlbnQgaDQge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4vKioqKiogSGVybyBTZWN0aW9uIENTUyAqKioqKioqL1xyXG5cclxuXHJcblxyXG4vKioqKiogTWF0IFRhYnMgQ1NTICoqKioqKiovXHJcbi5zdGVwX3RhYnMge1xyXG4gICAgcGFkZGluZzogNHJlbSAwO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBtYXJnaW46IDAgNS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHM6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyOHB4O1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkZGQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1uYXYtYmFyLCBcclxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLyoqKioqIE1hdCBUYWJzIENTUyAqKioqKioqL1xyXG5cclxuXHJcbi8qKioqKiBTdGVwIE9uZSBDU1MgKioqKioqKi9cclxuLnN0ZXBfb25lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNyZW0gMDtcclxufVxyXG4uc3RlcF9vbmUgaDIge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG4uc3RlcF9vbmUgaDQge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG4uaWNvbl9jYXJkIGltZyB7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMS40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGhlaWdodDogMTI5cHg7XHJcbn1cclxuLmljb25fY2FyZCBpbWcuZHJvcGJveCB7XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbn1cclxuLmljb25fY2FyZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzIxOTZmMztcclxufVxyXG4vKioqKiogU3RlcCBPbmUgQ1NTICoqKioqKiovXHJcblxyXG5cclxuLyoqKioqIFN0ZXAgVHdvIENTUyAqKioqKioqL1xyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAqL1xyXG59XHJcbi5jYXRlZ29yeV9hcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuLmNhdGVnb3J5X2hlYWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbi5jYXRlZ29yeV9oZWFkIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2F0ZWdvcnlfY2hlY2tib3gge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNWQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uY2F0ZWdvcnlfc2VjIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhdGVnb3J5X2J0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcclxufVxyXG4vKioqKiogU3RlcCBUd28gQ1NTICoqKioqKiovXHJcblxyXG5cclxuLyoqKioqIFN0ZXAgVGhyZWUgQ1NTICoqKioqKiovXHJcbi5zdGVwX3RocmVlX2xlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3RlcF90aHJlZV9sZWZ0IGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0gXHJcbi5zdGVwX3RocmVlX2xlZnQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLnN0ZXBfdGhyZWVfcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3RlcF90aHJlZV9sZWZ0IHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc3RlcF90aHJlZV9yaWdodCBoNSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5zdGVwX3RocmVlX3JpZ2h0IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc3RlcF90aHJlZV9yaWdodCBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuLnN0ZXBfdGhyZWVfcmlnaHQgaW1nIHtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uc3RlcF90aHJlZV9yaWdodCBsaSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnN5bmNfYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbn1cclxuLnN5bmNfYnRuIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogM3B4IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi8qKioqKiBTdGVwIFRocmVlIENTUyAqKioqKioqL1xyXG5cclxuXHJcbi8qKioqKiBTdGVwIEZvdXIgQ1NTICoqKioqKiovXHJcbi5zdGVwX2ZvdXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubGFiZWwtY29udHJvbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5ib3RfaW1nIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5ib3RfaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYm90X3R4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbn1cclxuLmJvdF90eHQgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmFkZF9idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuLyoqKioqIFN0ZXAgRm91ciBDU1MgKioqKioqKi9cclxuXHJcblxyXG4vKioqKiogU3RlcCBGaXZlIENTUyAqKioqKioqL1xyXG4uc3RlcF9maXZlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLnBhZGRpbmdfYXJlYSB7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDVyZW07XHJcbn1cclxuLnNwcmVhZHNoZWV0X2RldGFpbCBoMiB7ICAgIFxyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRyZW0gMDtcclxufVxyXG4uc3ByZWFkc2hlZXRfZGV0YWlsIHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc3ByZWFkc2hlZXRfZGV0YWlsIGltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5wX3Rfbm90ZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcclxufVxyXG4vKioqKiogU3RlcCBGaXZlIENTUyAqKioqKioqL1xyXG5cclxuXHJcbi8qKioqKiBTdGVwIFNpeCBDU1MgKioqKioqKi9cclxuLnN0ZXBfc2l4IHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uc3RlcF9zaXgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uc3RlcF9zaXggaW1nIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5zdGVwX3NpeCAuaWNvbl9jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKioqKiogU3RlcCBTaXggQ1NTICoqKioqKiovXHJcblxyXG4ubWVudS1pdGVtLWxpc3QgaDQsIC5tZW51LWl0ZW0tbGlzdCBoNSB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqKioqKiogSVBBRCBQcm8gTWVkaWEgUXVlcnkgKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KWFuZCAobWF4LXdpZHRoOiAxMzY1cHgpICB7XHJcbiAgICAuaWNvbl9jYXJkIGltZy5kcm9wYm94IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNhdGVnb3J5X3NlYyB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuICAgIC5jYXRlZ29yeV9zZWMgLmNvbC1tZC0yIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmJvdF90eHQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKioqKioqKiBJUEFEIFBybyBNZWRpYSBRdWVyeSAqKioqKioqKioqL1xyXG5cclxuLyoqKioqKiogSVBBRCBNZWRpYSBRdWVyeSAqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweClhbmQgKG1heC13aWR0aDogMTAyM3B4KSAge1xyXG4gICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDAgMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHM6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmljb25fY2FyZCBpbWcuZHJvcGJveCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5jYXRlZ29yeV9zZWMge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnlfc2VjIC5jb2wtbWQtMiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5wYWRkaW5nX2FyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgIH1cclxuICAgIC5ib3RfdHh0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5zcHJlYWRzaGVldF9kZXRhaWwgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqKioqKiogSVBBRCBNZWRpYSBRdWVyeSAqKioqKioqKioqL1xyXG5cclxuLyoqKioqKiogTW9iaWxlIE1lZGlhIFF1ZXJ5ICoqKioqKioqKiovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHM6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMThweDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5jYXRlZ29yeV9idG4ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmdfYXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgfVxyXG4gICAgLnBfdF9ub3RlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxufVxyXG4vKioqKioqKiBNb2JpbGUgTWVkaWEgUXVlcnkgKioqKioqKioqKi9cclxuXHJcbi5pbWFnZS1maXgtaGVpZ2h0e1xyXG4gICAgbWF4LWhlaWdodDogODJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuitemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'menuitems.component.html',
          styleUrls: ['./menuitems.component.css']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }, {
          type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]
        }, {
          type: _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        ref: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ref']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTabset"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/menuitems/menuitems.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/menuitems/menuitems.module.ts ***!
    \***********************************************/

  /*! exports provided: MenuitemsModule */

  /***/
  function srcAppMenuitemsMenuitemsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuitemsModule", function () {
      return MenuitemsModule;
    });
    /* harmony import */


    var _menuitems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menuitems.component */
    "./src/app/menuitems/menuitems.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/menuitems/edit/edit.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _menuitems_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./menuitems.routing */
    "./src/app/menuitems/menuitems.routing.ts");
    /* harmony import */


    var _truncate_string_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./truncate-string.pipe */
    "./src/app/menuitems/truncate-string.pipe.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/menuitems/material/material.module.ts"); // import { SpinnerComponent } from '../shared/spinner.component';


    var MenuitemsModule = function MenuitemsModule() {
      _classCallCheck(this, MenuitemsModule);
    };

    MenuitemsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MenuitemsModule
    });
    MenuitemsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MenuitemsModule_Factory(t) {
        return new (t || MenuitemsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarModule"].forRoot(), _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_menuitems_routing__WEBPACK_IMPORTED_MODULE_9__["EcomRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MenuitemsModule, {
        declarations: [_menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"], _truncate_string_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncateStringPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuitemsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"], _truncate_string_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncateStringPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarModule"].forRoot(), _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_menuitems_routing__WEBPACK_IMPORTED_MODULE_9__["EcomRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/menuitems/menuitems.routing.ts":
  /*!************************************************!*\
    !*** ./src/app/menuitems/menuitems.routing.ts ***!
    \************************************************/

  /*! exports provided: EcomRoutes */

  /***/
  function srcAppMenuitemsMenuitemsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcomRoutes", function () {
      return EcomRoutes;
    });
    /* harmony import */


    var _menuitems_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menuitems.component */
    "./src/app/menuitems/menuitems.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/menuitems/edit/edit.component.ts");

    var EcomRoutes = [{
      path: '',
      children: [{
        path: 'view/:categoryId/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"],
        data: {
          title: 'Edit Product',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'View Product'
          }]
        }
      }, {
        path: '',
        component: _menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"]
      }, {
        path: 'auth/:email',
        component: _menuitems_component__WEBPACK_IMPORTED_MODULE_0__["MenuitemsComponent"]
      }]
    }];
    /***/
  },

  /***/
  "./src/app/menuitems/truncate-string.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/menuitems/truncate-string.pipe.ts ***!
    \***************************************************/

  /*! exports provided: TruncateStringPipe */

  /***/
  function srcAppMenuitemsTruncateStringPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncateStringPipe", function () {
      return TruncateStringPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TruncateStringPipe =
    /*#__PURE__*/
    function () {
      function TruncateStringPipe() {
        _classCallCheck(this, TruncateStringPipe);
      }

      _createClass(TruncateStringPipe, [{
        key: "transform",
        value: function transform(value, length) {
          var biggestWord = 50;
          var elipses = "...";
          if (typeof value === "undefined") return value;
          if (value.length <= length) return value;
          if (length < elipses.length) return ''; //.. truncate to about correct lenght

          var truncatedText = value.slice(0, length + biggestWord); //.. now nibble ends till correct length

          while (truncatedText.length > length - elipses.length) {
            var lastSpace = truncatedText.lastIndexOf(" ");

            if (lastSpace === -1) {
              truncatedText = "";
              break;
            }

            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');
          }

          ;
          return truncatedText + elipses;
        }
      }]);

      return TruncateStringPipe;
    }();

    TruncateStringPipe.ɵfac = function TruncateStringPipe_Factory(t) {
      return new (t || TruncateStringPipe)();
    };

    TruncateStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncateString",
      type: TruncateStringPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'truncateString'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=menuitems-menuitems-module-es5.js.map