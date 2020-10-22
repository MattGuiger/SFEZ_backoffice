(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~component-component-module~sample-pages-sample-pages-module"],{

/***/ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js ***!
  \*********************************************************************************/
/*! exports provided: NotifierConfig, NotifierConfigToken, NotifierContainerComponent, NotifierModule, NotifierNotificationComponent, NotifierOptionsToken, NotifierService, notifierCustomConfigFactory, notifierDefaultConfigFactory, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfig", function() { return NotifierConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfigToken", function() { return NotifierConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierContainerComponent", function() { return NotifierContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierModule", function() { return NotifierModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierNotificationComponent", function() { return NotifierNotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierOptionsToken", function() { return NotifierOptionsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return NotifierService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierCustomConfigFactory", function() { return notifierCustomConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierDefaultConfigFactory", function() { return notifierDefaultConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NotifierQueueService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NotifierTimerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NotifierAnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notification
 *
 * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
 */



function NotifierContainerComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "notifier-notification", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function NotifierContainerComponent_li_1_Template_notifier_notification_ready_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onNotificationReady($event); })("dismiss", function NotifierContainerComponent_li_1_Template_notifier_notification_dismiss_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onNotificationDismiss($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notification", notification_r1);
} }
const _c0 = function (a0) { return { notification: a0 }; };
function NotifierNotificationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.notification.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.notification));
} }
function NotifierNotificationComponent_ng_template_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotifierNotificationComponent_ng_template_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onClickDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotifierNotificationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotifierNotificationComponent_ng_template_1_button_2_Template, 3, 0, "button", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notification.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.config.behaviour.showDismissButton);
} }
class NotifierNotification {
    /**
     * Constructor
     *
     * @param {?} options Notifier options
     */
    constructor(options) {
        /**
         * The template to customize
         * the appearance of the notification
         */
        this.template = null;
        Object.assign(this, options);
        // If not set manually, we have to create a unique notification ID by ourselves. The ID generation relies on the current browser
        // datetime in ms, in praticular the moment this notification gets constructed. Concurrency, and thus two IDs being the exact same,
        // is not possible due to the action queue concept.
        if (options.id === undefined) {
            this.id = `ID_${new Date().getTime()}`;
        }
    }
}
if (false) {}
/**
 * Notifiction options
 *
 * This interface describes which information are needed to create a new notification, or in other words, which information the external API
 * call must provide.
 * @record
 */
function NotifierNotificationOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier queue service
 *
 * In general, API calls don't get processed right away. Instead, we have to queue them up in order to prevent simultanious API calls
 * interfering with each other. This, at least in theory, is possible at any time. In particular, animations - which potentially overlap -
 * can cause changes in JS classes as well as affect the DOM. Therefore, the queue service takes all actions, puts them in a queue, and
 * processes them at the right time (which is when the previous action has been processed successfully).
 *
 * Technical sidenote:
 * An action looks pretty similar to the ones within the Flux / Redux pattern.
 */
class NotifierQueueService {
    /**
     * Constructor
     */
    constructor() {
        this.actionStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.actionQueue = [];
        this.isActionInProgress = false;
    }
    /**
     * Push a new action to the queue, and try to run it
     *
     * @param {?} action Action object
     * @return {?}
     */
    push(action) {
        this.actionQueue.push(action);
        this.tryToRunNextAction();
    }
    /**
     * Continue with the next action (called when the current action is finished)
     * @return {?}
     */
    continue() {
        this.isActionInProgress = false;
        this.tryToRunNextAction();
    }
    /**
     * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
     * @private
     * @return {?}
     */
    tryToRunNextAction() {
        if (this.isActionInProgress || this.actionQueue.length === 0) {
            return; // Skip (the queue can now go drink a coffee as it has nothing to do anymore)
        }
        this.isActionInProgress = true;
        this.actionStream.next(this.actionQueue.shift()); // Push next action to the stream, and remove the current action from the queue
    }
}
NotifierQueueService.ɵfac = function NotifierQueueService_Factory(t) { return new (t || NotifierQueueService)(); };
NotifierQueueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifierQueueService, factory: NotifierQueueService.ɵfac });
/** @nocollapse */
NotifierQueueService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierQueueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier options
 * @record
 */
function NotifierOptions() { }
if (false) {}
/**
 * Notifier configuration
 *
 * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
 * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
 * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
 */
