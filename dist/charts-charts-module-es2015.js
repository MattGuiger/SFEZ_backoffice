(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./src/app/charts/chart-js/chartjs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/charts/chart-js/chartjs.component.ts ***!
  \******************************************************/
/*! exports provided: ChartjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() { return ChartjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");



const _c0 = function () { return ["#a1aab2", "#36bea6", "#2962FF"]; };
const _c1 = function (a0) { return { backgroundColor: a0 }; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function () { return ["#a1aab2", "#36bea6", "#2962FF", "#7460ee", "#f62d51"]; };
class ChartjsComponent {
    constructor() {
        // This is line chart
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            barThickness: 10
        };
        this.barChartLabels = [
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }
        ];
        this.barChartColors = [
            { backgroundColor: '#36bea6' },
            { backgroundColor: '#2962FF' }
        ];
        // Doughnut
        this.doughnutChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail-Order Sales'
        ];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: 'rgba(54,190,166,.5)',
                borderColor: 'rgba(54,190,166,1)'
            },
            { backgroundColor: 'rgb(41,98,255,.5)', borderColor: 'rgb(41,98,255,1)' }
        ];
        // Pie
        this.pieChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales'
        ];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales',
            'Telesales',
            'Corporate Sales'
        ];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // lineChart
        this.lineChartData = [
            { data: [65, 39, 80, 15, 76, 35, 40], label: 'Series A' },
            { data: [18, 58, 20, 69, 16, 27, 90], label: 'Series B' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(54,190,166,.1)',
                borderColor: '#36bea6',
                pointBackgroundColor: '#36bea6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#36bea6'
            },
            {
                // dark grey
                backgroundColor: 'rgb(41,98,255,.1)',
                borderColor: '#2962FF',
                pointBackgroundColor: '#2962FF',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2962FF'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    chartClicked(e) {
        // console.log(e);
    }
    chartHovered(e) {
        // console.log(e);
    }
    randomize() {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }
    ngAfterViewInit() { }
}
ChartjsComponent.ɵfac = function ChartjsComponent_Factory(t) { return new (t || ChartjsComponent)(); };
ChartjsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartjsComponent, selectors: [["ng-component"]], decls: 54, vars: 44, consts: [[1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType", "colors", "chartHover", "chartClick"], [1, "card-footer"], [1, "btn", "btn-info", "btn-sm", 3, "click"], ["baseChart", "", "height", "165px", 3, "data", "labels", "chartType", "colors", "chartHover", "chartClick"], ["baseChart", "", "height", "150px", 3, "datasets", "labels", "chartType", "colors", "chartHover", "chartClick"], ["baseChart", "", "height", "150px", 3, "data", "labels", "chartType", "colors", "chartHover", "chartClick"], ["baseChart", "", "height", "130px", 3, "data", "labels", "legend", "chartType", "colors", "chartHover", "chartClick"], ["baseChart", "", "height", "130", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]], template: function ChartjsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bar Sales Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is the simple example of bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_8_listener($event) { return ctx.chartHovered($event); })("chartClick", function ChartjsComponent_Template_canvas_chartClick_8_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartjsComponent_Template_button_click_10_listener() { return ctx.randomize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Doughnut Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "This is the simple example of Doughnut chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_19_listener($event) { return ctx.chartHovered($event); })("chartClick", function ChartjsComponent_Template_canvas_chartClick_19_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Radar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "This is the simple example of Radar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "canvas", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_28_listener($event) { return ctx.chartHovered($event); })("chartClick", function ChartjsComponent_Template_canvas_chartClick_28_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pie Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "This is the simple example of Pie chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_36_listener($event) { return ctx.chartHovered($event); })("chartClick", function ChartjsComponent_Template_canvas_chartClick_36_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Polar Area Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "This is the simple example of Polar Area Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_45_listener($event) { return ctx.chartHovered($event); })("chartClick", function ChartjsComponent_Template_canvas_chartClick_45_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "This is the simple example of Polar Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "canvas", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_53_listener($event) { return ctx.chartHovered($event); })("chartClick", function ChartjsComponent_Template_canvas_chartClick_53_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.radarChartData)("labels", ctx.radarChartLabels)("chartType", ctx.radarChartType)("colors", ctx.radarChartColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.polarAreaChartData)("labels", ctx.polarAreaChartLabels)("legend", ctx.polarAreaLegend)("chartType", ctx.polarAreaChartType)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c3))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './chartjs.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/charts/chartist-js/chartistjs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/charts/chartist-js/chartistjs.component.ts ***!
  \************************************************************/
/*! exports provided: ChartistjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartistjsComponent", function() { return ChartistjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
/* harmony import */ var _dynamic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic.component */ "./src/app/charts/chartist-js/dynamic.component.ts");




