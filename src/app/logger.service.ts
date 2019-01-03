import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { IResponse } from '../../../node_modules/techjoomla/interfaces/apiresponse'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()

export class LoggerService {
    httpOptions: any;
    constructor(public http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }
        this.getConfigs();
    }

    getConfigs() {
        return new Promise(resolve => {
            this.http.get('assets/config/config.json', this.httpOptions).subscribe(data => {
                resolve(data);
                console.log({ data });
            }, err => {
                console.log(err);
            });
        });
    }

    postCall(posturl : string, data : any) {
        return new Promise(resolve => {
            this.http.post(posturl, data, this.httpOptions)
                .subscribe(
                data => {
                    resolve(data);
                },
                err => {
                    console.log(err.message);
                })
        });
    }



}