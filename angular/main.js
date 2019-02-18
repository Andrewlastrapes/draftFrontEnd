(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_draft_board_draft_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/draft-board/draft-board.component */ "./src/app/components/draft-board/draft-board.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _components_warning_modal_warning_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/warning-modal/warning-modal.component */ "./src/app/components/warning-modal/warning-modal.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "draft-board",
        component: _components_draft_board_draft_board_component__WEBPACK_IMPORTED_MODULE_2__["DraftBoardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: "login",
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "",
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: "warning-modal",
        component: _components_warning_modal_warning_modal_component__WEBPACK_IMPORTED_MODULE_5__["WarningModalComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #fdfbfa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdsYXN0cmFwZXMvRGVza3RvcC9XZWIgZGV2ZWxvcG1lbnQvQW5ndWxhciBQcm9qZWN0cy9NQVNURVJTLURSQUZUL21hc3RlcnMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRywwQkFBeUIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYmFja2dyb3VuZEltYWdlIHtcbiBcbi8vICAgICAgICAgaGVpZ2h0OiA5NXZoOyAgIC8vIEFsd2F5cyA5NSUgb2YgdGhlIHZpZXcgcG9ydFxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1nL3RoZS1tYXN0ZXJzLTc1MHg1MDAuanBnXCIpO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbi8vICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuLy8gfVxuXG4uYmFja2dyb3VuZCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmYmZhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'masters';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_draft_board_draft_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/draft-board/draft-board.component */ "./src/app/components/draft-board/draft-board.component.ts");
/* harmony import */ var _services_post_service_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/post-service/post.service */ "./src/app/services/post-service/post.service.ts");
/* harmony import */ var _services_golfers_service_golfers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/golfers-service/golfers.service */ "./src/app/services/golfers-service/golfers.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _services_register_service_register_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/register-service/register.service */ "./src/app/services/register-service/register.service.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _components_golfer_details_golfer_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/golfer-details/golfer-details.component */ "./src/app/components/golfer-details/golfer-details.component.ts");
/* harmony import */ var _components_warning_modal_warning_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/warning-modal/warning-modal.component */ "./src/app/components/warning-modal/warning-modal.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _draft_complete_draft_complete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./draft-complete/draft-complete.component */ "./src/app/draft-complete/draft-complete.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_draft_board_draft_board_component__WEBPACK_IMPORTED_MODULE_6__["DraftBoardComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"],
                _components_golfer_details_golfer_details_component__WEBPACK_IMPORTED_MODULE_16__["GolferDetailsComponent"],
                _components_warning_modal_warning_modal_component__WEBPACK_IMPORTED_MODULE_17__["WarningModalComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__["ChatComponent"],
                _draft_complete_draft_complete_component__WEBPACK_IMPORTED_MODULE_21__["DraftCompleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"]
            ],
            providers: [_services_post_service_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"], _services_golfers_service_golfers_service__WEBPACK_IMPORTED_MODULE_8__["GolfersService"], _app_services_login_service_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"], _services_register_service_register_service__WEBPACK_IMPORTED_MODULE_14__["RegisterService"], _auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/active-users-service/active-users.service */ "./src/app/services/active-users-service/active-users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(activeUser) {
        this.activeUser = activeUser;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log(next);
        var access = next["token"] ? next["token"] : next["queryParams"]["token"];
        if (access) {
            return true;
        }
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_1__["ActiveUsersService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n      <h2>Login</h2>\n    <div class=\"forms\">\n      <div class=\"input-group input-group-lg username\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\">\n      </div>\n      <div class=\"input-group input-group-lg password\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\">\n      </div>\n      <div class=\"text-center buttonPad\">\n      <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"loginUser(username, password)\">Login</button>\n      <div *ngIf=\"loginError\" padding-top class=\"alert alert-danger\" role=\"alert\">\n          {{errMessage}}\n        </div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forms {\n  padding-top: 40px; }\n\n.password {\n  padding-top: 20px; }\n\n.buttonPad {\n  padding-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdsYXN0cmFwZXMvRGVza3RvcC9XZWIgZGV2ZWxvcG1lbnQvQW5ndWxhciBQcm9qZWN0cy9NQVNURVJTLURSQUZUL21hc3RlcnMvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYmFja2dyb3VuZCB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRURFNTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyB9XG5cblxuLy8gLmNhcmRDb257XG4vLyAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuLy8gICAgIHBhZGRpbmctbGVmdDogMjIwcHhcbi8vIH1cblxuLy8gLm1vcmVDYXJke1xuICAgIFxuLy8gICAgIG1pbi1oZWlnaHQ6IDI1cmVtO1xuLy8gICAgIG1heC13aWR0aDogNTByZW07XG4vLyB9XG5cbi5mb3JtcyB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5wYXNzd29yZCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5idXR0b25QYWQge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var src_app_services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/active-users-service/active-users.service */ "./src/app/services/active-users-service/active-users.service.ts");
/* harmony import */ var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginServ, activeUser, auth) {
        this.router = router;
        this.loginServ = loginServ;
        this.activeUser = activeUser;
        this.auth = auth;
        this.loggedIn = true;
        this.loginError = false;
    }
    LoginComponent.prototype.loginUser = function (u, p) {
        var _this = this;
        if (!u || !p) {
            this.loginError = true;
            this.errMessage = "Please type in username and password";
            return;
        }
        this.loginServ.login(u, p).then(function (res) {
            if (!res["token"]) {
                _this.loginError = true;
                _this.errMessage = res["message"];
                console.log(_this.errMessage);
                return;
            }
            _this.successMessage = res["message"];
            console.log(res);
            _this.transfer = res;
            console.log(_this.transfer);
            _this.auth.canActivate(_this.transfer, _this.transfer);
            _this.router.navigate(["draft-board"], { queryParams: res });
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_3__["ActiveUsersService"],
            src_app_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card text-white bg-info mb-3\">\n  <img class=\"card-img\" src=\"../../../assets/img/golf.jpg\">\n  <div class=\"card-img-overlay\">\n    <div class=\"display-4 title\">2019 Masters Draft</div>\n    <div class=\"card-body\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n          </div>\n          <div class=\"col-md-4\">\n            <div *ngIf=\"registerPage\">\n              <h2 class=\"card-title\">Register</h2>\n              <div class=\"forms\">\n                <div class=\"card-text input-group input-group-lg username\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\">\n                </div>\n                <div class=\"card-text input-group input-group-lg password\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\n                </div>\n                <div class=\"card-text input-group input-group-lg password\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"passwordConfirm\">\n                </div>\n                <div class=\"text-center buttonPad\">\n                  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"registerUser(username, password, passwordConfirm)\">Submit</button>\n                </div>\n                <div *ngIf=\"registrationError\" class=\"padTop\" class=\"alert alert-danger\" role=\"alert\">\n                  {{errMessage}}\n                </div>\n                <div (click)=\"navToLogin()\" class=\"padTop\">\n                  <a>\n                    <h5 class=\"registeredColor\">Already registered? <span class=\"badge badge-primary\">Click</span></h5>\n                  </a>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!registerPage\">\n              <div @myInsertRemoveTrigger>\n                  <app-login></app-login>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-family: 'Staatliches', cursive; }\n\n.padTop {\n  padding-top: 20%; }\n\n.registeredColor {\n  color: #fff; }\n\n.forms {\n  padding-top: 40px; }\n\n.password {\n  padding-top: 20px; }\n\n.buttonPad {\n  padding-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdsYXN0cmFwZXMvRGVza3RvcC9XZWIgZGV2ZWxvcG1lbnQvQW5ndWxhciBQcm9qZWN0cy9NQVNURVJTLURSQUZUL21hc3RlcnMvc3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUdEO0VBQ0ksWUFBVyxFQUNkOztBQUdEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZTtcbn1cblxuLnBhZFRvcCB7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuXG4ucmVnaXN0ZXJlZENvbG9yIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4uZm9ybXMge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4ucGFzc3dvcmQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uYnV0dG9uUGFkIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_register_service_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register-service/register.service */ "./src/app/services/register-service/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerServ, router) {
        this.registerServ = registerServ;
        this.router = router;
        this.registrationError = false;
        this.registerPage = true;
    }
    RegisterComponent.prototype.navToLogin = function () {
        this.registerPage = !this.registerPage;
    };
    RegisterComponent.prototype.registerUser = function (username, password, passwordConfirm) {
        var _this = this;
        if (passwordConfirm !== password) {
            this.registrationError = true;
            this.errMessage = "Password and Password Confirmation do not match.";
            return;
        }
        this.registerServ.registerUserService(username, password)
            .then(function (data) {
            if (data["err"]) {
                _this.registrationError = true;
                _this.errMessage = data["err"];
                return;
            }
            _this.registerPage = !_this.registerPage;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                    ])
                ]),
            ],
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_register_service_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card\" style=\"height: 18rem;\">\n    <p class=\"card-text text-center\"><small class=\"text-muted\">Chatroom: {{users.length}} current users</small></p>\n    <div *ngFor=\"let c of chatArray\">\n        <div class=\"userAndMessage\"><span class=\"username\">{{c.user}}</span>: {{c.message}}</div>\n    </div>\n  </div>\n\n<div class=\"card\">\n  <input type=\"text\" (keyup.enter)=\"submitMessage()\" placeholder=\"Hit enter to send..\" [(ngModel)]=\"chatInput\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".username {\n  color: #3824aa; }\n\n.userAndMessage {\n  padding-left: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdsYXN0cmFwZXMvRGVza3RvcC9XZWIgZGV2ZWxvcG1lbnQvQW5ndWxhciBQcm9qZWN0cy9NQVNURVJTLURSQUZUL21hc3RlcnMvc3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQXVCLEVBQzFCOztBQUVEO0VBQ0ksaUJBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi51c2VybmFtZSB7XG4gICAgY29sb3I6IHJnYig1NiwgMzYsIDE3MCk7XG59XG5cbi51c2VyQW5kTWVzc2FnZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyJVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.chatArray = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__("http://localhost:3010");
    }
    ChatComponent.prototype.submitMessage = function () {
        // this.chatOutput = `${this.username}: ${this.chatInput}`
        this.socket.emit("messageOut", {
            data: { user: this.username,
                chat: this.chatInput }
        });
        this.chatInput = "";
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.user["user"];
        this.socket.on("messageIn", function (data) {
            var user = data["data"]["data"]["user"];
            var message = data["data"]["data"]["chat"];
            _this.chatArray.push({ user: user, message: message });
            console.log(_this.chatArray);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "user", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/draft-board/draft-board.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/draft-board/draft-board.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light navbar\">\n  <div class=\"float-left\">\n    <h5><small>Welcome, </small>{{currentUser.user}}</h5>\n  </div>\n  <div></div>\n  <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"signOut()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container con\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div *ngIf=\"showMessage\">\n        <app-message></app-message>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"littlePad\" *ngIf=\"!complete\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <div class=\"list-group\">\n          <app-golfer-details (userDetailsUpdate)=\"updateUser($event)\" (draftMessage)=\"onDraftGolfer($event)\"\n            (notifyDraftComplete)=\"notified($event)\" [users]=\"users\" [turn]=\"turn\" [currentUser]=\"currentUser\"></app-golfer-details>\n        </div>\n      </div>\n      <div class=\"col-md-5\" *ngIf=\"!complete\">\n        <div class=\"sticky-top\">\n          <app-chat [user]=\"currentUser\" [users]=\"users\"></app-chat>\n          <div class=\"padTop\" *ngIf=\"!complete\">\n            <app-user-details [users]=\"users\"></app-user-details>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"complete\">\n    <app-draft-complete [users]=\"users\" [currentUser]=\"currentUser\"></app-draft-complete>\n   </div>\n\n<!-- <div class=\"littlePad\" *ngIf=\"complete\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <div class=\"list-group\">\n          <app-golfer-details (userDetailsUpdate)=\"updateUser($event)\" (draftMessage)=\"onDraftGolfer($event)\"\n            (notifyDraftComplete)=\"notified($event)\" [users]=\"users\" [turn]=\"turn\" [currentUser]=\"currentUser\"></app-golfer-details>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/draft-board/draft-board.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/draft-board/draft-board.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padTop {\n  padding-top: 12%; }\n\n.con {\n  height: 3em;\n  padding-top: 1%; }\n\n.littlePad {\n  padding-top: 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdsYXN0cmFwZXMvRGVza3RvcC9XZWIgZGV2ZWxvcG1lbnQvQW5ndWxhciBQcm9qZWN0cy9NQVNURVJTLURSQUZUL21hc3RlcnMvc3JjL2FwcC9jb21wb25lbnRzL2RyYWZ0LWJvYXJkL2RyYWZ0LWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksWUFBVztFQUNYLGdCQUNKLEVBQUM7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJhZnQtYm9hcmQvZHJhZnQtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wYWRUb3Age1xuICAgIHBhZGRpbmctdG9wOiAxMiU7XG59XG5cbi5jb24ge1xuICAgIGhlaWdodDogM2VtO1xuICAgIHBhZGRpbmctdG9wOiAxJVxufVxuXG4ubGl0dGxlUGFkIHtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/draft-board/draft-board.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/draft-board/draft-board.component.ts ***!
  \*****************************************************************/
/*! exports provided: DraftBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftBoardComponent", function() { return DraftBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_golfers_service_golfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/golfers-service/golfers.service */ "./src/app/services/golfers-service/golfers.service.ts");
/* harmony import */ var _services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/active-users-service/active-users.service */ "./src/app/services/active-users-service/active-users.service.ts");
/* harmony import */ var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service/login.service */ "./src/app/services/login-service/login.service.ts");
/* harmony import */ var _services_message_service_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message-service/message.service */ "./src/app/services/message-service/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DraftBoardComponent = /** @class */ (function () {
    function DraftBoardComponent(golfSer, activeUsersSer, loginSer, messageService, route) {
        this.golfSer = golfSer;
        this.activeUsersSer = activeUsersSer;
        this.loginSer = loginSer;
        this.messageService = messageService;
        this.route = route;
        this.users = {};
        this.loggedOut = true;
        this.displayedGolfers = [];
        this.showMessage = false;
        this.complete = false;
    }
    DraftBoardComponent.prototype.onDraftGolfer = function (e) {
        this.messageService.draftGolferMessage(e);
        this.showMessage = true;
    };
    DraftBoardComponent.prototype.updateUser = function (e) {
        this.getActiveUsers();
    };
    DraftBoardComponent.prototype.notified = function () {
        this.complete = true;
    };
    DraftBoardComponent.prototype.getActiveUsers = function () {
        var _this = this;
        this.activeUsersSer.getAllActiveUsers()
            .subscribe(function (data) {
            _this.users = data["data"];
        });
    };
    DraftBoardComponent.prototype.signOut = function () {
        // this.loginSer.signOut(this.currentUser)
        //   .then((data) => {
        //     this.router.navigate([''])
        //   })
    };
    DraftBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            _this.currentUser = data;
        });
        this.showMessage = true;
        this.getActiveUsers();
    };
    DraftBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-draft-board',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }))])
                ]),
            ],
            template: __webpack_require__(/*! ./draft-board.component.html */ "./src/app/components/draft-board/draft-board.component.html"),
            styles: [__webpack_require__(/*! ./draft-board.component.scss */ "./src/app/components/draft-board/draft-board.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_golfers_service_golfers_service__WEBPACK_IMPORTED_MODULE_1__["GolfersService"],
            _services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_2__["ActiveUsersService"],
            _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _services_message_service_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], DraftBoardComponent);
    return DraftBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/golfer-details/golfer-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/golfer-details/golfer-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-header list-group-item list-group-item-action list-group-item-success\" *ngIf=\"!complete\">\n   <p class=\"text-muted\" *ngIf=\"preDraft\">Draft will begin once 8th player enters.</p>\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <h1><small>Turn: </small>{{turn}}</h1>\n    </div>\n    <div class=\"col-3\">\n      <h1 *ngIf=\"counter > 59\">1:00</h1>\n      <div *ngIf=\"counter < 60\">\n        <h1 [ngClass]=\"{'danger': counter < 11}\">:{{counter}}</h1>\n      </div>\n    </div>\n  </div>\n</div>\n<ng4-loading-spinner></ng4-loading-spinner>\n<div *ngIf=\"!complete\">\n<ul class=\"list-group\" *ngFor=\"let g of displayedGolfers; let i = index\" (click)=\"openModal(g)\">\n  <li class=\"list-group-item\" @myInsertRemoveTrigger>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h6>{{g.Name}}</h6>\n      </div>\n      <div class=\"col-3\">\n        <small>Rank: {{g.WorldGolfRank}}</small>\n      </div>\n      <div class=\"col-3\">\n        <small>Events: {{g.Events}}</small>\n      </div>\n    </div>\n  </li>\n</ul>\n</div>\n<ngb-pagination *ngIf=\"!complete\" [collectionSize]=\"paginationSize()\" pageSize=\"25\" [(page)]=\"page\" aria-label=\"Default pagination\" (pageChange)=\"onPageChange($event)\"\n      [directionLinks]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>"

