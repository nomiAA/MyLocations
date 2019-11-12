(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-sm-3 col-md-2 hidden-xs-down\">\n      <app-sidebar></app-sidebar>\n    </nav>\n    <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- list of categories -->\n<app-nav-header title=\"Categories\"></app-nav-header>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped  table-hover \">\n    <thead>\n      <tr>\n        <th>Category Name</th>\n        <!-- <th>Actions</th> -->\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let category of categories\" (click)=\"selectCategory($event, category)\"\n        [class.highlighted]=\"category === currentCategory\">\n        <td>{{category.name}}</td>\n        <td>\n          <div *ngIf=\"category === currentCategory\">\n            <a class=\"btn btn-primary btn-xs fa fa-eye\" title=\"View\"\n              [routerLink]=\"['/categories/view',category.name]\"></a>\n            &nbsp;\n            <button class=\"btn btn-danger btn-xs fa fa-trash-o\" title=\"Remove\" (click)=\"onRemove(category)\"></button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- new category -->\n<div class=\"row \">\n  <nav>\n    <a routerLink=\"/categories/new-category\" class=\"btn btn-primary\">New Category</a>\n  </nav>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/nav-header/nav-header.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/nav-header/nav-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>{{title}}</h1>\n  <p>{{longText}}</p>\n  <p *ngIf=\"link\">\n    <a class=\"btn btn-lg btn-primary\" [routerLinkActive]=\"['active']\" [routerLink]=\"[link.routerLink]\" role=\"button\">{{link.title}} »</a>\n  </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/sidebar/sidebar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/sidebar/sidebar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-faded sidebar\">\n  <ul class=\"nav nav-pills flex-column\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['/categories']\" [routerLinkActive]=\"['active']\"\n        routerLinkActive=\"active\">Categories <span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link disabled\" disabled href=\"#\">Locations</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-header [title] = \"title\" [link]=\"link\"></app-nav-header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-category/new-category.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-category/new-category.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-header title=\"Categories -> New category\" [link]=\"link\"></app-nav-header>\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"editCategoryForm\" ngNativeValidate>\n    <div class=\"form-group required\">\n        <label for=\"itemName\" class=\"control-label\">Category Name</label>\n        <input type=\"text\" formControlName=\"name\" required=\"required\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n        <a routerLink=\"/categories\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-category/view-category.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-category/view-category.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-header title=\"Categories -> {{categoryName}}\" [link]=\"link\"></app-nav-header>\n<div class=\"form-group required\">\n    <label for=\"itemName\" class=\"control-label\">Category Name</label>\n    <input type=\"text\" [ngModel]=\"categoryName\" disabled class=\"form-control\">\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-category/new-category.component */ "./src/app/new-category/new-category.component.ts");
/* harmony import */ var _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-category/view-category.component */ "./src/app/view-category/view-category.component.ts");







