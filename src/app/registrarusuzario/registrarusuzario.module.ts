import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarusuzarioPageRoutingModule } from './registrarusuzario-routing.module';

import { RegistrarusuzarioPage } from './registrarusuzario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarusuzarioPageRoutingModule
  ],
  declarations: [RegistrarusuzarioPage]
})
export class RegistrarusuzarioPageModule {}
