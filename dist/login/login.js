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
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
var LoginPage = /** @class */ (function () {
    function LoginPage(toastCtrl, navCtrl, navParams, LoggerService, fb) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LoggerService = LoggerService;
        this.fb = fb;
        this.isCustom = true;
        this.loginForm = this.fb.group({
            siteurl: [""],
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
        this.LoggerService.getConfigs().then(function (data) {
            if (data['custom_app']['LOGINURL'].length > 0) {
                _this.isCustom = false;
                _this.apiBase = data['custom_app']['LOGINURL'];
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.demoLogin = function () {
        //  this.navCtrl.push(AcademyComponent);
        this.loginForm = this.fb.group({
            siteurl: ["http://app.cloudaccess.host"],
            username: ["Ruby", Validators.required],
            password: ["abcd1234", Validators.required]
        });
    };
    LoginPage.prototype.doLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, datatobesend;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loginForm.value.siteurl = (this.isCustom) ? this.loginForm.value.siteurl : this.apiBase;
                        if (!(this.loginForm.valid || (!this.loginForm.valid && this.apiBase))) return [3 /*break*/, 2];
                        url = this.loginForm.value.siteurl + "/index.php?option=com_api&app=users&resource=login&format=raw";
                        datatobesend = 'username=' + this.loginForm.value.username + '&password=' + encodeURIComponent(this.loginForm.value.password);
                        this.LoggerService.getConfigs().then(function (data) {
                            console.log(' data ', data);
                        });
                        return [4 /*yield*/, this.LoggerService.postCall(url, datatobesend).then(function (data) {
                                if (!data['err_code']) {
                                    //this.navCtrl.setRoot(HomePage);
                                }
                                else {
                                    _this.presentToast('Invalid login credentials');
                                }
                            }, function (err) {
                                console.log('err ', err);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        console.log(this.loginForm.valid);
                        this.presentToast('Please enter values');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: './login.html',
        }),
        __metadata("design:paramtypes", [ToastController,
            NavController,
            NavParams,
            LoggerService,
            FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map