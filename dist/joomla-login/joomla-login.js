var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
var HTML_TEMPLATE = "\n<ion-content class=\"back-image\">\n<ion-item no-lines [hidden]=\"!isCustom\" float-end>\n  <button item-right class=\"btn-demo\" type=\"submit\" (click)=\"demoLogin()\" ion-button text-capitalize outline color=\"color-white\">Demo</button>\n</ion-item>\n<div class=\"es-title\">\n  <img class=\"img-logo\" src=\"assets/icon/icon.png\" />\n  <ion-title color=\"color-white\">Welcome to Vowel</ion-title>\n</div>\n<ion-list no-lines>\n    <ion-item [hidden]=\"!isCustom\">\n      <ion-input placeholder=\"Site URL\" [(ngModel)]=\"siteurl\" type=\"url\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input outline placeholder=\"Username\" [(ngModel)]=\"username\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input #input placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" required></ion-input>\n    </ion-item>\n    <ion-row padding>\n      <button text-capitalize type=\"submit\" (click)=\"doLogin()\" ion-button block color=\"clr-button\">Login</button>\n    </ion-row>\n</ion-list>\n</ion-content>\n";
var CSS_STYLE = "\n.item-ios.item-label-stacked .text-input, .item-ios.item-label-floating .text-input, .item-md.item-label-stacked .text-input, .item-md.item-label-floating .text-input {\n  margin-top: 26px;\n  margin-bottom: 7px;\n  font-weight: 600 !important;\n}\n.es-title {\n  margin-top: 20% !important;\n  margin-bottom: 5%;\n}\n.img-logo {\n  height: 15vw;\n  width: 15vw;\n  margin-bottom: 8px;\n}\nimg {\n  display: block;\n  margin: 0 auto;\n  width:70%;\n}\n.toolbar-title-md, .toolbar-title-ios {\n  text-align: center!important;\t\n  font-size: 2.0rem; \n}\nion-input {\n  border-bottom: 0.5px solid map-get($colors, primary);\n}\n";
var JoomlaLoginPage = /** @class */ (function () {
    function JoomlaLoginPage(toastCtrl, navCtrl, navParams, LoggerService, events) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LoggerService = LoggerService;
        this.events = events;
        this.isCustom = true;
        this.username = '';
        this.password = '';
        this.siteurl = '';
        this.LoggerService.getConfigs().then(function (data) {
            if (data['custom_app']['LOGINURL'].length > 0) {
                _this.isCustom = false;
                _this.apiBase = data['custom_app']['LOGINURL'];
            }
        });
    }
    JoomlaLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    JoomlaLoginPage.prototype.demoLogin = function () {
        this.username = 'Ruby';
        this.password = "abcd1234";
        this.siteurl = 'http://app.cloudaccess.host';
    };
    JoomlaLoginPage.prototype.doLogin = function () {
        if (!this.siteurl) {
            this.presentToast("Site url can't be blank");
        }
        else if (this.siteurl != '' && !this.siteurl.match(/^(https?:\/\/)/)) {
            this.presentToast('Please enter valid URL');
        }
        else if (!this.username) {
            this.presentToast("Username can't be blank");
        }
        else if (!this.password) {
            this.presentToast("Password can't be blank");
        }
        else {
            this.Login();
        }
    };
    JoomlaLoginPage.prototype.Login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, datatobesend;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.siteurl = (this.isCustom) ? this.siteurl : this.apiBase;
                        url = this.siteurl + "/index.php?option=com_api&app=users&resource=login&format=raw";
                        datatobesend = 'username=' + this.username + '&password=' + encodeURIComponent(this.password);
                        this.LoggerService.getConfigs().then(function (data) {
                            console.log(' data ', data);
                        });
                        return [4 /*yield*/, this.LoggerService.postCall(url, datatobesend).then(function (data) {
                                if (!data['err_code']) {
                                    _this.events.publish('user:loggin', data);
                                }
                                else {
                                    _this.presentToast('Invalid login credentials');
                                }
                            }, function (err) {
                                console.log('err ', err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JoomlaLoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    JoomlaLoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [ToastController,
            NavController,
            NavParams,
            LoggerService,
            Events])
    ], JoomlaLoginPage);
    return JoomlaLoginPage;
}());
export { JoomlaLoginPage };
//# sourceMappingURL=joomla-login.js.map