const data = __webpack_require__(/*! ./data.json */ "./src/app/charts/chartist-js/data.json");
class ChartistjsComponent {
    constructor() {
        // Barchart
        this.barChart1 = {
            type: 'Bar',
            data: data['Bar'],
            options: {
                seriesBarDistance: 15,
                height: 400,
                axisX: {
                    showGrid: false,
                    offset: 70
                },
                axisY: {
                    showGrid: true,
                    offset: 50
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 1 === 0 ? `${value}` : null;
                            }
                        }
                    }
                ]
            ]
        };
        // Line chart
        this.lineChart1 = {
            type: 'Line',
            data: data['LineWithArea'],
            options: {
                low: 0,
                height: 400,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart2 = {
            type: 'Line',
            data: data['Line'],
            options: {
                low: 0,
                height: 400,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart3 = {
            type: 'Line',
            data: data['Line2'],
            options: {
                low: 0,
                height: 400,
                showArea: true,
                fullWidth: true
            }
        };
        // Scatter chart
        this.scatterChart1 = {
            type: 'Line',
            data: data['Scatter'],
            options: {
                showLine: false,
                height: 400,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 13 === 0 ? `W${value}` : null;
                    }
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 4 === 0 ? `W${value}` : null;
                            }
                        }
                    }
                ]
            ]
        };
        // Pie chart
        this.pieChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                donutWidth: 50,
                startAngle: 270,
                height: 250,
                total: 200,
                showLabel: false
            }
        };
        this.donuteChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                showLabel: false,
                height: 250
            }
            // events: {
            //   draw(data: any): boolean {
            //     return data;
            //   }
            // }
        };
        // Bi Poller chart
        this.bipollarChart1 = {
            type: 'Bar',
            data: data['Bi-PolarBar'],
            options: {
                high: 10,
                low: -10,
                height: 400,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }
        };
    }
}
ChartistjsComponent.ɵfac = function ChartistjsComponent_Factory(t) { return new (t || ChartistjsComponent)(); };
ChartistjsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartistjsComponent, selectors: [["ng-component"]], decls: 69, vars: 40, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "barchrt"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "linearea"], [1, "piechart"], [1, "barchrt", "linearea"]], template: function ChartistjsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bar chart Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is the simple data export from the json file and creating a bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Line Area chart Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This is the simple data export from the json file and creating a Line chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Line chart Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This is the simple data export from the json file and creating a Line chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Line chart 2 Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "This is the simple data export from the json file and creating a Line chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Scatter chart Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "This is the simple data export from the json file and creating a Scatter chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pie chart Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "This is the simple data export from the json file and creating a Pie chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Donute chart Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "This is the simple data export from the json file and creating a Pie chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Bipollar chart Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "This is the simple data export from the json file and creating a Bipollar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-dynamic-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.barChart1.data)("type", ctx.barChart1.type)("options", ctx.barChart1.options)("responsiveOptions", ctx.barChart1.responsiveOptions)("events", ctx.barChart1.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChart1.data)("type", ctx.lineChart1.type)("options", ctx.lineChart1.options)("responsiveOptions", ctx.lineChart1.responsiveOptions)("events", ctx.lineChart1.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChart2.data)("type", ctx.lineChart2.type)("options", ctx.lineChart2.options)("responsiveOptions", ctx.lineChart2.responsiveOptions)("events", ctx.lineChart2.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChart3.data)("type", ctx.lineChart3.type)("options", ctx.lineChart3.options)("responsiveOptions", ctx.lineChart3.responsiveOptions)("events", ctx.lineChart3.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.scatterChart1.data)("type", ctx.scatterChart1.type)("options", ctx.scatterChart1.options)("responsiveOptions", ctx.scatterChart1.responsiveOptions)("events", ctx.scatterChart1.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChart1.data)("type", ctx.pieChart1.type)("options", ctx.pieChart1.options)("responsiveOptions", ctx.pieChart1.responsiveOptions)("events", ctx.pieChart1.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.donuteChart1.data)("type", ctx.donuteChart1.type)("options", ctx.donuteChart1.options)("responsiveOptions", ctx.donuteChart1.responsiveOptions)("events", ctx.donuteChart1.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.bipollarChart1.data)("type", ctx.bipollarChart1.type)("options", ctx.bipollarChart1.options)("responsiveOptions", ctx.bipollarChart1.responsiveOptions)("events", ctx.bipollarChart1.events);
    } }, directives: [ng_chartist__WEBPACK_IMPORTED_MODULE_1__["ChartistComponent"], _dynamic_component__WEBPACK_IMPORTED_MODULE_2__["DynamicChartComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartistjsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './chartistjs.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/charts/chartist-js/data.json":
/*!**********************************************!*\
  !*** ./src/app/charts/chartist-js/data.json ***!
  \**********************************************/
/*! exports provided: Bar, Line, Line2, Scatter, LineWithArea, Bi-PolarBar, DistributedSeries, Pie, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Bar\":{\"labels\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\"],\"series\":[[5,4,3,7,5,10],[3,2,9,5,4,6]]},\"Line\":{\"labels\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"series\":[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},\"Line2\":{\"labels\":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],\"series\":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},\"Scatter\":{\"labels\":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],\"series\":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},\"LineWithArea\":{\"labels\":[1,2,3,4,5,6,7,8],\"series\":[[0,5000,15000,8000,15000,9000,30000,0],[0,3000,5000,2000,8000,1000,5000,0]]},\"Bi-PolarBar\":{\"labels\":[\"W1\",\"W2\",\"W3\",\"W4\",\"W5\",\"W6\",\"W7\",\"W8\",\"W9\",\"W10\"],\"series\":[[1,2,4,8,6,-2,-1,-4,-6,-2]]},\"DistributedSeries\":{\"labels\":[\"XS\",\"S\",\"M\",\"L\",\"XL\",\"XXL\",\"XXXL\"],\"series\":[20,60,120,200,180,20,10]},\"Pie\":{\"series\":[20,10,30,40]}}");

/***/ }),