/***/ }),

/***/ "./src/app/components/golfer-details/golfer-details.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/golfer-details/golfer-details.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header1 {\n  padding-top: 20px;\n  padding-left: 15px; }\n\n.danger {\n  color: #dc3545 !important; }\n\n.activeTurn {\n  font-size: 20px !important;\n  color: #28a745 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdsYXN0cmFwZXMvRGVza3RvcC9XZWIgZGV2ZWxvcG1lbnQvQW5ndWxhciBQcm9qZWN0cy9NQVNURVJTLURSQUZUL21hc3RlcnMvc3JjL2FwcC9jb21wb25lbnRzL2dvbGZlci1kZXRhaWxzL2dvbGZlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLDJCQUEwQjtFQUMxQiwwQkFBd0IsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvbGZlci1kZXRhaWxzL2dvbGZlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcjEge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmRhbmdlciB7XG4gICAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZVR1cm4ge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMjhhNzQ1IWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/golfer-details/golfer-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/golfer-details/golfer-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: GolferDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolferDetailsComponent", function() { return GolferDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post-service/post.service */ "./src/app/services/post-service/post.service.ts");
/* harmony import */ var _services_golfers_service_golfers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/golfers-service/golfers.service */ "./src/app/services/golfers-service/golfers.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _warning_modal_warning_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../warning-modal/warning-modal.component */ "./src/app/components/warning-modal/warning-modal.component.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/active-users-service/active-users.service */ "./src/app/services/active-users-service/active-users.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GolferDetailsComponent = /** @class */ (function () {
    function GolferDetailsComponent(post, golfSer, modalService, spinner, activeUsersSer, auth) {
        this.post = post;
        this.golfSer = golfSer;
        this.modalService = modalService;
        this.spinner = spinner;
        this.activeUsersSer = activeUsersSer;
        this.auth = auth;
        this.displayedGolfers = [];
        this.golfers = {};
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__("http://localhost:3010");
        this.complete = false;
        this.preDraft = true;
        this.draftMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userDetailsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyDraftComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.currentUser) {
            this.activeUsersSer.loggedInStatus = true;
        }
        this.counter = 60;
    }
    GolferDetailsComponent.prototype.getGolfers = function () {
        var _this = this;
        this.post.draftStart().subscribe(function (data) {
            console.log(data);
        });
        this.initiateTurn();
        this.golfSer.getGolfers()
            .subscribe(function (data) {
            var golfers = [];
            console.log(data);
            for (var i = 0; i < 200; i++) {
                golfers.push(data[i]);
            }
            _this.postToGolfersDB(golfers);
            _this.postActiveUser("", "init");
        });
    };
    GolferDetailsComponent.prototype.getGolfersFromDB = function () {
        var _this = this;
        this.golfSer.returnGolfers()
            .subscribe(function (data) {
            if (!data["data"].length) {
                _this.post.getDraftComplete().subscribe(function (data) {
                    if (data["status"].length === 0) {
                        _this.getGolfers();
                    }
                    else {
                        _this.complete = true;
                        _this.notifyDraftComplete.emit(_this.complete);
                    }
                });
            }
            else {
                if (_this.users.length === 8) {
                    _this.socket.emit("beginDraft");
                }
                _this.golfers = data["data"];
                console.log(_this.golfers);
                _this.spinner.hide();
                _this.getTurn();
                _this.initGolfers();
                _this.getActiveUserFromDB();
            }
        });
    };
    GolferDetailsComponent.prototype.beginDraft = function () {
        this.preDraft = false;
        this.setCounter();
    };
    GolferDetailsComponent.prototype.postToGolfersDB = function (data) {
        var _this = this;
        this.golfSer.postGolfers(data).subscribe(function (data) {
            _this.golfers = data["data"];
            console.log(_this.golfers);
            _this.spinner.hide();
            _this.initGolfers();
        });
    };
    GolferDetailsComponent.prototype.activeUser = function (u) {
        this.turn = u;
    };
    GolferDetailsComponent.prototype.setCounter = function () {
        var _this = this;
        setInterval(function () {
            var user;
            _this.counter--;
            if (_this.counter === 0) {
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i].username === _this.turn) {
                        user = _this.users[i];
                    }
                }
                if (user["username"] !== _this.currentUser["user"]) {
                    return;
                }
                _this.handleDraftDB(_this.golfers[0], user);
            }
        }, 1000);
    };
    GolferDetailsComponent.prototype.openModal = function (g) {
        var _this = this;
        if (this.preDraft) {
            return;
        }
        var user;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username === this.turn) {
                user = this.users[i];
            }
        }
        if (user["username"] !== this.currentUser["user"]) {
            return;
        }
        var modalRef = this.modalService.open(_warning_modal_warning_modal_component__WEBPACK_IMPORTED_MODULE_5__["WarningModalComponent"], { centered: true });
        modalRef.componentInstance.name = g.Name;
        modalRef.result.then(function (data) {
            if (!data) {
                return;
            }
            else {
                _this.handleDraftDB(g, user);
            }
        });
    };
    GolferDetailsComponent.prototype.handleDraftDB = function (g, user) {
        var _this = this;
        console.log(g);
        this.post.getTurn().subscribe(function (data) {
            _this.ascFlag = data["data"][0]["turn"];
            _this.removeGolferFromDB(g);
            _this.postGolfer(g, user);
            _this.updateTurn();
            _this.socket.emit("golferDrafted", {
                golfer: g,
                username: user
            });
        });
    };
    GolferDetailsComponent.prototype.updateTurn = function () {
        var _this = this;
        this.post.getUsers().subscribe(function (data) {
            var activeUsers;
            activeUsers = data["data"].filter(function (user) {
                return user["signedIn"] === true;
            });
            var userIndex;
            activeUsers.filter(function (u, i) {
                if (u["active"]) {
                    userIndex = i;
                }
            });
            // Ascending flag
            var flag = _this.ascFlag;
            if (flag) {
                if (userIndex === activeUsers.length - 1) {
                    _this.ascFlag = false;
                    _this.postTurn(false);
                    _this.postActiveUser(activeUsers[userIndex], "");
                }
                else {
                    _this.postActiveUser(activeUsers[userIndex + 1], "");
                }
                // Descending flag
            }
            else {
                if (userIndex === 0) {
                    _this.ascFlag = true;
                    _this.postTurn(true);
                    _this.postActiveUser(activeUsers[userIndex], "");
                }
                else {
                    _this.postActiveUser(activeUsers[userIndex - 1], "");
                }
            }
        });
    };
    GolferDetailsComponent.prototype.draftGolfer = function (g, u) {
        console.log(g, u);
        this.counter = 60;
        this.removeGolferFromArray(g);
        var golfDraftObj = {
            golfer: g,
            user: u
        };
        this.draftMessage.emit(golfDraftObj);
    };
    GolferDetailsComponent.prototype.getActiveUserFromDB = function () {
        var _this = this;
        this.activeUsersSer.getActiveUser().subscribe(function (data) {
            _this.socket.emit("initialActiveUser", {
                data: data["data"]["username"]
            });
        });
    };
    GolferDetailsComponent.prototype.removeGolferFromArray = function (g) {
        var _this = this;
        this.golfers.filter(function (u, i) {
            var golferIndex;
            console.log(g, u);
            if (JSON.stringify(g) === JSON.stringify(u)) {
                console.log(g, u);
                golferIndex = i;
                _this.golfers.splice(golferIndex, 1);
            }
        });
        this.displayedGolfers.filter(function (u, i) {
            var golferIndex;
            if (JSON.stringify(g) === JSON.stringify(u)) {
                golferIndex = i;
                _this.displayedGolfers.splice(golferIndex, 1);
            }
        });
        if (this.golfers.length === 0) {
            this.complete = true;
            this.notifyDraftComplete.emit(this.complete);
        }
    };
    GolferDetailsComponent.prototype.removeGolferFromDB = function (g) {
        this.golfSer.removeDraftedGolfer(g).subscribe(function (data) {
        });
    };
    GolferDetailsComponent.prototype.postGolfer = function (golfer, user) {
        this.post.postToDB(golfer, user).subscribe(function (data) {
        });
    };
    GolferDetailsComponent.prototype.postTurn = function (bool) {
        this.post.updateTurn(bool).subscribe(function (data) {
        });
    };
    GolferDetailsComponent.prototype.initiateTurn = function () {
        this.post.initiateTurn().subscribe(function (data) {
        });
    };
    GolferDetailsComponent.prototype.getTurn = function () {
        var _this = this;
        this.post.getTurn().subscribe(function (data) {
            _this.ascFlag = data["data"];
        });
    };
    GolferDetailsComponent.prototype.postActiveUser = function (u, type) {
        var _this = this;
        var activeUser;
        if (type === "init") {
            activeUser = this.users[0];
            this.activeUsersSer.postActiveUser(activeUser, "init").subscribe(function (data) {
                _this.getActiveUserFromDB();
            });
        }
        else {
            activeUser = u;
            this.activeUsersSer.postActiveUser(activeUser, "").subscribe(function (data) {
                _this.userDetailsUpdate.emit(data);
                _this.getActiveUserFromDB();
            });
        }
    };
    GolferDetailsComponent.prototype.initGolfers = function () {
        var iter = this.golfers.length > 26 ? 26 : this.golfers.length;
        for (var i = 0; i < iter; i++) {
            this.displayedGolfers.push(this.golfers[i]);
        }
    };
    GolferDetailsComponent.prototype.onPageChange = function (p) {
        switch (p) {
            case 1:
                if (this.golfers.length > 24) {
                    this.pageSelectionLoop(0, 25);
                }
                else {
                    this.pageSelectionLoop(0, this.golfers.length);
                }
                break;
            case 2:
                if (this.golfers.length > 50) {
                    this.pageSelectionLoop(26, 51);
                }
                else {
                    this.pageSelectionLoop(26, this.golfers.length);
                }
                break;
            case 3:
                if (this.golfers.length > 75) {
                    this.pageSelectionLoop(51, 76);
                }
                else {
                    this.pageSelectionLoop(51, this.golfers.length);
                }
                break;
            case 4:
                if (this.golfers.length > 100) {
                    this.pageSelectionLoop(76, 101);
                }
                else {
                    this.pageSelectionLoop(76, this.golfers.length);
                }
                break;
            case 5:
                if (this.golfers.length > 125) {
                    this.pageSelectionLoop(101, 126);
                }
                else {
                    this.pageSelectionLoop(101, this.golfers.length);
                }
                break;
            case 6:
                if (this.golfers.length > 1250) {
                    this.pageSelectionLoop(126, 151);
                }
                else {
                    this.pageSelectionLoop(126, this.golfers.length);
                }
                break;
        }
    };
    GolferDetailsComponent.prototype.pageSelectionLoop = function (init, l) {
        this.displayedGolfers = [];
        for (var i = init; i < l; i++) {
            this.displayedGolfers.push(this.golfers[i]);
        }
    };
    GolferDetailsComponent.prototype.draftComplete = function () {
        var _this = this;
        if (this.golfers.length === 0) {
            this.post.draftComplete().subscribe(function (data) {
                _this.complete = true;
            });
        }
    };
    GolferDetailsComponent.prototype.paginationSize = function () {
        return this.golfers.length > 125 ? 125 : this.golfers.length;
    };
    GolferDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.golfers);
        this.spinner.show();
        this.getGolfersFromDB();
        this.socket.emit("newConnection", { data: this.currentUser });
        this.socket.on("golferDrafted", function (data) {
            console.log(data["data"]["golfer"], data["data"]["username"]);
            _this.draftGolfer(data["data"]["golfer"], data["data"]["username"]);
        });
        this.socket.on("initiate", function (data) {
            _this.activeUser(data["data"]["data"]);
        });
        this.socket.on("begin", function () {
            _this.beginDraft();
        });
        this.auth.canActivate(this.currentUser, this.currentUser);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GolferDetailsComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GolferDetailsComponent.prototype, "turn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GolferDetailsComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GolferDetailsComponent.prototype, "draftMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GolferDetailsComponent.prototype, "userDetailsUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GolferDetailsComponent.prototype, "notifyDraftComplete", void 0);
    GolferDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-golfer-details',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0 }))])
                ])
            ],
            template: __webpack_require__(/*! ./golfer-details.component.html */ "./src/app/components/golfer-details/golfer-details.component.html"),
            styles: [__webpack_require__(/*! ./golfer-details.component.scss */ "./src/app/components/golfer-details/golfer-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_post_service_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _services_golfers_service_golfers_service__WEBPACK_IMPORTED_MODULE_2__["GolfersService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"],
            _services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_7__["ActiveUsersService"],
            src_app_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]])
    ], GolferDetailsComponent);
    return GolferDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <div *ngFor=\"let m of messageService.messages; let i = index\" @myInsertRemoveTrigger> -->\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\" *ngIf=\"messageService.messages.length > 0\" @myInsertRemoveTrigger>\n          <ngb-alert type=\"danger\" [dismissible]=\"false\">{{messageService.messages[0]}}</ngb-alert>\n      </div>\n      <div class=\"col-4\" *ngIf=\"messageService.messages.length > 1\" @myInsertRemoveTrigger>\n          <ngb-alert type=\"danger\" [dismissible]=\"false\">{{messageService.messages[1]}}</ngb-alert>\n        </div>\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/message/message.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message-service/message.service */ "./src/app/services/message-service/message.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
        this.isOpen = false;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myInsertRemoveTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ]),
            ],
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/components/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_service_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p class=\"text-muted\">Click name to see drafted golfers</p>\n<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" *ngFor=\"let u of users\">\n  <ngb-panel title=\"{{u.username}}\" [disabled]=\"!showUsers(u)\" [type]=\"activeUser(u)\">\n    <ng-template ngbPanelContent>\n      <p *ngFor=\"let p of u.picks; let i = index\">{{i + 1}}: {{p}}</p>\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activeTurn {\n  background-color: aqua !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdsYXN0cmFwZXMvRGVza3RvcC9XZWIgZGV2ZWxvcG1lbnQvQW5ndWxhciBQcm9qZWN0cy9NQVNURVJTLURSQUZUL21hc3RlcnMvc3JjL2FwcC9jb21wb25lbnRzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBaUMsRUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlVHVybiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YSAhaW1wb3J0YW50O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/active-users-service/active-users.service */ "./src/app/services/active-users-service/active-users.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(activeUsersSer) {
        this.activeUsersSer = activeUsersSer;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("http://localhost:3010");
    }
    UserDetailsComponent.prototype.showUsers = function (u) {
        if (u.picks.length > 0) {
            return true;
        }
    };
    UserDetailsComponent.prototype.activeUser = function (u) {
        if (u.active) {
            return "list-group-item list-group-item-action list-group-item-success";
        }
    };
    UserDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log(this.users);
        this.socket.emit("updateUsers", {
            users: this.users
        });
        this.socket.on("updateUsers", function (users) {
            if (users["users"]["users"].length > 0) {
                console.log(users["users"]["users"]);
                _this.users = users["users"]["users"];
            }
        });
    };
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "users", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/components/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_active_users_service_active_users_service__WEBPACK_IMPORTED_MODULE_1__["ActiveUsersService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/warning-modal/warning-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/warning-modal/warning-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-title\">Draft Golfer</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close button\" aria-describedby=\"modal-title\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p><strong>Are you sure you want to draft <span class=\"text-primary\">{{name}}</span>?</strong></p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close(false)\">Close</button>\n  <button type=\"button\" ngbAutofocus class=\"btn btn-danger\" (click)=\"activeModal.close(true)\">Yes</button>\n</div>"

/***/ }),

