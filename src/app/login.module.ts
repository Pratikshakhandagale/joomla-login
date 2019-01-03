import { NgModule, ModuleWithProviders } from '@angular/core';
import { JoomlaLoginPage } from './joomla-login/joomla-login';
import { LoggerService } from './logger.service';
import { IonicModule, IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    JoomlaLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(JoomlaLoginPage)
  ],
})
export class JoomlaLoginModule {}
