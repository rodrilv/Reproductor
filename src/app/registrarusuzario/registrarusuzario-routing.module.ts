import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarusuzarioPage } from './registrarusuzario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarusuzarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarusuzarioPageRoutingModule {}
