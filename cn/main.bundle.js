webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n    <header class=\"header header-6\">\n        <div class=\"branding\">\n            <a href=\"https://vmware.github.io/\" class=\"nav-link\">\n                <span class=\"clr-icon vmware-logo\"></span>\n                <span class=\"title\">Open Source Program Office</span>\n            </a>\n        </div>\n    </header>\n    <div class=\"content-container\">\n        <div id=\"content-area\" class=\"content-area\" hash-listener #scrollable>\n            <div class=\"hero\">\n                <div class=\"hero-image\"><img src=\"images/harbor.png\" alt=\"\"></div>\n                <h3>基于Docker Distribution的企业级Registry服务</h3>\n                <p><a href=\"https://github.com/vmware/harbor\" class=\"btn btn-primary\"><i class=\"icon icon-github\"></i> Fork Harbor&trade;</a></p>\n            </div>\n            <div id=\"overview\" class=\"section\">\n                <h2>Harbor简介</h2>\n\n                <p>Harbor是一个用于存储和分发Docker镜像的企业级Registry服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。提升用户使用Registry构建和运行环境传输镜像的效率。Harbor支持安装在多个Registry节点的镜像资源复制，镜像全部保存在私有Registry中， 确保数据和知识产权在公司内部网络中管控。另外，Harbor也提供了高级的安全特性，诸如用户管理，访问控制和活动审计等。</p>\n\n                <br>\n\n                <ul>\n                    <li><strong>基于角色的访问控制</strong> - 用户与Docker镜像仓库通过“项目”进行组织管理，一个用户可以对多个镜像仓库在同一命名空间（project）里有不同的权限。</li>\n                    <li><strong>镜像复制</strong> - 镜像可以在多个Registry实例中复制（同步）。尤其适合于负载均衡，高可用，混合云和多云的场景。</li>\n                    <li><strong>图形化用户界面</strong> - 用户可以通过浏览器来浏览，检索当前Docker镜像仓库，管理项目和命名空间。</li>\n                    <li><strong>AD/LDAP 支持</strong> - Harbor可以集成企业内部已有的AD/LDAP，用于鉴权认证管理。</li>\n                    <li><strong>审计管理</strong> - 所有针对镜像仓库的操作都可以被记录追溯，用于审计管理。</li>\n                    <li><strong>国际化</strong> - 已拥有英文、中文、德文、日文和俄文的本地化版本。更多的语言将会添加进来。</li>\n                    <li><strong>RESTful API</strong> - RESTful API 提供给管理员对于Harbor更多的操控, 使得与其它管理软件集成变得更容易。</li>\n                    <li><strong>部署简单</strong> - 提供在线和离线两种安装工具， 也可以安装到vSphere平台(OVA方式)虚拟设备。</li>\n                </ul>\n\n                <p>更多信息请查看<a href=\"https://github.com/vmware/harbor/blob/master/README.md\">Readme</a>文档。</p>\n            </div>\n\n            <div id=\"gettingHarbor\" class=\"section\">\n                <h2>获取Harbor</h2>\n\n                <p>Harbor可以安装到一台装有Linux系统的主机， 也可以通过OVA方式部署到vSphere平台虚拟设备。可以从这个<a href=\"https://github.com/vmware/harbor/releases\">发布页</a>下载一个安装包。</p>\n                <p>更多信息请查看<a href=\"https://github.com/vmware/harbor/tree/master/docs\">Harbor相关文档。</a></p>\n            </div>\n\n            <div id=\"gettingStarted\" class=\"section\">\n                <h2>开始使用</h2>\n                <p>我们在这里提供了一些指南帮助您开始使用：</p>\n\n                <a href=\"https://github.com/vmware/admiral/wiki/Developer-Guide\" class=\"btn btn-outline\">README文档</a>\n                <a href=\"https://github.com/vmware/harbor/blob/master/docs/installation_guide.md\" class=\"btn btn-outline\">Harbor安装指南</a>\n                <a href=\"https://github.com/vmware/harbor/blob/master/docs/user_guide.md\" class=\"btn btn-outline\">Harbor用户使用指南</a>\n                <a href=\"https://github.com/vmware/harbor/blob/master/docs/installation_guide_ova.md\" class=\"btn btn-outline\">Harbor虚拟设备安装指南</a>\n                <a href=\"https://github.com/vmware/harbor/blob/master/docs/user_guide_ova.md\" class=\"btn btn-outline\">Harbor虚拟设备用户使用指南</a>\n            </div>\n\n            <div id=\"contributors\" class=\"section\">\n                <h2>贡献者</h2>\n\n                <p>\n                    <a title=\"reasonerjt\" href=\"https://github.com/reasonerjt\"><img class=\"contributor\" alt=\"reasonerjt\" src=\"https://avatars3.githubusercontent.com/u/2390463?v=3\" ></a>\n                    <a title=\"wknet123\" href=\"https://github.com/wknet123\"><img class=\"contributor\" alt=\"wknet123\" src=\"https://avatars0.githubusercontent.com/u/5027302?v=3\" ></a>\n                    <a title=\"ywk253100\" href=\"https://github.com/ywk253100\"><img class=\"contributor\" alt=\"ywk253100\" src=\"https://avatars0.githubusercontent.com/u/5835782?v=3\" ></a>\n                    <a title=\"hainingzhang\" href=\"https://github.com/hainingzhang\"><img class=\"contributor\" alt=\"hainingzhang\" src=\"https://avatars1.githubusercontent.com/u/2161887?v=3\" ></a>\n                    <a title=\"steven-zou\" href=\"https://github.com/steven-zou\"><img class=\"contributor\" alt=\"steven-zou\" src=\"https://avatars3.githubusercontent.com/u/5753287?v=3\" ></a>\n                    <a title=\"wemeya\" href=\"https://github.com/wemeya\"><img class=\"contributor\" alt=\"wemeya\" src=\"https://avatars2.githubusercontent.com/u/12540577?v=3\" ></a>\n                    <a title=\"yhua123\" href=\"https://github.com/yhua123\"><img class=\"contributor\" alt=\"yhua123\" src=\"https://avatars1.githubusercontent.com/u/19166125?v=3\" ></a>\n                    <a title=\"wy65701436\" href=\"https://github.com/wy65701436\"><img class=\"contributor\" alt=\"wy65701436\" src=\"https://avatars0.githubusercontent.com/u/2841473?v=3\" ></a>\n                    <a title=\"invalid-email-address\" href=\"https://github.com/invalid-email-address\"><img class=\"contributor\" alt=\"invalid-email-address\" src=\"https://avatars3.githubusercontent.com/u/148100?v=3\" ></a>\n                    <a title=\"saga92\" href=\"https://github.com/saga92\"><img class=\"contributor\" alt=\"saga92\" src=\"https://avatars1.githubusercontent.com/u/5730235?v=3\" ></a>\n                    <a title=\"xiahaoshawn\" href=\"https://github.com/xiahaoshawn\"><img class=\"contributor\" alt=\"xiahaoshawn\" src=\"https://avatars0.githubusercontent.com/u/10750864?v=3\" ></a>\n                    <a title=\"Erkak\" href=\"https://github.com/Erkak\"><img class=\"contributor\" alt=\"Erkak\" src=\"https://avatars2.githubusercontent.com/u/15937486?v=3\" ></a>\n                    <a title=\"hmwenchen\" href=\"https://github.com/hmwenchen\"><img class=\"contributor\" alt=\"hmwenchen\" src=\"https://avatars3.githubusercontent.com/u/16629561?v=3\" ></a>\n                    <a title=\"perhapszzy\" href=\"https://github.com/perhapszzy\"><img class=\"contributor\" alt=\"perhapszzy\" src=\"https://avatars1.githubusercontent.com/u/7953637?v=3\" ></a>\n                    <a title=\"zgdxiaoxiao\" href=\"https://github.com/zgdxiaoxiao\"><img class=\"contributor\" alt=\"zgdxiaoxiao\" src=\"https://avatars3.githubusercontent.com/u/19501217?v=3\" ></a>\n                    <a title=\"victoriazhengwf\" href=\"https://github.com/victoriazhengwf\"><img class=\"contributor\" alt=\"victoriazhengwf\" src=\"https://avatars0.githubusercontent.com/u/17972009?v=3\" ></a>\n                    <a title=\"rikatz\" href=\"https://github.com/rikatz\"><img class=\"contributor\" alt=\"rikatz\" src=\"https://avatars3.githubusercontent.com/u/7182341?v=3\" ></a>\n                    <a title=\"senk\" href=\"https://github.com/senk\"><img class=\"contributor\" alt=\"senk\" src=\"https://avatars1.githubusercontent.com/u/710568?v=3\" ></a>\n                    <a title=\"AlexZeitler\" href=\"https://github.com/AlexZeitler\"><img class=\"contributor\" alt=\"AlexZeitler\" src=\"https://avatars2.githubusercontent.com/u/287480?v=3\" ></a>\n                    <a title=\"ScorpioCPH\" href=\"https://github.com/ScorpioCPH\"><img class=\"contributor\" alt=\"ScorpioCPH\" src=\"https://avatars1.githubusercontent.com/u/5319646?v=3\" ></a>\n                    <a title=\"redkafei\" href=\"https://github.com/redkafei\"><img class=\"contributor\" alt=\"redkafei\" src=\"https://avatars1.githubusercontent.com/u/8327386?v=3\" ></a>\n                    <a title=\"int32bit\" href=\"https://github.com/int32bit\"><img class=\"contributor\" alt=\"int32bit\" src=\"https://avatars2.githubusercontent.com/u/5260798?v=3\" ></a>\n                    <a title=\"tobegit3hub\" href=\"https://github.com/tobegit3hub\"><img class=\"contributor\" alt=\"tobegit3hub\" src=\"https://avatars3.githubusercontent.com/u/2715000?v=3\" ></a>\n                    <a title=\"amandaz\" href=\"https://github.com/amandaz\"><img class=\"contributor\" alt=\"amandaz\" src=\"https://avatars0.githubusercontent.com/u/2898608?v=3\" ></a>\n                    <a title=\"laz2\" href=\"https://github.com/laz2\"><img class=\"contributor\" alt=\"laz2\" src=\"https://avatars2.githubusercontent.com/u/800356?v=3\" ></a>\n                    <a title=\"nagarjung\" href=\"https://github.com/nagarjung\"><img class=\"contributor\" alt=\"nagarjung\" src=\"https://avatars1.githubusercontent.com/u/9403528?v=3\" ></a>\n                    <a title=\"alanwooo\" href=\"https://github.com/alanwooo\"><img class=\"contributor\" alt=\"alanwooo\" src=\"https://avatars2.githubusercontent.com/u/12868735?v=3\" ></a>\n                    <a title=\"liubin\" href=\"https://github.com/liubin\"><img class=\"contributor\" alt=\"liubin\" src=\"https://avatars2.githubusercontent.com/u/1212008?v=3\" ></a>\n                    <a title=\"feilengcui008\" href=\"https://github.com/feilengcui008\"><img class=\"contributor\" alt=\"feilengcui008\" src=\"https://avatars3.githubusercontent.com/u/4131736?v=3\" ></a>\n                    <a title=\"sigsbee\" href=\"https://github.com/sigsbee\"><img class=\"contributor\" alt=\"sigsbee\" src=\"https://avatars1.githubusercontent.com/u/23101283?v=3\" ></a>\n                    </p>\n            </div>\n\n            <div id=\"contributing\" class=\"section\">\n                <h2>贡献代码</h2>\n\n                <p>我们欢迎来自社区的贡献。如果您愿意贡献代码，在没有我们签发的贡献协议（CLA)时,我们的机器人会将您提交的Pull Request更改为Issue的形式。有关CLA协议处理流程，请参阅这份<a href=\"https://cla.vmware.com/faq\">FAQ</a>文档。</p>\n            </div>\n\n            <div id=\"license\" class=\"section\">\n                <h2>协议</h2>\n\n                <p>Harbor适用于<a href=\"https://github.com/vmware/harbor/blob/master/LICENSE\">Apache 2协议</a>。</p>\n            </div>\n        </div>\n        <nav class=\"sidenav\" [clr-nav-level]=\"2\">\n            <section class=\"sidenav-content\">\n                <section class=\"nav-group\" [scrollspy]=\"scrollable\">\n                    <label><a class=\"nav-link active\" routerLink=\".\" routerLinkActive=\"active\" fragment=\"overview\">Harbor简介</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"gettingHarbor\">获取Harbor</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"gettingStarted\">开始使用</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"contributors\">贡献者</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"contributing\">贡献代码</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"license\">协议</a></label>\n                </section>\n            </section>\n        </nav>\n    </div>\n</clr-main-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clr-icon.vmware-logo {\n  background: url(/harbor/images/vmware.svg) no-repeat left 9px;\n  width: 108px; }\n\n.hero {\n  background-color: #ddd;\n  left: -24px;\n  padding-bottom: 2em;\n  padding-top: 2em;\n  overflow-x: hidden;\n  position: relative;\n  text-align: center;\n  top: -24px; }\n  .hero .btn-custom {\n    display: inline-block;\n    text-align: center;\n    margin: auto; }\n\n.content-area {\n  overflow-x: hidden; }\n\n.hero-image img {\n  max-width: 360px; }\n\n.icon {\n  display: inline-block;\n  height: 32px;\n  vertical-align: middle;\n  width: 32px; }\n  .icon.icon-github {\n    background: url(/harbor/images/github_icon.svg) no-repeat left -2px; }\n\n.nav-group label {\n  display: block;\n  margin-bottom: 1em; }\n\n.sidenav .nav-link {\n  padding: 3px 6px; }\n  .sidenav .nav-link:hover {\n    background: #eee; }\n  .sidenav .nav-link.active {\n    background: #d9e4ea;\n    color: #000; }\n\n.section {\n  padding: .5em 0; }\n\n.contributor {\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  margin-bottom: 1.5em;\n  margin-right: 1em;\n  max-width: 64px;\n  text-decoration: none; }\n\n@media (min-width: 320px) {\n  .title {\n    display: none; }\n  .hero {\n    width: 100vw; }\n  #license {\n    padding-bottom: 20vh; } }\n\n@media (min-width: 768px) {\n  .title {\n    display: block; }\n  .hero {\n    width: 110%; }\n  #license {\n    padding-bottom: 78vh; } }\n\n.row:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var contributors_service_1 = __webpack_require__("./src/services/contributors.service.ts");
var AppComponent = (function () {
    function AppComponent(contributorSvc) {
        this.contributorSvc = contributorSvc;
        this.contributors = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contributorSvc.getContributors().subscribe(function (results) {
            _this.contributors = results;
            // console.log("Contribs: ", results);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof contributors_service_1.ContributorService !== "undefined" && contributors_service_1.ContributorService) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/app/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var clarity_angular_1 = __webpack_require__("./node_modules/clarity-angular/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var utils_module_1 = __webpack_require__("./src/utils/utils.module.ts");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var contributors_service_1 = __webpack_require__("./src/services/contributors.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            clarity_angular_1.ClarityModule.forRoot(),
            utils_module_1.UtilsModule,
            app_routing_1.ROUTING
        ],
        providers: [contributors_service_1.ContributorService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/app/app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/app/app.routing.js.map

/***/ }),

/***/ "./src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/app.component.ts"));
__export(__webpack_require__("./src/app/app.module.ts"));
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/app/index.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true
};
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/environments/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var _1 = __webpack_require__("./src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
__webpack_require__("./node_modules/zone.js/dist/zone.js");
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/polyfills.js.map

/***/ }),