class NotifierConfig {
    /**
     * Constructor
     *
     * @param {?=} customOptions
     */
    constructor(customOptions = {}) {
        // Set default values
        this.animations = {
            enabled: true,
            hide: {
                easing: 'ease',
                offset: 50,
                preset: 'fade',
                speed: 300
            },
            overlap: 150,
            shift: {
                easing: 'ease',
                speed: 300
            },
            show: {
                easing: 'ease',
                preset: 'slide',
                speed: 300
            }
        };
        this.behaviour = {
            autoHide: 7000,
            onClick: false,
            onMouseover: 'pauseAutoHide',
            showDismissButton: true,
            stacking: 4
        };
        this.position = {
            horizontal: {
                distance: 12,
                position: 'left'
            },
            vertical: {
                distance: 12,
                gap: 10,
                position: 'bottom'
            }
        };
        this.theme = 'material';
        // The following merges the custom options into the notifier config, respecting the already set default values
        // This linear, more explicit and code-sizy workflow is preferred here over a recursive one (because we know the object structure)
        // Technical sidenote: Objects are merged, other types of values simply overwritten / copied
        if (customOptions.theme !== undefined) {
            this.theme = customOptions.theme;
        }
        if (customOptions.animations !== undefined) {
            if (customOptions.animations.enabled !== undefined) {
                this.animations.enabled = customOptions.animations.enabled;
            }
            if (customOptions.animations.overlap !== undefined) {
                this.animations.overlap = customOptions.animations.overlap;
            }
            if (customOptions.animations.hide !== undefined) {
                Object.assign(this.animations.hide, customOptions.animations.hide);
            }
            if (customOptions.animations.shift !== undefined) {
                Object.assign(this.animations.shift, customOptions.animations.shift);
            }
            if (customOptions.animations.show !== undefined) {
                Object.assign(this.animations.show, customOptions.animations.show);
            }
        }
        if (customOptions.behaviour !== undefined) {
            Object.assign(this.behaviour, customOptions.behaviour);
        }
        if (customOptions.position !== undefined) {
            if (customOptions.position.horizontal !== undefined) {
                Object.assign(this.position.horizontal, customOptions.position.horizontal);
            }
            if (customOptions.position.vertical !== undefined) {
                Object.assign(this.position.vertical, customOptions.position.vertical);
            }
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable variable-name
/**
 * Injection Token for notifier options
 * @type {?}
 */
const NotifierOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[angular-notifier] Notifier Options');
/**
 * Injection Token for notifier configuration
 * @type {?}
 */
const NotifierConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[anuglar-notifier] Notifier Config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier service
 *
 * This service provides access to the public notifier API. Once injected into a component, directive, pipe, service, or any other building
 * block of an applications, it can be used to show new notifications, and hide existing ones. Internally, it transforms API calls into
 * actions, which then get thrown into the action queue - eventually being processed at the right moment.
 */
class NotifierService {
    /**
     * Constructor
     *
     * @param {?} notifierQueueService Notifier queue service
     * @param {?} config               Notifier configuration, optionally injected as a dependency
     */
    constructor(notifierQueueService, config) {
        this.queueService = notifierQueueService;
        this.config = config;
    }
    /**
     * Get the notifier configuration
     *
     * @return {?} Notifier configuration
     */
    getConfig() {
        return this.config;
    }
    /**
     * API: Show a new notification
     *
     * @param {?} notificationOptions Notification options
     * @return {?}
     */
    show(notificationOptions) {
        this.queueService.push({
            payload: notificationOptions,
            type: 'SHOW'
        });
    }
    /**
     * API: Hide a specific notification, given its ID
     *
     * @param {?} notificationId ID of the notification to hide
     * @return {?}
     */
    hide(notificationId) {
        this.queueService.push({
            payload: notificationId,
            type: 'HIDE'
        });
    }
    /**
     * API: Hide the newest notification
     * @return {?}
     */
    hideNewest() {
        this.queueService.push({
            type: 'HIDE_NEWEST'
        });
    }
    /**
     * API: Hide the oldest notification
     * @return {?}
     */
    hideOldest() {
        this.queueService.push({
            type: 'HIDE_OLDEST'
        });
    }
    /**
     * API: Hide all notifications at once
     * @return {?}
     */
    hideAll() {
        this.queueService.push({
            type: 'HIDE_ALL'
        });
    }
    /**
     * API: Shortcut for showing a new notification
     *
     * @param {?} type             Type of the notification
     * @param {?} message          Message of the notification
     * @param {?=} notificationId
     * @return {?}
     */
    notify(type, message, notificationId) {
        /** @type {?} */
        let notificationOptions = {
            message,
            type
        };
        if (notificationId !== undefined) {
            notificationOptions.id = notificationId;
        }
        this.show(notificationOptions);
    }
}
NotifierService.ɵfac = function NotifierService_Factory(t) { return new (t || NotifierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NotifierConfigToken)); };
NotifierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifierService, factory: NotifierService.ɵfac });
/** @nocollapse */
NotifierService.ctorParameters = () => [
    { type: NotifierQueueService },
    { type: NotifierConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NotifierConfigToken,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: NotifierQueueService }, { type: NotifierConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [NotifierConfigToken]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier container component
 * ----------------------------
 * This component acts as a wrapper for all notification components; consequently, it is responsible for creating a new notification
 * component and removing an existing notification component. Being more precicely, it also handles side effects of those actions, such as
 * shifting or even completely removing other notifications as well. Overall, this components handles actions coming from the queue service
 * by subscribing to its action stream.
 *
 * Technical sidenote:
 * This component has to be used somewhere in an application to work; it will not inject and create itself automatically, primarily in order
 * to not break the Angular AoT compilation. Moreover, this component (and also the notification components) set their change detection
 * strategy onPush, which means that we handle change detection manually in order to get the best performance. (#perfmatters)
 */
class NotifierContainerComponent {
    /**
     * Constructor
     *
     * @param {?} changeDetector       Change detector, used for manually triggering change detection runs
     * @param {?} notifierQueueService Notifier queue service
     * @param {?} notifierService      Notifier service
     */
    constructor(changeDetector, notifierQueueService, notifierService) {
        this.changeDetector = changeDetector;
        this.queueService = notifierQueueService;
        this.config = notifierService.getConfig();
        this.notifications = [];
        // Connects this component up to the action queue, then handle incoming actions
        this.queueServiceSubscription = this.queueService.actionStream.subscribe((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            this.handleAction(action).then((/**
             * @return {?}
             */
            () => {
                this.queueService.continue();
            }));
        }));
    }
    /**
     * Component destroyment lifecycle hook, cleans up the observable subsciption
     * @return {?}
     */
    ngOnDestroy() {
        if (this.queueServiceSubscription) {
            this.queueServiceSubscription.unsubscribe();
        }
    }
    /**
     * Notification identifier, used as the ngFor trackby function
     *
     * @param {?} index        Index
     * @param {?} notification Notifier notification
     * @return {?} Notification ID as the unique identnfier
     */
    identifyNotification(index, notification) {
        return notification.id;
    }
    /**
     * Event handler, handles clicks on notification dismiss buttons
     *
     * @param {?} notificationId ID of the notification to dismiss
     * @return {?}
     */
    onNotificationDismiss(notificationId) {
        this.queueService.push({
            payload: notificationId,
            type: 'HIDE'
        });
    }
    /**
     * Event handler, handles notification ready events
     *
     * @param {?} notificationComponent Notification component reference
     * @return {?}
     */
    onNotificationReady(notificationComponent) {
        /** @type {?} */
        let currentNotification = this.notifications[this.notifications.length - 1];
        currentNotification.component = notificationComponent; // Save the new omponent reference
        this.continueHandleShowAction(currentNotification); // Continue with handling the show action
    }
    /**
     * Handle incoming actions by mapping action types to methods, and then running them
     *
     * @private
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    handleAction(action) {
        switch (action.type) { // TODO: Maybe a map (actionType -> class method) is a cleaner solution here?
            case 'SHOW':
                return this.handleShowAction(action);
            case 'HIDE':
                return this.handleHideAction(action);
            case 'HIDE_OLDEST':
                return this.handleHideOldestAction(action);
            case 'HIDE_NEWEST':
                return this.handleHideNewestAction(action);
            case 'HIDE_ALL':
                return this.handleHideAllAction(action);
            default:
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    resolve(); // Ignore unknown action types
                }));
        }
    }
    /**
     * Show a new notification
     *
     * We simply add the notification to the list, and then wait until its properly initialized / created / rendered.
     *
     * @private
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    handleShowAction(action) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.tempPromiseResolver = resolve; // Save the promise resolve function so that it can be called later on by another method
            this.addNotificationToList(new NotifierNotification(action.payload));
        }));
    }
    /**
     * Continue to show a new notification (after the notification components is initialized / created / rendered).
     *
     * If this is the first (and thus only) notification, we can simply show it. Otherwhise, if stacking is disabled (or a low value), we
     * switch out notifications, in particular we hide the existing one, and then show our new one. Yet, if stacking is enabled, we first
     * shift all older notifications, and then show our new notification. In addition, if there are too many notification on the screen,
     * we hide the oldest one first. Furthermore, if configured, animation overlapping is applied.
     *
     * @private
     * @param {?} notification New notification to show
     * @return {?}
     */
    continueHandleShowAction(notification) {
        // First (which means only one) notification in the list?
        /** @type {?} */
        const numberOfNotifications = this.notifications.length;
        if (numberOfNotifications === 1) {
            notification.component.show().then(this.tempPromiseResolver); // Done
        }
        else {
            /** @type {?} */
            const implicitStackingLimit = 2;
            // Stacking enabled? (stacking value below 2 means stacking is disabled)
            if (this.config.behaviour.stacking === false || this.config.behaviour.stacking < implicitStackingLimit) {
                this.notifications[0].component.hide().then((/**
                 * @return {?}
                 */
                () => {
                    this.removeNotificationFromList(this.notifications[0]);
                    notification.component.show().then(this.tempPromiseResolver); // Done
                }));
            }
            else {
                /** @type {?} */
                const stepPromises = [];
                // Are there now too many notifications?
                if (numberOfNotifications > this.config.behaviour.stacking) {
                    /** @type {?} */
                    const oldNotifications = this.notifications.slice(1, numberOfNotifications - 1);
                    // Are animations enabled?
                    if (this.config.animations.enabled) {
                        // Is animation overlap enabled?
                        if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                            stepPromises.push(this.notifications[0].component.hide());
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                            }), this.config.animations.hide.speed - this.config.animations.overlap);
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                stepPromises.push(notification.component.show());
                            }), this.config.animations.hide.speed + this.config.animations.shift.speed - this.config.animations.overlap);
                        }
                        else {
                            stepPromises.push(new Promise((/**
                             * @param {?} resolve
                             * @param {?} reject
                             * @return {?}
                             */
                            (resolve, reject) => {
                                this.notifications[0].component.hide().then((/**
                                 * @return {?}
                                 */
                                () => {
                                    this.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then((/**
                                     * @return {?}
                                     */
                                    () => {
                                        notification.component.show().then(resolve);
                                    }));
                                }));
                            })));
                        }
                    }
                    else {
                        stepPromises.push(this.notifications[0].component.hide());
                        stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                        stepPromises.push(notification.component.show());
                    }
                }
                else {
                    /** @type {?} */
                    const oldNotifications = this.notifications.slice(0, numberOfNotifications - 1);
                    // Are animations enabled?
                    if (this.config.animations.enabled) {
                        // Is animation overlap enabled?
                        if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                            stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                stepPromises.push(notification.component.show());
                            }), this.config.animations.shift.speed - this.config.animations.overlap);
                        }
                        else {
                            stepPromises.push(new Promise((/**
                             * @param {?} resolve
                             * @param {?} reject
                             * @return {?}
                             */
                            (resolve, reject) => {
                                this.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then((/**
                                 * @return {?}
                                 */
                                () => {
                                    notification.component.show().then(resolve);
                                }));
                            })));
                        }
                    }
                    else {
                        stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                        stepPromises.push(notification.component.show());
                    }
                }
                Promise.all(stepPromises).then((/**
                 * @return {?}
                 */
                () => {
                    if (numberOfNotifications > this.config.behaviour.stacking) {
                        this.removeNotificationFromList(this.notifications[0]);
                    }
                    this.tempPromiseResolver();
                })); // Done
            }
        }
    }
    /**
     * Hide an existing notification
     *
     * Fist, we skip everything if there are no notifications at all, or the given notification does not exist. Then, we hide the given
     * notification. If there exist older notifications, we then shift them around to fill the gap. Once both hiding the given notification
     * and shifting the older notificaitons is done, the given notification gets finally removed (from the DOM).
     *
     * @private
     * @param {?} action Action object, payload contains the notification ID
     * @return {?} Promise, resolved when done
     */
    handleHideAction(action) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const stepPromises = [];
            // Does the notification exist / are there even any notifications? (let's prevent accidential errors)
            /** @type {?} */
            const notification = this.findNotificationById(action.payload);
            if (notification === undefined) {
                resolve();
                return;
            }
            // Get older notifications
            /** @type {?} */
            const notificationIndex = this.findNotificationIndexById(action.payload);
            if (notificationIndex === undefined) {
                resolve();
                return;
            }
            /** @type {?} */
            const oldNotifications = this.notifications.slice(0, notificationIndex);
            // Do older notifications exist, and thus do we need to shift other notifications as a consequence?
            if (oldNotifications.length > 0) {
                // Are animations enabled?
                if (this.config.animations.enabled && this.config.animations.hide.speed > 0) {
                    // Is animation overlap enabled?
                    if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                        stepPromises.push(notification.component.hide());
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                        }), this.config.animations.hide.speed - this.config.animations.overlap);
                    }
                    else {
                        notification.component.hide().then((/**
                         * @return {?}
                         */
                        () => {
                            stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                        }));
                    }
                }
                else {
                    stepPromises.push(notification.component.hide());
                    stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                }
            }
            else {
                stepPromises.push(notification.component.hide());
            }
            // Wait until both hiding and shifting is done, then remove the notification from the list
            Promise.all(stepPromises).then((/**
             * @return {?}
             */
            () => {
                this.removeNotificationFromList(notification);
                resolve(); // Done
            }));
        }));
    }
    /**
     * Hide the oldest notification (bridge to handleHideAction)
     *
     * @private
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    handleHideOldestAction(action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                resolve();
            })); // Done
        }
        else {
            action.payload = this.notifications[0].id;
            return this.handleHideAction(action);
        }
    }
    /**
     * Hide the newest notification (bridge to handleHideAction)
     *
     * @private
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    handleHideNewestAction(action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                resolve();
            })); // Done
        }
        else {
            action.payload = this.notifications[this.notifications.length - 1].id;
            return this.handleHideAction(action);
        }
    }
    /**
     * Hide all notifications at once
     *
     * @private
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    handleHideAllAction(action) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Are there any notifications? (prevent accidential errors)
            /** @type {?} */
            const numberOfNotifications = this.notifications.length;
            if (numberOfNotifications === 0) {
                resolve(); // Done
                return;
            }
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.hide.speed > 0 && this.config.animations.hide.offset !== false &&
                this.config.animations.hide.offset > 0) {
                for (let i = numberOfNotifications - 1; i >= 0; i--) {
                    /** @type {?} */
                    const animationOffset = this.config.position.vertical.position === 'top' ? numberOfNotifications - 1 : i;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.notifications[i].component.hide().then((/**
                         * @return {?}
                         */
                        () => {
                            // Are we done here, was this the last notification to be hidden?
                            if ((this.config.position.vertical.position === 'top' && i === 0) ||
                                (this.config.position.vertical.position === 'bottom' && i === numberOfNotifications - 1)) {
                                this.removeAllNotificationsFromList();
                                resolve(); // Done
                            }
                        }));
                    }), this.config.animations.hide.offset * animationOffset);
                }
            }
            else {
                /** @type {?} */
                let stepPromises = [];
                for (let i = numberOfNotifications - 1; i >= 0; i--) {
                    stepPromises.push(this.notifications[i].component.hide());
                }
                Promise.all(stepPromises).then((/**
                 * @return {?}
                 */
                () => {
                    this.removeAllNotificationsFromList();
                    resolve(); // Done
                }));
            }
        }));
    }
    /**
     * Shift multiple notifications at once
     *
     * @private
     * @param {?} notifications List containing the notifications to be shifted
     * @param {?} distance      Distance to shift (in px)
     * @param {?} toMakePlace   Flag, defining in which direciton to shift
     * @return {?} Promise, resolved when done
     */
    shiftNotifications(notifications, distance, toMakePlace) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Are there any notifications to shift?
            if (notifications.length === 0) {
                resolve();
                return;
            }
            /** @type {?} */
            let notificationPromises = [];
            for (let i = notifications.length - 1; i >= 0; i--) {
                notificationPromises.push(notifications[i].component.shift(distance, toMakePlace));
            }
            Promise.all(notificationPromises).then(resolve); // Done
        }));
    }
    /**
     * Add a new notification to the list of notifications (triggers change detection)
     *
     * @private
     * @param {?} notification Notification to add to the list of notifications
     * @return {?}
     */
    addNotificationToList(notification) {
        this.notifications.push(notification);
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
    }
    /**
     * Remove an existing notification from the list of notifications (triggers change detection)
     *
     * @private
     * @param {?} notification Notification to be removed from the list of notifications
     * @return {?}
     */
    removeNotificationFromList(notification) {
        this.notifications =
            this.notifications.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item.component !== notification.component));
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
    }
    /**
     * Remove all notifications from the list (triggers change detection)
     * @private
     * @return {?}
     */
    removeAllNotificationsFromList() {
        this.notifications = [];
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
    }
    /**
     * Helper: Find a notification in the notification list by a given notification ID
     *
     * @private
     * @param {?} notificationId Notification ID, used for finding notification
     * @return {?} Notification, undefined if not found
     */
    findNotificationById(notificationId) {
        return this.notifications.find((/**
         * @param {?} currentNotification
         * @return {?}
         */
        (currentNotification) => currentNotification.id === notificationId));
    }
    /**
     * Helper: Find a notification's index by a given notification ID
     *
     * @private
     * @param {?} notificationId Notification ID, used for finding a notification's index
     * @return {?} Notification index, undefined if not found
     */
    findNotificationIndexById(notificationId) {
        /** @type {?} */
        const notificationIndex = this.notifications.findIndex((/**
         * @param {?} currentNotification
         * @return {?}
         */
        (currentNotification) => currentNotification.id === notificationId));
        return (notificationIndex !== -1 ? notificationIndex : undefined);
    }
}
NotifierContainerComponent.ɵfac = function NotifierContainerComponent_Factory(t) { return new (t || NotifierContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierService)); };
NotifierContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotifierContainerComponent, selectors: [["notifier-container"]], hostAttrs: [1, "notifier__container"], decls: 2, vars: 2, consts: [["class", "notifier__container-list", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notifier__container-list"], [3, "notification", "ready", "dismiss"]], template: function NotifierContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotifierContainerComponent_li_1_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.identifyNotification);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], NotifierNotificationComponent]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NotifierContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: NotifierQueueService },
    { type: NotifierService }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // (#perfmatters)
                host: {
                    class: 'notifier__container'
                },
                selector: 'notifier-container',
                template: "<ul>\n\t<li class=\"notifier__container-list\" *ngFor=\"let notification of notifications; trackBy: identifyNotification;\">\n\t\t<notifier-notification\n\t\t\t[notification]=\"notification\"\n\t\t\t(ready)=\"onNotificationReady( $event )\"\n\t\t\t(dismiss)=\"onNotificationDismiss( $event )\">\n\t\t</notifier-notification>\n\t</li>\n</ul>\n"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: NotifierQueueService }, { type: NotifierService }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @return {?}
 */
() => {
    return {
        from: {
            opacity: '1'
        },
        to: {
            opacity: '0'
        }
    };
}, ɵ1 = /**
 * @return {?}
 */
() => {
    return {
        from: {
            opacity: '0'
        },
        to: {
            opacity: '1'
        }
    };
};
/**
 * Fade animation preset
 * @type {?}
 */
const fade = {
    hide: (ɵ0),
    show: (ɵ1)
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = /**
 * @param {?} notification
 * @return {?}
 */
(notification) => {
    // Prepare variables
    /** @type {?} */
    const config = notification.component.getConfig();
    /** @type {?} */
    const shift = notification.component.getShift();
    /** @type {?} */
    let from;
    /** @type {?} */
    let to;
    // Configure variables, depending on configuration and component
    if (config.position.horizontal.position === 'left') {
        from = {
            transform: `translate3d( 0, ${shift}px, 0 )`
        };
        to = {
            transform: `translate3d( calc( -100% - ${config.position.horizontal.distance}px - 10px ), ${shift}px, 0 )`
        };
    }
    else if (config.position.horizontal.position === 'right') {
        from = {
            transform: `translate3d( 0, ${shift}px, 0 )`
        };
        to = {
            transform: `translate3d( calc( 100% + ${config.position.horizontal.distance}px + 10px ), ${shift}px, 0 )`
        };
    }
    else {
        /** @type {?} */
        let horizontalPosition;
        if (config.position.vertical.position === 'top') {
            horizontalPosition = `calc( -100% - ${config.position.horizontal.distance}px - 10px )`;
        }
        else {
            horizontalPosition = `calc( 100% + ${config.position.horizontal.distance}px + 10px )`;
        }
        from = {
            transform: `translate3d( -50%, ${shift}px, 0 )`
        };
        to = {
            transform: `translate3d( -50%, ${horizontalPosition}, 0 )`
        };
    }
    // Done
    return {
        from,
        to
    };
}, ɵ1$1 = /**
 * @param {?} notification
 * @return {?}
 */
(notification) => {
    // Prepare variables
    /** @type {?} */
    const config = notification.component.getConfig();
    /** @type {?} */
    let from;
    /** @type {?} */
    let to;
    // Configure variables, depending on configuration and component
    if (config.position.horizontal.position === 'left') {
        from = {
            transform: `translate3d( calc( -100% - ${config.position.horizontal.distance}px - 10px ), 0, 0 )`
        };
        to = {
            transform: 'translate3d( 0, 0, 0 )'
        };
    }
    else if (config.position.horizontal.position === 'right') {
        from = {
            transform: `translate3d( calc( 100% + ${config.position.horizontal.distance}px + 10px ), 0, 0 )`
        };
        to = {
            transform: 'translate3d( 0, 0, 0 )'
        };
    }
    else {
        /** @type {?} */
        let horizontalPosition;
        if (config.position.vertical.position === 'top') {
            horizontalPosition = `calc( -100% - ${config.position.horizontal.distance}px - 10px )`;
        }
        else {
            horizontalPosition = `calc( 100% + ${config.position.horizontal.distance}px + 10px )`;
        }
        from = {
            transform: `translate3d( -50%, ${horizontalPosition}, 0 )`
        };
        to = {
            transform: 'translate3d( -50%, 0, 0 )'
        };
    }
    // Done
    return {
        from,
        to
    };
};
/**
 * Slide animation preset
 * @type {?}
 */
const slide = {
    hide: (ɵ0$1),
    show: (ɵ1$1)
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier animation service
 */
class NotifierAnimationService {
    /**
     * Constructor
     */
    constructor() {
        this.animationPresets = {
            fade,
            slide
        };
    }
    /**
     * Get animation data
     *
     * This method generates all data the Web Animations API needs to animate our notification. The result depends on both the animation
     * direction (either in or out) as well as the notifications (and its attributes) itself.
     *
     * @param {?} direction    Animation direction, either in or out
     * @param {?} notification Notification the animation data should be generated for
     * @return {?} Animation information
     */
    getAnimationData(direction, notification) {
        // Get all necessary animation data
        /** @type {?} */
        let keyframes;
        /** @type {?} */
        let duration;
        /** @type {?} */
        let easing;
        if (direction === 'show') {
            keyframes = this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification);
            duration = notification.component.getConfig().animations.show.speed;
            easing = notification.component.getConfig().animations.show.easing;
        }
        else {
            keyframes = this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification);
            duration = notification.component.getConfig().animations.hide.speed;
            easing = notification.component.getConfig().animations.hide.easing;
        }
        // Build and return animation data
        return {
            keyframes: [
                keyframes.from,
                keyframes.to
            ],
            options: {
                duration,
                easing,
                fill: 'forwards' // Keep the newly painted state after the animation finished
            }
        };
    }
}
NotifierAnimationService.ɵfac = function NotifierAnimationService_Factory(t) { return new (t || NotifierAnimationService)(); };
NotifierAnimationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifierAnimationService, factory: NotifierAnimationService.ɵfac });
/** @nocollapse */
NotifierAnimationService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierAnimationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier timer service
 *
 * This service acts as a timer, needed due to the still rather limited setTimeout JavaScript API. The timer service can start and stop a
 * timer. Furthermore, it can also pause the timer at any time, and resume later on. The timer API workd promise-based.
 */
