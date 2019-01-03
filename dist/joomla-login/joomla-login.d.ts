import { LoggerService } from './../logger.service';
import { NavController, NavParams, ToastController, Events } from 'ionic-angular';
export declare class JoomlaLoginPage {
    toastCtrl: ToastController;
    navCtrl: NavController;
    navParams: NavParams;
    LoggerService: LoggerService;
    events: Events;
    apiBase: any;
    isCustom: boolean;
    customData: any;
    datatobesend: any;
    username: string;
    password: string;
    siteurl: string;
    constructor(toastCtrl: ToastController, navCtrl: NavController, navParams: NavParams, LoggerService: LoggerService, events: Events);
    ionViewDidLoad(): void;
    demoLogin(): void;
    doLogin(): void;
    Login(): Promise<void>;
    presentToast(message: string): void;
}
