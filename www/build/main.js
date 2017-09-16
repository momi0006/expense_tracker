webpackJsonp([0],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBalanceExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(78);
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
 * Generated class for the AddBalanceExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddBalanceExpensePage = (function () {
    function AddBalanceExpensePage(navCtrl, navParams, afDB, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.purpose = this.navParams.get('param1');
        this.items = afDB.list('/category');
    }
    AddBalanceExpensePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.myDate = new Date().toISOString();
        this.balanceCategory = "Income";
        this.expense = this.navParams.get('id');
        var expenseId = this.navParams.get('id');
        this.balance = this.navParams.get('balanceId');
        var balanceId = this.navParams.get('balanceId');
        if (expenseId) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/expenses/' + expenseId).once('value').then(function (snapshot) {
                _this.updateFields(snapshot.val());
            });
        }
        else if (balanceId) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/balance/' + balanceId).once('value').then(function (snapshot) {
                _this.updateFields(snapshot.val());
            });
        }
    };
    AddBalanceExpensePage.prototype.updateFields = function (fields) {
        if (fields === void 0) { fields = null; }
        this.amount = fields.amount;
        this.myDate = fields.date;
        this.selectCategory = fields.category;
        this.description = fields.description;
    };
    AddBalanceExpensePage.prototype.onChange = function (event) {
        this.myDate = event;
    };
    AddBalanceExpensePage.prototype.save = function () {
        var _this = this;
        var data = {
            amount: this.amount,
            date: this.myDate,
            category: this.selectCategory.trim(),
            description: this.description
        };
        this.afDB.database.ref('expenses').push(data).then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: 'Expense added!',
                duration: 3000
            });
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) { console.log(err.message); });
    };
    AddBalanceExpensePage.prototype.saveBalance = function () {
        var _this = this;
        var data = {
            amount: this.amount,
            date: this.myDate,
            category: this.balanceCategory,
            description: this.description
        };
        this.afDB.database.ref('balance').push(data).then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: 'Balance added!',
                duration: 3000
            });
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) { console.log(err.message); });
    };
    AddBalanceExpensePage.prototype.update = function () {
        var _this = this;
        var expenseId = this.navParams.get('id');
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child('/expenses/' + expenseId)
            .update({ amount: this.amount,
            date: this.myDate,
            category: this.selectCategory,
            description: this.description }).then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: 'Expense updated!',
                duration: 3000
            });
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) { console.log(err.message); });
    };
    AddBalanceExpensePage.prototype.deleteRecord = function () {
        this.showConfirm();
    };
    AddBalanceExpensePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Delete this record?',
            buttons: [
                {
                    text: 'Disagree',
                    role: 'cancel'
                },
                {
                    text: 'Agree',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child('/expenses/' + _this.expense).remove();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return AddBalanceExpensePage;
}());
AddBalanceExpensePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-balance-expense',template:/*ion-inline-start:"C:\projects\devlift_takeaway\src\pages\add-balance-expense\add-balance-expense.html"*/'<!--\n  Generated template for the AddBalanceExpensePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="expense; else otherTitle">Edit Expense</ion-title>\n    <ng-template #otherTitle>\n        <ion-title *ngIf="purpose==\'Expense\'; else otherPurpose">Add {{purpose}}</ion-title>\n        <ng-template #otherPurpose>\n            <ion-title>Add {{purpose}}</ion-title>\n        </ng-template>\n    </ng-template>\n    <!-- <button ion-button end><ion-icon name="trash"></ion-icon></button> -->\n    <ion-buttons end *ngIf="expense">\n      <button ion-button style="font-size: 2rem" (click)="deleteRecord()"><ion-icon name="trash"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <form>\n          <ion-list>\n            <ion-item no-padding>\n              <ion-label floating>Amount</ion-label>\n              <ion-input type="number" name="amount" id="amount" [(ngModel)]="amount"></ion-input>\n            </ion-item>\n\n            <ion-row no-padding>\n              <ion-col col-5 no-padding>\n                  <ion-item no-padding>\n                    <ion-label floating>Date</ion-label>\n                    <ion-datetime no-padding name="date" displayFormat="DD/MMM/YYYY" (ngModelChange)="onChange($event)" [(ngModel)]="myDate"></ion-datetime>\n                  </ion-item>\n              </ion-col>\n\n              <ion-col col-2></ion-col>\n\n              <ion-col col-5 no-padding>\n                <div *ngIf="purpose==\'Balance\'; else otherCategories">\n                  <ion-item no-padding>\n                    <ion-label floating>Category</ion-label>\n                    <ion-input disabled type="text" name="balanceCategory" id="balanceCategory" [(ngModel)]="balanceCategory"class="balanceCategory"></ion-input>\n                  </ion-item>\n                </div>\n                <ng-template #otherCategories>\n                  <ion-label no-margin-bottom style="font-size: 1.34rem; margin-bottom: 0; color: #999;">Category</ion-label>\n                  <ion-select placeholder="Select" style="padding-left:0; padding-top:1rem" [(ngModel)]="selectCategory" name="selectCategory" text-capitalize>\n                      <ion-option *ngFor="let item of items | async" text-capitalize>\n                        {{item.$value}}\n                      </ion-option>\n                  </ion-select>\n                </ng-template>\n              </ion-col>\n            </ion-row>\n\n            <ion-item no-padding>\n              <ion-label floating>Description</ion-label>\n              <ion-textarea name="description" [(ngModel)]="description"></ion-textarea>\n            </ion-item>\n\n            <ion-row justify-content-end no-padding>\n              <ion-col col-4 no-padding>\n                <button ion-button block (click)="update()" *ngIf="expense; else elseBlock"\n                [disabled]="!amount || !description || !selectCategory">Update</button>\n                <ng-template #elseBlock>\n                    <button ion-button block (click)="save()" *ngIf="purpose==\'Expense\'; else otherButton"\n                    [disabled]="!amount || !description || !selectCategory">Save</button>\n                  <ng-template #otherButton>\n                    <button ion-button block (click)="saveBalance()" \n                    [disabled]="!amount || !description || !balanceCategory">Save</button>\n                  </ng-template>\n                  <!-- <button ion-button block (click)="save()" [disabled]="!amount || !description || !selectCategory">Save</button> -->\n                </ng-template>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\projects\devlift_takeaway\src\pages\add-balance-expense\add-balance-expense.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AddBalanceExpensePage);

