import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import{ModalPage} from './modal/modal.page';



@NgModule({
  declarations: [AppComponent, ModalPage],
  entryComponents: [ModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
  
    AngularFirestoreModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
