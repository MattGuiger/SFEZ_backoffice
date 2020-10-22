function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-forms-module~menuitems-menuitems-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
    \************************************************************************/

  /*! exports provided: MatAnchor, MatButton, MatButtonModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ButtonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
      return MatAnchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButton", function () {
      return MatButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
      return MatButtonModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/button.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default color palette for round buttons (mat-fab and mat-mini-fab)
     * @type {?}
     */


    var _c0 = ["mat-button", ""];
    var _c1 = ["*"];
    var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
    /**
     * List of classes to add to MatButton instances based on host attributes to
     * style as different variants.
     * @type {?}
     */

    var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

    /**
     * \@docs-private
     */

    var MatButtonBase =
    /**
     * @param {?} _elementRef
     */
    function MatButtonBase(_elementRef) {
      _classCallCheck(this, MatButtonBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatButtonBase)));
    /**
     * Material design button.
     */


    var MatButton =
    /*#__PURE__*/
    function (_MatButtonMixinBase2) {
      _inherits(MatButton, _MatButtonMixinBase2);

      var _super = _createSuper(MatButton);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _animationMode
       */
      function MatButton(elementRef, _focusMonitor, _animationMode) {
        var _this;

        _classCallCheck(this, MatButton);

        _this = _super.call(this, elementRef);
        _this._focusMonitor = _focusMonitor;
        _this._animationMode = _animationMode;
        /**
         * Whether the button is round.
         */

        _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /**
         * Whether the button is icon button.
         */

        _this.isIconButton = _this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.

        var _iterator = _createForOfIteratorHelper(BUTTON_HOST_ATTRIBUTES),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attr = _step.value;

            if (_this._hasHostAttributes(attr)) {
              /** @type {?} */
              _this._getHostElement().classList.add(attr);
            }
          } // Add a class that applies to all buttons. This makes it easier to target if somebody
          // wants to target all Material buttons. We do it here rather than `host` to ensure that
          // the class is applied to derived classes.

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        elementRef.nativeElement.classList.add('mat-button-base');

        _this._focusMonitor.monitor(_this._elementRef, true);

        if (_this.isRoundButton) {
          _this.color = DEFAULT_ROUND_BUTTON_COLOR;
        }

        return _this;
      }
      /**
       * @return {?}
       */


      _createClass(MatButton, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the button.
         * @param {?=} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        /**
         * Gets whether the button has one of the given attributes.
         * @param {...?} attributes
         * @return {?}
         */

      }, {
        key: "_hasHostAttributes",
        value: function _hasHostAttributes() {
          var _this2 = this;

          for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
            attributes[_key] = arguments[_key];
          }

          return attributes.some(
          /**
          * @param {?} attribute
          * @return {?}
          */
          function (attribute) {
            return _this2._getHostElement().hasAttribute(attribute);
          });
        }
      }]);

      return MatButton;
    }(_MatButtonMixinBase);

    MatButton.ɵfac = function MatButton_Factory(t) {
      return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatButton,
      selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
      viewQuery: function MatButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
        }
      },
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 3,
      hostBindings: function MatButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color"
      },
      exportAs: ["matButton"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatButton.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatButton.propDecorators = {
      ripple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
          exportAs: 'matButton',
          host: {
            '[attr.disabled]': 'disabled || null',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            'class': 'mat-focus-indicator'
          },
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
          inputs: ['disabled', 'disableRipple', 'color'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }]
      });
    })();

    if (false) {}
    /**
     * Material design anchor button.
     */


    var MatAnchor =
    /*#__PURE__*/
    function (_MatButton) {
      _inherits(MatAnchor, _MatButton);

      var _super2 = _createSuper(MatAnchor);

      /**
       * @param {?} focusMonitor
       * @param {?} elementRef
       * @param {?} animationMode
       */
      function MatAnchor(focusMonitor, elementRef, animationMode) {
        _classCallCheck(this, MatAnchor);

        return _super2.call(this, elementRef, focusMonitor, animationMode);
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(MatAnchor, [{
        key: "_haltDisabledEvents",
        value: function _haltDisabledEvents(event) {
          // A disabled button shouldn't apply any actions
          if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }
        }
      }]);

      return MatAnchor;
    }(MatButton);

    MatAnchor.ɵfac = function MatAnchor_Factory(t) {
      return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatAnchor,
      selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
      hostAttrs: [1, "mat-focus-indicator"],
      hostVars: 5,
      hostBindings: function MatAnchor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
            return ctx._haltDisabledEvents($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color",
        tabIndex: "tabIndex"
      },
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatAnchor_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatAnchor.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatAnchor.propDecorators = {
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
          exportAs: 'matButton, matAnchor',
          host: {
            // Note that we ignore the user-specified tabindex when it's disabled for
            // consistency with the `mat-button` applied on native buttons where even
            // though they have an index, they're not tabbable.
            '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
            '[attr.disabled]': 'disabled || null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '(click)': '_haltDisabledEvents($event)',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            'class': 'mat-focus-indicator'
          },
          inputs: ['disabled', 'disableRipple', 'color'],
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<div matRipple class=\"mat-button-ripple\"\n     [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"isIconButton\"\n     [matRippleTrigger]=\"_getHostElement()\"></div>\n<div class=\"mat-button-focus-overlay\"></div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/button-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatButtonModule = function MatButtonModule() {
      _classCallCheck(this, MatButtonModule);
    };

    MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatButtonModule
    });
    MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatButtonModule_Factory(t) {
        return new (t || MatButtonModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatButtonModule, {
        declarations: function declarations() {
          return [MatButton, MatAnchor];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          declarations: [MatButton, MatAnchor]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=button.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
    \************************************************************************/

  /*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DialogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
      return MAT_DIALOG_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
      return MAT_DIALOG_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
      return MatDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
      return MatDialogActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
      return MatDialogClose;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
      return MatDialogConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
      return MatDialogContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
      return MatDialogContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
      return MatDialogModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
      return MatDialogRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
      return MatDialogTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
      return matDialogAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
      return throwMatDialogContentAlreadyAttachedError;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Possible overrides for a dialog's position.
     * @record
     */


    function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

    function DialogPosition() {}

    if (false) {}
    /**
     * Configuration for opening a modal dialog with the MatDialog service.
     * @template D
     */


    var MatDialogConfig = function MatDialogConfig() {
      _classCallCheck(this, MatDialogConfig);

      /**
       * The ARIA role of the dialog element.
       */
      this.role = 'dialog';
      /**
       * Custom class for the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the dialog has a backdrop.
       */

      this.hasBackdrop = true;
      /**
       * Custom class for the backdrop.
       */

      this.backdropClass = '';
      /**
       * Whether the user can use escape or clicking on the backdrop to close the modal.
       */

      this.disableClose = false;
      /**
       * Width of the dialog.
       */

      this.width = '';
      /**
       * Height of the dialog.
       */

      this.height = '';
      /**
       * Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw.
       */

      this.maxWidth = '80vw';
      /**
       * Data being injected into the child component.
       */

      this.data = null;
      /**
       * ID of the element that describes the dialog.
       */

      this.ariaDescribedBy = null;
      /**
       * ID of the element that labels the dialog.
       */

      this.ariaLabelledBy = null;
      /**
       * Aria label to assign to the dialog element.
       */

      this.ariaLabel = null;
      /**
       * Whether the dialog should focus the first focusable element on open.
       */

      this.autoFocus = true;
      /**
       * Whether the dialog should restore focus to the
       * previously-focused element, after it's closed.
       */

      this.restoreFocus = true;
      /**
       * Whether the dialog should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by MatDialog.
     * \@docs-private
     * @type {?}
     */


    var matDialogAnimations = {
      /**
       * Animation that is applied on the dialog container by defalt.
       */
      dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
      // specifying the transform explicitly, causes IE both to blur the dialog content and
      // decimate the animation performance. Leaving it as `none` solves both issues.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'scale(0.7)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'none',
        opacity: 1
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception for the case when a ComponentPortal is
     * attached to a DomPortalOutlet without an origin.
     * \@docs-private
     * @return {?}
     */

    function throwMatDialogContentAlreadyAttachedError() {
      throw Error('Attempting to attach dialog content after content is already attached');
    }
    /**
     * Internal component that wraps user-provided dialog content.
     * Animation is based on https://material.io/guidelines/motion/choreography.html.
     * \@docs-private
     */


    var MatDialogContainer =
    /*#__PURE__*/
    function (_angular_cdk_portal__) {
      _inherits(MatDialogContainer, _angular_cdk_portal__);

      var _super3 = _createSuper(MatDialogContainer);

      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _changeDetectorRef
       * @param {?} _document
       * @param {?} _config
       */
      function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        var _this3;

        _classCallCheck(this, MatDialogContainer);

        _this3 = _super3.call(this);
        _this3._elementRef = _elementRef;
        _this3._focusTrapFactory = _focusTrapFactory;
        _this3._changeDetectorRef = _changeDetectorRef;
        _this3._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */

        _this3._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */

        _this3._state = 'enter';
        /**
         * Emits when an animation state changes.
         */

        _this3._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this3.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          if (_this3._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          _this3._setupFocusTrap();

          return _this3._portalOutlet.attachDomPortal(portal);
        };

        _this3._ariaLabelledBy = _config.ariaLabelledBy || null;
        _this3._document = _document;
        return _this3;
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @template T
       * @param {?} portal Portal to be attached as the dialog content.
       * @return {?}
       */


      _createClass(MatDialogContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._setupFocusTrap();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a TemplatePortal as content to this dialog container.
         * @template C
         * @param {?} portal Portal to be attached as the dialog content.
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._setupFocusTrap();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Moves focus back into the dialog if it was moved out.
         * @return {?}
         */

      }, {
        key: "_recaptureFocus",
        value: function _recaptureFocus() {
          if (!this._containsFocus()) {
            /** @type {?} */
            var focusWasTrapped = this._focusTrap.focusInitialElement();

            if (!focusWasTrapped) {
              this._elementRef.nativeElement.focus();
            }
          }
        }
        /**
         * Moves the focus inside the focus trap.
         * @private
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus() {
          // If we were to attempt to focus immediately, then the content of the dialog would not yet be
          // ready in instances where change detection has to run first. To deal with this, we simply
          // wait for the microtask queue to be empty.
          if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
          } else if (!this._containsFocus()) {
            // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.
            this._elementRef.nativeElement.focus();
          }
        }
        /**
         * Restores focus to the element that was focused before the dialog opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          /** @type {?} */
          var toFocus = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

          if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            var activeElement = this._document.activeElement;
            /** @type {?} */

            var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.

            if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
              toFocus.focus();
            }
          }

          if (this._focusTrap) {
            this._focusTrap.destroy();
          }
        }
        /**
         * Sets up the focus trand and saves a reference to the
         * element that was focused before the dialog was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_setupFocusTrap",
        value: function _setupFocusTrap() {
          var _this4 = this;

          if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          }

          if (this._document) {
            this._elementFocusedBeforeDialogWasOpened =
            /** @type {?} */
            this._document.activeElement; // Note that there is no focus method when rendering on the server.

            if (this._elementRef.nativeElement.focus) {
              // Move focus onto the dialog immediately in order to prevent the user from accidentally
              // opening multiple dialogs at the same time. Needs to be async, because the element
              // may not be focusable immediately.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this4._elementRef.nativeElement.focus();
              });
            }
          }
        }
        /**
         * Returns whether focus is inside the dialog.
         * @private
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var activeElement = this._document.activeElement;
          return element === activeElement || element.contains(activeElement);
        }
        /**
         * Callback, invoked whenever an animation on the host completes.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          if (event.toState === 'enter') {
            this._trapFocus();
          } else if (event.toState === 'exit') {
            this._restoreFocus();
          }

          this._animationStateChanged.emit(event);
        }
        /**
         * Callback, invoked when an animation on the host starts.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._animationStateChanged.emit(event);
        }
        /**
         * Starts the dialog exit animation.
         * @return {?}
         */

      }, {
        key: "_startExitAnimation",
        value: function _startExitAnimation() {
          this._state = 'exit'; // Mark the container for check so it can react if the
          // view container is using OnPush change detection.

          this._changeDetectorRef.markForCheck();
        }
      }]);

      return MatDialogContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

    MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
      return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig));
    };

    MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      viewQuery: function MatDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
      hostVars: 6,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
            return ctx._onAnimationStart($event);
          })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
            return ctx._onAnimationDone($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._id)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@dialogContainer", ctx._state);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
      encapsulation: 2,
      data: {
        animation: [matDialogAnimations.dialogContainer]
      }
    });
    /** @nocollapse */

    MatDialogContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: MatDialogConfig
      }];
    };

    MatDialogContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mat-dialog-container',
          template: "<ng-template cdkPortalOutlet></ng-template>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
          animations: [matDialogAnimations.dialogContainer],
          host: {
            'class': 'mat-dialog-container',
            'tabindex': '-1',
            'aria-modal': 'true',
            '[attr.id]': '_id',
            '[attr.role]': '_config.role',
            '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
            '[attr.aria-label]': '_config.ariaLabel',
            '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
            '[@dialogContainer]': '_state',
            '(@dialogContainer.start)': '_onAnimationStart($event)',
            '(@dialogContainer.done)': '_onAnimationDone($event)'
          },
          styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: MatDialogConfig
        }];
      }, {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(jelbourn): resizing
    // Counter for unique dialog ids.

    /** @type {?} */


    var uniqueId = 0;
    /** @enum {number} */

    var MatDialogState = {
      OPEN: 0,
      CLOSING: 1,
      CLOSED: 2
    };
    /**
     * Reference to a dialog opened via the MatDialog service.
     * @template T, R
     */

    var MatDialogRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlayRef
       * @param {?} _containerInstance
       * @param {?=} id
       */
      function MatDialogRef(_overlayRef, _containerInstance) {
        var _this5 = this;

        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

        _classCallCheck(this, MatDialogRef);

        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */

        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */

        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */

        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Current state of the dialog.
         */

        this._state = 0
        /* OPEN */
        ; // Pass the id along to the container.

        _containerInstance._id = id; // Emit when opening animation completes

        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'enter';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this5._afterOpened.next();

          _this5._afterOpened.complete();
        }); // Dispose overlay when closing animation is complete


        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'exit';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          clearTimeout(_this5._closeFallbackTimeout);

          _this5._finishDialogClose();
        });

        _overlayRef.detachments().subscribe(
        /**
        * @return {?}
        */
        function () {
          _this5._beforeClosed.next(_this5._result);

          _this5._beforeClosed.complete();

          _this5._afterClosed.next(_this5._result);

          _this5._afterClosed.complete();

          _this5.componentInstance =
          /** @type {?} */
          null;

          _this5._overlayRef.dispose();
        });

        _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !_this5.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          event.preventDefault();

          _this5.close();
        });

        _overlayRef.backdropClick().subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this5.disableClose) {
            _this5._containerInstance._recaptureFocus();
          } else {
            _this5.close();
          }
        });
      }
      /**
       * Close the dialog.
       * @param {?=} dialogResult Optional result to return to the dialog opener.
       * @return {?}
       */


      _createClass(MatDialogRef, [{
        key: "close",
        value: function close(dialogResult) {
          var _this6 = this;

          this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

          this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.phaseName === 'start';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this6._beforeClosed.next(dialogResult);

            _this6._beforeClosed.complete();

            _this6._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.


            _this6._closeFallbackTimeout = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this6._finishDialogClose();
            }, event.totalTime + 100);
          });

          this._containerInstance._startExitAnimation();

          this._state = 1
          /* CLOSING */
          ;
        }
        /**
         * Gets an observable that is notified when the dialog is finished opening.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this._afterOpened.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog is finished closing.
         * @return {?}
         */

      }, {
        key: "afterClosed",
        value: function afterClosed() {
          return this._afterClosed.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog has started closing.
         * @return {?}
         */

      }, {
        key: "beforeClosed",
        value: function beforeClosed() {
          return this._beforeClosed.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay's backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._overlayRef.backdropClick();
        }
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
        /**
         * Updates the dialog's position.
         * @template THIS
         * @this {THIS}
         * @param {?=} position New dialog position.
         * @return {THIS}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition(position) {
          /** @type {?} */
          var strategy =
          /** @type {?} */
          this._getPositionStrategy();

          if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
          } else {
            strategy.centerHorizontally();
          }

          if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
          } else {
            strategy.centerVertically();
          }

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the dialog's width and height.
         * @template THIS
         * @this {THIS}
         * @param {?=} width New width of the dialog.
         * @param {?=} height New height of the dialog.
         * @return {THIS}
         */

      }, {
        key: "updateSize",
        value: function updateSize() {
          var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          /** @type {?} */
          this._getPositionStrategy().width(width).height(height);

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          /** @type {?} */
          this._overlayRef.addPanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          /** @type {?} */
          this._overlayRef.removePanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the current state of the dialog's lifecycle.
         * @return {?}
         */

      }, {
        key: "getState",
        value: function getState() {
          return this._state;
        }
        /**
         * Finishes the dialog close by updating the state of the dialog
         * and disposing the overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_finishDialogClose",
        value: function _finishDialogClose() {
          this._state = 2
          /* CLOSED */
          ;

          this._overlayRef.dispose();
        }
        /**
         * Fetches the position strategy object from the overlay ref.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPositionStrategy",
        value: function _getPositionStrategy() {
          return (
            /** @type {?} */
            this._overlayRef.getConfig().positionStrategy
          );
        }
      }]);

      return MatDialogRef;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to access the data that was passed in to a dialog.
     * @type {?}
     */


    var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
    /**
     * Injection token that can be used to specify default dialog options.
     * @type {?}
     */

    var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
    /**
     * Injection token that determines the scroll handling while the dialog is open.
     * @type {?}
     */

    var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */


    function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_DIALOG_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Service to open Material Design modal dialogs.
     */

    var MatDialog =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _injector
       * @param {?} _location
       * @param {?} _defaultOptions
       * @param {?} scrollStrategy
       * @param {?} _parentDialog
       * @param {?} _overlayContainer
       */
      function MatDialog(_overlay, _injector,
      /**
       * @deprecated `_location` parameter to be removed.
       * @breaking-change 10.0.0
       */
      _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        var _this7 = this;

        _classCallCheck(this, MatDialog);

        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */

        this.afterAllClosed =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(
        /**
        * @return {?}
        */
        function () {
          return _this7.openDialogs.length ? _this7._afterAllClosed : _this7._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Keeps track of the currently-open dialogs.
       * @return {?}
       */


      _createClass(MatDialog, [{
        key: "open",

        /**
         * Opens a modal dialog containing the given component.
         * @template T, D, R
         * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
         *     or a TemplateRef to instantiate as the dialog content.
         * @param {?=} config Extra configuration options.
         * @return {?} Reference to the newly-opened dialog.
         */
        value: function open(componentOrTemplateRef, config) {
          var _this8 = this;

          config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

          if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
          }
          /** @type {?} */


          var overlayRef = this._createOverlay(config);
          /** @type {?} */


          var dialogContainer = this._attachDialogContainer(overlayRef, config);
          /** @type {?} */


          var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


          if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
          }

          this.openDialogs.push(dialogRef);
          dialogRef.afterClosed().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this8._removeOpenDialog(dialogRef);
          });
          this.afterOpened.next(dialogRef);
          return dialogRef;
        }
        /**
         * Closes all of the currently-open dialogs.
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this._closeDialogs(this.openDialogs);
        }
        /**
         * Finds an open dialog by its id.
         * @param {?} id ID to use when looking up the dialog.
         * @return {?}
         */

      }, {
        key: "getDialogById",
        value: function getDialogById(id) {
          return this.openDialogs.find(
          /**
          * @param {?} dialog
          * @return {?}
          */
          function (dialog) {
            return dialog.id === id;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Only close the dialogs at this level on destroy
          // since the parent service may still be active.
          this._closeDialogs(this._openDialogsAtThisLevel);

          this._afterAllClosedAtThisLevel.complete();

          this._afterOpenedAtThisLevel.complete();
        }
        /**
         * Creates the overlay into which the dialog will be loaded.
         * @private
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the OverlayRef for the created overlay.
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = this._getOverlayConfig(config);

          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an overlay config from a dialog config.
         * @private
         * @param {?} dialogConfig The dialog configuration.
         * @return {?} The overlay configuration.
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig(dialogConfig) {
          /** @type {?} */
          var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
          });

          if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
          }

          return state;
        }
        /**
         * Attaches an MatDialogContainer to a dialog's already-created overlay.
         * @private
         * @param {?} overlay Reference to the dialog's underlying overlay.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to a ComponentRef for the attached container.
         */

      }, {
        key: "_attachDialogContainer",
        value: function _attachDialogContainer(overlay, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [{
              provide: MatDialogConfig,
              useValue: config
            }]
          });
          /** @type {?} */


          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
          /** @type {?} */

          var containerRef = overlay.attach(containerPortal);
          return containerRef.instance;
        }
        /**
         * Attaches the user-provided component to the already-created MatDialogContainer.
         * @private
         * @template T, R
         * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
         *     or a TemplateRef to instantiate as the content.
         * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
         * @param {?} overlayRef Reference to the overlay in which the dialog resides.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
         */

      }, {
        key: "_attachDialogContent",
        value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
          // Create a reference to the dialog we're creating in order to give the user a handle
          // to modify and close it.

          /** @type {?} */
          var dialogRef = new MatDialogRef(overlayRef, dialogContainer, config.id);

          if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: config.data,
              dialogRef: dialogRef
            }));
          } else {
            /** @type {?} */
            var injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */


            var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
          }

          dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
          return dialogRef;
        }
        /**
         * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
         * of a dialog to close itself and, optionally, to return a value.
         * @private
         * @template T
         * @param {?} config Config object that is used to construct the dialog.
         * @param {?} dialogRef Reference to the dialog.
         * @param {?} dialogContainer
         * @return {?} The custom injector that can be used inside the dialog.
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, dialogRef, dialogContainer) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
          // content are created out of the same ViewContainerRef and as such, are siblings for injector
          // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
          // added to the injection tokens.

          /** @type {?} */

          var providers = [{
            provide: MatDialogContainer,
            useValue: dialogContainer
          }, {
            provide: MAT_DIALOG_DATA,
            useValue: config.data
          }, {
            provide: MatDialogRef,
            useValue: dialogRef
          }];

          if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
            providers.push({
              provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
              useValue: {
                value: config.direction,
                change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
              }
            });
          }

          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: providers
          });
        }
        /**
         * Removes a dialog from the array of open dialogs.
         * @private
         * @param {?} dialogRef Dialog to be removed.
         * @return {?}
         */

      }, {
        key: "_removeOpenDialog",
        value: function _removeOpenDialog(dialogRef) {
          /** @type {?} */
          var index = this.openDialogs.indexOf(dialogRef);

          if (index > -1) {
            this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.

            if (!this.openDialogs.length) {
              this._ariaHiddenElements.forEach(
              /**
              * @param {?} previousValue
              * @param {?} element
              * @return {?}
              */
              function (previousValue, element) {
                if (previousValue) {
                  element.setAttribute('aria-hidden', previousValue);
                } else {
                  element.removeAttribute('aria-hidden');
                }
              });

              this._ariaHiddenElements.clear();

              this._afterAllClosed.next();
            }
          }
        }
        /**
         * Hides all of the content that isn't an overlay from assistive technology.
         * @private
         * @return {?}
         */

      }, {
        key: "_hideNonDialogContentFromAssistiveTechnology",
        value: function _hideNonDialogContentFromAssistiveTechnology() {
          /** @type {?} */
          var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


          if (overlayContainer.parentElement) {
            /** @type {?} */
            var siblings = overlayContainer.parentElement.children;

            for (var i = siblings.length - 1; i > -1; i--) {
              /** @type {?} */
              var sibling = siblings[i];

              if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                sibling.setAttribute('aria-hidden', 'true');
              }
            }
          }
        }
        /**
         * Closes all of the dialogs in an array.
         * @private
         * @param {?} dialogs
         * @return {?}
         */

      }, {
        key: "_closeDialogs",
        value: function _closeDialogs(dialogs) {
          /** @type {?} */
          var i = dialogs.length;

          while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
          }
        }
      }, {
        key: "openDialogs",
        get: function get() {
          return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        }
        /**
         * Stream that emits when a dialog has been opened.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        get: function get() {
          return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_afterAllClosed",
        get: function get() {
          /** @type {?} */
          var parent = this._parentDialog;
          return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        }
      }]);

      return MatDialog;
    }();

    MatDialog.ɵfac = function MatDialog_Factory(t) {
      return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]));
    };

    MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MatDialog,
      factory: MatDialog.ɵfac
    });
    /** @nocollapse */

    MatDialog.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: MatDialogConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_DIALOG_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_DIALOG_SCROLL_STRATEGY]
        }]
      }, {
        type: MatDialog,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
        }]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatDialogConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_SCROLL_STRATEGY]
          }]
        }, {
          type: MatDialog,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Applies default options to the dialog config.
     * @param {?=} config Config to be modified.
     * @param {?=} defaultOptions Default options provided.
     * @return {?} The new configuration object.
     */


    function _applyConfigDefaults(config, defaultOptions) {
      return Object.assign(Object.assign({}, defaultOptions), config);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-content-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique IDs for dialog elements.
     * @type {?}
     */


    var dialogElementUid = 0;
    /**
     * Button that will close the current dialog.
     */

    var MatDialogClose =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogClose(dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogClose);

        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Default to "button" to prevents accidental form submits.
         */

        this.type = 'button';
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogClose, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

          if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
          }
        }
      }]);

      return MatDialogClose;
    }();

    MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
      return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
    };

    MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler() {
            return ctx.dialogRef.close(ctx.dialogResult);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        type: "type",
        dialogResult: ["mat-dialog-close", "dialogResult"],
        ariaLabel: ["aria-label", "ariaLabel"],
        _matDialogClose: ["matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatDialogClose.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogClose.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['aria-label']
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      dialogResult: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['mat-dialog-close']
      }],
      _matDialogClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matDialogClose']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[mat-dialog-close], [matDialogClose]',
          exportAs: 'matDialogClose',
          host: {
            '(click)': 'dialogRef.close(dialogResult)',
            '[attr.aria-label]': 'ariaLabel || null',
            '[attr.type]': 'type'
          }
        }]
      }], function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dialogResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mat-dialog-close']
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        _matDialogClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matDialogClose']
        }]
      });
    })();

    if (false) {}
    /**
     * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
     */


    var MatDialogTitle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogTitle);

        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = "mat-dialog-title-".concat(dialogElementUid++);
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogTitle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          if (!this._dialogRef) {
            this._dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }

          if (this._dialogRef) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var container = _this9._dialogRef._containerInstance;

              if (container && !container._ariaLabelledBy) {
                container._ariaLabelledBy = _this9.id;
              }
            });
          }
        }
      }]);

      return MatDialogTitle;
    }();

    MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
      return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
    };

    MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-dialog-title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"]
    });
    /** @nocollapse */

    MatDialogTitle.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogTitle.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[mat-dialog-title], [matDialogTitle]',
          exportAs: 'matDialogTitle',
          host: {
            'class': 'mat-dialog-title',
            '[id]': 'id'
          }
        }]
      }], function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Scrollable content container of a dialog.
     */


    var MatDialogContent = function MatDialogContent() {
      _classCallCheck(this, MatDialogContent);
    };

    MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
      return new (t || MatDialogContent)();
    };

    MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-dialog-content"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
          host: {
            'class': 'mat-dialog-content'
          }
        }]
      }], null, null);
    })();
    /**
     * Container for the bottom action buttons in a dialog.
     * Stays fixed to the bottom when scrolling.
     */


    var MatDialogActions = function MatDialogActions() {
      _classCallCheck(this, MatDialogActions);
    };

    MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
      return new (t || MatDialogActions)();
    };

    MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-dialog-actions"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
          host: {
            'class': 'mat-dialog-actions'
          }
        }]
      }], null, null);
    })();
    /**
     * Finds the closest MatDialogRef to an element by looking at the DOM.
     * @param {?} element Element relative to which to look for a dialog.
     * @param {?} openDialogs References to the currently-open dialogs.
     * @return {?}
     */


    function getClosestDialog(element, openDialogs) {
      /** @type {?} */
      var parent = element.nativeElement.parentElement;

      while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
      }

      return parent ? openDialogs.find(
      /**
      * @param {?} dialog
      * @return {?}
      */
      function (dialog) {
        return dialog.id ===
        /** @type {?} */
        parent.id;
      }) : null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/dialog-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDialogModule = function MatDialogModule() {
      _classCallCheck(this, MatDialogModule);
    };

    MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatDialogModule
    });
    MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MatDialogModule_Factory(t) {
        return new (t || MatDialogModule)();
      },
      providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, {
        declarations: function declarations() {
          return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
        },
        imports: function imports() {
          return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
          providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
          entryComponents: [MatDialogContainer]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/dialog/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=dialog.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
    \************************************************************************/

  /*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, matSelectAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function () {
      return MAT_SELECT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
      return MAT_SELECT_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
      return MatSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
      return MatSelectChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
      return MatSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
      return MatSelectTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
      return SELECT_ITEM_HEIGHT_EM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
      return SELECT_MULTIPLE_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
      return SELECT_PANEL_INDENT_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
      return SELECT_PANEL_MAX_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
      return SELECT_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
      return SELECT_PANEL_VIEWPORT_PADDING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
      return matSelectAnimations;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/select-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The following are all the animations for the mat-select component, with each
     * const containing the metadata for one animation.
     *
     * The values below match the implementation of the AngularJS Material mat-select animation.
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["trigger"];
    var _c1 = ["panel"];

    function MatSelect_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
      }
    }

    function MatSelect_span_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue || "\xA0");
      }
    }

    function MatSelect_span_5_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
      }
    }

    function MatSelect_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatSelect_span_5_2_Template, 1, 0, undefined, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
      }
    }

    function MatSelect_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r8._panelDoneAnimatingStream.next($event.toState);
        })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r10._handleKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel");
      }
    }

    var _c2 = [[["mat-select-trigger"]], "*"];
    var _c3 = ["mat-select-trigger", "*"];
    var matSelectAnimations = {
      /**
       * This animation ensures the select's overlay panel animation (transformPanel) is called when
       * closing the select.
       * This is needed due to https://github.com/angular/angular/issues/23302
       */
      transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animateChild"])()], {
        optional: true
      }))]),

      /**
       * This animation transforms the select's overlay panel on and off the page.
       *
       * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
       * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
       * side to ensure the option text correctly overlaps the trigger text.
       *
       * When the panel is removed from the DOM, it simply fades out linearly.
       */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        transform: 'scaleY(0.8)',
        minWidth: '100%',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        // 32px = 2 * 16px padding
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 64px)',
        // 64px = 48px padding on the left + 16px padding on the right
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/select-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an exception to be thrown when attempting to change a select's `multiple` option
     * after initialization.
     * \@docs-private
     * @return {?}
     */

    function getMatSelectDynamicMultipleError() {
      return Error('Cannot change `multiple` mode of select after initialization.');
    }
    /**
     * Returns an exception to be thrown when attempting to assign a non-array value to a select
     * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
     * resetting the value.
     * \@docs-private
     * @return {?}
     */


    function getMatSelectNonArrayValueError() {
      return Error('Value must be an array in multiple-selection mode.');
    }
    /**
     * Returns an exception to be thrown when assigning a non-function value to the comparator
     * used to determine if a value corresponds to an option. Note that whether the function
     * actually takes two values and returns a boolean is not checked.
     * @return {?}
     */


    function getMatSelectNonFunctionValueError() {
      return Error('`compareWith` must be a function.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/select.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * The max height of the select's overlay panel
     * @type {?}
     */

    var SELECT_PANEL_MAX_HEIGHT = 256;
    /**
     * The panel's padding on the x-axis
     * @type {?}
     */

    var SELECT_PANEL_PADDING_X = 16;
    /**
     * The panel's x axis padding if it is indented (e.g. there is an option group).
     * @type {?}
     */

    var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
    /**
     * The height of the select items in `em` units.
     * @type {?}
     */

    var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

    /**
     * Distance between the panel edge and the option text in
     * multi-selection mode.
     *
     * Calculated as:
     * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
     * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
     * The checkbox width is 16px.
     * @type {?}
     */

    var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
    /**
     * The select panel will only "fit" inside the viewport if it is positioned at
     * this value or more away from the viewport boundary.
     * @type {?}
     */

    var SELECT_PANEL_VIEWPORT_PADDING = 8;
    /**
     * Injection token that determines the scroll handling while a select is open.
     * @type {?}
     */

    var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-select-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * Object that can be used to configure the default options for the select module.
     * @record
     */


    function MatSelectConfig() {}

    if (false) {}
    /**
     * Injection token that can be used to provide the default options the select module.
     * @type {?}
     */


    var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_SELECT_CONFIG');
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Change event object that is emitted when the select value has changed.
     */

    var MatSelectChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatSelectChange(source, value) {
      _classCallCheck(this, MatSelectChange);

      this.source = source;
      this.value = value;
    };

    if (false) {} // Boilerplate for applying mixins to MatSelect.

    /**
     * \@docs-private
     */


    var MatSelectBase =
    /**
     * @param {?} _elementRef
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatSelectBase);

      this._elementRef = _elementRef;
      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    if (false) {}
    /** @type {?} */


    var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(MatSelectBase))));
    /**
     * Allows the user to customize the trigger that is displayed when the select has a value.
     */


    var MatSelectTrigger = function MatSelectTrigger() {
      _classCallCheck(this, MatSelectTrigger);
    };

    MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
      return new (t || MatSelectTrigger)();
    };

    MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatSelectTrigger,
      selectors: [["mat-select-trigger"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: 'mat-select-trigger'
        }]
      }], null, null);
    })();

    var MatSelect =
    /*#__PURE__*/
    function (_MatSelectMixinBase2) {
      _inherits(MatSelect, _MatSelectMixinBase2);

      var _super4 = _createSuper(MatSelect);

      /**
       * @param {?} _viewportRuler
       * @param {?} _changeDetectorRef
       * @param {?} _ngZone
       * @param {?} _defaultErrorStateMatcher
       * @param {?} elementRef
       * @param {?} _dir
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _parentFormField
       * @param {?} ngControl
       * @param {?} tabIndex
       * @param {?} scrollStrategyFactory
       * @param {?} _liveAnnouncer
       * @param {?=} defaults
       */
      function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, defaults) {
        var _this10;

        _classCallCheck(this, MatSelect);

        _this10 = _super4.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this10._viewportRuler = _viewportRuler;
        _this10._changeDetectorRef = _changeDetectorRef;
        _this10._ngZone = _ngZone;
        _this10._dir = _dir;
        _this10._parentFormField = _parentFormField;
        _this10.ngControl = ngControl;
        _this10._liveAnnouncer = _liveAnnouncer;
        /**
         * Whether or not the overlay panel is open.
         */

        _this10._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */

        _this10._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */

        _this10._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */

        _this10._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */

        _this10._compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        function (o1, o2) {
          return o1 === o2;
        };
        /**
         * Unique id for this input.
         */


        _this10._uid = "mat-select-".concat(nextUniqueId++);
        /**
         * Emits whenever the component is destroyed.
         */

        _this10._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */

        _this10._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */

        _this10._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when select has been touched`
         */


        _this10._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */


        _this10._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */

        _this10._transformOrigin = 'top';
        /**
         * Emits when the panel element is finished transforming in.
         */

        _this10._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */

        _this10._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */

        _this10._positions = [{
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top'
        }, {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom'
        }];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */

        _this10._disableOptionCentering = false;
        _this10._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */

        _this10.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */

        _this10.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */

        _this10.optionSelectionChanges =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var options = _this10.options;

          if (options) {
            return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(options.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.onSelectionChange;
              })));
            }));
          }

          return _this10._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this10.optionSelectionChanges;
          }));
        });
        /**
         * Event emitted when the select panel has been toggled.
         */

        _this10.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */

        _this10._openedStream = _this10.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        function (o) {
          return o;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        function () {}));
        /**
         * Event emitted when the select has been closed.
         */

        _this10._closedStream = _this10.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        function (o) {
          return !o;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        function () {}));
        /**
         * Event emitted when the selected value has been changed by the user.
         */

        _this10.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this10.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

        if (_this10.ngControl) {
          // Note: we provide the value accessor through here, instead of
          // the `providers` to avoid running into a circular import.
          _this10.ngControl.valueAccessor = _assertThisInitialized(_this10);
        }

        _this10._scrollStrategyFactory = scrollStrategyFactory;
        _this10._scrollStrategy = _this10._scrollStrategyFactory();
        _this10.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

        _this10.id = _this10.id;

        if (defaults) {
          if (defaults.disableOptionCentering != null) {
            _this10.disableOptionCentering = defaults.disableOptionCentering;
          }

          if (defaults.typeaheadDebounceInterval != null) {
            _this10.typeaheadDebounceInterval = defaults.typeaheadDebounceInterval;
          }
        }

        return _this10;
      }
      /**
       * Whether the select is focused.
       * @return {?}
       */


      _createClass(MatSelect, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this11 = this;

          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple);
          this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
          // fire the animation end event twice for the same animation. See:
          // https://github.com/angular/angular/issues/24084

          this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this11.panelOpen) {
              _this11._scrollTop = 0;

              _this11.openedChange.emit(true);
            } else {
              _this11.openedChange.emit(false);

              _this11.overlayDir.offsetX = 0;

              _this11._changeDetectorRef.markForCheck();
            }
          });

          this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this11._panelOpen) {
              _this11._triggerRect = _this11.trigger.nativeElement.getBoundingClientRect();

              _this11._changeDetectorRef.markForCheck();
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this12 = this;

          this._initKeyManager();

          this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.added.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.select();
            });
            event.removed.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.deselect();
            });
          });

          this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this12._resetOptions();

            _this12._initializeSelection();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            this.updateErrorState();
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
          // the parent form field know to run change detection when the disabled state changes.
          if (changes['disabled']) {
            this.stateChanges.next();
          }

          if (changes['typeaheadDebounceInterval'] && this._keyManager) {
            this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy.next();

          this._destroy.complete();

          this.stateChanges.complete();
        }
        /**
         * Toggles the overlay panel open or closed.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.panelOpen ? this.close() : this.open();
        }
        /**
         * Opens the overlay panel.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          var _this13 = this;

          if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
          }

          this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
          // `parseInt` ignores the trailing 'px' and converts this to a number.

          this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
          this._panelOpen = true;

          this._keyManager.withHorizontalOrientation(null);

          this._calculateOverlayPosition();

          this._highlightCorrectOption();

          this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this13._triggerFontSize && _this13.overlayDir.overlayRef && _this13.overlayDir.overlayRef.overlayElement) {
              _this13.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this13._triggerFontSize, "px");
            }
          });
        }
        /**
         * Closes the overlay panel and focuses the host element.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this._panelOpen) {
            this._panelOpen = false;

            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

            this._changeDetectorRef.markForCheck();

            this._onTouched();
          }
        }
        /**
         * Sets the select's value. Part of the ControlValueAccessor interface
         * required to integrate with Angular's core forms API.
         *
         * @param {?} value New value to be written to the model.
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.options) {
            this._setSelectionByValue(value);
          }
        }
        /**
         * Saves a callback function to be invoked when the select's value
         * changes from user input. Part of the ControlValueAccessor interface
         * required to integrate with Angular's core forms API.
         *
         * @param {?} fn Callback to be triggered when the value changes.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Saves a callback function to be invoked when the select is blurred
         * by the user. Part of the ControlValueAccessor interface required
         * to integrate with Angular's core forms API.
         *
         * @param {?} fn Callback to be triggered when the component has been touched.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Disables the select. Part of the ControlValueAccessor interface required
         * to integrate with Angular's core forms API.
         *
         * @param {?} isDisabled Sets whether the component is disabled.
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
        /**
         * Whether or not the overlay panel is open.
         * @return {?}
         */

      }, {
        key: "_isRtl",

        /**
         * Whether the element is in RTL mode.
         * @return {?}
         */
        value: function _isRtl() {
          return this._dir ? this._dir.value === 'rtl' : false;
        }
        /**
         * Handles all keydown events on the select.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
          }
        }
        /**
         * Handles keyboard events while the select is closed.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClosedKeydown",
        value: function _handleClosedKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"];
          /** @type {?} */

          var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"];
          /** @type {?} */

          var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

          if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space

            this.open();
          } else if (!this.multiple) {
            /** @type {?} */
            var previouslySelectedOption = this.selected;

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
              keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
              event.preventDefault();
            } else {
              manager.onKeydown(event);
            }
            /** @type {?} */


            var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

            if (selectedOption && previouslySelectedOption !== selectedOption) {
              // We set a duration on the live announcement, because we want the live element to be
              // cleared after a while so that users can't navigate to it using the arrow keys.
              this._liveAnnouncer.announce(
              /** @type {?} */
              selectedOption.viewValue, 10000);
            }
          }
        }
        /**
         * Handles keyboard events when the selected is open.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleOpenKeydown",
        value: function _handleOpenKeydown(event) {
          /** @type {?} */
          var manager = this._keyManager;
          /** @type {?} */

          var keyCode = event.keyCode;
          /** @type {?} */

          var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
          /** @type {?} */

          var isTyping = manager.isTyping();

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
            event.preventDefault();
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
          } else if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close(); // Don't do anything in this case if the user is typing,
            // because the typing sequence can include the space key.
          } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            event.preventDefault();

            manager.activeItem._selectViaInteraction();
          } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["A"] && event.ctrlKey) {
            event.preventDefault();
            /** @type {?} */

            var hasDeselectedOptions = this.options.some(
            /**
            * @param {?} opt
            * @return {?}
            */
            function (opt) {
              return !opt.disabled && !opt.selected;
            });
            this.options.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              if (!option.disabled) {
                hasDeselectedOptions ? option.select() : option.deselect();
              }
            });
          } else {
            /** @type {?} */
            var previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);

            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
              manager.activeItem._selectViaInteraction();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
          }
        }
        /**
         * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
         * "blur" to the panel when it opens, causing a false positive.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this._focused = false;

          if (!this.disabled && !this.panelOpen) {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
        }
        /**
         * Callback that is invoked when the overlay panel has been attached.
         * @return {?}
         */

      }, {
        key: "_onAttached",
        value: function _onAttached() {
          var _this14 = this;

          this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this14._changeDetectorRef.detectChanges();

            _this14._calculateOverlayOffsetX();

            _this14.panel.nativeElement.scrollTop = _this14._scrollTop;
          });
        }
        /**
         * Returns the theme to be used on the panel.
         * @return {?}
         */

      }, {
        key: "_getPanelTheme",
        value: function _getPanelTheme() {
          return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
        }
        /**
         * Whether the select has a value.
         * @return {?}
         */

      }, {
        key: "_initializeSelection",

        /**
         * @private
         * @return {?}
         */
        value: function _initializeSelection() {
          var _this15 = this;

          // Defer setting the value in order to avoid the "Expression
          // has changed after it was checked" errors from Angular.
          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            _this15._setSelectionByValue(_this15.ngControl ? _this15.ngControl.value : _this15._value);

            _this15.stateChanges.next();
          });
        }
        /**
         * Sets the selected option based on a value. If no option can be
         * found with the designated value, the select trigger is cleared.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this16 = this;

          if (this.multiple && value) {
            if (!Array.isArray(value)) {
              throw getMatSelectNonArrayValueError();
            }

            this._selectionModel.clear();

            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this16._selectValue(currentValue);
            });

            this._sortValues();
          } else {
            this._selectionModel.clear();
            /** @type {?} */


            var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.


            if (correspondingOption) {
              this._keyManager.setActiveItem(correspondingOption);
            } else if (!this.panelOpen) {
              // Otherwise reset the highlighted option. Note that we only want to do this while
              // closed, because doing it while open can shift the user's focus unnecessarily.
              this._keyManager.setActiveItem(-1);
            }
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Finds and selects and option based on its value.
         * @private
         * @param {?} value
         * @return {?} Option that has the corresponding value.
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          var _this17 = this;

          /** @type {?} */
          var correspondingOption = this.options.find(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            try {
              // Treat null as a special reset value.
              return option.value != null && _this17._compareWith(option.value, value);
            } catch (error) {
              if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
                // Notify developers of errors in their comparator.
                console.warn(error);
              }

              return false;
            }
          });

          if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
          }

          return correspondingOption;
        }
        /**
         * Sets up a key manager to listen to keyboard events on the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_initKeyManager",
        value: function _initKeyManager() {
          var _this18 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withAllowedModifierKeys(['shiftKey']);

          this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this18.panelOpen) {
              // Select the active item when tabbing away. This is consistent with how the native
              // select behaves. Note that we only want to do this in single selection mode.
              if (!_this18.multiple && _this18._keyManager.activeItem) {
                _this18._keyManager.activeItem._selectViaInteraction();
              } // Restore focus to the trigger before closing. Ensures that the focus
              // position won't be lost if the user got focus into the overlay.


              _this18.focus();

              _this18.close();
            }
          });

          this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this18._panelOpen && _this18.panel) {
              _this18._scrollActiveOptionIntoView();
            } else if (!_this18._panelOpen && !_this18.multiple && _this18._keyManager.activeItem) {
              _this18._keyManager.activeItem._selectViaInteraction();
            }
          });
        }
        /**
         * Drops current option subscriptions and IDs and resets from scratch.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetOptions",
        value: function _resetOptions() {
          var _this19 = this;

          /** @type {?} */
          var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
          this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this19._onSelect(event.source, event.isUserInput);

            if (event.isUserInput && !_this19.multiple && _this19._panelOpen) {
              _this19.close();

              _this19.focus();
            }
          }); // Listen to changes in the internal state of the options and react accordingly.
          // Handles cases like the labels of the selected options changing.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(this.options.map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option._stateChanges;
          }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this19._changeDetectorRef.markForCheck();

            _this19.stateChanges.next();
          });

          this._setOptionIds();
        }
        /**
         * Invoked when an option is clicked.
         * @private
         * @param {?} option
         * @param {?} isUserInput
         * @return {?}
         */

      }, {
        key: "_onSelect",
        value: function _onSelect(option, isUserInput) {
          /** @type {?} */
          var wasSelected = this._selectionModel.isSelected(option);

          if (option.value == null && !this._multiple) {
            option.deselect();

            this._selectionModel.clear();

            this._propagateChanges(option.value);
          } else {
            if (wasSelected !== option.selected) {
              option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
            }

            if (isUserInput) {
              this._keyManager.setActiveItem(option);
            }

            if (this.multiple) {
              this._sortValues();

              if (isUserInput) {
                // In case the user selected the option with their mouse, we
                // want to restore focus back to the trigger, in order to
                // prevent the select keyboard controls from clashing with
                // the ones from `mat-option`.
                this.focus();
              }
            }
          }

          if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
          }

          this.stateChanges.next();
        }
        /**
         * Sorts the selected values in the selected based on their order in the panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_sortValues",
        value: function _sortValues() {
          var _this20 = this;

          if (this.multiple) {
            /** @type {?} */
            var options = this.options.toArray();

            this._selectionModel.sort(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              return _this20.sortComparator ? _this20.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
            });

            this.stateChanges.next();
          }
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */

      }, {
        key: "_propagateChanges",
        value: function _propagateChanges(fallbackValue) {
          /** @type {?} */
          var valueToEmit = null;

          if (this.multiple) {
            valueToEmit =
            /** @type {?} */
            this.selected.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.value;
            });
          } else {
            valueToEmit = this.selected ?
            /** @type {?} */
            this.selected.value : fallbackValue;
          }

          this._value = valueToEmit;
          this.valueChange.emit(valueToEmit);

          this._onChange(valueToEmit);

          this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Records option IDs to pass to the aria-owns property.
         * @private
         * @return {?}
         */

      }, {
        key: "_setOptionIds",
        value: function _setOptionIds() {
          this._optionIds = this.options.map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option.id;
          }).join(' ');
        }
        /**
         * Highlights the selected item. If no option is selected, it will highlight
         * the first item instead.
         * @private
         * @return {?}
         */

      }, {
        key: "_highlightCorrectOption",
        value: function _highlightCorrectOption() {
          if (this._keyManager) {
            if (this.empty) {
              this._keyManager.setFirstItemActive();
            } else {
              this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
          }
        }
        /**
         * Scrolls the active option into view.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollActiveOptionIntoView",
        value: function _scrollActiveOptionIntoView() {
          /** @type {?} */
          var activeOptionIndex = this._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
          this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
        }
        /**
         * Focuses the select element.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Gets the index of the provided option in the option list.
         * @private
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_getOptionIndex",
        value: function _getOptionIndex(option) {
          return this.options.reduce(
          /**
          * @param {?} result
          * @param {?} current
          * @param {?} index
          * @return {?}
          */
          function (result, current, index) {
            if (result !== undefined) {
              return result;
            }

            return option === current ? index : undefined;
          }, undefined);
        }
        /**
         * Calculates the scroll position and x- and y-offsets of the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateOverlayPosition",
        value: function _calculateOverlayPosition() {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var items = this._getItemCount();
          /** @type {?} */


          var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
          /** @type {?} */

          var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

          /** @type {?} */

          var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

          /** @type {?} */

          var selectedOptionOffset = this.empty ? 0 :
          /** @type {?} */
          this._getOptionIndex(this._selectionModel.selected[0]);
          selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
          // center of the overlay panel rather than the top.

          /** @type {?} */

          var scrollBuffer = panelHeight / 2;
          this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
          this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

          this._checkOverlayWithinViewport(maxScroll);
        }
        /**
         * Calculates the scroll position of the select's overlay panel.
         *
         * Attempts to center the selected option in the panel. If the option is
         * too high or too low in the panel to be scrolled to the center, it clamps the
         * scroll position to the min or max scroll positions respectively.
         * @param {?} selectedIndex
         * @param {?} scrollBuffer
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_calculateOverlayScroll",
        value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionOffsetFromScrollTop = itemHeight * selectedIndex;
          /** @type {?} */

          var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
          // scroll container, then subtracts the scroll buffer to scroll the option down to
          // the center of the overlay panel. Half the option height must be re-added to the
          // scrollTop so the option is centered based on its middle, not its top edge.

          /** @type {?} */

          var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
          return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
        }
        /**
         * Returns the aria-label of the select component.
         * @return {?}
         */

      }, {
        key: "_getAriaLabel",
        value: function _getAriaLabel() {
          // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
          // `aria-labelledby` value by setting the ariaLabel to the placeholder.
          return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
        }
        /**
         * Returns the aria-labelledby of the select component.
         * @return {?}
         */

      }, {
        key: "_getAriaLabelledby",
        value: function _getAriaLabelledby() {
          if (this.ariaLabelledby) {
            return this.ariaLabelledby;
          } // Note: we use `_getAriaLabel` here, because we want to check whether there's a
          // computed label. `this.ariaLabel` is only the user-specified label.


          if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() || this._getAriaLabel()) {
            return null;
          }

          return this._parentFormField._labelId || null;
        }
        /**
         * Determines the `aria-activedescendant` to be set on the host.
         * @return {?}
         */

      }, {
        key: "_getAriaActiveDescendant",
        value: function _getAriaActiveDescendant() {
          if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
          }

          return null;
        }
        /**
         * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text when
         * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
         * can't be calculated until the panel has been attached, because we need to know the
         * content width in order to constrain the panel within the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateOverlayOffsetX",
        value: function _calculateOverlayOffsetX() {
          /** @type {?} */
          var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
          /** @type {?} */

          var viewportSize = this._viewportRuler.getViewportSize();
          /** @type {?} */


          var isRtl = this._isRtl();
          /** @type {?} */


          var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
          /** @type {?} */

          var offsetX; // Adjust the offset, depending on the option padding.

          if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
          } else {
            /** @type {?} */
            var selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
          } // Invert the offset in LTR.


          if (!isRtl) {
            offsetX *= -1;
          } // Determine how much the select overflows on each side.

          /** @type {?} */


          var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
          /** @type {?} */

          var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

          if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
          } else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
          } // Set the offset directly in order to avoid having to go through change detection and
          // potentially triggering "changed after it was checked" errors. Round the value to avoid
          // blurry content in some browsers.


          this.overlayDir.offsetX = Math.round(offsetX);
          this.overlayDir.overlayRef.updatePosition();
        }
        /**
         * Calculates the y-offset of the select's overlay panel in relation to the
         * top start corner of the trigger. It has to be adjusted in order for the
         * selected option to be aligned over the trigger when the panel opens.
         * @private
         * @param {?} selectedIndex
         * @param {?} scrollBuffer
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_calculateOverlayOffsetY",
        value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
          /** @type {?} */

          var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
          /** @type {?} */

          var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

          if (this._disableOptionCentering) {
            return 0;
          }

          if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
          } else if (this._scrollTop === maxScroll) {
            /** @type {?} */
            var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            /** @type {?} */

            var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.

            /** @type {?} */

            var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.

            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
          } else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
          } // The final offset is the option's offset from the top, adjusted for the height difference,
          // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
          // The value is rounded to prevent some browsers from blurring the content.


          return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
        }
        /**
         * Checks that the attempted overlay position will fit within the viewport.
         * If it will not fit, tries to adjust the scroll position and the associated
         * y-offset so the panel can open fully on-screen. If it still won't fit,
         * sets the offset back to 0 to allow the fallback position to take over.
         * @private
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_checkOverlayWithinViewport",
        value: function _checkOverlayWithinViewport(maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var viewportSize = this._viewportRuler.getViewportSize();
          /** @type {?} */


          var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
          /** @type {?} */

          var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
          /** @type {?} */

          var panelHeightTop = Math.abs(this._offsetY);
          /** @type {?} */

          var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
          /** @type {?} */

          var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

          if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
          } else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
          } else {
            this._transformOrigin = this._getOriginBasedOnOption();
          }
        }
        /**
         * Adjusts the overlay panel up to fit in the viewport.
         * @private
         * @param {?} panelHeightBottom
         * @param {?} bottomSpaceAvailable
         * @return {?}
         */

      }, {
        key: "_adjustPanelUp",
        value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
          // Browsers ignore fractional scroll offsets, so we need to round.

          /** @type {?} */
          var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
          // adjusts the offset by that amount to move the panel up into the viewport.

          this._scrollTop -= distanceBelowViewport;
          this._offsetY -= distanceBelowViewport;
          this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
          // by scrolling, so set the offset to 0 to allow the fallback position to take
          // effect.

          if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
          }
        }
        /**
         * Adjusts the overlay panel down to fit in the viewport.
         * @private
         * @param {?} panelHeightTop
         * @param {?} topSpaceAvailable
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_adjustPanelDown",
        value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
          // Browsers ignore fractional scroll offsets, so we need to round.

          /** @type {?} */
          var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
          // adjusts the offset by that amount to move the panel down into the viewport.

          this._scrollTop += distanceAboveViewport;
          this._offsetY += distanceAboveViewport;
          this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
          // panel by scrolling, so set the offset to 0 to allow the fallback position
          // to take effect.

          if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
          }
        }
        /**
         * Sets the transform origin point based on the selected option.
         * @private
         * @return {?}
         */

      }, {
        key: "_getOriginBasedOnOption",
        value: function _getOriginBasedOnOption() {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
          /** @type {?} */

          var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
          return "50% ".concat(originY, "px 0px");
        }
        /**
         * Calculates the amount of items in the select. This includes options and group labels.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemCount",
        value: function _getItemCount() {
          return this.options.length + this.optionGroups.length;
        }
        /**
         * Calculates the height of the select's options.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemHeight",
        value: function _getItemHeight() {
          return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          this.focus();
          this.open();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "focused",
        get: function get() {
          return this._focused || this._panelOpen;
        }
        /**
         * Placeholder to be shown if no value has been selected.
         * @return {?}
         */

      }, {
        key: "placeholder",
        get: function get() {
          return this._placeholder;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._placeholder = value;
          this.stateChanges.next();
        }
        /**
         * Whether the component is required.
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          this.stateChanges.next();
        }
        /**
         * Whether the user should be allowed to select multiple options.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._selectionModel) {
            throw getMatSelectDynamicMultipleError();
          }

          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether to center the active option over the trigger.
         * @return {?}
         */

      }, {
        key: "disableOptionCentering",
        get: function get() {
          return this._disableOptionCentering;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        }
        /**
         * Function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */

      }, {
        key: "compareWith",
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw getMatSelectNonFunctionValueError();
          }

          this._compareWith = fn;

          if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
          }
        }
        /**
         * Value of the select control.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          if (newValue !== this._value) {
            this.writeValue(newValue);
            this._value = newValue;
          }
        }
        /**
         * Time to wait in milliseconds after the last keystroke before moving focus to an item.
         * @return {?}
         */

      }, {
        key: "typeaheadDebounceInterval",
        get: function get() {
          return this._typeaheadDebounceInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
        }
        /**
         * Unique id of the element.
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._id = value || this._uid;
          this.stateChanges.next();
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._panelOpen;
        }
        /**
         * The currently selected option.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        }
        /**
         * The value displayed in the trigger.
         * @return {?}
         */

      }, {
        key: "triggerValue",
        get: function get() {
          if (this.empty) {
            return '';
          }

          if (this._multiple) {
            /** @type {?} */
            var selectedOptions = this._selectionModel.selected.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.viewValue;
            });

            if (this._isRtl()) {
              selectedOptions.reverse();
            } // TODO(crisbeto): delimiter should be configurable for proper localization.


            return selectedOptions.join(', ');
          }

          return this._selectionModel.selected[0].viewValue;
        }
      }, {
        key: "empty",
        get: function get() {
          return !this._selectionModel || this._selectionModel.isEmpty();
        }
      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return this._panelOpen || !this.empty;
        }
      }]);

      return MatSelect;
    }(_MatSelectMixinBase);

    MatSelect.ɵfac = function MatSelect_Factory(t) {
      return new (t || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
    };

    MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatSelect,
      selectors: [["mat-select"]],
      contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatSelectTrigger, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        }
      },
      viewQuery: function MatSelect_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
        }
      },
      hostAttrs: ["role", "listbox", 1, "mat-select"],
      hostVars: 19,
      hostBindings: function MatSelect_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("focus", function MatSelect_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSelect_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-label", ctx._getAriaLabel())("aria-labelledby", ctx._getAriaLabelledby())("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-owns", ctx.panelOpen ? ctx._optionIds : null)("aria-multiselectable", ctx.multiple)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty);
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        tabIndex: "tabIndex",
        ariaLabel: ["aria-label", "ariaLabel"],
        id: "id",
        disableOptionCentering: "disableOptionCentering",
        typeaheadDebounceInterval: "typeaheadDebounceInterval",
        placeholder: "placeholder",
        required: "required",
        multiple: "multiple",
        compareWith: "compareWith",
        value: "value",
        panelClass: "panelClass",
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        errorStateMatcher: "errorStateMatcher",
        sortComparator: "sortComparator"
      },
      outputs: {
        openedChange: "openedChange",
        _openedStream: "opened",
        _closedStream: "closed",
        selectionChange: "selectionChange",
        valueChange: "valueChange"
      },
      exportAs: ["matSelect"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatSelect
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 9,
      consts: [["cdk-overlay-origin", "", "aria-hidden", "true", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder"], [1, "mat-select-value-text", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-panel-wrap"], [3, "ngClass", "keydown"], ["panel", ""]],
      template: function MatSelect_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 11, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
            return ctx.close();
          })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
            return ctx._onAttached();
          })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
            return ctx.close();
          });
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
        }
      },
      directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],
      encapsulation: 2,
      data: {
        animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatSelect.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_SELECT_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_SELECT_CONFIG]
        }]
      }];
    };

    MatSelect.propDecorators = {
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['trigger']
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['panel']
      }],
      overlayDir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
          descendants: true
        }]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      customTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [MatSelectTrigger]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      disableOptionCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['aria-labelledby']
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      typeaheadDebounceInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      sortComparator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      openedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      _openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
        args: ['opened']
      }],
      _closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
        args: ['closed']
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mat-select',
          exportAs: 'matSelect',
          template: "<div cdk-overlay-origin\n     class=\"mat-select-trigger\"\n     aria-hidden=\"true\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\">\n    <span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\\u00A0'}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span *ngSwitchDefault>{{triggerValue || '\\u00A0'}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      [attr.id]=\"id + '-panel'\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
          inputs: ['disabled', 'disableRipple', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          host: {
            'role': 'listbox',
            '[attr.id]': 'id',
            '[attr.tabindex]': 'tabIndex',
            '[attr.aria-label]': '_getAriaLabel()',
            '[attr.aria-labelledby]': '_getAriaLabelledby()',
            '[attr.aria-required]': 'required.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-invalid]': 'errorState',
            '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
            '[attr.aria-multiselectable]': 'multiple',
            '[attr.aria-describedby]': '_ariaDescribedby || null',
            '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
            '[class.mat-select-disabled]': 'disabled',
            '[class.mat-select-invalid]': 'errorState',
            '[class.mat-select-required]': 'required',
            '[class.mat-select-empty]': 'empty',
            'class': 'mat-select',
            '(keydown)': '_handleKeydown($event)',
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()'
          },
          animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
            useExisting: MatSelect
          }, {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
            useExisting: MatSelect
          }],
          styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_CONFIG]
          }]
        }];
      }, {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        _openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['opened']
        }],
        _closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['closed']
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disableOptionCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        typeaheadDebounceInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['trigger']
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        overlayDir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
            descendants: true
          }]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        customTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatSelectTrigger]
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-labelledby']
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        sortComparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/select-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSelectModule = function MatSelectModule() {
      _classCallCheck(this, MatSelectModule);
    };

    MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatSelectModule
    });
    MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MatSelectModule_Factory(t) {
        return new (t || MatSelectModule)();
      },
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatSelectModule, {
        declarations: function declarations() {
          return [MatSelect, MatSelectTrigger];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          declarations: [MatSelect, MatSelectTrigger],
          providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=select.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
    \************************************************************************/

  /*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SliderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
      return MAT_SLIDER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
      return MatSlider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
      return MatSliderChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
      return MatSliderModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/slider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["sliderWrapper"];
    var activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
     * the default separation we chose.
     * @type {?}
     */

    var MIN_AUTO_TICK_SEPARATION = 30;
    /**
     * The thumb gap size for a disabled slider.
     * @type {?}
     */

    var DISABLED_THUMB_GAP = 7;
    /**
     * The thumb gap size for a non-active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
    /**
     * The thumb gap size for an active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
    /**
     * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)] and [formControl].
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlider;
      }),
      multi: true
    };
    /**
     * A simple change event emitted by the MatSlider component.
     */

    var MatSliderChange = function MatSliderChange() {
      _classCallCheck(this, MatSliderChange);
    };

    if (false) {} // Boilerplate for applying mixins to MatSlider.

    /**
     * \@docs-private
     */


    var MatSliderBase =
    /**
     * @param {?} _elementRef
     */
    function MatSliderBase(_elementRef) {
      _classCallCheck(this, MatSliderBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
    /**
     * Allows users to select from a range of values by moving the slider thumb. It is similar in
     * behavior to the native `<input type="range">` element.
     */


    var MatSlider =
    /*#__PURE__*/
    function (_MatSliderMixinBase2) {
      _inherits(MatSlider, _MatSliderMixinBase2);

      var _super5 = _createSuper(MatSlider);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} tabIndex
       * @param {?=} _animationMode
       * @param {?=} _ngZone
       * @param {?=} document
       */
      function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _animationMode, _ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this21;

        _classCallCheck(this, MatSlider);

        _this21 = _super5.call(this, elementRef);
        _this21._focusMonitor = _focusMonitor;
        _this21._changeDetectorRef = _changeDetectorRef;
        _this21._dir = _dir;
        _this21._animationMode = _animationMode;
        _this21._ngZone = _ngZone;
        _this21._invert = false;
        _this21._max = 100;
        _this21._min = 0;
        _this21._step = 1;
        _this21._thumbLabel = false;
        _this21._tickInterval = 0;
        _this21._value = null;
        _this21._vertical = false;
        /**
         * Event emitted when the slider value has changed.
         */

        _this21.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the slider thumb moves.
         */

        _this21.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this21.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */

        _this21.onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this21._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */

        _this21._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */

        _this21._isActive = false;
        /**
         * The size of a tick interval as a percentage of the size of the track.
         */

        _this21._tickIntervalPercent = 0;
        /**
         * The dimensions of the slider.
         */

        _this21._sliderDimensions = null;

        _this21._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Subscription to the Directionality change EventEmitter.
         */


        _this21._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /**
         * Called when the user has put their pointer down on the slider.
         */

        _this21._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Don't do anything if the slider is disabled or the
          // user is using anything other than the main mouse button.
          if (_this21.disabled || _this21._isSliding || !isTouchEvent(event) && event.button !== 0) {
            return;
          }

          _this21._runInsideZone(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var oldValue = _this21.value;
            /** @type {?} */

            var pointerPosition = getPointerPositionOnPage(event);
            _this21._isSliding = true;
            _this21._lastPointerEvent = event;
            event.preventDefault();

            _this21._focusHostElement();

            _this21._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


            _this21._bindGlobalEvents(event);

            _this21._focusHostElement();

            _this21._updateValueFromPosition(pointerPosition);

            _this21._valueOnSlideStart = _this21.value;
            _this21._pointerPositionOnStart = pointerPosition; // Emit a change and input event if the value changed.

            if (oldValue != _this21.value) {
              _this21._emitInputEvent();

              _this21._emitChangeEvent();
            }
          });
        };
        /**
         * Called when the user has moved their pointer after
         * starting to drag. Bound on the document level.
         */


        _this21._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this21._isSliding) {
            // Prevent the slide from selecting anything else.
            event.preventDefault();
            /** @type {?} */

            var oldValue = _this21.value;
            _this21._lastPointerEvent = event;

            _this21._updateValueFromPosition(getPointerPositionOnPage(event)); // Native range elements always emit `input` events when the value changed while sliding.


            if (oldValue != _this21.value) {
              _this21._emitInputEvent();
            }
          }
        };
        /**
         * Called when the user has lifted their pointer. Bound on the document level.
         */


        _this21._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this21._isSliding) {
            /** @type {?} */
            var pointerPositionOnStart = _this21._pointerPositionOnStart;
            /** @type {?} */

            var currentPointerPosition = getPointerPositionOnPage(event);
            event.preventDefault();

            _this21._removeGlobalEvents();

            _this21._valueOnSlideStart = _this21._pointerPositionOnStart = _this21._lastPointerEvent = null;
            _this21._isSliding = false;

            if (_this21._valueOnSlideStart != _this21.value && !_this21.disabled && pointerPositionOnStart && (pointerPositionOnStart.x !== currentPointerPosition.x || pointerPositionOnStart.y !== currentPointerPosition.y)) {
              _this21._emitChangeEvent();
            }
          }
        };
        /**
         * Called when the window has lost focus.
         */


        _this21._windowBlur =
        /**
        * @return {?}
        */
        function () {
          // If the window is blurred while dragging we need to stop dragging because the
          // browser won't dispatch the `mouseup` and `touchend` events anymore.
          if (_this21._lastPointerEvent) {
            _this21._pointerUp(_this21._lastPointerEvent);
          }
        };

        _this21._document = document;
        _this21.tabIndex = parseInt(tabIndex) || 0;

        _this21._runOutsizeZone(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var element = elementRef.nativeElement;
          element.addEventListener('mousedown', _this21._pointerDown, activeEventOptions);
          element.addEventListener('touchstart', _this21._pointerDown, activeEventOptions);
        });

        return _this21;
      }
      /**
       * Whether the slider is inverted.
       * @return {?}
       */


      _createClass(MatSlider, [{
        key: "focus",

        /**
         * set focus to the host element
         * @param {?=} options
         * @return {?}
         */
        value: function focus(options) {
          this._focusHostElement(options);
        }
        /**
         * blur the host element
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this._blurHostElement();
        }
        /**
         * The percentage of the slider that coincides with the value.
         * @return {?}
         */

      }, {
        key: "_shouldInvertMouseCoords",

        /**
         * Whether mouse events should be converted to a slider position by calculating their distance
         * from the right or bottom edge of the slider as opposed to the top or left.
         * @return {?}
         */
        value: function _shouldInvertMouseCoords() {
          return this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
        }
        /**
         * The language direction for this slider element.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDirection",
        value: function _getDirection() {
          return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} origin
          * @return {?}
          */
          function (origin) {
            _this22._isActive = !!origin && origin !== 'keyboard';

            _this22._changeDetectorRef.detectChanges();
          });

          if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this22._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
          element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
          this._lastPointerEvent = null;

          this._removeGlobalEvents();

          this._focusMonitor.stopMonitoring(this._elementRef);

          this._dirChangeSubscription.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onMouseenter",
        value: function _onMouseenter() {
          if (this.disabled) {
            return;
          } // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.


          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.
          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.onTouched();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
            return;
          }
          /** @type {?} */


          var oldValue = this.value;

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
              this._increment(10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
              this._increment(-10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
              this.value = this.max;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
              this.value = this.min;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
              // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
              // inverted slider the thumb moves in that direction. However for a blind user, nothing
              // about the slider indicates that it is inverted. They will expect left to be decrement,
              // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
              // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
              // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
              // sighted users, therefore we do not swap the meaning.
              this._increment(this._getDirection() == 'rtl' ? 1 : -1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
              this._increment(1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
              // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
              this._increment(this._getDirection() == 'rtl' ? -1 : 1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
              this._increment(-1);

              break;

            default:
              // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
              // it.
              return;
          }

          if (oldValue != this.value) {
            this._emitInputEvent();

            this._emitChangeEvent();
          }

          this._isSliding = true;
          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onKeyup",
        value: function _onKeyup() {
          this._isSliding = false;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          var _a;

          return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
        }
        /**
         * Binds our global move and end events. They're bound at the document level and only while
         * dragging so that the user doesn't have to keep their pointer exactly over the slider
         * as they're swiping across the screen.
         * @private
         * @param {?} triggerEvent
         * @return {?}
         */

      }, {
        key: "_bindGlobalEvents",
        value: function _bindGlobalEvents(triggerEvent) {
          // Note that we bind the events to the `document`, because it allows us to capture
          // drag cancel events where the user's pointer is outside the browser window.

          /** @type {?} */
          var document = this._document;

          if (typeof document !== 'undefined' && document) {
            /** @type {?} */
            var isTouch = isTouchEvent(triggerEvent);
            /** @type {?} */

            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var endEventName = isTouch ? 'touchend' : 'mouseup';
            document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }
          }
          /** @type {?} */


          var window = this._getWindow();

          if (typeof window !== 'undefined' && window) {
            window.addEventListener('blur', this._windowBlur);
          }
        }
        /**
         * Removes any global event listeners that we may have added.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalEvents",
        value: function _removeGlobalEvents() {
          /** @type {?} */
          var document = this._document;

          if (typeof document !== 'undefined' && document) {
            document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);
          }
          /** @type {?} */


          var window = this._getWindow();

          if (typeof window !== 'undefined' && window) {
            window.removeEventListener('blur', this._windowBlur);
          }
        }
        /**
         * Increments the slider by the given number of steps (negative number decrements).
         * @private
         * @param {?} numSteps
         * @return {?}
         */

      }, {
        key: "_increment",
        value: function _increment(numSteps) {
          this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
        }
        /**
         * Calculate the new value from the new physical location. The value will always be snapped.
         * @private
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_updateValueFromPosition",
        value: function _updateValueFromPosition(pos) {
          if (!this._sliderDimensions) {
            return;
          }
          /** @type {?} */


          var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
          /** @type {?} */

          var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
          /** @type {?} */

          var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

          /** @type {?} */

          var percent = this._clamp((posComponent - offset) / size);

          if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
          } // Since the steps may not divide cleanly into the max value, if the user
          // slid to 0 or 100 percent, we jump to the min/max value. This approach
          // is slightly more intuitive than using `Math.ceil` below, because it
          // follows the user's pointer closer.


          if (percent === 0) {
            this.value = this.min;
          } else if (percent === 1) {
            this.value = this.max;
          } else {
            /** @type {?} */
            var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.

            /** @type {?} */


            var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

            this.value = this._clamp(closestValue, this.min, this.max);
          }
        }
        /**
         * Emits a change event if the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._controlValueAccessorChangeFn(this.value);

          this.valueChange.emit(this.value);
          this.change.emit(this._createChangeEvent());
        }
        /**
         * Emits an input event when the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitInputEvent",
        value: function _emitInputEvent() {
          this.input.emit(this._createChangeEvent());
        }
        /**
         * Updates the amount of space between ticks as a percentage of the width of the slider.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTickIntervalPercent",
        value: function _updateTickIntervalPercent() {
          if (!this.tickInterval || !this._sliderDimensions) {
            return;
          }

          if (this.tickInterval == 'auto') {
            /** @type {?} */
            var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            /** @type {?} */

            var pixelsPerStep = trackSize * this.step / (this.max - this.min);
            /** @type {?} */

            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            /** @type {?} */

            var pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
          } else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
          }
        }
        /**
         * Creates a slider change object from the specified value.
         * @private
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

          /** @type {?} */
          var event = new MatSliderChange();
          event.source = this;
          event.value = value;
          return event;
        }
        /**
         * Calculates the percentage of the slider that a value is.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_calculatePercentage",
        value: function _calculatePercentage(value) {
          return ((value || 0) - this.min) / (this.max - this.min);
        }
        /**
         * Calculates the value a percentage of the slider corresponds to.
         * @private
         * @param {?} percentage
         * @return {?}
         */

      }, {
        key: "_calculateValue",
        value: function _calculateValue(percentage) {
          return this.min + percentage * (this.max - this.min);
        }
        /**
         * Return a number between two numbers.
         * @private
         * @param {?} value
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */

      }, {
        key: "_clamp",
        value: function _clamp(value) {
          var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return Math.max(min, Math.min(value, max));
        }
        /**
         * Get the bounding client rect of the slider track element.
         * The track is used rather than the native element to ignore the extra space that the thumb can
         * take up.
         * @private
         * @return {?}
         */

      }, {
        key: "_getSliderDimensions",
        value: function _getSliderDimensions() {
          return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
        }
        /**
         * Focuses the native element.
         * Currently only used to allow a blur event to fire but will be used with keyboard input later.
         * @private
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "_focusHostElement",
        value: function _focusHostElement(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Blurs the native element.
         * @private
         * @return {?}
         */

      }, {
        key: "_blurHostElement",
        value: function _blurHostElement() {
          this._elementRef.nativeElement.blur();
        }
        /**
         * Runs a callback inside of the NgZone, if possible.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_runInsideZone",
        value: function _runInsideZone(fn) {
          // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
          this._ngZone ? this._ngZone.run(fn) : fn();
        }
        /**
         * Runs a callback outside of the NgZone, if possible.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_runOutsizeZone",
        value: function _runOutsizeZone(fn) {
          // @breaking-change 9.0.0 Remove this function once `_ngZone` is a required parameter.
          this._ngZone ? this._ngZone.runOutsideAngular(fn) : fn();
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
        /**
         * Registers a callback to be triggered when the value has changed.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        }
        /**
         * Registers a callback to be triggered when the component is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets whether the component should be disabled.
         * Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "invert",
        get: function get() {
          return this._invert;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The maximum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The minimum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

          if (this._value === null) {
            this.value = this._min;
          }

          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The values at which the thumb will snap.
         * @return {?}
         */

      }, {
        key: "step",
        get: function get() {
          return this._step;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);

          if (this._step % 1 !== 0) {
            this._roundToDecimal =
            /** @type {?} */
            this._step.toString().split('.').pop().length;
          } // Since this could modify the label, we need to notify the change detection.


          this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether or not to show the thumb label.
         * @return {?}
         */

      }, {
        key: "thumbLabel",
        get: function get() {
          return this._thumbLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */

      }, {
        key: "tickInterval",
        get: function get() {
          return this._tickInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value === 'auto') {
            this._tickInterval = 'auto';
          } else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value,
            /** @type {?} */
            this._tickInterval);
          } else {
            this._tickInterval = 0;
          }
        }
        /**
         * Value of the slider.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          // If the value needs to be read and it is still uninitialized, initialize it to the min.
          if (this._value === null) {
            this.value = this._min;
          }

          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          if (v !== this._value) {
            /** @type {?} */
            var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
            // Truncate it to ensure that it matches the label and to make it easier to work with.

            if (this._roundToDecimal) {
              value = parseFloat(value.toFixed(this._roundToDecimal));
            }

            this._value = value;
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the slider is vertical.
         * @return {?}
         */

      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The value to be used for display purposes.
         * @return {?}
         */

      }, {
        key: "displayValue",
        get: function get() {
          if (this.displayWith) {
            // Value is never null but since setters and getters cannot have
            // different types, the value getter is also typed to return null.
            return this.displayWith(
            /** @type {?} */
            this.value);
          } // Note that this could be improved further by rounding something like 0.999 to 1 or
          // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
          // every change detection cycle.


          if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundToDecimal);
          }

          return this.value || 0;
        }
      }, {
        key: "percent",
        get: function get() {
          return this._clamp(this._percent);
        }
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         * @return {?}
         */

      }, {
        key: "_invertAxis",
        get: function get() {
          // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
          // top. However from a y-axis standpoint this is inverted.
          return this.vertical ? !this.invert : this.invert;
        }
        /**
         * Whether the slider is at its minimum value.
         * @return {?}
         */

      }, {
        key: "_isMinValue",
        get: function get() {
          return this.percent === 0;
        }
        /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         * @return {?}
         */

      }, {
        key: "_thumbGap",
        get: function get() {
          if (this.disabled) {
            return DISABLED_THUMB_GAP;
          }

          if (this._isMinValue && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
          }

          return 0;
        }
        /**
         * CSS styles for the track background element.
         * @return {?}
         */

      }, {
        key: "_trackBackgroundStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '-' : '';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")")
          };
        }
        /**
         * CSS styles for the track fill element.
         * @return {?}
         */

      }, {
        key: "_trackFillStyles",
        get: function get() {
          /** @type {?} */
          var percent = this.percent;
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '' : '-';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")"),
            // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
            // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
            // the value of the slider is 0, we can easily get into this situation. We force a
            // recalculation by changing the element's `display` when it goes from 0 to any other value.
            display: percent === 0 ? 'none' : ''
          };
        }
        /**
         * CSS styles for the ticks container element.
         * @return {?}
         */

      }, {
        key: "_ticksContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
          /** @type {?} */

          var offset = this._tickIntervalPercent / 2 * 100;
          return {
            'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
          };
        }
        /**
         * CSS styles for the ticks element.
         * @return {?}
         */

      }, {
        key: "_ticksStyles",
        get: function get() {
          /** @type {?} */
          var tickSize = this._tickIntervalPercent * 100;
          /** @type {?} */

          var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
          // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
          // ticks 180 degrees so we're really cutting off the end edge abd not the start.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
          /** @type {?} */

          var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
          /** @type {?} */

          var styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
          };

          if (this._isMinValue && this._thumbGap) {
            /** @type {?} */
            var side;

            if (this.vertical) {
              side = this._invertAxis ? 'Bottom' : 'Top';
            } else {
              side = this._invertAxis ? 'Right' : 'Left';
            }

            styles["padding".concat(side)] = "".concat(this._thumbGap, "px");
          }

          return styles;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_thumbContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
          /** @type {?} */

          var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
          return {
            'transform': "translate".concat(axis, "(-").concat(offset, "%)")
          };
        }
      }]);

      return MatSlider;
    }(_MatSliderMixinBase);

    MatSlider.ɵfac = function MatSlider_Factory(t) {
      return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8));
    };

    MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSlider,
      selectors: [["mat-slider"]],
      viewQuery: function MatSlider_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
        }
      },
      hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
      hostVars: 28,
      hostBindings: function MatSlider_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSlider_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
            return ctx._onKeydown($event);
          })("keyup", function MatSlider_keyup_HostBindingHandler() {
            return ctx._onKeyup();
          })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
            return ctx._onMouseenter();
          })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
            return $event.preventDefault();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._invertAxis)("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue)("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue && ctx._thumbGap && ctx._invertAxis)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        color: "color",
        tabIndex: "tabIndex",
        invert: "invert",
        max: "max",
        min: "min",
        value: "value",
        step: "step",
        thumbLabel: "thumbLabel",
        tickInterval: "tickInterval",
        vertical: "vertical",
        displayWith: "displayWith"
      },
      outputs: {
        change: "change",
        input: "input",
        valueChange: "valueChange"
      },
      exportAs: ["matSlider"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 6,
      consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
      template: function MatSlider_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackBackgroundStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackFillStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksContainerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._thumbContainerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]],
      styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatSlider.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };

    MatSlider.propDecorators = {
      invert: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      step: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      thumbLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      tickInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      input: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _sliderWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['sliderWrapper']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-slider',
          exportAs: 'matSlider',
          providers: [MAT_SLIDER_VALUE_ACCESSOR],
          host: {
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()',
            '(keydown)': '_onKeydown($event)',
            '(keyup)': '_onKeyup()',
            '(mouseenter)': '_onMouseenter()',
            // On Safari starting to slide temporarily triggers text selection mode which
            // show the wrong cursor. We prevent it by stopping the `selectstart` event.
            '(selectstart)': '$event.preventDefault()',
            'class': 'mat-slider mat-focus-indicator',
            'role': 'slider',
            '[tabIndex]': 'tabIndex',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-slider-disabled]': 'disabled',
            '[class.mat-slider-has-ticks]': 'tickInterval',
            '[class.mat-slider-horizontal]': '!vertical',
            '[class.mat-slider-axis-inverted]': '_invertAxis',
            // Class binding which is only used by the test harness as there is no other
            // way for the harness to detect if mouse coordinates need to be inverted.
            '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
            '[class.mat-slider-sliding]': '_isSliding',
            '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
            '[class.mat-slider-vertical]': 'vertical',
            '[class.mat-slider-min-value]': '_isMinValue',
            '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_trackBackgroundStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
          inputs: ['disabled', 'color', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        invert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumbLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tickInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _sliderWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sliderWrapper']
        }]
      });
    })();

    if (false) {}
    /**
     * Returns whether an event is a touch event.
     * @param {?} event
     * @return {?}
     */


    function isTouchEvent(event) {
      // This function is called for every pixel that the user has dragged so we need it to be
      // as fast as possible. Since we only bind mouse events and touch events, we can assume
      // that if the event's name starts with `t`, it's a touch event.
      return event.type[0] === 't';
    }
    /**
     * Gets the coordinates of a touch or mouse event relative to the viewport.
     * @param {?} event
     * @return {?}
     */


    function getPointerPositionOnPage(event) {
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

      /** @type {?} */
      var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
      return {
        x: point.clientX,
        y: point.clientY
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/slider-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSliderModule = function MatSliderModule() {
      _classCallCheck(this, MatSliderModule);
    };

    MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSliderModule
    });
    MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatSliderModule_Factory(t) {
        return new (t || MatSliderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, {
        declarations: function declarations() {
          return [MatSlider];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatSlider]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slider/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=slider.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~form-forms-module~menuitems-menuitems-module-es5.js.map