//# sourceMappingURL=add-balance-expense.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBalancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(78);
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
 * Generated class for the EditBalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditBalancePage = (function () {
    function EditBalancePage(navCtrl, navParams, afDB, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    EditBalancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.category = "Income";
        this.myDate = new Date().toISOString();
        this.balance = this.navParams.get('balanceId');
        var balanceId = this.navParams.get('balanceId');
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/balance/' + balanceId).once('value').then(function (snapshot) {
            _this.updateFields(snapshot.val());
        });
    };
    EditBalancePage.prototype.updateFields = function (fields) {
        if (fields === void 0) { fields = null; }
        this.amount = fields.amount;
        this.myDate = fields.date;
        this.category = fields.category;
        this.description = fields.description;
        console.log(this.category);
    };
    EditBalancePage.prototype.updateBalance = function () {
        var _this = this;
        var expenseId = this.navParams.get('id');
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child('/balance/' + this.balance)
            .update({ amount: this.amount,
            date: this.myDate,
            category: this.category,
            description: this.description }).then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: 'Expense updated!',
                duration: 3000
            });
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) { console.log(err.message); });
    };
    EditBalancePage.prototype.deleteRecord = function () {
        this.showConfirm();
    };
    EditBalancePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Delete this record?',
            buttons: [
                {
                    text: 'Disagree',
                    role: 'cancel'
                },
                {
                    text: 'Agree',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child('/balance/' + _this.balance).remove();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return EditBalancePage;
}());
EditBalancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-balance',template:/*ion-inline-start:"C:\projects\devlift_takeaway\src\pages\edit-balance\edit-balance.html"*/'<!--\n  Generated template for the EditBalancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Edit Balance</ion-title>\n    <ion-buttons end>\n      <button ion-button style="font-size: 2rem" (click)="deleteRecord()"><ion-icon name="trash"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <form>\n          <ion-list>\n            <ion-item no-padding>\n              <ion-label floating>Amount</ion-label>\n              <ion-input type="number" name="amount" id="amount" [(ngModel)]="amount"></ion-input>\n            </ion-item>\n\n            <ion-row no-padding>\n              <ion-col col-5 no-padding>\n                  <ion-item no-padding>\n                    <ion-label floating>Date</ion-label>\n                    <ion-datetime no-padding name="date" displayFormat="DD/MMM/YYYY" [(ngModel)]="myDate"></ion-datetime>\n                  </ion-item>\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <!-- <ion-col col-5 no-padding>\n                  <ion-item no-padding>\n                    <ion-label no-margin-bottom style="font-size: 1.34rem; margin-bottom: 0; color: #999;">Category</ion-label>\n                    <ion-input type="text" name="category" id="category" [(ngModel)]="category" class="category"></ion-input>\n                    \n                  </ion-item>\n              </ion-col> -->\n              <ion-col col-5>\n                <ion-item no-padding>\n                  <ion-label floating>Category</ion-label>\n                  <ion-input type="text" name="category" id="category" [(ngModel)]="category" disabled></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-item no-padding>\n              <ion-label floating>Description</ion-label>\n              <ion-textarea name="description" [(ngModel)]="description"></ion-textarea>\n            </ion-item>\n\n            <ion-row justify-content-end no-padding>\n              <ion-col col-4 no-padding>\n                  <button ion-button block (click)="updateBalance()" \n                  [disabled]="!amount || !description || !category">Update</button>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\projects\devlift_takeaway\src\pages\edit-balance\edit-balance.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditBalancePage);

