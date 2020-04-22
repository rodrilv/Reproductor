import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicModule } from '@ionic/angular';
import { CancionesPageRoutingModule } from './canciones-routing.module';
import { CancionesPage } from './canciones.page';

@NgModule({
  imports: [
    //InAppBrowser,
    CommonModule,
    FormsModule,
    IonicModule,
    CancionesPageRoutingModule
  ],
  declarations: [CancionesPage]
})
export class CancionesPageModule {}
