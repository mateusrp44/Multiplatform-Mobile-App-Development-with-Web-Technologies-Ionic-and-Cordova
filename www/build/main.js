webpackJsonp([6],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LeaderProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LeaderProvider = (function () {
    function LeaderProvider(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderProvider.prototype.getLeaders = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'leaders')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderProvider.prototype.getLeader = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'leaders/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderProvider.prototype.getFeaturedLeader = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'leaders?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], LeaderProvider);
    return LeaderProvider;
}());

//# sourceMappingURL=leader.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/contact/contact.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n  <ion-card>\n    <ion-card-header color="primary">\n      Location Information\n    </ion-card-header>\n    <ion-card-content>\n      <address>\n        121, Clear Water Bay Road<br>\n        Clear Water Bay, Kowloon<br>\n        HONG KONG<br>\n        <ion-icon name="call"></ion-icon>: +852 1234 5678<br>\n        <ion-icon name="print"></ion-icon>: +852 8765 4321<br>\n        <ion-icon name="mail"></ion-icon>:\n        <a href="mailto:confusion@food.net">confusion@food.net</a>\n      </address>\n      <p></p>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="call"></ion-icon>\n            <div>CALL</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="mail"></ion-icon>\n            <div>E-MAIL</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DishdetailPage = (function () {
    function DishdetailPage(navCtrl, navParams, BaseURL, favoriteservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BaseURL = BaseURL;
        this.favoriteservice = favoriteservice;
        this.dish = navParams.get('dish');
        this.favorite = favoriteservice.isFavorite(this.dish.id);
        this.numcomments = this.dish.comments.length;
        var total = 0;
        this.dish.comments.forEach(function (comment) { return total += comment.rating; });
        this.avgstars = (total / this.numcomments).toFixed(2);
    }
    DishdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DishdetailPage');
    };
    DishdetailPage.prototype.addToFavorites = function () {
        console.log('Adding to Favorites', this.dish.id);
        this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    };
    DishdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dishdetail',template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/dishdetail/dishdetail.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Dish Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card *ngIf="dish">\n    <img src="{{BaseURL + dish.image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{dish.name | uppercase}}\n      </ion-card-title>\n      <p>\n        {{dish.description}}\n      </p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="star"></ion-icon>\n          <div>{{ avgstars }} stars</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{ numcomments }} Comments</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <div [hidden]="dish || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n  <ion-list *ngIf="dish">\n    <ion-list-header>\n      Comments\n    </ion-list-header>\n    <ion-item *ngFor="let comment of dish.comments" text-wrap>\n      <h4> {{comment.comment}} </h4>\n      <p> {{comment.rating}} Stars</p>\n      <p>\n        <span> -- {{comment.author}} {{comment.date | date }} </span>\n      </p>\n    </ion-item>\n  </ion-list>\n  <ion-fab bottom right [hidden]="favorite">\n      <button ion-fab (click)="addToFavorites()">\n        <ion-icon name="heart-outline"></ion-icon>\n      </button>\n    </ion-fab>\n    <ion-fab bottom right *ngIf="favorite">\n      <button ion-fab>\n        <ion-icon name="heart"></ion-icon>\n      </button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/dishdetail/dishdetail.html"*/,
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], Object, __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */]])
    ], DishdetailPage);
    return DishdetailPage;
}());