//# sourceMappingURL=edit-balance.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(316);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_expenses_expenses__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_balance_balance__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_balance_expense_add_balance_expense__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_balance_edit_balance__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_orderby_orderby__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseConfig = {
    apiKey: "AIzaSyAuYQOFcAyv4kmhsMXXJD7rtPDSf-SkrhM",
    authDomain: "devlift-5206b.firebaseapp.com",
    databaseURL: "https://devlift-5206b.firebaseio.com",
    storageBucket: "devlift-5206b.appspot.com",
    messagingSenderId: '6935491056'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__components_expenses_expenses__["a" /* ExpensesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_balance_expense_add_balance_expense__["a" /* AddBalanceExpensePage */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_orderby_orderby__["a" /* OrderbyPipe */],
            __WEBPACK_IMPORTED_MODULE_12__components_balance_balance__["a" /* BalanceComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_balance_edit_balance__["a" /* EditBalancePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_add_balance_expense_add_balance_expense__["a" /* AddBalanceExpensePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_edit_balance_edit_balance__["a" /* EditBalancePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\projects\devlift_takeaway\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\projects\devlift_takeaway\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_balance_expense_add_balance_expense__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_balance_edit_balance__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(63);
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
 * Generated class for the ExpensesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExpensesComponent = (function () {
    function ExpensesComponent(navCtrl, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.items1 = afDB.list('/expenses', {
            query: {
                orderByChild: 'date'
            }
        }).map(function (array) { return array.reverse(); });
        this.items2 = afDB.list('/balance', {
            query: {
                orderByChild: 'date'
            }
        }).map(function (array) { return array.reverse(); });
        this.items1.subscribe(function (cardsOfUserOne) {
            _this.items2.subscribe(function (cardsOfUserTwo) {
                _this.items = cardsOfUserOne.concat(cardsOfUserTwo);
                //console.log(this.items);
            });
        });
    }
    ExpensesComponent.prototype.onExpenseClick = function (expenseId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_add_balance_expense_add_balance_expense__["a" /* AddBalanceExpensePage */], { id: expenseId });
    };
    ExpensesComponent.prototype.onBalanceClick = function (balanceId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_edit_balance_edit_balance__["a" /* EditBalancePage */], { balanceId: balanceId });
        //this.navCtrl.push(AddBalanceExpensePage, {balanceId: balanceId});
    };
    return ExpensesComponent;
}());
ExpensesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'expenses',template:/*ion-inline-start:"C:\projects\devlift_takeaway\src\components\expenses\expenses.html"*/'<ion-grid>\n  <ion-row justify-content-center>\n    <ion-col col-12 col-sm-12 col-md-8>\n      <ion-list>\n        <ion-item no-padding class="text" *ngFor="let item of items1 | async" (click)="onExpenseClick(item.$key)">\n          <ion-row>\n            <ion-col col-8>\n              <label class="desc"><b>{{item.description}}</b></label><br>\n              <label>{{item.date | date:\'EEE, MMM d, y\'}}</label><br>\n              <p>{{item.category}}</p>\n            </ion-col>\n            <ion-col col-4 text-right class="currency">\n              <label class="amount"><b>{{item.amount | currency:\'CAD\':true}}</b></label>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n\n        <ion-item no-padding class="text" *ngFor="let item of items2 | async" (click)="onBalanceClick(item.$key)">\n          <ion-row>\n            <ion-col col-8>\n              <label style="font-size:2rem"><b>{{item.description}}</b></label><br>\n              <label>{{item.date | date:\'EEE, MMM d, y\'}}</label><br>\n              <p>{{item.category}}</p>\n            </ion-col>\n            <ion-col col-4 text-right class="currency">\n              <label class="amount amountIncome"><b>{{item.amount | currency:\'CAD\':true}}</b></label>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"C:\projects\devlift_takeaway\src\components\expenses\expenses.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
], ExpensesComponent);

