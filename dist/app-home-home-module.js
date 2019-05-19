(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-home-module"],{

/***/ "./src/app/home/home-routin.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/home-routin.module.ts ***!
  \********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
        path: ':topic',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n\r\n<div class='row'>\r\n  <div class='col-md-3'>\r\n    <div class=\"card\">\r\n      <h3 style=\"padding-top:300px; padding-bottom:300px;\">[Component: List of topics here]</h3>\r\n    </div>\r\n  </div>\r\n  <div class='col-md-6'>\r\n    <div class=\"card\">\r\n      <h3 style=\"padding-top:300px; padding-bottom:700px;\">[Component: List of last questions here!]</h3>\r\n    </div>\r\n  </div>\r\n  <div class='col-md-3'>\r\n    <app-top5></app-top5>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

//import { SetUserService } from '../services/set-user.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routin.module */ "./src/app/home/home-routin.module.ts");
/* harmony import */ var _questions_home_questions_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questions-home/questions-home.component */ "./src/app/questions-home/questions-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// This Module Components list:

var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routin_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _questions_home_questions_home_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsHomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/questions-home/questions-home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/questions-home/questions-home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questions\">\r\n  <div align=\"center\">\r\n      <h4><b>Top 5 {{topic}} Questions</b></h4>\r\n  </div>\r\n  <div class='row'>\r\n    <div class='col'>\r\n      <div class=\"card\" *ngFor=\"let question of topics\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-title text-truncate\" title='{{ question.title }}'><b>{{ question.title }}</b></h6>\r\n          <p class=\"card-text text-muted\">{{ question.createdAt | date }} <br> <i><b>{{ question.topic }}</b></i></p>\r\n          <div align=\"right\">\r\n            <a href=\"#\" class=\"card-link\">More ...</a>\r\n            <a href=\"#\" class=\"card-link\">Follow <i class=\"far fa-bookmark\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/questions-home/questions-home.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/questions-home/questions-home.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, p {\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/questions-home/questions-home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/questions-home/questions-home.component.ts ***!
  \************************************************************/
/*! exports provided: QuestionsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsHomeComponent", function() { return QuestionsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_make_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/make-request.service */ "./src/app/services/make-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsHomeComponent = /** @class */ (function () {
    function QuestionsHomeComponent(router, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.label = 'questions';
        this.url = '/api/question';
        this.subscription = this.router.params.subscribe(function (param) {
            param.topic ? _this.getQuestions(param.topic) : _this.getQuestions();
        });
    }
    QuestionsHomeComponent.prototype.getQuestions = function (topic) {
        var _this = this;
        this.questionssubs = this.service.getData(this.url).subscribe(function (data) {
            localStorage.setItem(_this.label, JSON.stringify(data));
            _this.topics = topic ?
                _this.service.getCachedData(_this.label).filter(function (data) { return data.topic == topic; }).slice(0, 5) :
                _this.service.getCachedData(_this.label).slice(0, 5);
        });
    };
    QuestionsHomeComponent.prototype.ngOnInit = function () {
        this.topic = this.router.snapshot.paramMap.get("topic");
    };
    QuestionsHomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.questionssubs.unsubscribe();
    };
    QuestionsHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top5',
            template: __webpack_require__(/*! ./questions-home.component.html */ "./src/app/questions-home/questions-home.component.html"),
            styles: [__webpack_require__(/*! ./questions-home.component.scss */ "./src/app/questions-home/questions-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_make_request_service__WEBPACK_IMPORTED_MODULE_2__["MakeRequestService"]])
    ], QuestionsHomeComponent);
    return QuestionsHomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-home-module.js.map