/***/ "./src/app/charts/chartist-js/dynamic.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/charts/chartist-js/dynamic.component.ts ***!
  \*********************************************************/
/*! exports provided: DynamicChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicChartComponent", function() { return DynamicChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");





function DynamicChartComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", type_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r1);
} }
const data = __webpack_require__(/*! ./data.json */ "./src/app/charts/chartist-js/data.json");
class DynamicChartComponent {
    constructor() {
        this.chartTypes = ['Bar', 'Line'];
        this.type = 'Bar';
        this.data = data['Bar'];
        this.options = {
            height: 400,
            axisX: {
                showLabel: false
            },
            axisY: {
                showLabel: false
            }
        };
    }
}
DynamicChartComponent.ɵfac = function DynamicChartComponent_Factory(t) { return new (t || DynamicChartComponent)(); };
DynamicChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicChartComponent, selectors: [["app-dynamic-chart"]], decls: 8, vars: 5, consts: [[1, "row"], [1, "col-md-6"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "data", "type", "options"], [3, "ngValue"]], template: function DynamicChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dynamic Chart Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicChartComponent_Template_select_ngModelChange_5_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicChartComponent_option_6_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "x-chartist", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chartTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("type", ctx.type)("options", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-chart',
                template: `
    <div class="row">
      <div class="col-md-6">
        <h4>Dynamic Chart Types</h4>
      </div>
      <div class="col-md-6">
        <select class="form-control" [(ngModel)]="type">
          <option *ngFor="let type of chartTypes" [ngValue]="type">{{type}}</option>
        </select>
      </div>
    </div>
    <x-chartist
      [data]="data"
      [type]="type"
      [options]="options">
    </x-chartist>
  `
            }]
    }], function () { return []; }, null); })();



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/release/esm.js");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts.routing */ "./src/app/charts/charts.routing.ts");
/* harmony import */ var _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chartist-js/chartistjs.component */ "./src/app/charts/chartist-js/chartistjs.component.ts");
/* harmony import */ var _chartist_js_dynamic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chartist-js/dynamic.component */ "./src/app/charts/chartist-js/dynamic.component.ts");
/* harmony import */ var _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart-js/chartjs.component */ "./src/app/charts/chart-js/chartjs.component.ts");
/* harmony import */ var _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ngx-charts/ngx-chart.component */ "./src/app/charts/ngx-charts/ngx-chart.component.ts");