/***/ "./src/app/components/warning-modal/warning-modal.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/warning-modal/warning-modal.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2FybmluZy1tb2RhbC93YXJuaW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/warning-modal/warning-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/warning-modal/warning-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: WarningModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningModalComponent", function() { return WarningModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarningModalComponent = /** @class */ (function () {
    function WarningModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    WarningModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WarningModalComponent.prototype, "name", void 0);
    WarningModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warning-modal',
            template: __webpack_require__(/*! ./warning-modal.component.html */ "./src/app/components/warning-modal/warning-modal.component.html"),
            styles: [__webpack_require__(/*! ./warning-modal.component.scss */ "./src/app/components/warning-modal/warning-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], WarningModalComponent);
    return WarningModalComponent;
}());



/***/ }),

/***/ "./src/app/draft-complete/draft-complete.component.html":
/*!**************************************************************!*\
  !*** ./src/app/draft-complete/draft-complete.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">\n              <h1 class=\"display-4\">Thanks</h1>\n              <p class=\"lead\">The draft has completed. Good luck to all.</p>\n              <p>Revisit this site to see our updated leaderboard.</p>\n          </div>\n          <div class=\"col\">\n              <app-chat [user]=\"currentUser\" [users]=\"users\"></app-chat>\n          </div>\n        </div>\n       </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let u of users; let i = index\">\n            <div *ngIf=\"i < 4\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                     {{u.username}}\n                    </div>\n                    <ul class=\"list-group list-group-flush\" *ngFor=\"let p of u.picks\">\n                      <li class=\"list-group-item\">{{p}}</li>\n                    </ul>\n                  </div>\n           \n            </div>\n            <div *ngIf=\"i > 3\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                     {{u.username}}\n                    </div>\n                    <ul class=\"list-group list-group-flush\" *ngFor=\"let p of u.picks\">\n                      <li class=\"list-group-item\">{{p}}</li>\n                    </ul>\n                  </div>\n              </div>\n        </div>\n      </div>\n    </div>\n "

/***/ }),

