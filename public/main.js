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

/***/ "./src/app/CryptoModel.ts":
/*!********************************!*\
  !*** ./src/app/CryptoModel.ts ***!
  \********************************/
/*! exports provided: CryptoCurrencyType, coinList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoCurrencyType", function() { return CryptoCurrencyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coinList", function() { return coinList; });
var CryptoCurrencyType = /** @class */ (function () {
    function CryptoCurrencyType() {
    }
    return CryptoCurrencyType;
}());

var coinList = [{ "name": "Bitcoin", "symbol": "BTC", "price": null, "img": "https://www.cryptocompare.com/media/19633/btc.png" },
    { "name": "Ethereum", "symbol": "ETH", "price": null, "img": "https://www.cryptocompare.com/media/20646/eth_logo.png" },
    { "name": "Litecoin", "symbol": "LTC", "price": null, "img": "https://www.cryptocompare.com/media/19782/litecoin-logo.png" }];


/***/ }),

/***/ "./src/app/app.about.ts":
/*!******************************!*\
  !*** ./src/app/app.about.ts ***!
  \******************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_nameService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.nameService */ "./src/app/app.nameService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(nameService, router) {
        this.router = router;
        this.name = nameService.name;
    }
    AboutComponent.prototype.setKey = function (name, valid) {
        if (valid) {
            sessionStorage.setItem('name', name);
            this.name = name;
            this.router.navigate(['/']);
            window.location.reload();
        }
        else {
            console.log('"' + name + '" Not a valid string');
        }
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "<p>Please enter your name here:</p>\n  \n    <input #nm=\"ngModel\" [(ngModel)]=\"name\" pattern=\"[a-zA-Z]*\" minlength=\"2\" value=\"{{name}}\" required/>&nbsp;\n    <input (click)=\"setKey(nm.value, nm.valid)\" type=\"submit\" />\n    <br><br>\n    <p #ap [hidden]=\"nm.valid || nm.pristine\"> Minimum 2 characters and only alphabetical</p>\n  ",
            providers: [_app_nameService__WEBPACK_IMPORTED_MODULE_1__["NameService"]]
        }),
        __metadata("design:paramtypes", [_app_nameService__WEBPACK_IMPORTED_MODULE_1__["NameService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div id=\"top-nav\">\r\n    <app-links></app-links>\r\n    <span>Welcome {{name}}</span>\r\n  </div>\r\n  \r\n  <!-- Where router should display a view -->\r\n  <router-outlet></router-outlet>\r\n  <div id=\"bottom-nav\">\r\n    <app-links></app-links>\r\n    <span id=\"url\">Uses https://www.cryptocompare.com/api/</span>\r\n  </div>\r\n  \r\n</div>\r\n"

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
/* harmony import */ var _app_nameService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.nameService */ "./src/app/app.nameService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(nameService) {
        this.name = nameService.name;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_app_nameService__WEBPACK_IMPORTED_MODULE_1__["NameService"]]
        }),
        __metadata("design:paramtypes", [_app_nameService__WEBPACK_IMPORTED_MODULE_1__["NameService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.currencyservice.ts":
/*!****************************************!*\
  !*** ./src/app/app.currencyservice.ts ***!
  \****************************************/
/*! exports provided: MyCurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCurrencyService", function() { return MyCurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyCurrencyService = /** @class */ (function () {
    function MyCurrencyService(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        route.params.forEach(function (params) {
            _this.symbol = params['symbol'];
        });
    }
    MyCurrencyService.prototype.getAllCurrencyPrices = function () {
        var dataUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD';
        return this.http.get(dataUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
    };
    // Notice how BTC is hard-coded in the URL below. Hint: We might need a parameter 
    // which can be used to dynamically adjust the URL. 
    MyCurrencyService.prototype.getCurrencyDetail = function (routeValue, active) {
        if (active)
            this.symbol = routeValue;
        var url = "https://min-api.cryptocompare.com/data/histoday?fsym=" + this.symbol + "&tsym=USD&limit=1";
        var FINAL_TIME = 1;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
    };
    MyCurrencyService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    MyCurrencyService.prototype.handleError = function (error) {
        throw (error);
    };
    MyCurrencyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MyCurrencyService);
    return MyCurrencyService;
}());



/***/ }),

/***/ "./src/app/app.detail.html":
/*!*********************************!*\
  !*** ./src/app/app.detail.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"detailCont\">  \r\n  <div id=\"detLabel\">\r\n    <img width=\"50px\" src=\"assets/images/{{symbol}}.png\" >\r\n    <b>{{coinName}}</b>\r\n  </div>\r\n  <div id=\"table-div\">\r\n    <table>\r\n    <tr>\r\n      <td><b>{{symbol}}</b></td>\r\n      <td>\r\n        {{price | currency:'USD'  }} USD <app-trend [index]=\"index\"></app-trend>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Open</td>\r\n      <td>{{priceInfo.open | currency:'USD'  }} USD</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Close</td>\r\n      <td>{{priceInfo.close | currency:'USD'  }} USD</td>\r\n    </tr>\r\n  </table>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  <span></span>\r\n  <span></span>\r\n  <span></span>\r\n    <br/><br/>\r\n</div>"

/***/ }),