class ChartModule {
}
ChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartModule });
ChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartModule_Factory(t) { return new (t || ChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_8__["ChartsRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartModule, { declarations: [_chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_11__["ChartjsComponent"],
        _chartist_js_dynamic_component__WEBPACK_IMPORTED_MODULE_10__["DynamicChartComponent"],
        _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_9__["ChartistjsComponent"],
        _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_12__["NgxChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_8__["ChartsRoutes"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"]
                ],
                declarations: [
                    _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_11__["ChartjsComponent"],
                    _chartist_js_dynamic_component__WEBPACK_IMPORTED_MODULE_10__["DynamicChartComponent"],
                    _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_9__["ChartistjsComponent"],
                    _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_12__["NgxChartComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/charts/charts.routing.ts":
/*!******************************************!*\
  !*** ./src/app/charts/charts.routing.ts ***!
  \******************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartist-js/chartistjs.component */ "./src/app/charts/chartist-js/chartistjs.component.ts");
/* harmony import */ var _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-js/chartjs.component */ "./src/app/charts/chart-js/chartjs.component.ts");
/* harmony import */ var _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-charts/ngx-chart.component */ "./src/app/charts/ngx-charts/ngx-chart.component.ts");



const ChartsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'chartistjs',
                component: _chartist_js_chartistjs_component__WEBPACK_IMPORTED_MODULE_0__["ChartistjsComponent"],
                data: {
                    title: 'Chartis js',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chartis js Page' }
                    ]
                }
            },
            {
                path: 'chartjs',
                component: _chart_js_chartjs_component__WEBPACK_IMPORTED_MODULE_1__["ChartjsComponent"],
                data: {
                    title: 'Chart js',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Chart js Page' }
                    ]
                }
            },
            {
                path: 'ngxchart',
                component: _ngx_charts_ngx_chart_component__WEBPACK_IMPORTED_MODULE_2__["NgxChartComponent"],
                data: {
                    title: 'Ngx Charts',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ngx Charts' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/charts/ngx-charts/chartData.ts":
/*!************************************************!*\
  !*** ./src/app/charts/ngx-charts/chartData.ts ***!
  \************************************************/
/*! exports provided: single, multi, bubble, countries, generateGraph, generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGraph", function() { return generateGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return generateData; });
const single = [
    {
        name: 'Germany',
        value: 40
    },
    {
        name: 'USA',
        value: 49
    },
    {
        name: 'France',
        value: 36
    },
    {
        name: 'United Kingdom',
        value: 36
    },
    {
        name: 'Spain',
        value: 33
    },
    {
        name: 'Italy',
        value: 35
    }
];
const multi = [
    {
        name: 'Germany',
        series: [
            {
                name: '2010',
                value: 40
            },
            {
                name: '2000',
                value: 36
            },
            {
                name: '1990',
                value: 31
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: '2010',
                value: 49
            },
            {
                name: '2000',
                value: 45
            },
            {
                name: '1990',
                value: 37
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 34
            },
            {
                name: '1990',
                value: 29
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2010',
                value: 36
            },
            {
                name: '2000',
                value: 32
            },
            {
                name: '1990',
                value: 26
            }
        ]
    }
];
const bubble = [
    {
        name: 'Germany',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 80.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.3,
                r: 78
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 78.8,
                r: 310
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 76.9,
                r: 283
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 81.4,
                r: 63
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 79.1,
                r: 59.4
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 80.2,
                r: 62.7
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 77.8,
                r: 58.9
            },
            {
                name: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                x: new Date(Math.floor(1473700105009 + Math.random() * 1000000000)),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];
const countries = [
    'Abkhazia',
    'Afghanistan',
    'Akrotiri and Dhekelia',
    'Aland',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Ascension Island',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas, The',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central Africa Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote dlvoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'Gabon',
    'Cambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guemsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, N',
    'Korea, S',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Nagorno-Karabakh',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Cyprus',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcaim Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Sahrawi Arab Democratic Republic',
    'Saint-Barthelemy',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent and Grenadines',
    'Samos',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'Somaliland',
    'South Africa',
    'South Ossetia',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Transnistria',
    'Trinidad and Tobago',
    'Tristan da Cunha',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Virgin Islands, British',
    'Virgin Islands, U.S.',
    'Wallis and Futuna',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
function generateGraph(nodeCount) {
    const nodes = [];
    const links = [];
    for (let i = 0; i < nodeCount; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        nodes.push({
            value: country
        });
        for (let j = 0; j < nodes.length - 1; j++) {
            if (Math.random() < 0.03) {
                links.push({
                    source: country,
                    target: nodes[j].value
                });
            }
        }
    }
    return { links, nodes };
}
function generateData(seriesLength, includeMinMaxRange) {
    const results = [];
    const domain = []; // array of time stamps in milliseconds
    for (let j = 0; j < 8; j++) {
        // random dates between Sep 12, 2016 and Sep 24, 2016
        domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
    }
    for (let i = 0; i < seriesLength; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        const series = {
            name: country,
            series: []
        };
        for (let j = 0; j < domain.length; j++) {
            const value = Math.floor(2 + Math.random() * 5);
            // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
            const timestamp = domain[j];
            if (includeMinMaxRange) {
                const errorMargin = 0.02 + Math.random() * 0.08;
                series.series.push({
                    value,
                    name: timestamp,
                    min: Math.floor(value * (1 - errorMargin)),
                    max: Math.ceil(value * (1 + errorMargin))
                });
            }
            else {
                series.series.push({
                    value,
                    name: timestamp
                });
            }
        }
        results.push(series);
    }
    return results;
}


/***/ }),

