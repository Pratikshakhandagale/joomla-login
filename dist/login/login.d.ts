import { LoggerService } from './../logger.service';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
export declare class LoginPage {
    toastCtrl: ToastController;
    navCtrl: NavController;
    navParams: NavParams;
    LoggerService: LoggerService;
    fb: FormBuilder;
    apiBase: any;
    isCustom: boolean;
    customData: any;
    datatobesend: any;
    loginForm: any;
    constructor(toastCtrl: ToastController, navCtrl: NavController, navParams: NavParams, LoggerService: LoggerService, fb: FormBuilder);
    ionViewDidLoad(): void;
    demoLogin(): void;
    doLogin(): Promise<void>;
    presentToast(message: string): void;
}