//# sourceMappingURL=expenses.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(63);
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
 * Generated class for the BalanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BalanceComponent = (function () {
    function BalanceComponent(navCtrl, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.totalBalanceAmount = 0;
        this.totalExpenseAmount = 0;
        afDB.list('/balance').subscribe(function (keys) {
            keys.forEach(function (key) { return _this.totalBalanceAmount += parseFloat(key.amount); });
        });
        afDB.list('/expenses').subscribe(function (keys) {
            keys.forEach(function (key) { return _this.totalExpenseAmount += parseFloat(key.amount); });
        });
        this.totalIncome();
        this.totalExpense();
    }
    BalanceComponent.prototype.totalIncome = function () {
        return this.totalBalanceAmount;
    };
    BalanceComponent.prototype.totalExpense = function () {
        return this.totalExpenseAmount;
    };
    BalanceComponent.prototype.balance = function () {
        return this.totalBalanceAmount - this.totalExpenseAmount;
    };
    return BalanceComponent;
}());
BalanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'balance',template:/*ion-inline-start:"C:\projects\devlift_takeaway\src\components\balance\balance.html"*/'<ion-grid>\n    <ion-row justify-content-center>\n      <ion-col col-12 col-sm-12 col-md-8 class="center">\n        <ion-list class="centerList">\n          <ion-item no-padding class="text">\n            <ion-row>\n              <ion-col text-center class="currency">\n                <label style="font-size:3rem">Balance</label><br>\n                <label style="font-size: 4rem; line-height:2"\n                [ngStyle]="{\'color\': balance() > 0 ? \'green\' : \'red\' }"><b>{{balance() | currency:\'CAD\':true}}</b></label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col text-center col-6 class="currency">\n                <label style="font-size: 2rem; color: green"><b>{{totalIncome() | currency:\'CAD\':true}}</b></label><br>\n                <label>Income</label>\n              </ion-col>\n              <ion-col text-center col-6 class="currency">\n                <label style="font-size: 2rem; color:red"><b>{{totalExpense() | currency:\'CAD\':true}}</b></label><br>\n                <label>Expense</label>\n              </ion-col>\n            \n              \n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>'/*ion-inline-end:"C:\projects\devlift_takeaway\src\components\balance\balance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], BalanceComponent);

//# sourceMappingURL=balance.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the OrderbyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var OrderbyPipe = (function () {
    function OrderbyPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    OrderbyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    return OrderbyPipe;
}());
OrderbyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'orderby',
    })
], OrderbyPipe);

//# sourceMappingURL=orderby.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_balance_expense_add_balance_expense__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, afAuth, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.platform = platform;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.displayName = null;
                return;
            }
            _this.displayName = user.displayName;
        });
        this.tabName = 'expenses';
    }
    HomePage.prototype.goToAddBalanceExpensePage = function (purpose, event, fab) {
        fab.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_add_balance_expense_add_balance_expense__["a" /* AddBalanceExpensePage */], { param1: purpose });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\projects\devlift_takeaway\src\pages\home\home.html"*/'<ion-header >\n  <ion-toolbar color="primary">\n    <ion-title padding hideWhen="ios">Expense Tracker</ion-title>\n    <ion-segment [(ngModel)]="tabName" color="white">\n      <ion-segment-button value="expenses" class="tabs">\n        EXPENSES\n      </ion-segment-button>\n      <ion-segment-button value="balance" class="tabs">\n        BALANCE\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="tabName" >\n    <div *ngSwitchCase="\'expenses\'">\n        <expenses></expenses>\n    </div>\n    \n    <ion-list *ngSwitchCase="\'balance\'">\n      <div *ngSwitchCase="\'balance\'">\n        <balance></balance>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-fab right bottom #fab>\n  <button ion-fab color="default"><ion-icon name="add"></ion-icon></button>\n  <ion-fab-list side="top">\n    <button ion-fab (click)="goToAddBalanceExpensePage(\'Expense\', $event, fab)"><ion-icon name="cash"></ion-icon></button>\n    <button ion-fab (click)="goToAddBalanceExpensePage(\'Balance\', $event, fab)"><ion-icon name="logo-usd"></ion-icon></button>\n  </ion-fab-list>\n</ion-fab>\n\n'/*ion-inline-end:"C:\projects\devlift_takeaway\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map