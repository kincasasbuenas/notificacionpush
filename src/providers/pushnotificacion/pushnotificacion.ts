import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform  } from 'ionic-angular';

/*
  Generated class for the PushnotificacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushnotificacionProvider {

  constructor(private oneSignal: OneSignal, private platform: Platform) {
    console.log('Hello PushnotificacionProvider Provider');
  }

  init_push(){

    if (this.platform.is('cordova')) {
      this.oneSignal.startInit('5bcbc896-b324-4b43-9031-bddc9d2427d5', '60966387817');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
        console.log('notificacion recibida');
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('notificacion abierta');
      });

      this.oneSignal.endInit();
    }
    else{
      console.warn('estas en el navegador, solo funciona en dispositivos mobiles');
    }
    
  }
}
