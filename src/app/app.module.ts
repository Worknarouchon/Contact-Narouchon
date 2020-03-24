import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NumtreePage} from '../pages/numtree/numtree';
import { NumfourPage} from '../pages/numfour/numfour';
import { NumtwoPage} from '../pages/numtwo/numtwo';
import { NumfivePage} from '../pages/numfive/numfive';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NumtreePage,
    NumfourPage,
    NumtwoPage,
    NumfivePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NumtreePage,
    NumfourPage,
    NumtwoPage,
    NumfivePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