/***/ "./src/app/draft-complete/draft-complete.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/draft-complete/draft-complete.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYWZ0LWNvbXBsZXRlL2RyYWZ0LWNvbXBsZXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/draft-complete/draft-complete.component.ts":
/*!************************************************************!*\
  !*** ./src/app/draft-complete/draft-complete.component.ts ***!
  \************************************************************/
/*! exports provided: DraftCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftCompleteComponent", function() { return DraftCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraftCompleteComponent = /** @class */ (function () {
    function DraftCompleteComponent() {
    }
    DraftCompleteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraftCompleteComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraftCompleteComponent.prototype, "currentUser", void 0);
    DraftCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-draft-complete',
            template: __webpack_require__(/*! ./draft-complete.component.html */ "./src/app/draft-complete/draft-complete.component.html"),
            styles: [__webpack_require__(/*! ./draft-complete.component.scss */ "./src/app/draft-complete/draft-complete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DraftCompleteComponent);
    return DraftCompleteComponent;
}());



/***/ }),

/***/ "./src/app/services/active-users-service/active-users.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/active-users-service/active-users.service.ts ***!
  \***********************************************************************/
/*! exports provided: ActiveUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveUsersService", function() { return ActiveUsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-service/message.service */ "./src/app/services/message-service/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActiveUsersService = /** @class */ (function () {
    function ActiveUsersService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.loggedInStatus = false;
    }
    ActiveUsersService.prototype.getAllActiveUsers = function () {
        return this.http.get("https://stormy-hollows-91406.herokuapp.com/user/get-users")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Get Signed-in Users', [])));
    };
    ActiveUsersService.prototype.postActiveUser = function (u, type) {
        console.log("in post active service");
        if (type === "init") {
            return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/set-initial-user", u).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Post Active User', [])));
        }
        else {
            console.log(u);
            return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/set-active-user", u).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Post Active User', [])));
        }
    };
    ActiveUsersService.prototype.getActiveUser = function () {
        return this.http.get("https://stormy-hollows-91406.herokuapp.com/get-active-user").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Post Active User', [])));
    };
    ActiveUsersService.prototype.setLoggedIn = function (value) {
        return value;
    };
    ActiveUsersService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ActiveUsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ActiveUsersService);
    return ActiveUsersService;
}());



