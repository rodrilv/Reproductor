import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule),
        children: [
          {
            path: 'tab2',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../tab2/tab2.module').then(m => m.Tab2PageModule)
              }
            ]
          }, 
          {
            path: '',
            redirectTo: '/tabs/tab2',
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  {
    path: 'registrarse',
    loadChildren: () => import('../registrarusuzario/registrarusuzario.module').then(m => m.RegistrarusuzarioPageModule),

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