/***/ "./src/app/app.detail.ts":
/*!*******************************!*\
  !*** ./src/app/app.detail.ts ***!
  \*******************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_currencyservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.currencyservice */ "./src/app/app.currencyservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, currencyService) {
        this.route = route;
        this.currencyService = currencyService;
    }
    // ngOnInit() gets called after the object is set up via the constructor.
    // At this point, the class is able to handle the parameters passed to it.
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.symbol = params['symbol'];
            _this.index = params['index'];
            _this.price = params['price'];
            _this.coinName = params['coinName'];
            //console.log(localID);
            _this.getCurrencyInformation();
        });
    };
    DetailComponent.prototype.getCurrencyInformation = function () {
        var _this = this;
        this.currencyService.getCurrencyDetail(null, false)
            .subscribe(
        // 1. Handle successful data.
        function (data) {
            // Log the data in the console to see what it looks like.
            // Be sure to use the debugger.
            //console.log(JSON.stringify(data));
            var FINAL_UPDATE = 1;
            _this.priceInfo = data["Data"][FINAL_UPDATE];
            //console.log("Low: " + this.priceInfo.low + "   High: " + this.priceInfo.high);
        }, 
        // 2. Handle error.
        function (error) {
            //console.log(error)
        });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.detail.html */ "./src/app/app.detail.html"),
            providers: [_app_currencyservice__WEBPACK_IMPORTED_MODULE_2__["MyCurrencyService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_currencyservice__WEBPACK_IMPORTED_MODULE_2__["MyCurrencyService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/app.home.ts":
/*!*****************************!*\
  !*** ./src/app/app.home.ts ***!
  \*****************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_currencyservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.currencyservice */ "./src/app/app.currencyservice.ts");
/* harmony import */ var _CryptoModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CryptoModel */ "./src/app/CryptoModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(currencyService) {
        this.currencyService = currencyService;
        // Store local reference to MyDataService.
        this.currencyArray = _CryptoModel__WEBPACK_IMPORTED_MODULE_2__["coinList"];
        this.getSomeData();
    }
    // getCoinArrayIndex(abbreviation) {
    //     for (var i = 0; i < this.currencyArray.length; i++) {
    //         if (this.currencyArray[i].symbol == abbreviation) {
    //             return i;
    //         }
    //     }
    // }
    HomeComponent.prototype.getSomeData = function () {
        var _this = this;
        this.currencyService.getAllCurrencyPrices()
            .subscribe(function (data) {
            //console.log(JSON.stringify(data));
            for (var i = 0; i < _this.currencyArray.length; i++) {
                var currentSymbol = _this.currencyArray[i].symbol;
                //let idx           = this.getCoinArrayIndex(currentSymbol);
                _this.currencyArray[i].price = data[currentSymbol].USD; //changed idx to i
            }
        }, 
        // 2. Handle error.
        function (error) {
            console.log(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n                \n                <ul id=\"coinList\">\n                    <li *ngFor=\"let crcy of currencyArray; index as i\">\n                    <a routerLink=\"/detail/{{crcy.name}}/{{crcy.symbol}}/{{i}}/{{currencyArray[i].price}}\" routerLinkActive=\"active\">{{crcy.name}}</a>\n                    \n                    <span> <b>{{crcy.symbol}}</b> </span>   \n                    <span> {{ crcy.price | currency:'USD'  }} USD <app-trend [index]=i></app-trend></span>\n                    \n                    </li>\n                    \n                </ul>",
            providers: [_app_currencyservice__WEBPACK_IMPORTED_MODULE_1__["MyCurrencyService"]]
        }),
        __metadata("design:paramtypes", [_app_currencyservice__WEBPACK_IMPORTED_MODULE_1__["MyCurrencyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/app.links.ts":
/*!******************************!*\
  !*** ./src/app/app.links.ts ***!
  \******************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-links',
            template: "\n  <a id=\"home\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a><span> | </span> \n  <a id=\"about\" routerLink=\"/about\" routerLinkActive=\"active\">Login</a> \n  ",
        })
    ], LinksComponent);
    return LinksComponent;
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.home */ "./src/app/app.home.ts");
/* harmony import */ var _app_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.detail */ "./src/app/app.detail.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.about */ "./src/app/app.about.ts");
/* harmony import */ var _app_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.links */ "./src/app/app.links.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_priceComp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.priceComp */ "./src/app/app.priceComp.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_detail__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _app_home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _app_about__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _app_links__WEBPACK_IMPORTED_MODULE_8__["LinksComponent"], _app_priceComp__WEBPACK_IMPORTED_MODULE_10__["PriceComp"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"], _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.nameService.ts":
/*!************************************!*\
  !*** ./src/app/app.nameService.ts ***!
  \************************************/
/*! exports provided: NameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameService", function() { return NameService; });
var NameService = /** @class */ (function () {
    function NameService() {
        var str = sessionStorage.getItem('name');
        if (str) {
            this.name = str;
        }
        else {
            this.name = null;
        }
    }
    return NameService;
}());



/***/ }),

/***/ "./src/app/app.priceComp.ts":
/*!**********************************!*\
  !*** ./src/app/app.priceComp.ts ***!
  \**********************************/
/*! exports provided: PriceComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComp", function() { return PriceComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_currencyservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.currencyservice */ "./src/app/app.currencyservice.ts");
/* harmony import */ var _CryptoModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CryptoModel */ "./src/app/CryptoModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PriceComp = /** @class */ (function () {
    function PriceComp(currencyService) {
        this.currencyService = currencyService;
        this.currencyArray = _CryptoModel__WEBPACK_IMPORTED_MODULE_2__["coinList"];
    }
    PriceComp.prototype.ngOnInit = function () {
        var _this = this;
        this.symbol = this.currencyArray[this.index].symbol;
        this.currencyService.getCurrencyDetail(this.symbol, true)
            .subscribe(function (data) {
            var FINAL_UPDATE = 1;
            var priceInfo = data["Data"][FINAL_UPDATE];
            if (priceInfo.close < priceInfo.open) {
                _this.trend = '<b>&#x2193;</b>';
            }
            else {
                _this.trend = '<i>&#x2191;</i>';
            }
        }, function (error) { console.log(error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PriceComp.prototype, "index", void 0);
    PriceComp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trend',
            template: "<span [innerHTML]=trend></span>",
            providers: [_app_currencyservice__WEBPACK_IMPORTED_MODULE_1__["MyCurrencyService"]]
        }),
        __metadata("design:paramtypes", [_app_currencyservice__WEBPACK_IMPORTED_MODULE_1__["MyCurrencyService"]])
    ], PriceComp);
    return PriceComp;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.detail */ "./src/app/app.detail.ts");
/* harmony import */ var _app_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.home */ "./src/app/app.home.ts");
/* harmony import */ var _app_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.about */ "./src/app/app.about.ts");




var appRoutes = [
    { path: 'detail/:coinName/:symbol/:index/:price', component: _app_detail__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"] },
    { path: 'home', component: _app_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _app_about__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: '**', component: _app_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


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

module.exports = __webpack_require__(/*! C:\Users\mb8user\Desktop\COMP-2909-Angular-Vue\homework\ng-homework2\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map