/***/ }),

/***/ "./src/app/services/golfers-service/golfers.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/golfers-service/golfers.service.ts ***!
  \*************************************************************/
/*! exports provided: GolfersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfersService", function() { return GolfersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GolfersService = /** @class */ (function () {
    function GolfersService(http) {
        this.http = http;
    }
    GolfersService.prototype.getGolfers = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': 'a589840eab4f4d37919cb79a20d4bf9d'
            })
        };
        return this.http.get("https://api.fantasydata.net/golf/v2/{JSON}/PlayerSeasonStats/{2018}?", httpOptions);
    };
    GolfersService.prototype.postGolfers = function (golfers) {
        console.log(golfers);
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/golfers/post", golfers);
    };
    GolfersService.prototype.returnGolfers = function () {
        return this.http.get("https://stormy-hollows-91406.herokuapp.com/golfers/post");
    };
    GolfersService.prototype.removeDraftedGolfer = function (golfer) {
        console.log(golfer);
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/golfers/remove-drafted", golfer);
    };
    GolfersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GolfersService);
    return GolfersService;
}());



/***/ }),

/***/ "./src/app/services/login-service/login.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/login-service/login.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-service/message.service */ "./src/app/services/message-service/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.data = {};
    }
    LoginService.prototype.login = function (username, password) {
        var enteredData = {
            username: username,
            password: password
        };
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/login", enteredData).toPromise();
    };
    LoginService.prototype.signOut = function (username) {
        var _this = this;
        var data = {
            username: username
        };
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/sign-out", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('initiate-turn')));
    };
    LoginService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    LoginService.prototype.log = function () {
        this.messageService.postingErrorMessage();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/message-service/message.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/message-service/message.service.ts ***!
  \*************************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.draftGolferMessage = function (obj) {
        var _this = this;
        var user = obj["user"]["username"];
        var golfer = obj["golfer"]["Name"];
        this.messages.push(user + " has selected " + golfer);
        setTimeout(function () {
            _this.messages.splice(0, 1);
        }, 3000);
    };
    MessageService.prototype.userSignedInMessage = function (user) {
        var _this = this;
        this.messages.push(user + " has signed in.");
        setTimeout(function () {
            _this.messages.splice(0, 1);
        }, 3000);
    };
    MessageService.prototype.postingErrorMessage = function () {
        var _this = this;
        this.messages.push("Error posting draft pick.");
        setTimeout(function () {
            _this.messages.splice(0, 1);
        }, 3000);
    };
    MessageService.prototype.spliceMessages = function () {
        if (this.messages.length === 3) {
            this.messages.splice(0, 1);
        }
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/post-service/post.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/post-service/post.service.ts ***!
  \*******************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-service/message.service */ "./src/app/services/message-service/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostService = /** @class */ (function () {
    function PostService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    PostService.prototype.postToDB = function (golfer, user) {
        var _this = this;
        var payload = {
            user: user,
            golfer: golfer
        };
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/post", payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addGolferUser')));
    };
    PostService.prototype.postActiveUser = function (u) {
        var _this = this;
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/post/update-active", u).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updatedActiveUser')));
    };
    PostService.prototype.updateTurn = function (bool) {
        var _this = this;
        var payload = {
            b: bool
        };
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/post/update-turn", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateTurn')));
    };
    PostService.prototype.initiateTurn = function () {
        var _this = this;
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/post/initate-turn", "").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('initiate-turn')));
    };
    PostService.prototype.getUsers = function () {
        return this.http.get("https://stormy-hollows-91406.herokuapp.com/user/register");
    };
    PostService.prototype.getTurn = function () {
        console.log("In get turn");
        return this.http.get("https://stormy-hollows-91406.herokuapp.com/post/get-turn");
    };
    PostService.prototype.draftComplete = function () {
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/post/draft-completed", true);
    };
    PostService.prototype.getDraftComplete = function () {
        return this.http.get("https://stormy-hollows-91406.herokuapp.com/post/draft-completed");
    };
    PostService.prototype.draftStart = function () {
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/post/draft-started", "");
    };
    PostService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    PostService.prototype.log = function () {
        // this.messageService.postingErrorMessage();
        console.log("asdfkjahsfd");
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/register-service/register.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/register-service/register.service.ts ***!
  \***************************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.registerUserService = function (username, password) {
        var userData = {
            username: username,
            password: password
        };
        return this.http.post("https://stormy-hollows-91406.herokuapp.com/user/register", userData).toPromise();
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewlastrapes/Desktop/Web development/Angular Projects/MASTERS-DRAFT/masters/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map