/***/ "./src/services/contributors.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/observable/forkJoin.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ContributorService = (function () {
    function ContributorService(http) {
        this.http = http;
    }
    ContributorService.prototype.getContributors = function () {
        // do work to merge three http calls into one observable.
        return Observable_1.Observable.forkJoin([
            this.http.get('https://api.github.com/repos/vmware/harbor/contributors')
                .map(function (res) { return res.json(); })
        ])
            .map(function (data) {
            var contributors = [];
            // console.logco("observable data", data); // make sure we are getting datas from github.
            // concat all the data into one array
            contributors = contributors.concat(data[0]);
            // create a uniqueContributors array
            var uniqueContributors = [];
            // filteredContributors filters contributors array, add it to uniqueContributors if its not already there.
            var filteredContributors = contributors.filter(function (el) {
                if (uniqueContributors.indexOf(el.id) === -1) {
                    uniqueContributors.push(el.id);
                    return true;
                }
                else {
                    return false;
                }
            });
            contributors = filteredContributors;
            return contributors;
        });
    };
    return ContributorService;
}());
ContributorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ContributorService);
exports.ContributorService = ContributorService;
var _a;
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/services/contributors.service.js.map

/***/ }),

/***/ "./src/utils/hash-listener.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var HashListener = (function () {
    function HashListener(route) {
        var _this = this;
        this.route = route;
        this.sub = this.route.fragment.subscribe(function (f) {
            _this.scrollToAnchor(f, false);
        });
    }
    HashListener.prototype.ngOnInit = function () {
        this.scrollToAnchor(this.route.snapshot.fragment, false);
    };
    HashListener.prototype.scrollToAnchor = function (hash, smooth) {
        if (smooth === void 0) { smooth = true; }
        if (hash) {
            var element = document.querySelector("#" + hash);
            if (element) {
                element.scrollIntoView({
                    behavior: smooth ? "smooth" : "instant",
                    block: "start"
                });
            }
        }
    };
    HashListener.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return HashListener;
}());
HashListener = __decorate([
    core_1.Directive({
        selector: "[hash-listener]",
        host: {
            "[style.position]": "'relative'"
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
], HashListener);
exports.HashListener = HashListener;
var _a;
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/utils/hash-listener.directive.js.map

/***/ }),

/***/ "./src/utils/scrollspy.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var ScrollSpy = (function () {
    function ScrollSpy(renderer) {
        this.renderer = renderer;
        this.anchors = [];
        this.throttle = false;
    }
    Object.defineProperty(ScrollSpy.prototype, "links", {
        set: function (routerLinks) {
            var _this = this;
            this.anchors = routerLinks.map(function (routerLink) { return "#" + routerLink.fragment; });
            this.sub = routerLinks.changes.subscribe(function () {
                _this.anchors = routerLinks.map(function (routerLink) { return "#" + routerLink.fragment; });
            });
        },
        enumerable: true,
        configurable: true
    });
    ScrollSpy.prototype.handleEvent = function () {
        var _this = this;
        this.scrollPosition = this.scrollable.scrollTop;
        if (!this.throttle) {
            window.requestAnimationFrame(function () {
                var currentLinkIndex = _this.findCurrentAnchor() || 0;
                _this.linkElements.forEach(function (link, index) {
                    _this.renderer.setElementClass(link.nativeElement, "active", index === currentLinkIndex);
                });
                _this.throttle = false;
            });
        }
        this.throttle = true;
    };
    ScrollSpy.prototype.findCurrentAnchor = function () {
        for (var i = this.anchors.length - 1; i >= 0; i--) {
            var anchor = this.anchors[i];
            if (this.scrollable.querySelector(anchor) && this.scrollable.querySelector(anchor).offsetTop <= this.scrollPosition) {
                return i;
            }
        }
    };
    ScrollSpy.prototype.ngOnInit = function () {
        this.scrollable.addEventListener("scroll", this);
    };
    ScrollSpy.prototype.ngOnDestroy = function () {
        this.scrollable.removeEventListener("scroll", this);
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    return ScrollSpy;
}());
__decorate([
    core_1.Input("scrollspy"),
    __metadata("design:type", Object)
], ScrollSpy.prototype, "scrollable", void 0);
__decorate([
    core_1.ContentChildren(router_1.RouterLinkWithHref, { descendants: true }),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _b || Object])
], ScrollSpy.prototype, "links", null);
__decorate([
    core_1.ContentChildren(router_1.RouterLinkWithHref, { descendants: true, read: core_1.ElementRef }),
    __metadata("design:type", typeof (_c = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _c || Object)
], ScrollSpy.prototype, "linkElements", void 0);
ScrollSpy = __decorate([
    core_1.Directive({
        selector: "[scrollspy]",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _d || Object])
], ScrollSpy);
exports.ScrollSpy = ScrollSpy;
var _a, _b, _c, _d;
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/utils/scrollspy.directive.js.map

/***/ }),

/***/ "./src/utils/utils.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var hash_listener_directive_1 = __webpack_require__("./src/utils/hash-listener.directive.ts");
var scrollspy_directive_1 = __webpack_require__("./src/utils/scrollspy.directive.ts");
var clarity_angular_1 = __webpack_require__("./node_modules/clarity-angular/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var UtilsModule = (function () {
    function UtilsModule() {
    }
    return UtilsModule;
}());
UtilsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            clarity_angular_1.ClarityModule.forChild()
        ],
        declarations: [
            hash_listener_directive_1.HashListener,
            scrollspy_directive_1.ScrollSpy
        ],
        exports: [
            hash_listener_directive_1.HashListener,
            scrollspy_directive_1.ScrollSpy
        ]
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=/Users/druk/ID&D Assets/Open Source Software/harbor/src/src/src/utils/utils.module.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map