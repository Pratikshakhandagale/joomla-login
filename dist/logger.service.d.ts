import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
export declare class LoggerService {
    http: HttpClient;
    httpOptions: any;
    constructor(http: HttpClient);
    getConfigs(): Promise<{}>;
    postCall(posturl: string, data: any): Promise<{}>;
}