/***/ "./src/app/charts/ngx-charts/ngx-chart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/charts/ngx-charts/ngx-chart.component.ts ***!
  \**********************************************************/
/*! exports provided: NgxChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChartComponent", function() { return NgxChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _chartData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartData */ "./src/app/charts/ngx-charts/chartData.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/release/esm.js");





class NgxChartComponent {
    constructor() {
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.autoScale = true;
        this.timeline = false;
        this.barPadding = 8;
        this.groupPadding = 0;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.view = '';
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        this.rangeFillOpacity = 0.15;
        this.colorScheme = {
            domain: ['#4fc3f7', '#fb8c00', '#7460ee', '#f62d51', '#20c997', '#2962FF']
        };
        this.schemeType = 'ordinal';
        // line interpolation
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveLinear"];
        Object.assign(this, {
            single: _chartData__WEBPACK_IMPORTED_MODULE_2__["single"],
            multi: _chartData__WEBPACK_IMPORTED_MODULE_2__["multi"]
        });
        this.dateData = Object(_chartData__WEBPACK_IMPORTED_MODULE_2__["generateData"])(6, false);
        this.dateDataWithRange = Object(_chartData__WEBPACK_IMPORTED_MODULE_2__["generateData"])(2, true);
    }
    get dateDataWithOrWithoutRange() {
        if (this.range) {
            return this.dateDataWithRange;
        }
        else {
            return this.dateData;
        }
    }
    select(data) {
        console.log('Item clicked', data);
    }
    onLegendLabelClick(entry) {
        console.log('Legend clicked', entry);
    }
}
NgxChartComponent.ɵfac = function NgxChartComponent_Factory(t) { return new (t || NgxChartComponent)(); };
NgxChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxChartComponent, selectors: [["app-ngxchart"]], decls: 61, vars: 143, consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "chart-container", 3, "scheme", "schemeType", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "tooltipDisabled", "xAxisLabel", "yAxisLabel", "showGridLines", "barPadding", "view", "roundDomains", "select", "legendLabelClick"], [1, "chart-container", 3, "scheme", "schemeType", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "tooltipDisabled", "xAxisLabel", "yAxisLabel", "showGridLines", "barPadding", "roundDomains", "legendLabelClick", "select"], [1, "chart-container", 3, "scheme", "schemeType", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "tooltipDisabled", "xAxisLabel", "yAxisLabel", "showGridLines", "barPadding", "groupPadding", "roundDomains", "legendLabelClick", "select"], [1, "chart-container", 3, "scheme", "schemeType", "results", "gradient", "tooltipDisabled", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "showGridLines", "barPadding", "groupPadding", "roundDomains", "legendLabelClick", "select"], [1, "chart-container", 3, "scheme", "schemeType", "results", "legend", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "timeline", "showGridLines", "curve", "rangeFillOpacity", "roundDomains", "tooltipDisabled", "legendLabelClick", "select"], [1, "chart-container", 3, "scheme", "schemeType", "results", "legend", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "timeline", "showGridLines", "roundDomains", "curve", "tooltipDisabled", "legendLabelClick", "select"], [1, "chart-container", 3, "scheme", "schemeType", "results", "legend", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "timeline", "showGridLines", "roundDomains", "tooltipDisabled", "curve", "legendLabelClick", "select"], [1, "chart-container", 3, "scheme", "results", "legend", "explodeSlices", "labels", "doughnut", "arcWidth", "gradient", "tooltipDisabled", "legendLabelClick", "select"], [1, "chart-container", 3, "scheme", "results", "gradient", "tooltipDisabled", "legendLabelClick", "select"]], template: function NgxChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vertical Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-charts-bar-vertical", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_bar_vertical_select_6_listener($event) { return ctx.select($event); })("legendLabelClick", function NgxChartComponent_Template_ngx_charts_bar_vertical_legendLabelClick_6_listener($event) { return ctx.onLegendLabelClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Horizontal bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-charts-bar-horizontal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_bar_horizontal_legendLabelClick_12_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_bar_horizontal_select_12_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Group Vertical bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-charts-bar-vertical-2d", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_bar_vertical_2d_legendLabelClick_18_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_bar_vertical_2d_select_18_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Group horizontal bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-charts-bar-horizontal-2d", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_bar_horizontal_2d_legendLabelClick_24_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_bar_horizontal_2d_select_24_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Line chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-charts-line-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_line_chart_legendLabelClick_30_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_line_chart_select_30_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Area chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-charts-area-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_area_chart_legendLabelClick_36_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_area_chart_select_36_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Stacked chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ngx-charts-area-chart-stacked", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_area_chart_stacked_legendLabelClick_42_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_area_chart_stacked_select_42_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Normalize Area chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ngx-charts-area-chart-normalized", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_area_chart_normalized_legendLabelClick_48_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_area_chart_normalized_select_48_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pie chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngx-charts-pie-chart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_pie_chart_legendLabelClick_54_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_pie_chart_select_54_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Advanced pie chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ngx-charts-advanced-pie-chart", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function NgxChartComponent_Template_ngx_charts_advanced_pie_chart_legendLabelClick_60_listener($event) { return ctx.onLegendLabelClick($event); })("select", function NgxChartComponent_Template_ngx_charts_advanced_pie_chart_select_60_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.single)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("tooltipDisabled", ctx.tooltipDisabled)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("showGridLines", ctx.showGridLines)("barPadding", 40)("view", ctx.view)("roundDomains", ctx.roundDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.single)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("tooltipDisabled", ctx.tooltipDisabled)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("showGridLines", ctx.showGridLines)("barPadding", 20)("roundDomains", ctx.roundDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("tooltipDisabled", ctx.tooltipDisabled)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("showGridLines", ctx.showGridLines)("barPadding", ctx.barPadding)("groupPadding", 20)("roundDomains", ctx.roundDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.multi)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("showGridLines", ctx.showGridLines)("barPadding", ctx.barPadding)("groupPadding", 20)("roundDomains", ctx.roundDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.dateDataWithOrWithoutRange)("legend", ctx.showLegend)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale)("timeline", ctx.timeline)("showGridLines", ctx.showGridLines)("curve", ctx.curve)("rangeFillOpacity", ctx.rangeFillOpacity)("roundDomains", ctx.roundDomains)("tooltipDisabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.dateData)("legend", ctx.showLegend)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale)("timeline", ctx.timeline)("showGridLines", ctx.showGridLines)("roundDomains", ctx.roundDomains)("curve", ctx.curve)("tooltipDisabled", ctx.tooltipDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.dateData)("legend", ctx.showLegend)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("timeline", ctx.timeline)("showGridLines", ctx.showGridLines)("roundDomains", ctx.roundDomains)("tooltipDisabled", ctx.tooltipDisabled)("curve", ctx.curve);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("schemeType", ctx.schemeType)("results", ctx.dateData)("legend", ctx.showLegend)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("timeline", ctx.timeline)("showGridLines", ctx.showGridLines)("roundDomains", ctx.roundDomains)("tooltipDisabled", ctx.tooltipDisabled)("curve", ctx.curve);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single)("legend", ctx.showLegend)("explodeSlices", ctx.explodeSlices)("labels", ctx.showLabels)("doughnut", ctx.doughnut)("arcWidth", ctx.arcWidth)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarVerticalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarHorizontalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarVertical2DComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BarHorizontal2DComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AreaChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AreaChartStackedComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AreaChartNormalizedComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["AdvancedPieChartComponent"]], styles: [".chart-container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzaHV0b3Noc2luZ2gvUHJvamVjdHMvSW5zdGFNYXJrcnQvU0ZFWl9iYWNrb2ZmaWNlL3NyYy9hcHAvY2hhcnRzL25neC1jaGFydHMvbmd4LWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFydHMvbmd4LWNoYXJ0cy9uZ3gtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FDQ3BCOztBRENBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9uZ3gtY2hhcnRzL25neC1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udzEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIi5jaGFydC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ngxchart',
                templateUrl: './ngx-chart.component.html',
                styleUrls: ['./ngx-chart.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=charts-charts-module-es2015.js.map