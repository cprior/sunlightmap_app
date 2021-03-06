import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { ScreenorientationProvider } from '../providers/screenorientation/screenorientation';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public so: ScreenorientationProvider,
    public conn: ConnectivityServiceProvider) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.conn.monitor();
    });

  }
}
