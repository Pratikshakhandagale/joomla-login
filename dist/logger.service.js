var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
var LoggerService = /** @class */ (function () {
    function LoggerService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.getConfigs();
    }
    LoggerService.prototype.getConfigs = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('assets/config/config.json', _this.httpOptions).subscribe(function (data) {
                resolve(data);
                console.log({ data: data });
            }, function (err) {
                console.log(err);
            });
        });
    };
    LoggerService.prototype.postCall = function (posturl, data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(posturl, data, _this.httpOptions)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err.message);
            });
        });
    };
    LoggerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], LoggerService);
    return LoggerService;
}());
export { LoggerService };
//# sourceMappingURL=logger.service.js.map