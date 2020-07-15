import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StorageProvider } from '../providers/storage/storage';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { Storage, IonicStorageModule } from '@ionic/storage';
import {ActionSheet} from '@ionic-native/action-sheet'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'Liz',
      storeName:'listaContatos',
      driverOrder: ['indexeddb','sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    ActionSheet
  ]
})
export class AppModule {}
