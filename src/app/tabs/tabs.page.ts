import { Component, OnInit } from '@angular/core';
import { UsuariologeadoService } from '../services/usuariologeado.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
   userRole: string;
   admin: boolean; 
   root: boolean;
  constructor(public UsuarioLogeado: UsuariologeadoService) {
    this.userRole = this.UsuarioLogeado.usuario[0].usuario.role;
    if (this.userRole === 'ADMIN_ROLE') {
     this.admin = true;
    } else{
      
      if (this.userRole === 'ROOT_ROLE') {
        this.admin = true;
        this.root = true;
       } else{
         this.admin =  false;
         this.root = false;
       }
    }
    
  }
  ngOnInit() {
    console.log(this.userRole);
  }
}
