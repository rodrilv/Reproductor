import { Component, OnInit } from '@angular/core';
import { UsuariologeadoService } from '../services/usuariologeado.service';
import Swal from 'sweetalert2';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
     usuario: Array<any>;
  constructor(private router: Router, public UsuarioLogeado: UsuariologeadoService ) {
    this.usuario = this.UsuarioLogeado.usuario;
  }
  MostrarUsuario(){
    console.log(this.usuario);

  }
  CerrarSesion(){
    Swal.fire({
      title: 'Salir?',
      text: 'Estas seguro de que quieres cerrar Sesion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir'
    }).then((result) => {
      if (result.value) {
        console.log('Cerrar Sesion');
        this.UsuarioLogeado.CerrarSesion();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nos vemos pronto!',
          showConfirmButton: false,
          timer: 1500
        });    
      }
    });
  }
  ngOnInit() {
    this.MostrarUsuario();
  }
}