class NotifierTimerService {
    /**
     * Constructor
     */
    constructor() {
        this.now = 0;
        this.remaining = 0;
    }
    /**
     * Start (or resume) the timer
     *
     * @param {?} duration Timer duration, in ms
     * @return {?} Promise, resolved once the timer finishes
     */
    start(duration) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // For the first run ...
            this.remaining = duration;
            // Setup, then start the timer
            this.finishPromiseResolver = resolve;
            this.continue();
        }));
    }
    /**
     * Pause the timer
     * @return {?}
     */
    pause() {
        clearTimeout(this.timerId);
        this.remaining -= new Date().getTime() - this.now;
    }
    /**
     * Continue the timer
     * @return {?}
     */
    continue() {
        this.now = new Date().getTime();
        this.timerId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.finish();
        }), this.remaining);
    }
    /**
     * Stop the timer
     * @return {?}
     */
    stop() {
        clearTimeout(this.timerId);
        this.remaining = 0;
    }
    /**
     * Finish up the timeout by resolving the timer promise
     * @private
     * @return {?}
     */
    finish() {
        this.finishPromiseResolver();
    }
}
NotifierTimerService.ɵfac = function NotifierTimerService_Factory(t) { return new (t || NotifierTimerService)(); };
NotifierTimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifierTimerService, factory: NotifierTimerService.ɵfac });
/** @nocollapse */
NotifierTimerService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierTimerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier notification component
 * -------------------------------
 * This component is responsible for actually displaying the notification on screen. In addition, it's able to show and hide this
 * notification, in particular to animate this notification in and out, as well as shift (move) this notification vertically around.
 * Furthermore, the notification component handles all interactions the user has with this notification / component, such as clicks and
 * mouse movements.
 */