var routes = [
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] },
    { path: 'categories/new-category', component: _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_5__["NewCategoryComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'categories/view/:categoryName', component: _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_6__["ViewCategoryComponent"] },
];
var config = {
    useHash: true,
    onSameUrlNavigation: 'reload'
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, config)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyLocations';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _core_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/nav-header/nav-header.component */ "./src/app/core/nav-header/nav-header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-category/new-category.component */ "./src/app/new-category/new-category.component.ts");
/* harmony import */ var _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-category/view-category.component */ "./src/app/view-category/view-category.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
                _core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _core_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_7__["NavHeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_10__["NewCategoryComponent"],
                _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_11__["ViewCategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.sass":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-hover > tbody > tr:hover > td, .table-hover > tbody > tr:hover > th {\n  background-color: #CFF5FF;\n}\n\n.highlighted {\n  background-color: #CFF5FF !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNVc2VyL0Rlc2t0b3AvcHJvamVjdHMvVGVzdC9NeUxvY2F0aW9ucy9zcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7QUNBSjs7QURFQTtFQUNJLG9DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID5cbiAgdGQsIHRoXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRjVGRlxuXG4uaGlnaGxpZ2h0ZWRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDRkY1RkYgIWltcG9ydGFudFxuXG5cbiAgICBcblxuIiwiLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0cjpob3ZlciA+IHRkLCAudGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZGNUZGO1xufVxuXG4uaGlnaGxpZ2h0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZGNUZGICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(service) {
        this.service = service;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.updateCategories();
    };
    CategoriesComponent.prototype.updateCategories = function () {
        var _this = this;
        this.service.getCategories().then(function (categories) { _this.categories = categories; });
    };
    CategoriesComponent.prototype.onRemove = function (category) {
        var _this = this;
        if (confirm("Are you sure to delete this category?")) {
            this.service.removeCategory(category).then(function () { _this.updateCategories(); });
        }
    };
    CategoriesComponent.prototype.selectCategory = function (event, category) {
        this.currentCategory = category;
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }
    ]; };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.sass */ "./src/app/categories/categories.component.sass")]
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/core/nav-header/nav-header.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/core/nav-header/nav-header.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2LWhlYWRlci9uYXYtaGVhZGVyLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/core/nav-header/nav-header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/nav-header/nav-header.component.ts ***!
  \*********************************************************/
/*! exports provided: NavHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavHeaderComponent", function() { return NavHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavHeaderComponent = /** @class */ (function () {
    function NavHeaderComponent() {
    }
    NavHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NavHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NavHeaderComponent.prototype, "longText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NavHeaderComponent.prototype, "link", void 0);
    NavHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-header',
            template: __webpack_require__(/*! raw-loader!./nav-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/nav-header/nav-header.component.html"),
            styles: [__webpack_require__(/*! ./nav-header.component.sass */ "./src/app/core/nav-header/nav-header.component.sass")]
        })
    ], NavHeaderComponent);
    return NavHeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  padding-left: 0;\n  padding-right: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border-right: 1px solid #eee;\n}\n\n.bg-faded {\n  background-color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNVc2VyL0Rlc2t0b3AvcHJvamVjdHMvVGVzdC9NeUxvY2F0aW9ucy9zcmMvYXBwL2NvcmUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb3JlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJcbiAgcGFkZGluZy1sZWZ0OiAwXG4gIHBhZGRpbmctcmlnaHQ6IDBcbiAgcG9zaXRpb246IGZpeGVkXG4gIHRvcDogMFxuICBib3R0b206IDBcbiAgbGVmdDogMFxuICB6LWluZGV4OiAxMDAwXG4gIHBhZGRpbmc6IDIwcHhcbiAgb3ZlcmZsb3cteDogaGlkZGVuXG4gIG92ZXJmbG93LXk6IGF1dG9cbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZVxuXG4uYmctZmFkZWRcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmN1xuXG4iLCIuc2lkZWJhciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uYmctZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.activeLink = "categories";
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.sass */ "./src/app/core/sidebar/sidebar.component.sass")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = "Wellcome to MyLocations project";
        this.link = { title: "Go To Categories", routerLink: "/categories" };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/model/category.ts":
/*!***********************************!*\
  !*** ./src/app/model/category.ts ***!
  \***********************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(name) {
        this.name = name;
    }
    Category.ctorParameters = function () { return [
        { type: String }
    ]; };
    return Category;
}());



/***/ }),

/***/ "./src/app/new-category/new-category.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/new-category/new-category.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group.required .control-label:after {\n  content: \"*\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNVc2VyL0Rlc2t0b3AvcHJvamVjdHMvVGVzdC9NeUxvY2F0aW9ucy9zcmMvYXBwL25ldy1jYXRlZ29yeS9uZXctY2F0ZWdvcnkuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL25ldy1jYXRlZ29yeS9uZXctY2F0ZWdvcnkuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV3LWNhdGVnb3J5L25ldy1jYXRlZ29yeS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwLnJlcXVpcmVkIC5jb250cm9sLWxhYmVsOmFmdGVyXG4gIGNvbnRlbnQ6IFwiKlwiXG4gIGNvbG9yOiByZWQiLCIuZm9ybS1ncm91cC5yZXF1aXJlZCAuY29udHJvbC1sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/new-category/new-category.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-category/new-category.component.ts ***!
  \********************************************************/