//# sourceMappingURL=dishdetail.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, favoriteservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteservice = favoriteservice;
        this.BaseURL = BaseURL;
    }
    FavoritesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = favorites; }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.deleteFavorite = function (item, id) {
        var _this = this;
        console.log('delete', id);
        this.favoriteservice.deleteFavorite(id)
            .subscribe(function (favorites) { return _this.favorites = favorites; }, function (errmess) { return _this.errMess = errmess; });
        item.close();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/favorites/favorites.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Favorites</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div *ngIf="favorites">\n    <ion-list>\n      <ion-item-sliding *ngFor="let favorite of favorites" #item>\n        <ion-item>\n          <ion-thumbnail item-left>\n            <img src="{{BaseURL + favorite.image}}" />\n          </ion-thumbnail>\n          <h3>{{ favorite.name }}</h3>\n          <p>{{ favorite.description }}</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteFavorite(item, favorite.id)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]="favorites || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{ errMess }}</h4>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/favorites/favorites.html"*/,
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */], Object])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, dishservice, favoriteservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.BaseURL = BaseURL;
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.dishSelected = function (event, dish) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__["a" /* DishdetailPage */], {
            dish: dish
        });
    };
    MenuPage.prototype.addToFavorites = function (dish) {
        console.log('Adding to Favorites', dish.id);
        this.favoriteservice.addFavorite(dish.id);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/menu/menu.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <div *ngIf="dishes">\n    <ion-card *ngFor="let dish of dishes" (click)="dishSelected($event, dish)" (pan)="addToFavorites(dish)">\n    <img src="{{BaseURL + dish.image}}"/>\n    <div class="card-title">{{dish.name}}</div>\n    <div class="card-subtitle">{{dish.description}}</div>\n  </ion-card>\n  </div>\n  <div [hidden]="dishes || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/menu/menu.html"*/,
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__["a" /* FavoriteProvider */], Object])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, leaderService, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
    }
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/about/about.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n  <ion-card>\n    <ion-card-header color="primary">\n      Our History\n    </ion-card-header>\n    <ion-card-content>\n      <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong\n        Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the\n        A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know\n        what will arrive on your plate the next time you visit us.</p>\n      <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO,\n        Mr. Peter Pan, that featured for the first time the world\'s best cuisines in a pan.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header color="primary">\n      Corporate Leadership\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list *ngIf="leaders">\n        <ion-item *ngFor="let leader of leaders" text-wrap>\n          <ion-avatar item-start>\n            <img src="{{BaseURL + leader.image}}">\n          </ion-avatar>\n          <h2>{{leader.name}}</h2>\n          <h3>{{leader.designation}}</h3>\n          <p>{{leader.description}}</p>\n        </ion-item>\n      </ion-list>\n      <div [hidden]="leaders || errMess">\n        <ion-spinner></ion-spinner>\n        <h4>Loading . . . Please Wait</h4>\n      </div>\n      <div *ngIf="errMess">\n        <h2>Error</h2>\n        <h4>{{errMess}}</h4>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/about/about.html"*/,
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__["a" /* LeaderProvider */], Object])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		689,
		5
	],
	"../pages/contact/contact.module": [
		684,
		4
	],
	"../pages/dishdetail/dishdetail.module": [
		685,
		3
	],
	"../pages/favorites/favorites.module": [
		686,
		2
	],
	"../pages/menu/menu.module": [
		687,
		1
	],
	"../pages/reservation/reservation.module": [
		688,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_promotion_promotion__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_leader_leader__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomePage = (function () {
    function HomePage(navCtrl, dishservice, promotionservice, leaderservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf="dish">\n    <img src="{{BaseURL + dish.image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{dish.name | uppercase}}\n      </ion-card-title>\n      <p>\n        {{dish.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div [hidden]="dish || dishErrMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="dishErrMess">\n    <h2>Error</h2>\n    <h4>{{dishErrMess}}</h4>\n  </div>\n\n  <ion-card *ngIf="promotion">\n    <img src="{{BaseURL + promotion.image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{promotion.name | uppercase}}\n      </ion-card-title>\n      <p>\n        {{promotion.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div [hidden]="promotion || promoErrMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="promoErrMess">\n    <h2>Error</h2>\n    <h4>{{promoErrMess}}</h4>\n  </div>\n\n  <ion-card *ngIf="leader">\n    <img src="{{BaseURL + leader.image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{leader.name | uppercase}}\n      </ion-card-title>\n      <p>\n        {{leader.designation}}\n      </p>\n      <p>\n        {{leader.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div [hidden]="leader || leaderErrMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="leaderErrMess">\n    <h2>Error</h2>\n    <h4>{{leaderErrMess}}</h4>\n  </div>\n  <ion-fab right bottom>\n    <button ion-fab color="accent"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab class="btn-mail"><ion-icon name="mail"></ion-icon></button>\n      <button ion-fab class="btn-youtube"><ion-icon name="logo-youtube"></ion-icon></button>\n      <button ion-fab class="btn-twitter"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab class="btn-facebook"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab class="btn-linkedin"><ion-icon name="logo-linkedin"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/home/home.html"*/
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_promotion_promotion__["a" /* PromotionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_leader_leader__["a" /* LeaderProvider */], Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the PromotionProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PromotionProvider = (function () {
    function PromotionProvider(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionProvider.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'promotions')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionProvider.prototype.getPromotion = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'promotions/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionProvider.prototype.getFeaturedPromotion = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'promotions?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], PromotionProvider);
    return PromotionProvider;
}());

//# sourceMappingURL=promotion.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationPage = (function () {
    function ReservationPage(navCtrl, navParams, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    ReservationPage.prototype.onSubmit = function () {
        console.log(this.reservation.value);
        this.viewCtrl.dismiss();
    };
    ReservationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationPage');
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservation',template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/reservation/reservation.html"*/`<ion-header>\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reserve Table</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>]\n  <form [formGroup]="reservation" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label>No. of Guests</ion-label>\n      <ion-select formControlName="guests">\n        <ion-option value=1>1</ion-option>\n        <ion-option value=2>2</ion-option>\n        <ion-option value=3>3</ion-option>\n        <ion-option value=4>4</ion-option>\n        <ion-option value=5>5</ion-option>\n        <ion-option value=6>6</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Smoking?</ion-label>\n      <ion-toggle formControlName="smoking" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date and Time</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY hh:mm A" pickerFormat="MMM DD, YYYY hh:mm A" formControlName="dateTime">\n      </ion-datetime>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!reservation.valid">Reserve</button>\n  </form>\n</ion-content>`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/pages/reservation/reservation.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], ReservationPage);
    return ReservationPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dishdetail_dishdetail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favorites_favorites__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_dish_dish__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_leader_leader__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_promotion_promotion__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_favorite_favorite__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_baseurl__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reservation_reservation__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reservation_reservation__["a" /* ReservationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dishdetail/dishdetail.module#DishdetailPageModule', name: 'DishdetailPage', segment: 'dishdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservation/reservation.module#ReservationPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reservation_reservation__["a" /* ReservationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_dish_dish__["a" /* DishProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_leader_leader__["a" /* LeaderProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_promotion_promotion__["a" /* PromotionProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_favorite_favorite__["a" /* FavoriteProvider */],
                { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_18__shared_baseurl__["a" /* baseURL */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About Us', icon: 'information-circle', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'Menu', icon: 'list-box', component: __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */] },
            { title: 'Contact Us', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'My Favorites', icon: 'heart', component: __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */] },
        ];
    }
    MyApp.prototype.openReserve = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__["a" /* ReservationPage */]);
        modal.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary-dark">\n      <ion-title>Ristorante Con Fusion</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button color="primary-pale" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n          {{p.title}}\n      </button>\n      <button color="primary-pale" menuClose ion-item (click)="openReserve()">\n          <ion-icon name="restaurant" item-left></ion-icon>\n          Reserve Table\n        </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/home/mateusrp/GoogleDrive/Multiplatform-Mobile-App-Development-with-Web-Technologies-Ionic-and-Cordova/conFusion/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dish_dish__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteProvider = (function () {
    function FavoriteProvider(http, dishservice) {
        this.http = http;
        this.dishservice = dishservice;
        console.log('Hello FavoriteProvider Provider');
        this.favorites = [];
    }
    FavoriteProvider.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id))
            this.favorites.push(id);
        console.log('favorites', this.favorites);
        return true;
    };
    FavoriteProvider.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteProvider.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteProvider.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            return this.getFavorites();
        }
        else {
            console.log('Deleting non-existant favorite', id);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw('Deleting non-existant favorite' + id);
        }
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__dish_dish__["a" /* DishProvider */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DishProvider = (function () {
    function DishProvider(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishProvider.prototype.getDishes = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'dishes')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishProvider.prototype.getDish = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'dishes/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishProvider.prototype.getFeaturedDish = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'dishes?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], DishProvider);
    return DishProvider;
}());

//# sourceMappingURL=dish.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:3000/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProcessHttpmsgProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ProcessHttpmsgProvider = (function () {
    function ProcessHttpmsgProvider(http) {
        this.http = http;
        console.log('Hello ProcessHttpmsgProvider Provider');
    }
    ProcessHttpmsgProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHttpmsgProvider.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProcessHttpmsgProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProcessHttpmsgProvider);
    return ProcessHttpmsgProvider;
}());

//# sourceMappingURL=process-httpmsg.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map