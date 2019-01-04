import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';

const HTML_TEMPLATE = `
<ion-content class="back-image">
<ion-item no-lines [hidden]="!isCustom" float-end>
  <button item-right class="btn-demo" type="submit" (click)="demoLogin()" ion-button text-capitalize outline color="color-white">Demo</button>
</ion-item>
<div class="es-title">
  <img class="img-logo" src="assets/icon/icon.png" />
  <ion-title color="color-white">Welcome to {{appName}}</ion-title>
</div>
<ion-list no-lines>
    <ion-item [hidden]="!isCustom">
      <ion-input placeholder="Site URL" [(ngModel)]="siteurl" type="url" required></ion-input>
    </ion-item>

    <ion-item>
      <ion-input outline placeholder="Username" [(ngModel)]="username" type="text" required></ion-input>
    </ion-item>

    <ion-item>
      <ion-input #input placeholder="Password" [(ngModel)]="password" type="{{hidePassword}}" required></ion-input>
      <button (click)="showPassword()" type="button" ion-button item-right large clear>
            <ion-icon color="color-white" name="{{passwordIcon}}"></ion-icon>						
      </button>
   </ion-item>

    <ion-row padding>
      <button text-capitalize type="submit" (click)="doLogin()" ion-button block color="clr-button">Login</button>
    </ion-row>
</ion-list>
</ion-content>
`;

const CSS_STYLE = `
.item-ios.item-label-stacked .text-input, .item-ios.item-label-floating .text-input, .item-md.item-label-stacked .text-input, .item-md.item-label-floating .text-input {
  margin-top: 26px;
  margin-bottom: 7px;
  font-weight: 600 !important;
}
.es-title {
  margin-top: 20% !important;
  margin-bottom: 5%;
}
.img-logo {
  height: 15vw;
  width: 15vw;
  margin-bottom: 8px;
}
img {
  display: block;
  margin: 0 auto;
  width:70%;
}
.toolbar-title-md, .toolbar-title-ios {
  text-align: center!important;	
  font-size: 2.0rem; 
}
ion-input {
  border-bottom: 0.5px solid map-get($colors, primary);
}
.button-large-md, .button-large-ios {
  height: 1.8em !important;	
}
.scroll-content{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: block;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  contain: size style layout;
  padding-bottom: 0 !important;
}
`;

@IonicPage()
@Component({
  selector: 'page-login',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class JoomlaLoginPage {
  apiBase: any;
  isCustom: boolean = true;
  public customData: any;
  datatobesend: any;
  username: string = '';
  password: string = '';
  siteurl: string = '';
  loginUrl:string = "/index.php?option=com_api&app=users&resource=login&format=raw";
  appName: string ='EasySocial';
  passwordIcon: string = 'eye-off';
	hidePassword: string = 'password';
  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public LoggerService: LoggerService,
    public events: Events
  ) {

    this.LoggerService.getConfigs().then(
      (data: any) => {
        if (data['custom_app']['LOGINURL'].length > 0) {
          this.isCustom = false;
          this.apiBase = data['custom_app']['LOGINURL'];
        }
        this.appName = data['custom_app']['APPNAME'];
        this.loginUrl = data['custom_app']['LOGIN_API'];
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  demoLogin() {
    this.username = 'Ruby';
    this.password = "abcd1234";
    this.siteurl = 'http://app.cloudaccess.host';
  }

  showPassword() {
		this.hidePassword = this.hidePassword === 'password' ? 'text' : 'password';
		this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';		
	}
   doLogin() {
    if (!this.siteurl) {
      this.presentToast("Site url can't be blank");
    } else if (this.siteurl != '' && !this.siteurl.match(/^(https?:\/\/)/)) {
      this.presentToast('Please enter valid URL');
    } else if (!this.username) {
      this.presentToast("Username can't be blank");
    } else if (!this.password) {
      this.presentToast("Password can't be blank");
    } else {
      this.Login();
    }
  }

  async Login() {
    this.siteurl = (this.isCustom) ? this.siteurl : this.apiBase;
    //this.navCtrl.setRoot(HomePage);

    let url = this.siteurl + this.loginUrl; 
    let datatobesend = 'username=' + this.username + '&password=' + encodeURIComponent(this.password);

    this.LoggerService.getConfigs().then(data => {
      console.log(' data ', data);
    });
    await this.LoggerService.postCall(url, datatobesend).then(
      (data: any) => {
        if (!data['err_code']) {
          this.events.publish('user:loggin', data);
        }
        else {
          this.presentToast(data['err_msg']);
        }
      }, err => {
        console.log('err ', err);
      });
  }

  presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