/*! exports provided: NewCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategoryComponent", function() { return NewCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _model_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/category */ "./src/app/model/category.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var NewCategoryComponent = /** @class */ (function () {
    function NewCategoryComponent(service, router, formBuilder) {
        this.service = service;
        this.router = router;
        this.formBuilder = formBuilder;
        this.link = { title: "Go To Categories", routerLink: "/categories" };
        this.editCategoryForm = formBuilder.group(new _model_category__WEBPACK_IMPORTED_MODULE_3__["Category"](""));
    }
    NewCategoryComponent.prototype.ngOnInit = function () {
    };
    NewCategoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.addCategory(this.editCategoryForm.value)
            .then(function () { _this.router.navigateByUrl('/categories'); })
            .catch(function (err) { return console.log(err); });
    };
    NewCategoryComponent.ctorParameters = function () { return [
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    NewCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-category',
            template: __webpack_require__(/*! raw-loader!./new-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-category/new-category.component.html"),
            styles: [__webpack_require__(/*! ./new-category.component.sass */ "./src/app/new-category/new-category.component.sass")]
        })
    ], NewCategoryComponent);
    return NewCategoryComponent;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/category */ "./src/app/model/category.ts");



var CategoriesService = /** @class */ (function () {
    function CategoriesService() {
        this.loadCategories();
    }
    CategoriesService.prototype.loadCategories = function () {
        this.categories = JSON.parse(localStorage.getItem("categories"));
        if (!this.categories)
            this.categories = [
                new _model_category__WEBPACK_IMPORTED_MODULE_2__["Category"]("North"),
                new _model_category__WEBPACK_IMPORTED_MODULE_2__["Category"]("East"),
                new _model_category__WEBPACK_IMPORTED_MODULE_2__["Category"]("West")
            ];
    };
    ;
    CategoriesService.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.categories);
        });
    };
    ;
    CategoriesService.prototype.removeCategory = function (category) {
        var _this = this;
        var me = this;
        return new Promise(function (resolve) {
            me.categories = me.categories.filter(function (obj) { return obj !== category; });
            _this.updateLocalStorageCategories();
            resolve();
        });
    };
    ;
    CategoriesService.prototype.addCategory = function (category) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.categories.push(category);
            _this.updateLocalStorageCategories();
            resolve();
        });
    };
    ;
    CategoriesService.prototype.updateLocalStorageCategories = function () {
        localStorage.setItem("categories", JSON.stringify(this.categories));
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/view-category/view-category.component.sass":
/*!************************************************************!*\
  !*** ./src/app/view-category/view-category.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY2F0ZWdvcnkvdmlldy1jYXRlZ29yeS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/view-category/view-category.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-category/view-category.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCategoryComponent", function() { return ViewCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ViewCategoryComponent = /** @class */ (function () {
    function ViewCategoryComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.link = { title: "Go To Categories", routerLink: "/categories" };
    }
    ViewCategoryComponent.prototype.ngOnInit = function () {
        this.categoryName = this.activatedRoute.snapshot.params.categoryName;
    };
    ViewCategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ViewCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-category',
            template: __webpack_require__(/*! raw-loader!./view-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-category/view-category.component.html"),
            styles: [__webpack_require__(/*! ./view-category.component.sass */ "./src/app/view-category/view-category.component.sass")]
        })
    ], ViewCategoryComponent);
    return ViewCategoryComponent;
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

module.exports = __webpack_require__(/*! /Users/MacUser/Desktop/projects/Test/MyLocations/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map