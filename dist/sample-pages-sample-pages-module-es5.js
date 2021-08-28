function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample-pages-sample-pages-module"], {
  /***/
  "./src/app/sample-pages/helper-classes/hc.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/sample-pages/helper-classes/hc.component.ts ***!
    \*************************************************************/

  /*! exports provided: HelperclassesComponent */

  /***/
  function srcAppSamplePagesHelperClassesHcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperclassesComponent", function () {
      return HelperclassesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelperclassesComponent = function HelperclassesComponent() {
      _classCallCheck(this, HelperclassesComponent);
    };

    HelperclassesComponent.ɵfac = function HelperclassesComponent_Factory(t) {
      return new (t || HelperclassesComponent)();
    };

    HelperclassesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelperclassesComponent,
      selectors: [["ng-component"]],
      decls: 3780,
      vars: 15,
      consts: [[1, "row"], [1, "col-12"], [1, "card-title"], [1, "card"], [1, "card-body"], [1, "table", "table-bordered"], [1, "text-nowrap"], [1, "text-muted"], [1, "text-primary"], [1, "text-success"], [1, "text-info"], [1, "text-warning"], [1, "text-danger"], [1, "text-dark"], [1, "col-md-12", "m-t-40", "m-b-40"], [1, "col-md-3"], [1, "col-sm-12", "m-t-40", "m-b-40"], [1, "col-md-4"], [1, "card-title", "m-t-40"], [1, "card-subtitle"], [1, "card-title", "m-t-30"], [1, "table-responsive"], [1, "table"], [1, "bg-cyan", "text-white"], [1, "card-text", "my-1"], [1, "bg-light", "p-3", "mt-3"], [1, "language-markup", "p-3", "bg-light", "mt-3"], [1, "language-html", "scrollable"], [1, "py-1"], [1, "bd-example", "my-3"], [1, "bg-cyan", "clearfix"], ["type", "button", 1, "btn", "btn-secondary", "float-left"], ["type", "button", 1, "btn", "btn-secondary", "float-right"], [1, "language-markup", "scrollable", "p-3", "bg-light", "mt-3"], [1, "bd-example", "d-flex"], ["type", "button", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS/display"], [1, "d-inline", "bg-info", "p-1", "text-white"], [1, "d-block", "bg-info", "p-1", "text-white"], [1, "d-inline-block", "bg-info", "p-1", "text-white"], [1, "list-style-none"], [1, "m-r-10", "mdi", "mdi-arrow-right"], [1, "table", "mb-0"], [1, "bd-example"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/DDwbjWCgxVM?", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "d-flex", "p-2", "bg-cyan", "text-white"], [1, "d-inline-flex", "p-2", "bg-cyan", "text-white"], [1, "d-flex", "flex-row", "bg-info", "text-white", "mb-3"], [1, "p-2", "bg-info", "border-right"], [1, "d-flex", "flex-row-reverse", "bg-info", "text-white"], [1, "p-2", "bg-info", "border-left"], [1, "d-flex", "flex-column", "bg-info", "text-white", "mb-3"], [1, "p-2", "bg-info", "border-bottom"], [1, "p-2", "bg-info"], [1, "d-flex", "flex-column-reverse", "bg-info", "text-white"], [1, "card-text"], [1, "d-flex", "justify-content-start", "bg-light", "mb-3", "text-white"], [1, "p-2", "bg-cyan", "border-right"], [1, "d-flex", "justify-content-end", "bg-light", "mb-3", "text-white"], [1, "d-flex", "justify-content-center", "bg-light", "mb-3", "text-white"], [1, "p-2", "bg-cyan", "border-left", "border-right"], [1, "d-flex", "justify-content-between", "bg-light", "mb-3", "text-white"], [1, "p-2", "bg-info", "border-left", "border-right"], [1, "d-flex", "justify-content-around", "bg-light", "text-white"], [1, "d-flex", "align-items-start", "bg-light", "mb-3", "text-white", 2, "height", "100px"], [1, "d-flex", "align-items-end", "bg-light", "mb-3", "text-white", 2, "height", "100px"], [1, "d-flex", "align-items-center", "bg-light", "mb-3", "text-white", 2, "height", "100px"], [1, "d-flex", "align-items-baseline", "bg-light", "mb-3", "text-white", 2, "height", "100px"], [1, "d-flex", "align-items-stretch", "bg-light", "text-white", 2, "height", "100px"], [1, "d-flex", "bg-light", "text-white", "mb-3", 2, "height", "100px"], [1, "align-self-start", "p-2", "bg-info", "border-right"], [1, "align-self-end", "p-2", "bg-cyan", "border-right"], [1, "align-self-center", "p-2", "bg-info", "border-right"], [1, "align-self-baseline", "p-2", "bg-cyan", "border-right"], [1, "d-flex", "bg-light", "text-white", 2, "height", "100px"], [1, "align-self-stretch", "p-2", "bg-info", "border-right"], ["href", "https://stackoverflow.com/a/37535548"], [1, "bd-example", "m-t-15"], [1, "d-flex", "bg-light", "text-white", "mb-3"], [1, "mr-auto", "p-2", "bg-cyan", "border-right"], [1, "p-2", "bg-cyan", "border-left"], [1, "ml-auto", "p-2", "bg-info", "border-left"], [1, "d-flex", "align-items-start", "flex-column", "bg-light", "text-white", "mb-3", 2, "height", "200px"], [1, "mb-auto", "p-2", "bg-cyan"], [1, "p-2", "bg-cyan", "border-bottom"], [1, "p-2", "bg-cyan"], [1, "d-flex", "align-items-end", "flex-column", "bg-light", "text-white", "mb-3", 2, "height", "200px"], [1, "mt-auto", "p-2", "bg-info"], [1, "d-flex", "flex-nowrap", "bg-light"], [1, "p-2", "bg-cyan", "text-white"], [1, "p-2"], [1, "d-flex", "flex-wrap", "bg-light", "text-white"], [1, "p-2", "border-right", "bg-cyan"], [1, "p-2", "border-right", "border-top", "bg-cyan"], [1, "d-flex", "flex-wrap-reverse", "bg-light", "text-white"], [1, "p-2", "bg-cyan", "border-bottom", "border-right", "border-top"], [1, "p-2", "bg-cyan", "border-right", "border-top"], [1, "d-flex", "flex-nowrap", "bg-light", "text-white"], [1, "order-3", "p-2", "bg-info", "border-right"], [1, "order-2", "p-2", "bg-info", "border-right"], [1, "order-1", "p-2", "bg-info", "border-right"], [1, "d-flex", "align-content-start", "flex-wrap", "bg-light", "text-white", "mb-3", 2, "height", "140px"], [1, "d-flex", "align-content-end", "flex-wrap", "bg-light", "text-white", "mb-3", 2, "height", "140px"], [1, "p-2", "bg-info", "border-right", "border-top"], [1, "d-flex", "align-content-center", "flex-wrap", "bg-light", "text-white", "mb-3", 2, "height", "140px"], [1, "d-flex", "align-content-between", "flex-wrap", "bg-light", "text-white", "mb-3", 2, "height", "200px"], [1, "d-flex", "align-content-around", "flex-wrap", "bg-light", "text-white", "mb-3", 2, "height", "140px"], [1, "d-flex", "align-content-stretch", "flex-wrap", "bg-light", "text-white", "mb-3", 2, "height", "140px"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS/float"], [1, "bd-example", "bg-light", "m-t-15"], [1, "float-left"], [1, "float-right"], [1, "float-none"], [1, "bd-example", "bg-light"], [1, "float-sm-left"], [1, "float-md-left"], [1, "float-lg-left"], [1, "float-xl-left"], [1, "text-hide", "my-2", 2, "background-image", "url('../../assets/images/logo-icon.png')", "width", "30px", "height", "26px"], [1, "bd-example", "m-t-30"], [1, "w-25", "p-3", 2, "background-color", "#eee"], [1, "w-50", "p-3", 2, "background-color", "#eee"], [1, "w-75", "p-3", 2, "background-color", "#eee"], [1, "w-100", "p-3", 2, "background-color", "#eee"], [2, "height", "100px", "background-color", "rgba(255,0,0,0.1)"], [1, "h-25", "d-inline-block", 2, "width", "120px", "background-color", "rgba(0,0,255,.1)"], [1, "h-50", "d-inline-block", 2, "width", "120px", "background-color", "rgba(0,0,255,.1)"], [1, "h-75", "d-inline-block", 2, "width", "120px", "background-color", "rgba(0,0,255,.1)"], [1, "h-100", "d-inline-block", 2, "width", "120px", "background-color", "rgba(0,0,255,.1)"], [1, "mh-100", 2, "width", "100px", "height", "200px", "background-color", "rgba(0,0,255,0.1)"], [1, "m-t-20", "m-b-0"], [1, "bd-example", "my-2"], [1, "mx-auto", 2, "width", "200px", "background-color", "rgba(86,61,124,.15)"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"], [1, "align-baseline"], [1, "align-top"], [1, "align-middle"], [1, "align-bottom"], [1, "align-text-top"], [1, "align-text-bottom"], [1, "bg-light", 2, "height", "100px"]],
      template: function HelperclassesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Custom Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Text Color Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ".text-muted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".text-primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ".text-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ".text-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".text-warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ".text-danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ".text-dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Font Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ".font-weight-light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Font weight will be light (300).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ".font-weight-normal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Font weight will be normal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".font-weight-bold ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Font weight will be bold (700)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Padding Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, ".p-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Padding will be 0px from all side.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ".p-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Padding will be 10px from all side.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, ".p-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Padding will be 20px from all side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Padding Left Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, ".p-l-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Only Padding Left will be 0px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, ".p-l-10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Only Padding Left will be 10px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ".p-l-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Only Padding Left will be 20px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Padding right Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, ".p-r-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Only Padding right will be 0px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, ".p-r-10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Only Padding right will be 10px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, ".p-r-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Only Padding right will be 20px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Padding top Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, ".p-t-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Only Padding top will be 0px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, ".p-t-10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Only Padding top will be 10px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, ".p-t-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Only Padding top will be 20px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Margin top Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, ".m-t-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Only Margin top will be 5px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, ".m-t-10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Only Margin top will be 10px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, ".m-t-15 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Only Margin top will be 15px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ".m-t-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Only Margin top will be 20px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, ".m-t-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Only Margin top will be 30px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, ".m-t-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Only Margin top will be 40px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Margin Bottom Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, ".m-b-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Only Margin Bottom will be 5px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, ".m-b-10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Only Margin Bottom will be 10px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, ".m-b-15 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Only Margin Bottom will be 15px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, ".m-b-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Only Margin Bottom will be 20px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, ".m-b-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Only Margin Bottom will be 30px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Margin Right Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, ".m-r-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Only Margin Right will be 5px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, ".m-r-10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Only Margin Right will be 10px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ".m-r-15 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Only Margin Right will be 15px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, ".m-r-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Only Margin Right will be 20px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, ".m-r-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Only Margin Right will be 30px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, ".m-r-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Only Margin Right will be 40px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Margin Left Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, ".m-l-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Only Margin Left will be 5px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, ".m-l-10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Only Margin Left will be 10px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, ".m-l-15 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Only Margin Left will be 15px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, ".m-l-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Only Margin Left will be 20px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, ".m-l-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Only Margin Left will be 30px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, ".m-l-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Only Margin Left will be 40px.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Background Colors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, ".bg-primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "For Primary background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, ".bg-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "For Success (green) background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, ".bg-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "For info (Blue) background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, ".bg-warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "For Warning (yellow) background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, ".bg-danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "For Danger (red) background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, ".bg-theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "For Theme background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, ".bg-inverse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "For inverse (dark) background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, ".bg-purple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "For Purple background color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "h4", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Bootstrap Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Borders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Additive border");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Use of below classes as per your requiements, which side you want border.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, ".border");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Use to add solid border of 1px on every side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, ".border-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Use to add solid border top of 1px on obejct.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, ".border-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Use to add solid border bottom of 1px on object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, ".border-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "Use to add solid border left of 1px on object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, ".border-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Use to add solid border right of 1px on object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Subtractive border");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Use of below classes as per your requiements, which side you don't want to add border.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, ".border-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "Use when remove border from all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, ".border-top-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "Use when remove border from the top side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, ".border-bottom-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "Use when remove border from the bottom side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, ".border-left-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "Use when remove border from the left side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, ".border-right-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Use when remove border from the right side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Border color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "When you want add color in the border you can choose any of the below classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, ".border border-primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Use when add primary color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, ".border border-secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "Use when add secondary color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, ".border border-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Use when add success color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, ".border border-danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "Use when add danger color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, ".border border-warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "Use when add warning color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, ".border border-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "Use when add info color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, ".border border-light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "Use when add light color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, ".border border-dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "Use when add dark color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, ".border border-white");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "Use when add white color border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "Border-radius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "Use to give rounded corner to the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, ".rounded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "Add round corners border to all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, ".rounded-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "Add round corners border to top side only of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, ".rounded-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "Add round corners border to bottom side only of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, ".rounded-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "Add round corners border to left side only of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, ".rounded-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "Add round corners border to right side only of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, ".rounded-circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "Create round circle border of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, ".rounded-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "Remove border corder from the all side of the object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, ".rounded-pill");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, "Add border radiun from all corners.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "Clearfix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "Quickly and easily clear floated content within a container by adding a clearfix utility.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "Easily clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "float");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "s by adding ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, ".clearfix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "to the parent element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, ". Can also be used as a mixin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "\n\t                <div class=\"clearfix\">...</div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "pre", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "\t                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](734, "Example Button floated left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "Example Button floated right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "\n\t                <div class=\"bg-cyan clearfix\">\n\t                  <button type=\"button\" class=\"btn btn-secondary float-left\">Example Button floated left</button>\n\t                  <button type=\"button\" class=\"btn btn-secondary float-right\">Example Button floated right</button>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "Close icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "Use a generic close icon for dismissing content like modals and alerts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, "Be sure to include text for screen readers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, ", as we\u2019ve done with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "aria-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "\n\t                <button type=\"button\" class=\"close\" aria-label=\"Close\">\n\t                  <span aria-hidden=\"true\">\xD7</span>\n\t                </button>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "Display property");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "Basic display values");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, " property");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, " accepts a handful of values and we support many of them with utility classes. We purposefully don\u2019t provide every value as a utility, so here\u2019s what we support:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, ".d-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "Used for object to hide on all viewports.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, ".d-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "Used for object to behave like an inline object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, ".d-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "Used for object to behave like an inline-block object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, ".d-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "Used for object to behave like an block object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, ".d-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "Used for object to behave like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "<table>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, " object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, ".d-table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "Used for object to behave like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, "<td>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, " object.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, ".d-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "Used for object as a block-level flex container.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, ".d-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "Used for object as an inline-level flex container.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "Use above classes as per your requirements. For example, here\u2019s how you could use the inline, block, or inline-block utilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "d-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "d-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, "\t                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "\n\t                    <div class=\"d-inline bg-info\">d-inline</div>\n\t                    <div class=\"d-inline bg-info\">d-inline</div>\n\t                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "d-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "\t\t\t\t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "code", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "\n\t                <span class=\"d-block bg-info\">d-block</span>\n\t                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](866, "\n\t\t\t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "d-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "d-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, "\t\t\t\t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "code", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "\n\t            <div class=\"d-inline-block bg-info\">d-inline-block</div>\n\t            <div class=\"d-inline-block bg-info\">d-inline-block</div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "\n\t\t\t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "Responsive variations also exist for every single utility mentioned above. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](882, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](884, ".d-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](886, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, ".d-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](890, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, ".d-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](894, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, ".d-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](898, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, ".d-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](902, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, ".d-table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](906, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, ".d-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](910, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, ".d-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](914, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, ".d-sm-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, ".d-sm-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](922, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, ".d-sm-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](926, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, ".d-sm-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](930, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, ".d-sm-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](934, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, ".d-sm-table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](938, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, ".d-sm-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](942, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, ".d-sm-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](946, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, ".d-md-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](950, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, ".d-md-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](954, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, ".d-md-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](958, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, ".d-md-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](962, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, ".d-md-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](966, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, ".d-md-table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](970, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, ".d-md-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](974, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, ".d-md-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](978, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, ".d-lg-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](982, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](984, ".d-lg-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](986, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, ".d-lg-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](990, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](991, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](992, ".d-lg-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](994, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](996, ".d-lg-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](998, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1000, ".d-lg-table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1002, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1004, ".d-lg-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1006, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1008, ".d-lg-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1010, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1012, ".d-xl-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1014, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, ".d-xl-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1018, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, ".d-xl-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1022, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1024, ".d-xl-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1025, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1026, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1028, ".d-xl-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1030, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, ".d-xl-table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1034, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, ".d-xl-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1038, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1040, ".d-xl-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, "Hiding Elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1044, "For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1046, "To hide elements simply use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, ".d-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1049, " class or one of the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1051);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1052, " classes for any responsive screen variation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, "To show an element only on a given interval of screen sizes you can combine one ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, ".d-*-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1057, " class with a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, ".d-*-*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, " class, for example ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, ".d-none.d-md-block.d-xl-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, " will hide the element for all screen sizes except on medium and large devices.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1066, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, "Screen Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1074, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1075, "Hidden on all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, "d-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "Hidden only on xs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1084, "d-none d-sm-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, "Hidden only on sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1090, "d-sm-none d-md-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1093, "Hidden only on md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1094, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1096, "d-md-none d-lg-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, "Hidden only on lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1102, "d-lg-none d-xl-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1105, "Hidden only on xl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1106, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, "d-xl-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, "Visible on all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, "d-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, "Visible only on xs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "d-block d-sm-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, "Visible only on sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1126, "d-none d-sm-block d-md-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, "Visible only on md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1132, "d-none d-md-block d-lg-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, "Visible only on lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, "d-none d-lg-block d-xl-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1141, "Visible only on xl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1144, "d-none d-xl-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1147, "Display in print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1149, "Change the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, "display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1152, " value of elements when printing with our print display utilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "table", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, "Print style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1165, ".d-print-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, "Applies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1169, "display: none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, " to the element when printing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1174, ".d-print-inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1175, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1176, "Applies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1178, "display: inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1179, " to the element when printing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, ".d-print-inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "Applies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1187, "display: inline-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, " to the element when printing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1189, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, ".d-print-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1194, "Applies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, "display: block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, " to the element when printing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, "Embed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, "Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, "Rules are directly applied to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1207, "<iframe>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1208, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1210, "<embed>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1213, "<video>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1214, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1216, "<object>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, " elements; optionally use an explicit descendant class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, ".embed-responsive-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1220, " when you want to match the styling for other attributes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1223, "Pro-Tip!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1224, " You don\u2019t need to include ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1226, "frameborder=\"0\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1227, " in your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1228, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1229, "<iframe>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1230, "s as we override that for you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1231, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1232, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1233, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1234, "Wrap any embed like an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1236, "<iframe>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1237, " in a parent element with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1239, ".embed-responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1240, " and an aspect ratio. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1241, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1242, ".embed-responsive-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1243, " isn\u2019t strictly required, but we encourage it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1245, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1246, "iframe", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1247, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1249, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1250, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1251, "\n\t                <div class=\"embed-responsive embed-responsive-16by9\">\n\t                  <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpOULjyy-n8?rel=0\" allowfullscreen></iframe>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1252, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1254, "Aspect ratios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1255, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1256, "Aspect ratios can be customized with modifier classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1257, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1258, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1259, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1260, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1261, "\n\t                <!-- 21:9 aspect ratio -->\n\t                <div class=\"embed-responsive embed-responsive-21by9\">\n\t                  <iframe class=\"embed-responsive-item\" src=\"...\"></iframe>\n\t                </div>\n\t                \n\t                <!-- 16:9 aspect ratio -->\n\t                <div class=\"embed-responsive embed-responsive-16by9\">\n\t                  <iframe class=\"embed-responsive-item\" src=\"...\"></iframe>\n\t                </div>\n\t                \n\t                <!-- 4:3 aspect ratio -->\n\t                <div class=\"embed-responsive embed-responsive-4by3\">\n\t                  <iframe class=\"embed-responsive-item\" src=\"...\"></iframe>\n\t                </div>\n\t                \n\t                <!-- 1:1 aspect ratio -->\n\t                <div class=\"embed-responsive embed-responsive-1by1\">\n\t                  <iframe class=\"embed-responsive-item\" src=\"...\"></iframe>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1262, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1263, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1264, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "Flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1267, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1268, "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1269, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1270, "Enable flex behaviors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1271, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1272, "Apply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1273, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1274, "display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1275, " utilities to create a flexbox container and transform ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1276, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1277, "direct children elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1278, " into flex items. Flex containers and items are able to be modified further with additional flex properties.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1279, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1281, "I'm a flexbox container!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1284, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1286, "\n\t                <div class=\"d-flex p-2\">I'm a flexbox container!</div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1287, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1288, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1290, "I'm an inline flexbox container!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1291, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1292, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1293, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "code", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1295, "\n\t                <div class=\"d-inline-flex p-2\">I'm an inline flexbox container!</div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1296, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1298, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1299, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1300, ".d-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1301, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1302, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1303, ".d-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1304, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1305, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1307, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1308, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1309, ".d-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1310, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1311, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1313, ".d-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1314, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1315, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1317, ".d-sm-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1318, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1319, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1320, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1321, ".d-sm-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1323, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1324, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1325, ".d-md-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1326, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1327, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1329, ".d-md-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1331, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1332, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1333, ".d-lg-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1335, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1337, ".d-lg-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1338, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1339, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, ".d-xl-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1343, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1344, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1345, ".d-xl-inline-flex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1347, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1348, "Direction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1350, "Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1352, "row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, ". However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1355, "Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1356, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1357, ".flex-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1358, " to set a horizontal direction (the browser default), or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1359, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1360, ".flex-row-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1361, " to start the horizontal direction from the opposite side.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1362, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1364, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1365, "Flex item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1367, "Flex item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1368, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1369, "Flex item 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1371, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1372, "Flex item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1373, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, "Flex item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1376, "Flex item 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1379, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1381, "\n\t                <div class=\"d-flex flex-row\">\n\t                  <div class=\"p-2\">Flex item 1</div>\n\t                  <div class=\"p-2\">Flex item 2</div>\n\t                  <div class=\"p-2\">Flex item 3</div>\n\t                </div>\n\t                <div class=\"d-flex flex-row-reverse\">\n\t                  <div class=\"p-2\">Flex item 1</div>\n\t                  <div class=\"p-2\">Flex item 2</div>\n\t                  <div class=\"p-2\">Flex item 3</div>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1382, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, "Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1386, ".flex-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1387, " to set a vertical direction, or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1389, ".flex-column-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1390, " to start the vertical direction from the opposite side.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1392, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1394, "Flex item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1396, "Flex item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1397, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1398, "Flex item 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1401, "Flex item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1402, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1403, "Flex item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1405, "Flex item 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1406, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1408, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1410, "\n\t                <div class=\"d-flex flex-column\">\n\t                  <div class=\"p-2\">Flex item 1</div>\n\t                  <div class=\"p-2\">Flex item 2</div>\n\t                  <div class=\"p-2\">Flex item 3</div>\n\t                </div>\n\t                <div class=\"d-flex flex-column-reverse\">\n\t                  <div class=\"p-2\">Flex item 1</div>\n\t                  <div class=\"p-2\">Flex item 2</div>\n\t                  <div class=\"p-2\">Flex item 3</div>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1413, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1414, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1415, "flex-direction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1416, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1417, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1419, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1420, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1421, ".flex-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1422, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1423, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, ".flex-row-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1427, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1428, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1429, ".flex-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1431, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1433, ".flex-column-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1435, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1436, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1437, ".flex-sm-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1438, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1439, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1440, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1441, ".flex-sm-row-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1443, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1445, ".flex-sm-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1447, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1449, ".flex-sm-column-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1450, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1451, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1453, ".flex-md-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1454, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1455, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1456, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1457, ".flex-md-row-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1458, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1459, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1461, ".flex-md-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1462, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1463, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1464, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1465, ".flex-md-column-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1466, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1467, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1468, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1469, ".flex-lg-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1470, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1471, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1472, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1473, ".flex-lg-row-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1474, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1475, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1476, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1477, ".flex-lg-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1478, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1479, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1480, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1481, ".flex-lg-column-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1482, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1483, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1484, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1485, ".flex-xl-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1486, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1487, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1488, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1489, ".flex-xl-row-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1490, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1491, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1492, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1493, ".flex-xl-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1494, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1495, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1496, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1497, ".flex-xl-column-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1498, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1499, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1500, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1501, "Justify content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1502, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1503, "Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1505, "justify-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1506, " utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1507, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1508, "flex-direction: column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1509, "). Choose from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1510, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1511, "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1512, " (browser default), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1513, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1514, "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1515, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1517, "center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1518, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1519, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1520, "between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1521, ", or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1523, "around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1524, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1525, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1527, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1528, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1529, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1530, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1531, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1532, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1533, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1534, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1535, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1536, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1537, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1538, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1539, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1540, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1542, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1543, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1544, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1545, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1546, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1547, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1548, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1549, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1550, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1551, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1552, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1553, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1554, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1555, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1556, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1557, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1558, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1559, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1560, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1561, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1562, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1563, "\t                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1564, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1565, "\n\t                    <div class=\"d-flex justify-content-start\">...</div>\n\t                    <div class=\"d-flex justify-content-end\">...</div>\n\t                    <div class=\"d-flex justify-content-center\">...</div>\n\t                    <div class=\"d-flex justify-content-between\">...</div>\n\t                    <div class=\"d-flex justify-content-around\">...</div>\n\t                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1566, "\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1567, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1568, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1569, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1570, "justify-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1571, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1572, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1573, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1574, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1575, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1576, ".justify-content-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1577, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1578, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1579, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1580, ".justify-content-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1581, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1582, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1583, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1584, ".justify-content-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1585, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1586, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1587, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1588, ".justify-content-between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1589, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1590, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1591, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1592, ".justify-content-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1593, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1594, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1595, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1596, ".justify-content-sm-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1597, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1598, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1599, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1600, ".justify-content-sm-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1601, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1602, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1603, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1604, ".justify-content-sm-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1605, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1606, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1607, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1608, ".justify-content-sm-between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1609, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1610, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1611, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1612, ".justify-content-sm-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1613, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1614, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1615, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1616, ".justify-content-md-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1617, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1618, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1619, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1620, ".justify-content-md-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1621, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1622, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1623, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1624, ".justify-content-md-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1625, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1626, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1627, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1628, ".justify-content-md-between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1629, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1630, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1631, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1632, ".justify-content-md-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1633, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1634, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1635, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1636, ".justify-content-lg-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1637, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1638, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1639, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1640, ".justify-content-lg-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1641, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1642, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1643, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1644, ".justify-content-lg-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1645, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1646, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1647, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1648, ".justify-content-lg-between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1649, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1650, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1651, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1652, ".justify-content-lg-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1653, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1654, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1655, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1656, ".justify-content-xl-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1657, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1658, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1659, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1660, ".justify-content-xl-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1661, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1662, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1663, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1664, ".justify-content-xl-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1665, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1666, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1667, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1668, ".justify-content-xl-between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1669, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1670, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1671, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1672, ".justify-content-xl-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1673, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1674, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1675, "Align items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1676, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1677, "Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1678, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1679, "align-items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1680, " utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1681, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1682, "flex-direction: column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1683, "). Choose from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1684, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1685, "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1686, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1687, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1688, "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1689, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1690, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1691, "center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1692, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1693, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1694, "baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1695, ", or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1696, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1697, "stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1698, " (browser default).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1699, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1700, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1701, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1702, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1703, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1704, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1705, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1706, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1707, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1708, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1709, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1710, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1711, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1712, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1713, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1714, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1715, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1716, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1717, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1718, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1719, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1720, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1721, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1722, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1723, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1724, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1725, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1726, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1727, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1728, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1729, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1730, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1731, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1732, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1733, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1734, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1735, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1736, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1737, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1738, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1739, "\n\t                <div class=\"d-flex align-items-start\">...</div>\n\t                <div class=\"d-flex align-items-end\">...</div>\n\t                <div class=\"d-flex align-items-center\">...</div>\n\t                <div class=\"d-flex align-items-baseline\">...</div>\n\t                <div class=\"d-flex align-items-stretch\">...</div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1740, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1741, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1742, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1743, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1744, "align-items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1745, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1746, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1747, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1748, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1749, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1750, ".align-items-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1751, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1752, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1753, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1754, ".align-items-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1755, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1756, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1757, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1758, ".align-items-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1759, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1760, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1761, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1762, ".align-items-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1763, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1764, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1765, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1766, ".align-items-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1767, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1768, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1769, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1770, ".align-items-sm-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1771, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1772, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1773, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1774, ".align-items-sm-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1775, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1776, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1777, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1778, ".align-items-sm-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1779, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1780, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1781, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1782, ".align-items-sm-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1783, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1784, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1785, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1786, ".align-items-sm-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1787, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1788, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1789, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1790, ".align-items-md-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1791, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1792, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1793, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1794, ".align-items-md-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1795, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1796, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1797, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1798, ".align-items-md-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1799, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1800, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1801, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1802, ".align-items-md-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1803, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1804, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1805, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1806, ".align-items-md-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1807, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1808, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1809, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1810, ".align-items-lg-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1811, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1812, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1813, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1814, ".align-items-lg-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1815, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1816, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1817, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1818, ".align-items-lg-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1819, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1820, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1821, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1822, ".align-items-lg-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1823, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1824, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1825, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1826, ".align-items-lg-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1827, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1828, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1829, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1830, ".align-items-xl-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1831, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1832, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1833, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1834, ".align-items-xl-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1835, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1836, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1837, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1838, ".align-items-xl-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1839, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1840, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1841, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1842, ".align-items-xl-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1843, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1844, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1845, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1846, ".align-items-xl-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1847, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1848, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1849, "Align self");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1850, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1851, "Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1852, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1853, "align-self");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1854, " utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1855, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1856, "flex-direction: column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1857, "). Choose from the same options as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1858, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1859, "align-items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1860, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1861, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1862, "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1863, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1864, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1865, "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1866, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1867, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1868, "center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1869, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1870, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1871, "baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1872, ", or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1873, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1874, "stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1875, " (browser default).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1876, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1877, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1878, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1879, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1880, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1881, "Aligned flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1882, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1883, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1884, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1885, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1886, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1887, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1888, "Aligned flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1889, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1890, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1891, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1892, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1893, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1894, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1895, "Aligned flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1896, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1897, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1898, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1899, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1900, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1901, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1902, "Aligned flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1903, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1904, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1905, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1906, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1907, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1908, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1909, "Aligned flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1910, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1911, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1912, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1913, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1914, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1915, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1916, "\n\t                <div class=\"align-self-start\">Aligned flex item</div>\n\t                <div class=\"align-self-end\">Aligned flex item</div>\n\t                <div class=\"align-self-center\">Aligned flex item</div>\n\t                <div class=\"align-self-baseline\">Aligned flex item</div>\n\t                <div class=\"align-self-stretch\">Aligned flex item</div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1917, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1918, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1919, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1920, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1921, "align-self");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1922, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1923, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1924, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1925, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1926, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1927, ".align-self-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1928, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1929, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1930, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1931, ".align-self-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1932, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1933, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1934, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1935, ".align-self-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1936, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1937, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1938, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1939, ".align-self-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1940, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1941, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1942, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1943, ".align-self-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1944, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1945, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1946, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1947, ".align-self-sm-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1948, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1949, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1950, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1951, ".align-self-sm-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1952, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1953, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1954, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1955, ".align-self-sm-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1956, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1957, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1958, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1959, ".align-self-sm-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1960, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1961, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1962, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1963, ".align-self-sm-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1964, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1965, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1966, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1967, ".align-self-md-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1968, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1969, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1970, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1971, ".align-self-md-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1972, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1973, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1974, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1975, ".align-self-md-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1976, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1977, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1978, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1979, ".align-self-md-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1980, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1981, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1982, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1983, ".align-self-md-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1984, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1985, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1986, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1987, ".align-self-lg-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1988, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1989, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1990, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1991, ".align-self-lg-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1992, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1993, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1994, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1995, ".align-self-lg-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1996, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1997, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1998, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1999, ".align-self-lg-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2000, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2001, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2002, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2003, ".align-self-lg-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2004, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2005, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2006, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2007, ".align-self-xl-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2008, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2009, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2010, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2011, ".align-self-xl-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2012, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2013, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2014, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2015, ".align-self-xl-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2016, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2017, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2018, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2019, ".align-self-xl-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2020, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2021, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2022, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2023, ".align-self-xl-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2024, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2025, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2026, "Auto margins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2027, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2028, "Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2029, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2030, ".mr-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2031, "), and pushing two items to the left (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2032, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2033, ".ml-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2034, ").");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2035, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2036, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2037, "Unfortunately, IE10 and IE11 do not properly support auto margins on flex items whose parent has a non-default ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2038, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2039, "justify-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2040, " value.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2041, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2042, "See this StackOverflow answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2043, " for more details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2044, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2045, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2046, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2047, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2048, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2049, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2050, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2051, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2052, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2053, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2054, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2055, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2056, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2057, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2058, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2059, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2060, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2061, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2062, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2063, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2064, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2065, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2066, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2067, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2068, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2069, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2070, "\n\t                <div class=\"d-flex\">\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                </div>\n\t                \n\t                <div class=\"d-flex\">\n\t                  <div class=\"mr-auto p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                </div>\n\t                \n\t                <div class=\"d-flex\">\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"ml-auto p-2\">Flex item</div>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2071, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2072, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2073, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2074, "With align-items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2075, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2076, "Vertically move one flex item to the top or bottom of a container by mixing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2077, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2078, "align-items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2079, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2080, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2081, "flex-direction: column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2082, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2083, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2084, "margin-top: auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2085, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2086, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2087, "margin-bottom: auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2088, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2089, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2090, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2091, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2092, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2093, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2094, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2095, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2096, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2097, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2098, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2099, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2100, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2101, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2102, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2103, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2104, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2105, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2106, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2107, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2108, "\n\t                <div class=\"d-flex align-items-start flex-column\" style=\"height: 200px;\">\n\t                  <div class=\"mb-auto p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                </div>\n\t                \n\t                <div class=\"d-flex align-items-end flex-column\" style=\"height: 200px;\">\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"p-2\">Flex item</div>\n\t                  <div class=\"mt-auto p-2\">Flex item</div>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2109, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2110, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2111, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2112, "Wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2113, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2114, "Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2115, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2116, ".flex-nowrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2117, ", wrapping with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2118, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2119, ".flex-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2120, ", or reverse wrapping with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2122, ".flex-wrap-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2123, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2124, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2125, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2126, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2127, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2128, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2129, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2130, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2131, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2132, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2133, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2134, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2135, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2136, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2137, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2138, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2139, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2140, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2141, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2142, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2143, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2144, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2145, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2146, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2147, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2148, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2149, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2150, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2151, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2152, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2153, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2154, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2155, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2156, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2157, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2158, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2159, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2160, "\n\t                <div class=\"d-flex flex-nowrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2161, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2162, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2163, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2164, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2165, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2166, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2167, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2168, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2169, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2170, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2171, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2172, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2173, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2174, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2175, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2176, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2177, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2178, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2179, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2180, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2181, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2182, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2183, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2184, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2185, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2186, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2187, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2188, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2189, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2190, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2191, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2192, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2193, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2194, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2195, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2196, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2197, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2198, "\n\t                <div class=\"d-flex flex-wrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2199, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2200, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2201, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2202, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2203, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2204, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2205, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2206, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2207, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2208, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2209, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2210, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2211, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2212, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2213, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2214, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2215, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2216, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2217, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2218, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2219, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2220, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2221, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2222, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2223, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2224, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2225, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2226, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2227, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2228, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2229, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2230, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2231, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2232, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2233, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2234, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2236, "\n\t                <div class=\"d-flex flex-wrap-reverse\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2237, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2238, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2239, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2240, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2241, "flex-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2242, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2243, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2244, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2245, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2246, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2247, ".flex-nowrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2248, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2249, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2250, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2251, ".flex-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2252, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2253, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2254, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2255, ".flex-wrap-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2256, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2257, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2258, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2259, ".flex-sm-nowrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2260, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2261, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2262, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2263, ".flex-sm-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2264, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2265, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2266, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2267, ".flex-sm-wrap-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2268, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2269, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2270, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2271, ".flex-md-nowrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2272, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2273, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2274, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2275, ".flex-md-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2276, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2277, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2278, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2279, ".flex-md-wrap-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2280, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2281, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2282, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2283, ".flex-lg-nowrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2284, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2285, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2286, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2287, ".flex-lg-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2288, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2289, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2290, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2291, ".flex-lg-wrap-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2292, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2293, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2294, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2295, ".flex-xl-nowrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2296, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2297, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2298, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2299, ".flex-xl-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2300, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2301, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2302, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2303, ".flex-xl-wrap-reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2304, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2305, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2306, "Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2307, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2308, "Change the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2309, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2310, "visual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2311, " order of specific flex items with a handful of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2312, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2313, "order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2314, " utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2315, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2316, "order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2317, " takes any integer value (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2318, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2319, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2320, "), add custom CSS for any additional values needed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2321, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2322, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2323, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2324, "First flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2325, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2326, "Second flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2327, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2328, "Third flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2329, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2330, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2331, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2332, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2333, "\n\t                <div class=\"d-flex flex-nowrap\">\n\t                  <div class=\"order-3 p-2\">First flex item</div>\n\t                  <div class=\"order-2 p-2\">Second flex item</div>\n\t                  <div class=\"order-1 p-2\">Third flex item</div>\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2334, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2335, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2336, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2337, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2338, "order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2339, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2340, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2341, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2342, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2343, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2344, ".order-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2345, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2346, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2347, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2348, ".order-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2349, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2350, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2351, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2352, ".order-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2353, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2354, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2355, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2356, ".order-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2357, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2358, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2359, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2360, ".order-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2361, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2362, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2363, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2364, ".order-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2365, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2366, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2367, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2368, ".order-7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2369, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2370, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2371, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2372, ".order-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2373, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2374, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2375, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2376, ".order-9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2377, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2378, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2379, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2380, ".order-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2381, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2382, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2383, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2384, ".order-11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2385, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2386, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2387, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2388, ".order-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2389, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2390, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2391, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2392, ".order-sm-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2393, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2394, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2395, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2396, ".order-sm-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2397, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2398, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2399, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2400, ".order-sm-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2401, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2402, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2403, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2404, ".order-sm-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2405, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2406, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2407, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2408, ".order-sm-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2409, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2410, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2411, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2412, ".order-sm-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2413, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2414, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2415, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2416, ".order-sm-7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2417, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2418, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2419, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2420, ".order-sm-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2421, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2422, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2423, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2424, ".order-sm-9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2425, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2426, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2427, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2428, ".order-sm-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2429, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2430, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2431, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2432, ".order-sm-11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2433, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2434, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2435, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2436, ".order-sm-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2437, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2438, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2439, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2440, ".order-md-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2441, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2442, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2443, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2444, ".order-md-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2445, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2446, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2447, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2448, ".order-md-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2449, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2450, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2451, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2452, ".order-md-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2453, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2454, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2455, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2456, ".order-md-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2457, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2458, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2459, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2460, ".order-md-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2461, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2462, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2463, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2464, ".order-md-7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2465, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2466, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2467, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2468, ".order-md-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2469, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2470, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2471, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2472, ".order-md-9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2473, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2474, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2475, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2476, ".order-md-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2477, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2478, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2479, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2480, ".order-md-11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2481, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2482, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2483, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2484, ".order-md-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2485, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2486, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2487, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2488, ".order-lg-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2489, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2490, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2491, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2492, ".order-lg-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2493, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2494, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2495, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2496, ".order-lg-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2497, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2498, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2499, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2500, ".order-lg-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2501, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2502, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2503, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2504, ".order-lg-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2505, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2506, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2507, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2508, ".order-lg-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2509, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2510, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2511, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2512, ".order-lg-7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2513, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2514, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2515, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2516, ".order-lg-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2517, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2518, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2519, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2520, ".order-lg-9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2521, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2522, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2523, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2524, ".order-lg-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2525, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2526, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2527, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2528, ".order-lg-11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2529, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2530, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2531, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2532, ".order-lg-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2533, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2534, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2535, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2536, ".order-xl-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2537, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2538, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2539, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2540, ".order-xl-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2541, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2542, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2543, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2544, ".order-xl-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2545, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2546, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2547, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2548, ".order-xl-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2549, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2550, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2551, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2552, ".order-xl-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2553, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2554, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2555, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2556, ".order-xl-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2557, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2558, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2559, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2560, ".order-xl-7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2561, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2562, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2563, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2564, ".order-xl-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2565, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2566, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2567, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2568, ".order-xl-9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2569, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2570, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2571, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2572, ".order-xl-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2573, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2574, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2575, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2576, ".order-xl-11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2577, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2578, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2579, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2580, ".order-xl-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2581, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2582, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2583, "Align content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2584, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2585, "Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2586, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2587, "align-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2588, " utilities on flexbox containers to align flex items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2589, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2590, "together");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2591, " on the cross axis. Choose from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2592, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2593, "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2594, " (browser default), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2595, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2596, "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2597, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2598, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2599, "center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2600, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2601, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2602, "between");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2603, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2604, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2605, "around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2606, ", or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2607, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2608, "stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2609, ". To demonstrate these utilities, we\u2019ve enforced ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2610, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2611, "flex-wrap: wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2612, " and increased the number of flex items.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2613, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2614, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2615, "Heads up!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2616, " This property has no effect on single rows of flex items.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2617, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2618, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2619, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2620, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2621, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2622, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2623, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2624, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2625, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2626, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2627, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2628, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2629, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2630, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2631, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2632, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2633, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2634, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2635, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2636, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2637, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2638, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2639, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2640, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2641, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2642, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2643, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2644, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2645, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2646, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2647, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2648, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2649, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2650, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2651, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2652, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2653, "\n\t                <div class=\"d-flex align-content-start flex-wrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2654, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2655, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2656, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2657, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2658, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2659, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2660, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2661, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2662, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2663, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2664, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2665, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2666, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2667, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2668, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2669, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2670, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2671, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2672, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2673, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2674, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2675, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2676, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2677, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2678, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2679, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2680, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2681, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2682, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2683, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2684, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2685, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2686, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2687, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2688, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2689, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2690, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2691, "\n\t                <div class=\"d-flex align-content-end flex-wrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2692, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2693, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2694, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2695, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2696, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2697, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2698, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2699, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2700, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2701, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2702, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2703, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2704, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2705, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2706, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2707, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2708, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2709, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2710, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2711, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2712, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2713, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2714, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2715, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2716, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2717, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2718, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2719, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2720, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2721, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2722, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2723, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2724, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2725, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2726, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2727, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2728, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2729, "\n\t                <div class=\"d-flex align-content-center flex-wrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2730, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2731, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2732, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2733, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2734, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2735, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2736, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2737, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2738, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2739, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2740, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2741, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2742, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2743, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2744, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2745, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2746, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2747, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2748, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2749, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2750, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2751, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2752, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2753, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2754, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2755, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2756, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2757, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2758, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2759, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2760, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2761, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2762, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2763, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2764, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2765, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2766, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2767, "\n\t                <div class=\"d-flex align-content-between flex-wrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2768, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2769, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2770, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2771, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2772, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2773, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2774, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2775, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2776, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2777, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2778, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2779, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2780, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2781, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2782, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2783, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2784, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2785, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2786, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2787, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2788, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2789, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2790, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2791, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2792, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2793, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2794, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2795, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2796, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2797, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2798, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2799, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2800, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2801, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2802, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2803, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2804, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2805, "\n\t                <div class=\"d-flex align-content-around flex-wrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2806, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2807, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2808, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2809, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2810, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2811, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2812, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2813, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2814, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2815, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2816, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2817, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2818, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2819, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2820, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2821, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2822, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2823, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2824, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2825, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2826, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2827, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2828, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2829, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2830, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2831, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2832, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2833, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2834, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2835, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2836, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2837, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2838, "Flex item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2839, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2840, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2841, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2842, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2843, "\n\t                <div class=\"d-flex align-content-stretch flex-wrap\">\n\t                  ...\n\t                </div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2844, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2845, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2846, "Responsive variations also exist for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2847, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2848, "align-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2849, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2850, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2851, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2852, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2853, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2854, ".align-content-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2855, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2856, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2857, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2858, ".align-content-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2859, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2860, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2861, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2862, ".align-content-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2863, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2864, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2865, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2866, ".align-content-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2867, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2868, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2869, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2870, ".align-content-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2871, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2872, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2873, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2874, ".align-content-sm-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2875, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2876, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2877, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2878, ".align-content-sm-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2879, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2880, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2881, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2882, ".align-content-sm-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2883, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2884, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2885, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2886, ".align-content-sm-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2887, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2888, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2889, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2890, ".align-content-sm-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2891, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2892, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2893, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2894, ".align-content-md-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2895, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2896, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2897, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2898, ".align-content-md-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2899, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2900, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2901, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2902, ".align-content-md-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2903, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2904, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2905, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2906, ".align-content-md-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2907, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2908, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2909, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2910, ".align-content-md-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2911, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2912, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2913, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2914, ".align-content-lg-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2915, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2916, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2917, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2918, ".align-content-lg-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2919, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2920, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2921, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2922, ".align-content-lg-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2923, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2924, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2925, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2926, ".align-content-lg-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2927, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2928, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2929, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2930, ".align-content-lg-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2931, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2932, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2933, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2934, ".align-content-xl-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2935, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2936, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2937, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2938, ".align-content-xl-end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2939, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2940, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2941, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2942, ".align-content-xl-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2943, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2944, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2945, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2946, ".align-content-xl-around");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2947, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2948, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2949, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2950, ".align-content-xl-stretch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2951, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2952, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2953, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2954, "Float");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2955, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2956, "Toggle floats on any element, across any breakpoint, using our responsive float utilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2957, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2958, "These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2959, "a", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2960, "CSS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2961, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2962, "float");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2963, " property");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2964, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2965, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2966, "!important");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2967, " is included to avoid specificity issues. These use the same viewport breakpoints as our grid system.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2968, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2969, "Toggle a float with a class:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2970, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2971, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2972, "Float left on all viewport sizes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2973, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2974, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2975, "Float right on all viewport sizes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2976, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2977, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2978, "Don't float on all viewport sizes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2979, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2980, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2981, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2982, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2983, "\n\t                <div class=\"float-left\">Float left on all viewport sizes</div><br>\n\t                <div class=\"float-right\">Float right on all viewport sizes</div><br>\n\t                <div class=\"float-none\">Don't float on all viewport sizes</div>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2984, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2985, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2986, "Responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2987, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2988, "Responsive variations also exist for each ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2989, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2990, "float");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2991, " value.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2992, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2993, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2994, "Float left on viewports sized SM (small) or wider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2995, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2996, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2997, "Float left on viewports sized MD (medium) or wider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2998, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2999, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3000, "Float left on viewports sized LG (large) or wider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3001, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3002, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3003, "Float left on viewports sized XL (extra-large) or wider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3004, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3005, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3006, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3007, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3008, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3009, "\n\t                <div class=\"float-sm-left\">Float left on viewports sized SM (small) or wider</div><br>\n\t                <div class=\"float-md-left\">Float left on viewports sized MD (medium) or wider</div><br>\n\t                <div class=\"float-lg-left\">Float left on viewports sized LG (large) or wider</div><br>\n\t                <div class=\"float-xl-left\">Float left on viewports sized XL (extra-large) or wider</div><br>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3010, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3011, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3012, "Here are all the support classes;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3013, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3014, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3015, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3016, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3017, ".float-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3018, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3019, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3020, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3021, ".float-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3022, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3023, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3024, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3025, ".float-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3026, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3027, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3028, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3029, ".float-sm-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3030, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3031, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3032, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3033, ".float-sm-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3034, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3035, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3036, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3037, ".float-sm-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3038, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3039, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3040, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3041, ".float-md-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3042, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3043, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3044, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3045, ".float-md-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3046, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3047, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3048, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3049, ".float-md-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3050, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3051, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3052, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3053, ".float-lg-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3054, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3055, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3056, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3057, ".float-lg-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3058, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3059, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3060, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3061, ".float-lg-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3062, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3063, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3064, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3065, ".float-xl-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3066, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3067, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3068, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3069, ".float-xl-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3070, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3071, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3072, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3073, ".float-xl-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3074, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3075, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3076, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3077, "Image replacement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3078, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3079, "Swap text for background images with the image replacement class.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3080, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3081, "Utilize the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3082, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3083, ".text-hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3084, " class or mixin to help replace an element\u2019s text content with a background image.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3085, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3086, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3087, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3088, "code", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3089, "\n\t                <h1 class=\"text-hide\">Custom heading</h1>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3090, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3091, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3092, "Use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3093, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3094, ".text-hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3095, " class to maintain the accessibility and SEO benefits of heading tags, but want to utilize a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3096, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3097, "background-image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3098, " instead of text.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3099, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3100, "h1", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3101, "Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3102, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3103, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3104, "\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3105, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3106, "\n\t                <h1 class=\"text-hide my-2\" style=\"background-image: url('../../assets/images/logo-icon.png'); width: 30px; height: 26px;\">Bootstrap</h1>\n\t            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3107, "\n\t        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3108, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3109, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3110, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3111, "Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3112, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3113, "Use these shorthand utilities for quickly configuring the position of an element.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3114, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3115, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3116, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3117, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3118, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3119, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3120, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3121, "Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3122, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3123, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3124, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3125, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3126, ".position-fixed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3128, "Changes object's position to fixed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3129, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3131, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3132, ".position-relative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3133, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3134, "Changes object's position to relative.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3135, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3137, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3138, ".position-absolute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3140, "Changes object's position to absolute.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3141, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3143, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3144, ".position-static");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3145, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3146, "Changes object's position to static.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3147, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3148, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3149, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3150, ".position-sticky");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3151, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3152, "Changes object's position to static.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3153, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3154, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3155, "Fixed top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3156, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3157, "Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add aditional CSS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3158, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3159, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3160, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3161, "\n                <div class=\"fixed-top\">...</div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3162, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3163, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3164, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3165, "Fixed bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3166, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3167, "Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add aditional CSS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3168, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3169, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3170, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3171, "\n                <div class=\"fixed-bottom\">...</div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3172, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3173, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3174, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3175, "Sticky top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3176, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3177, "Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3178, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3179, ".sticky-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3180, " utility uses CSS\u2019s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3181, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3182, "position: sticky");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3183, ", which isn\u2019t fully supported in all browsers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3184, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3185, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3186, "Microsoft Edge and IE11 will render ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3187, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3188, "position: sticky");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3189, " as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3190, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3191, "position: relative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3192, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3193, " As such, we wrap the styles in a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3194, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3195, "@supports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3196, " query, limiting the stickiness to only browsers that properly can render it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3197, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3198, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3199, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3200, "\n                <div class=\"sticky-top\">...</div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3201, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3202, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3203, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3204, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3205, "Screenreaders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3206, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3207, "Use screenreader utilities to hide elements on all devices except screen readers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3208, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3209, "Hide an element to all devices ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3210, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3211, "except screen readers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3212, " with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3213, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3214, ".sr-only");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3215, ". Combine ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3216, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3217, ".sr-only");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3218, " with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3219, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3220, ".sr-only-focusable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3221, " to show the element again when it\u2019s focused (e.g. by a keyboard-only user). Can also be used as mixins.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3222, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3223, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3224, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3225, "\n                <a class=\"sr-only sr-only-focusable\" href=\"#content\">Skip to main content</a>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3226, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3227, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3228, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3229, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3230, "Sizing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3231, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3232, "Easily make an element as wide or as tall (relative to its parent) with our width and height utilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3233, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3234, "Width and height utilities are generated from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3235, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3236, "$sizes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3237, " Sass map in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3238, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3239, "_variables.scss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3240, ". Includes support for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3241, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3242, "25%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3243, ",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3244, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3245, "50%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3246, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3247, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3248, "75%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3249, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3250, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3251, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3252, " by default. Modify those values as you need to generate different utilities here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3253, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3254, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3255, "Width 25%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3256, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3257, "Width 50%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3258, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3259, "Width 75%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3260, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3261, "Width 100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3262, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3263, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3264, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3265, "\n                <div class=\"w-25 p-3\" style=\"background-color: #eee;\">Width 25%</div>\n                <div class=\"w-50 p-3\" style=\"background-color: #eee;\">Width 50%</div>\n                <div class=\"w-75 p-3\" style=\"background-color: #eee;\">Width 75%</div>\n                <div class=\"w-100 p-3\" style=\"background-color: #eee;\">Width 100%</div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3266, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3267, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3268, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3269, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3270, "Height 25%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3271, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3272, "Height 50%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3273, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3274, "Height 75%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3275, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3276, "Height 100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3277, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3278, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3279, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3280, "\n                <div style=\"height: 100px; background-color: rgba(255,0,0,0.1);\">\n                  <div class=\"h-25 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 25%</div>\n                  <div class=\"h-50 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 50%</div>\n                  <div class=\"h-75 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 75%</div>\n                  <div class=\"h-100 d-inline-block\" style=\"width: 120px; background-color: rgba(0,0,255,.1)\">Height 100%</div>\n                </div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3281, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3282, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3283, "You can also use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3284, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3285, "max-width: 100%;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3286, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3287, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3288, "max-height: 100%;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3289, " utilities as needed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3290, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3291, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3292, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3293, "\n                <img class=\"mw-100\" src=\"...\" alt=\"Max-width 100%\">\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3294, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3295, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3296, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3297, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3298, "Max-height 100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3299, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3300, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3301, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3302, "\n                <div style=\"height: 100px; background-color: rgba(255,0,0,0.1);\">\n                  <div class=\"mh-100\" style=\"width: 100px; height: 200px; background-color: rgba(0,0,255,0.1);\">Max-height 100%</div>\n                </div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3303, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3304, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3305, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3306, "Fixed Width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3307, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3308, "Add one of these to class to set fixed width of the content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3309, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3310, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3311, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3312, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3313, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3314, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3315, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3316, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3317, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3318, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3319, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3320, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3321);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3322, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3323, "Set content fixed width in pixel of selected size where size can be 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750 and 800. i.e ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3324, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3325, ".width-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3326, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3327, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3328, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3329);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3330, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3331, "Set content fixed width in percentage of selected size where size can be 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%, 55%, 60%, 65%, 70%, 75% and 80%. i.e ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3332, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3333, ".width-5-per");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3334, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3335, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3336, "Fixed Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3337, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3338, "Add one of these to class to set fixed height of the content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3339, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3340, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3341, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3342, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3343, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3344, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3345, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3346, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3347, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3348, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3349, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3350, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3351);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3352, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3353, "Set content fixed height in pixel of selected size where size can be 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750 and 800. i.e ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3354, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3355, ".height-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3356, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3357, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3358, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3359);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3360, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3361, "Set content fixed height in percentage of selected size where size can be 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%, 55%, 60%, 65%, 70%, 75% and 80%. i.e ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3362, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3363, ".height-5-per");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3364, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3365, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3366, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3367, "Spacing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3368, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3369, "Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element's appearance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3370, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3371, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3372, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3373, "Assign responsive-friendly ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3374, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3375, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3376, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3377, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3378, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3379, " values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3380, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3381, ".25rem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3382, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3383, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3384, "3rem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3385, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3386, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3387, "Notation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3388, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3389, "Spacing utilities that apply to all breakpoints, from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3390, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3391, "xs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3392, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3393, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3394, "xl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3395, ", have no breakpoint abbreviation in them. This is because those classes are applied from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3396, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3397, "min-width: 0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3398, " and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3399, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3400, "The classes are named using the format ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3401, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3402);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3403, " for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3404, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3405, "xs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3406, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3407, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3408);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3409, " for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3410, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3411, "sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3412, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3413, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3414, "md");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3415, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3416, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3417, "lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3418, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3419, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3420, "xl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3421, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3422, "p", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3423, "Where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3424, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3425, "property");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3426, " is one of:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3427, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3428, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3429, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3430, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3431, "m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3432, " - for classes that set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3433, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3434, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3435, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3436, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3437, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3438, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3439, " - for classes that set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3440, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3441, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3442, "p", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3443, "Where");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3444, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3445, "sides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3446, " is one of:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3447, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3448, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3449, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3450, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3451, "t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3452, " - for classes that set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3453, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3454, "margin-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3455, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3456, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3457, "padding-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3458, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3459, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3460, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3461, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3462, " - for classes that set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3463, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3464, "margin-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3465, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3466, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3467, "padding-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3468, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3469, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3470, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3471, "l");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3472, " - for classes that set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3473, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3474, "margin-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3475, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3476, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3477, "padding-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3478, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3479, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3480, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3481, "r");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3482, " - for classes that set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3483, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3484, "margin-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3485, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3486, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3487, "padding-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3488, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3489, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3490, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3491, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3492, " - for classes that set both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3493, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3494, "*-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3495, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3496, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3497, "*-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3498, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3499, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3500, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3501, "y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3502, " - for classes that set both ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3503, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3504, "*-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3505, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3506, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3507, "*-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3508, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3509, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3510, "blank - for classes that set a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3511, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3512, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3513, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3514, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3515, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3516, " on all 4 sides of the element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3517, "p", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3518, "Where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3519, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3520, "size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3521, " is one of:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3522, "ul", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3523, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3524, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3525, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3526, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3527, " - for classes that eliminate the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3528, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3529, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3530, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3531, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3532, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3533, " by setting it to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3534, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3535, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3536, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3537, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3538, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3539, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3540, " - (by default) for classes that set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3541, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3542, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3543, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3544, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3545, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3546, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3547, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3548, "$spacer * .25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3549, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3550, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3551, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3552, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3553, " - (by default) for classes that set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3554, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3555, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3556, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3557, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3558, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3559, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3560, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3561, "$spacer * .5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3562, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3563, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3564, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3565, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3566, " - (by default) for classes that set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3567, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3568, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3569, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3570, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3571, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3572, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3573, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3574, "$spacer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3575, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3576, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3577, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3578, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3579, " - (by default) for classes that set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3580, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3581, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3582, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3583, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3584, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3585, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3586, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3587, "$spacer * 1.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3588, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3589, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3590, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3591, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3592, " - (by default) for classes that set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3593, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3594, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3595, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3596, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3597, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3598, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3599, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3600, "$spacer * 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3601, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3602, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3603, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3604, "auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3605, " - for classes that set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3606, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3607, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3608, " to auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3609, "p", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3610, "(You can add more sizes by adding entries to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3611, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3612, "$spacers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3613, " Sass map variable.)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3614, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3615, "Horizontal centering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3616, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3617, "Additionally, Bootstrap also includes an ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3618, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3619, ".mx-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3620, " class for horizontally centering fixed-width block level content\u2014that is, content that has ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3621, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3622, "display: block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3623, " and a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3624, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3625, "width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3626, " set\u2014by setting the horizontal margins to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3627, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3628, "auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3629, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3630, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3631, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3632, " Centered element ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3633, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3634, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3635, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3636, "\n                <div class=\"mx-auto\" style=\"width: 200px;\">\n                    Centered element\n                </div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3637, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3638, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3639, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3640, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3641, "Vertical alignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3642, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3643, "Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3644, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3645, "Change the alignment of elements with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3646, "a", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3647, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3648, "vertical-alignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3649, " utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3650, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3651, "Choose from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3652, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3653, ".align-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3654, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3655, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3656, ".align-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3657, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3658, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3659, ".align-middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3660, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3661, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3662, ".align-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3663, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3664, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3665, ".align-text-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3666, ", and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3667, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3668, ".align-text-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3669, " as needed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3670, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3671, "span", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3672, "baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3673, "span", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3674, "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3675, "span", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3676, "middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3677, "span", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3678, "bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3679, "span", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3680, "text-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3681, "span", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3682, "text-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3683, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3684, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3685, "thead", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3686, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3687, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3688, "Classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3689, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3690, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3691, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3692, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3693, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3694, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3695, ".align-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3696, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3697, "Changes element's vertical alignment to top.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3698, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3699, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3700, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3701, ".align-middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3702, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3703, "Changes element's vertical alignment to middle.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3704, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3705, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3706, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3707, ".align-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3708, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3709, "Changes element's vertical alignment to bottom.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3710, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3711, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3712, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3713, ".align-baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3714, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3715, "Changes element's vertical alignment to baseline.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3716, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3717, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3718, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3719, ".align-text-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3720, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3721, "Top of the element is aligned with the top of the parent element's font. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3722, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3723, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3724, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3725, ".align-text-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3726, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3727, "The bottom of the element is aligned with the bottom of the parent element's font.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3728, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3729, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3730, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3731, "With table cells:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3732, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3733, "table", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3734, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3735, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3736, "td", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3737, "baseline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3738, "td", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3739, "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3740, "td", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3741, "middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3742, "td", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3743, "bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3744, "td", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3745, "text-top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3746, "td", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3747, "text-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3748, "pre", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3749, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3750, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3751, "\n                    <table style=\"height: 100px;\">\n                      <tbody>\n                        <tr>\n                          <td class=\"align-baseline\">baseline</td>\n                          <td class=\"align-top\">top</td>\n                          <td class=\"align-middle\">middle</td>\n                          <td class=\"align-bottom\">bottom</td>\n                          <td class=\"align-text-top\">text-top</td>\n                          <td class=\"align-text-bottom\">text-bottom</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3752, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3753, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3754, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3755, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3756, "Visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3757, "h6", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3758, "Control the visibility, without modifying the display, of elements with visibility utilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3759, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3760, "Set the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3761, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3762, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3763, " of elements with our visibility utilities. These do not modify the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3764, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3765, "display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3766, " value at all and are helpful for hiding content from most users, but still keeping them for screen readers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3767, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3768, "Apply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3769, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3770, ".visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3771, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3772, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3773, ".invisible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3774, " as needed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3775, "pre", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3776, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3777, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3778, "\n                <div class=\"visible\">...</div>\n                <div class=\"invisible\">...</div>\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3779, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](727);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\n                    // Mixin itself\n                    @mixin clearfix() \"", "{", "\"\n                      &::after \"", "{", "\"\n                        display: block;\n                        content: \"\";\n                        clear: both;\n                      }\n                    }\n                    \n                    // Usage as a mixin\n                    .element \"", "{", "\"\n                      @include clearfix;\n                    };\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](324);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".d-\"", "{", "\"sm,md,lg,xl}-none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".width-\"", "{", "\"size}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".width-\"", "{", "\"size}-per");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".height-\"", "{", "\"size}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".height-\"", "{", "\"size}-per");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\"", "{", "\"property}\"", "{", "\"sides}-\"", "{", "\"size}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("\"", "{", "\"property}\"", "{", "\"sides}-\"", "{", "\"breakpoint}-\"", "{", "\"size}");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperclassesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'hc.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/sample-pages/invoice/invoice.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/sample-pages/invoice/invoice.component.ts ***!
    \***********************************************************/

  /*! exports provided: InvoiceComponent */

  /***/
  function srcAppSamplePagesInvoiceInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
      return InvoiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InvoiceComponent = function InvoiceComponent() {
      _classCallCheck(this, InvoiceComponent);
    };

    InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
      return new (t || InvoiceComponent)();
    };

    InvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvoiceComponent,
      selectors: [["ng-component"]],
      decls: 125,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-12"], [1, "card", "card-body", "printableArea"], [1, "pull-right"], [1, "pull-left"], [1, "text-danger"], [1, "text-muted", "m-l-5"], [1, "pull-right", "text-right"], [1, "font-bold"], [1, "text-muted", "m-l-30"], [1, "m-t-30"], [1, "fa", "fa-calendar"], [1, "table-responsive", "m-t-40", 2, "clear", "both"], [1, "table", "table-hover"], [1, "text-center"], [1, "text-right"], [1, "pull-right", "m-t-30", "text-right"], [1, "clearfix"], ["type", "submit", 1, "btn", "btn-danger"]],
      template: function InvoiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "INVOICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#5669626");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Monster Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "E 104, Dharti-2, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Nr' Viswakarma Temple, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Talaja Road, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Bhavnagar - 364002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Gaala & Sons,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "E 104, Dharti-2, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Nr' Viswakarma Temple, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Talaja Road, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Bhavnagar - 364002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Invoice Date :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 23rd Jan 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Due Date :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 25th Jan 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Unit Cost");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Milk Powder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " $24 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " $48 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Air Conditioner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " $500 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " $1500 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "RC Cars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " 20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " %600 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " $12000 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Down Coat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " 60 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "$5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " $300 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sub - Total amount: $13,848");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "vat (10%) : $138 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Total :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " $13,986");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Proceed to payment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'invoice.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/sample-pages/pricing/pricing.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/sample-pages/pricing/pricing.component.ts ***!
    \***********************************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppSamplePagesPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PricingComponent = function PricingComponent() {
      _classCallCheck(this, PricingComponent);
    };

    PricingComponent.ɵfac = function PricingComponent_Factory(t) {
      return new (t || PricingComponent)();
    };

    PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PricingComponent,
      selectors: [["ng-component"]],
      decls: 115,
      vars: 0,
      consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-group"], [1, "card", "m-t-30", "border-top", "border-left"], [1, "p-15", "text-center"], [1, "card-title", "m-t-10"], [1, "display-5", "position-relative", "m-t-20", "m-b-10"], [1, "price-sign"], [1, "border-top"], [1, "list-style-none", "text-center"], [1, "border-bottom", "p-20"], [1, "ti-user", "m-r-5"], [1, "ti-mobile", "m-r-5"], [1, "ti-server", "m-r-5"], [1, "ti-reload", "m-r-5"], [1, "btn", "btn-success", "waves-effect", "waves-light"], [1, "card", "border-top", "m-t-30"], [1, "card-title", "m-t-10", "text-center"], [1, "card", "bg-light", "border-top", "border-left"], [1, "price-label", "text-white", "text-center", "bg-info"], [1, "card-title", "m-t-40", "text-center"], [1, "btn", "btn-lg", "btn-info", "waves-effect", "waves-light"]],
      template: function PricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Silver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "24 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Per Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3 Members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Single Device ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "50GB Storage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Monthly Backups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "34 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Per Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "5 Members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Single Device ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "80GB Storage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Monthly Backups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Popular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Platinum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "45 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Per Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "10 Members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Single Device ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "120GB Storage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Monthly Backups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Diamond");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "54 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Per Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "15 Members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Single Device ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "1TB Storage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Monthly Backups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'pricing.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/sample-pages/profile/profile.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/sample-pages/profile/profile.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppSamplePagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/commonFunctions.service */
    "./src/app/services/commonFunctions.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileComponent_ng_template_17_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.name, " ");
      }
    }

    function ProfileComponent_ng_template_17_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.name, " ");
      }
    }

    function ProfileComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_ng_template_17_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onManagerSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phone No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileComponent_ng_template_17_option_29_Template, 2, 2, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select State");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProfileComponent_ng_template_17_option_37_Template, 2, 2, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Zip Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Featured Dish");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_ng_template_17_Template_input_change_56_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onFileSelectFeaturephoto($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Choose file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Update Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.profileForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countryList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countryList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (ctx_r0.profile == null ? null : ctx_r0.profile.featured_dish) ? ctx_r0.profile == null ? null : ctx_r0.profile.featured_dish : "assets/images/users/nouser.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(_AuthService, toastr, _ProfileService, _NotifierService, _CommonFunctionsService) {
        _classCallCheck(this, ProfileComponent);

        this._AuthService = _AuthService;
        this.toastr = toastr;
        this._ProfileService = _ProfileService;
        this._NotifierService = _NotifierService;
        this._CommonFunctionsService = _CommonFunctionsService;
        this.countryList = [];
        this.managerFormInit();
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountryList(); //this.getCompanyProfile();
        }
      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this = this;

          this._AuthService.getcountryList().subscribe(function (res) {
            _this.countryList = res;
          });
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var formData = new FormData();
            formData.append('file', file);
            this.uploadCompanyProfile(formData);
          }
        }
      }, {
        key: "onFileSelectFeaturephoto",
        value: function onFileSelectFeaturephoto(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var formData = new FormData();
            formData.append('file', file);
            this.uploadFeaturePhoto(formData);
          }
        }
      }, {
        key: "uploadFeaturePhoto",
        value: function uploadFeaturePhoto(formData) {
          var _this2 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.uploadFeaturePhoto(this.user.company_id, formData).subscribe(function (res) {
            _this2.getCompanyProfile();
          }, function (error) {});
        } // updateComapnydetails(tags,schedule,hours,twitter,instagram,facebook,distance_range,description,delivery_chg_amount,phone,email,name,business_address,country_id,state,city){
        //   this.user = this._CommonFunctionsService.checkUser().user;
        //   let obj = {
        //     tags:tags,
        //     schedule : schedule,
        //     hours : hours,
        //     twitter : twitter,
        //     instagram : instagram,
        //     facebook : facebook,
        //     distance_range : distance_range,
        //     description : description,
        //     delivery_chg_amount : delivery_chg_amount,
        //     phone : phone,
        //     email : email,
        //     name : name,
        //     business_address : business_address,
        //     country_id : country_id,
        //     state : state,
        //     city : city
        //   } 
        //   this._ProfileService.updateComapnydetails(this.user.company_id,obj).subscribe((res:any)=>{
        //     this.toastr.success('Company Detail Updated successfully!');
        //     this.getCompanyProfile();
        //   },error=>{
        //     
        //   })
        // }

      }, {
        key: "uploadCompanyProfile",
        value: function uploadCompanyProfile(formData) {
          var _this3 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.uploadCompanyProfile(this.user.company_id, formData).subscribe(function (res) {
            _this3.getCompanyProfile();
          }, function (error) {});
        }
      }, {
        key: "getCompanyProfile",
        value: function getCompanyProfile() {
          var _this4 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.getCompanyprofile(this.user.company_id).subscribe(function (res) {
            _this4.profile = res.data; //  console.log(this.profile);
          }, function (error) {});
        }
      }, {
        key: "uploadGoogleMenuSheet",
        value: function uploadGoogleMenuSheet() {
          var _this5 = this;

          this._ProfileService.uploadGoogleMenuSheet().subscribe(function (res) {}, function (error) {
            _this5._NotifierService.notify('error', 'Failed to upload, please try again later...!');
          });
        }
        /** Sarwan work Start */

      }, {
        key: "managerFormInit",
        value: function managerFormInit() {
          this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            state_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
          });
        }
      }, {
        key: "onManagerSubmit",
        value: function onManagerSubmit() {
          var _this6 = this;

          this.user = this._CommonFunctionsService.checkUser().user;
          console.log(this.user.id);
          console.log(this.profileForm.value);

          this._ProfileService.updateUserProfile(this.user.id, this.profileForm.value).subscribe(function (response) {
            if (response.status == 200) {
              _this6.toastr.success('Profile updated successfully');
            }
          }, function (error) {
            console.log(error);

            _this6.toastr.error('Something went wrong');
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["ng-component"]],
      decls: 18,
      vars: 3,
      consts: [[1, "row"], [1, "col-lg-4", "col-xlg-3", "col-md-5"], [1, "card"], [1, "card-body"], [1, "m-t-30", "text-center"], ["width", "150", 1, "rounded-circle", 3, "src"], [1, "card-title", "m-t-10"], [1, "card-subtitle"], [1, "form-group"], [1, "col-lg-8", "col-xlg-9", "col-md-7"], ["type", "pills", 1, "custom-pills"], ["title", "Settings"], ["ngbTabContent", ""], [1, "form-horizontal", "form-material", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], ["type", "text", "formControlName", "first_name", 1, "form-control", "form-control-line"], ["type", "text", "formControlName", "last_name", 1, "form-control", "form-control-line"], ["for", "example-email", 1, "col-md-12"], ["type", "email", "id", "example-email", "formControlName", "username", 1, "form-control", "form-control-line"], ["type", "text", "formControlName", "phone", 1, "form-control", "form-control-line"], [1, "col-sm-12"], ["data-placeholder", "Choose a Country", "tabindex", "1", "formControlName", "country_id", 1, "form-control", "custom-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["data-placeholder", "Choose a State", "tabindex", "1", "formControlName", "state_id", 1, "form-control", "custom-select"], ["type", "text", "formControlName", "city", 1, "form-control", "form-control-line"], ["type", "text", "formControlName", "zip", 1, "form-control", "form-control-line"], [1, "col-md-6"], [1, "input-group-prepend"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "submit", 1, "btn", "btn-success"], [3, "value"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-tabset", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-tab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_ng_template_17_Template, 63, 4, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (ctx.profile == null ? null : ctx.profile.photo) ? ctx.profile == null ? null : ctx.profile.photo : "assets/images/users/nouser.jpeg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.email);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'profile.component.html'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }, {
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]
        }, {
          type: _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sample-pages/sample-pages.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/sample-pages/sample-pages.module.ts ***!
    \*****************************************************/

  /*! exports provided: SamplePagesModule */

  /***/
  function srcAppSamplePagesSamplePagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SamplePagesModule", function () {
      return SamplePagesModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _sample_pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sample-pages.routing */
    "./src/app/sample-pages/sample-pages.routing.ts");
    /* harmony import */


    var _helper_classes_hc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./helper-classes/hc.component */
    "./src/app/sample-pages/helper-classes/hc.component.ts");
    /* harmony import */


    var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./invoice/invoice.component */
    "./src/app/sample-pages/invoice/invoice.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/sample-pages/profile/profile.component.ts");
    /* harmony import */


    var _uploadmenuitems_uploadmenuitems_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./uploadmenuitems/uploadmenuitems.component */
    "./src/app/sample-pages/uploadmenuitems/uploadmenuitems.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/sample-pages/pricing/pricing.component.ts");
    /* harmony import */


    var _AuthInterceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../AuthInterceptor */
    "./src/app/AuthInterceptor.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var SamplePagesModule = function SamplePagesModule() {
      _classCallCheck(this, SamplePagesModule);
    };

    SamplePagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SamplePagesModule
    });
    SamplePagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SamplePagesModule_Factory(t) {
        return new (t || SamplePagesModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_sample_pages_routing__WEBPACK_IMPORTED_MODULE_5__["SamplePagesRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePagesModule, {
        declarations: [_helper_classes_hc_component__WEBPACK_IMPORTED_MODULE_6__["HelperclassesComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__["PricingComponent"], _uploadmenuitems_uploadmenuitems_component__WEBPACK_IMPORTED_MODULE_9__["UploadmenuitemsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_sample_pages_routing__WEBPACK_IMPORTED_MODULE_5__["SamplePagesRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]],
          declarations: [_helper_classes_hc_component__WEBPACK_IMPORTED_MODULE_6__["HelperclassesComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_7__["InvoiceComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__["PricingComponent"], _uploadmenuitems_uploadmenuitems_component__WEBPACK_IMPORTED_MODULE_9__["UploadmenuitemsComponent"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/sample-pages/sample-pages.routing.ts":
  /*!******************************************************!*\
    !*** ./src/app/sample-pages/sample-pages.routing.ts ***!
    \******************************************************/

  /*! exports provided: SamplePagesRoutes */

  /***/
  function srcAppSamplePagesSamplePagesRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SamplePagesRoutes", function () {
      return SamplePagesRoutes;
    });
    /* harmony import */


    var _helper_classes_hc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helper-classes/hc.component */
    "./src/app/sample-pages/helper-classes/hc.component.ts");
    /* harmony import */


    var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./invoice/invoice.component */
    "./src/app/sample-pages/invoice/invoice.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/sample-pages/profile/profile.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/sample-pages/pricing/pricing.component.ts");
    /* harmony import */


    var _uploadmenuitems_uploadmenuitems_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./uploadmenuitems/uploadmenuitems.component */
    "./src/app/sample-pages/uploadmenuitems/uploadmenuitems.component.ts");

    var SamplePagesRoutes = [{
      path: '',
      children: [{
        path: 'helperclasses',
        component: _helper_classes_hc_component__WEBPACK_IMPORTED_MODULE_0__["HelperclassesComponent"],
        data: {
          title: 'Helper Classes',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Helper Classes'
          }]
        }
      }, {
        path: 'invoice',
        component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceComponent"],
        data: {
          title: 'Invoice',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Invoice Page'
          }]
        }
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        data: {
          title: 'Profile',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Profile Page'
          }]
        }
      }, {
        path: 'syncmenuitems',
        component: _uploadmenuitems_uploadmenuitems_component__WEBPACK_IMPORTED_MODULE_4__["UploadmenuitemsComponent"],
        data: {
          title: 'Sync menu items',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Sync Menu Items'
          }]
        }
      }, {
        path: 'pricing',
        component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__["PricingComponent"],
        data: {
          title: 'Pricing',
          urls: [{
            title: 'Dashboard',
            url: '/dashboard'
          }, {
            title: 'Pricing Page'
          }]
        }
      }]
    }];
    /***/
  },

  /***/
  "./src/app/sample-pages/uploadmenuitems/uploadmenuitems.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/sample-pages/uploadmenuitems/uploadmenuitems.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UploadmenuitemsComponent */

  /***/
  function srcAppSamplePagesUploadmenuitemsUploadmenuitemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadmenuitemsComponent", function () {
      return UploadmenuitemsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/commonFunctions.service */
    "./src/app/services/commonFunctions.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function UploadmenuitemsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UploadmenuitemsComponent_ng_template_6_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadmenuitemsComponent_ng_template_6_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.uploadGoogleMenuSheet();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Import/Sync");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UploadmenuitemsComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Google Sheet URL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UploadmenuitemsComponent_ng_template_6_button_20_Template, 2, 0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.profile.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.profile.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.profile.google_sheet_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.profile.google_sheet_url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.profile.google_sheet_url);
      }
    }

    var UploadmenuitemsComponent =
    /*#__PURE__*/
    function () {
      function UploadmenuitemsComponent(router, toastr, _ProfileService, _NotifierService, _CommonFunctionsService) {
        _classCallCheck(this, UploadmenuitemsComponent);

        this.router = router;
        this.toastr = toastr;
        this._ProfileService = _ProfileService;
        this._NotifierService = _NotifierService;
        this._CommonFunctionsService = _CommonFunctionsService;
        this.uploading = false;
      }

      _createClass(UploadmenuitemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompanyProfile();
          this.getCompanyProfileUser();
        }
      }, {
        key: "getCompanyProfile",
        value: function getCompanyProfile() {
          var _this7 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.getCompanyprofile(this.user.company_id).subscribe(function (res) {
            _this7.profile = res.data;
          }, function (error) {//  
          });
        }
      }, {
        key: "getCompanyProfileUser",
        value: function getCompanyProfileUser() {
          var _this8 = this;

          this.user = this._CommonFunctionsService.checkUser().user;

          this._ProfileService.getCompanyprofileUser(this.user.id).subscribe(function (res) {
            _this8.profileuser = res.data;
          }, function (error) {// 
          });
        }
      }, {
        key: "uploadGoogleMenuSheet",
        value: function uploadGoogleMenuSheet() {
          var _this9 = this;

          this.uploading = true;

          this._ProfileService.uploadGoogleMenuSheet().subscribe(function (res) {
            _this9.uploading = false;

            _this9.toastr.success(res.success);

            _this9.router.navigateByUrl('/menuitems');
          }, function (error) {
            _this9.uploading = false;

            _this9.toastr.error('Failed to upload, please try again later');
          });
        }
      }, {
        key: "updateGoogleSheetDetails",
        value: function updateGoogleSheetDetails(google_api_key, google_sheet_url, google_sheet_tab_name) {
          var _this10 = this;

          var obj = {
            google_api_key: google_api_key,
            google_sheet_url: google_sheet_url,
            google_sheet_tab_name: google_sheet_tab_name
          };
          this.uploading = true;

          this._ProfileService.updateGoogleSheetDetails(this.profile.id, obj).subscribe(function (res) {
            _this10.uploading = false;

            _this10.toastr.success('Details updated successfully!');
          }, function (error) {
            _this10.uploading = false;

            _this10.toastr.error('Failed to update, please try again later');
          });
        }
      }]);

      return UploadmenuitemsComponent;
    }();

    UploadmenuitemsComponent.ɵfac = function UploadmenuitemsComponent_Factory(t) {
      return new (t || UploadmenuitemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]));
    };

    UploadmenuitemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadmenuitemsComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 1,
      consts: [[1, "row"], [4, "ngIf"], [1, "col-lg-12", "col-xlg-9", "col-md-7"], [1, "card"], ["type", "pills", 1, "custom-pills"], ["title", "Details"], ["ngbTabContent", ""], [1, "card-body"], [1, "form-horizontal", "form-material"], [1, "form-group"], [1, "col-md-12"], ["type", "text", "disabled", "", 1, "form-control", "form-control-line", 3, "value"], ["for", "example-email", 1, "col-md-12"], ["type", "email", "name", "example-email", "id", "example-email", "disabled", "", 1, "form-control", "form-control-line", 3, "value"], [3, "href"], [1, "col-sm-8"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"]],
      template: function UploadmenuitemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadmenuitemsComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-tabset", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadmenuitemsComponent_ng_template_6_Template, 21, 5, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadmenuitemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'uploadmenuitems.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }, {
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]
        }, {
          type: _services_commonFunctions_service__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=sample-pages-sample-pages-module-es5.js.map