class NotifierNotificationComponent {
    /**
     * Constructor
     *
     * @param {?} elementRef               Reference to the component's element
     * @param {?} renderer                 Angular renderer
     * @param {?} notifierService          Notifier service
     * @param {?} notifierTimerService     Notifier timer service
     * @param {?} notifierAnimationService Notifier animation service
     */
    constructor(elementRef, renderer, notifierService, notifierTimerService, notifierAnimationService) {
        this.config = notifierService.getConfig();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timerService = notifierTimerService;
        this.animationService = notifierAnimationService;
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
        this.elementShift = 0;
    }
    /**
     * Component after view init lifecycle hook, setts up the component and then emits the ready event
     * @return {?}
     */
    ngAfterViewInit() {
        this.setup();
        this.elementHeight = this.element.offsetHeight;
        this.elementWidth = this.element.offsetWidth;
        this.ready.emit(this);
    }
    /**
     * Get the notifier config
     *
     * @return {?} Notifier configuration
     */
    getConfig() {
        return this.config;
    }
    /**
     * Get notification element height (in px)
     *
     * @return {?} Notification element height (in px)
     */
    getHeight() {
        return this.elementHeight;
    }
    /**
     * Get notification element width (in px)
     *
     * @return {?} Notification element height (in px)
     */
    getWidth() {
        return this.elementWidth;
    }
    /**
     * Get notification shift offset (in px)
     *
     * @return {?} Notification element shift offset (in px)
     */
    getShift() {
        return this.elementShift;
    }
    /**
     * Show (animate in) this notification
     *
     * @return {?} Promise, resolved when done
     */
    show() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.show.speed > 0) {
                // Get animation data
                /** @type {?} */
                const animationData = this.animationService.getAnimationData('show', this.notification);
                // Set initial styles (styles before animation), prevents quick flicker when animation starts
                /** @type {?} */
                const animatedProperties = Object.keys(animationData.keyframes[0]);
                for (let i = animatedProperties.length - 1; i >= 0; i--) {
                    this.renderer.setStyle(this.element, animatedProperties[i], animationData.keyframes[0][animatedProperties[i]]);
                }
                // Animate notification in
                this.renderer.setStyle(this.element, 'visibility', 'visible');
                /** @type {?} */
                const animation = this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = (/**
                 * @return {?}
                 */
                () => {
                    this.startAutoHideTimer();
                    resolve(); // Done
                });
            }
            else {
                // Show notification
                this.renderer.setStyle(this.element, 'visibility', 'visible');
                this.startAutoHideTimer();
                resolve(); // Done
            }
        }));
    }
    /**
     * Hide (animate out) this notification
     *
     * @return {?} Promise, resolved when done
     */
    hide() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.stopAutoHideTimer();
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.hide.speed > 0) {
                /** @type {?} */
                const animationData = this.animationService.getAnimationData('hide', this.notification);
                /** @type {?} */
                const animation = this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = (/**
                 * @return {?}
                 */
                () => {
                    resolve(); // Done
                });
            }
            else {
                resolve(); // Done
            }
        }));
    }
    /**
     * Shift (move) this notification
     *
     * @param {?} distance         Distance to shift (in px)
     * @param {?} shiftToMakePlace Flag, defining in which direction to shift
     * @return {?} Promise, resolved when done
     */
    shift(distance, shiftToMakePlace) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Calculate new position (position after the shift)
            /** @type {?} */
            let newElementShift;
            if ((this.config.position.vertical.position === 'top' && shiftToMakePlace)
                || (this.config.position.vertical.position === 'bottom' && !shiftToMakePlace)) {
                newElementShift = this.elementShift + distance + this.config.position.vertical.gap;
            }
            else {
                newElementShift = this.elementShift - distance - this.config.position.vertical.gap;
            }
            /** @type {?} */
            const horizontalPosition = this.config.position.horizontal.position === 'middle' ? '-50%' : '0';
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.shift.speed > 0) {
                /** @type {?} */
                const animationData = {
                    // TODO: Extract into animation service
                    keyframes: [
                        {
                            transform: `translate3d( ${horizontalPosition}, ${this.elementShift}px, 0 )`
                        },
                        {
                            transform: `translate3d( ${horizontalPosition}, ${newElementShift}px, 0 )`
                        }
                    ],
                    options: {
                        duration: this.config.animations.shift.speed,
                        easing: this.config.animations.shift.easing,
                        fill: 'forwards'
                    }
                };
                this.elementShift = newElementShift;
                /** @type {?} */
                const animation = this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = (/**
                 * @return {?}
                 */
                () => {
                    resolve(); // Done
                });
            }
            else {
                this.renderer.setStyle(this.element, 'transform', `translate3d( ${horizontalPosition}, ${newElementShift}px, 0 )`);
                this.elementShift = newElementShift;
                resolve(); // Done
            }
        }));
    }
    /**
     * Handle click on dismiss button
     * @return {?}
     */
    onClickDismiss() {
        this.dismiss.emit(this.notification.id);
    }
    /**
     * Handle mouseover over notification area
     * @return {?}
     */
    onNotificationMouseover() {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.pauseAutoHideTimer();
        }
        else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.stopAutoHideTimer();
        }
    }
    /**
     * Handle mouseout from notification area
     * @return {?}
     */
    onNotificationMouseout() {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.continueAutoHideTimer();
        }
        else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.startAutoHideTimer();
        }
    }
    /**
     * Handle click on notification area
     * @return {?}
     */
    onNotificationClick() {
        if (this.config.behaviour.onClick === 'hide') {
            this.onClickDismiss();
        }
    }
    /**
     * Start the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    startAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.start(this.config.behaviour.autoHide).then((/**
             * @return {?}
             */
            () => {
                this.onClickDismiss();
            }));
        }
    }
    /**
     * Pause the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    pauseAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.pause();
        }
    }
    /**
     * Continue the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    continueAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.continue();
        }
    }
    /**
     * Stop the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    stopAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.stop();
        }
    }
    /**
     * Initial notification setup
     * @private
     * @return {?}
     */
    setup() {
        // Set start position (initially the exact same for every new notification)
        if (this.config.position.horizontal.position === 'left') {
            this.renderer.setStyle(this.element, 'left', `${this.config.position.horizontal.distance}px`);
        }
        else if (this.config.position.horizontal.position === 'right') {
            this.renderer.setStyle(this.element, 'right', `${this.config.position.horizontal.distance}px`);
        }
        else {
            this.renderer.setStyle(this.element, 'left', '50%');
            // Let's get the GPU handle some work as well (#perfmatters)
            this.renderer.setStyle(this.element, 'transform', 'translate3d( -50%, 0, 0 )');
        }
        if (this.config.position.vertical.position === 'top') {
            this.renderer.setStyle(this.element, 'top', `${this.config.position.vertical.distance}px`);
        }
        else {
            this.renderer.setStyle(this.element, 'bottom', `${this.config.position.vertical.distance}px`);
        }
        // Add classes (responsible for visual design)
        this.renderer.addClass(this.element, `notifier__notification--${this.notification.type}`);
        this.renderer.addClass(this.element, `notifier__notification--${this.config.theme}`);
    }
}
NotifierNotificationComponent.ɵfac = function NotifierNotificationComponent_Factory(t) { return new (t || NotifierNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierTimerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierAnimationService)); };
NotifierNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotifierNotificationComponent, selectors: [["notifier-notification"]], hostAttrs: [1, "notifier__notification"], hostBindings: function NotifierNotificationComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotifierNotificationComponent_click_HostBindingHandler() { return ctx.onNotificationClick(); })("mouseout", function NotifierNotificationComponent_mouseout_HostBindingHandler() { return ctx.onNotificationMouseout(); })("mouseover", function NotifierNotificationComponent_mouseover_HostBindingHandler() { return ctx.onNotificationMouseover(); });
    } }, inputs: { notification: "notification" }, outputs: { ready: "ready", dismiss: "dismiss" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // We provide the timer to the component's local injector, so that every notification components gets its own
            // instance of the timer service, thus running their timers independently from each other
            NotifierTimerService
        ])], decls: 3, vars: 2, consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf", "ngIfElse"], ["predefinedNotification", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "notifier__notification-message"], ["class", "notifier__notification-button", "type", "button", "title", "dismiss", 3, "click", 4, "ngIf"], ["type", "button", "title", "dismiss", 1, "notifier__notification-button", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "notifier__notification-button-icon"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]], template: function NotifierNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotifierNotificationComponent_ng_container_0_Template, 1, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotifierNotificationComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notification.template)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NotifierNotificationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: NotifierService },
    { type: NotifierTimerService },
    { type: NotifierAnimationService }
];
NotifierNotificationComponent.propDecorators = {
    notification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // (#perfmatters)
                host: {
                    '(click)': 'onNotificationClick()',
                    '(mouseout)': 'onNotificationMouseout()',
                    '(mouseover)': 'onNotificationMouseover()',
                    class: 'notifier__notification'
                },
                providers: [
                    // We provide the timer to the component's local injector, so that every notification components gets its own
                    // instance of the timer service, thus running their timers independently from each other
                    NotifierTimerService
                ],
                selector: 'notifier-notification',
                template: "<ng-container *ngIf=\"notification.template; else predefinedNotification\" [ngTemplateOutlet]=\"notification.template\" [ngTemplateOutletContext]=\"{ notification: notification }\">\n</ng-container>\n\n<ng-template #predefinedNotification>\n\t<p class=\"notifier__notification-message\">{{ notification.message }}</p>\n\t<button class=\"notifier__notification-button\" type=\"button\" title=\"dismiss\" *ngIf=\"config.behaviour.showDismissButton\" (click)=\"onClickDismiss()\">\n\t\t<svg class=\"notifier__notification-button-icon\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\">\n\t\t\t<path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n\t\t</svg>\n\t</button>\n</ng-template>\n"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: NotifierService }, { type: NotifierTimerService }, { type: NotifierAnimationService }]; }, { ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory for a notifier configuration with custom options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @param {?} options - Custom notifier options
 * @return {?} - Notifier configuration as result
 */
function notifierCustomConfigFactory(options) {
    return new NotifierConfig(options);
}
/**
 * Factory for a notifier configuration with default options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @return {?} - Notifier configuration as result
 */
function notifierDefaultConfigFactory() {
    return new NotifierConfig({});
}
/**
 * Notifier module
 */
class NotifierModule {
    /**
     * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
     *
     * @param {?=} options
     * @return {?} - Notifier module with custom providers
     */
    static withConfig(options = {}) {
        return {
            ngModule: NotifierModule,
            providers: [
                // Provide the options itself upfront (as we need to inject them as dependencies -- see below)
                {
                    provide: NotifierOptionsToken,
                    useValue: options
                },
                // Provide a custom notifier configuration, based on the given notifier options
                {
                    deps: [
                        NotifierOptionsToken
                    ],
                    provide: NotifierConfigToken,
                    useFactory: notifierCustomConfigFactory
                }
            ]
        };
    }
}
NotifierModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotifierModule });
NotifierModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotifierModule_Factory(t) { return new (t || NotifierModule)(); }, providers: [
        NotifierAnimationService,
        NotifierService,
        NotifierQueueService,
        // Provide the default notifier configuration if just the module is imported
        {
            provide: NotifierConfigToken,
            useFactory: notifierDefaultConfigFactory
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotifierModule, { declarations: function () { return [NotifierContainerComponent,
        NotifierNotificationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [NotifierContainerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NotifierContainerComponent,
                    NotifierNotificationComponent
                ],
                exports: [
                    NotifierContainerComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [
                    NotifierAnimationService,
                    NotifierService,
                    NotifierQueueService,
                    // Provide the default notifier configuration if just the module is imported
                    {
                        provide: NotifierConfigToken,
                        useFactory: notifierDefaultConfigFactory
                    }
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-notifier.js.map

/***/ })

}]);
//# sourceMappingURL=default~component-component-module~sample-pages-sample-pages-module-es2015.js.map