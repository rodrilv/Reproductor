import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { UsuariologeadoService } from '../services/usuariologeado.service';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  usuarios: any;
  nuevoRole:string;
  constructor(private httpClient: HttpClient,private router: Router, public UsuarioLogeado: UsuariologeadoService) {
    this.usuarios= [];
  }

  MostrarUsuarios() {


    return this.httpClient.post('http://localhost:3000/usuario/consultar', {
  }).subscribe(
        data => {
          console.log(data);
          this.usuarios.push(data);
          console.log(this.usuarios);
        },
        (err) => {
          console.log(err);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            text: err.error.err.message,
            showConfirmButton: true            
          });

        }


      );
}

obtenerCanciones(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.httpClient.post('http://localhost:3000/usuario/consultar',{ }).subscribe(res => {
      console.log('respuesta', res);
      this.usuarios = res;
      console.log(this.usuarios);
      resolve();
    }, err => {
      console.log('error', err);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al Obtener Canciones',
        text: err.error.err.message,
        showConfirmButton: true         
      });
      reject();
    });
  })
}

ActualizarUsuario(id,nombre) {
  console.log(id);
  console.log(nombre);
  console.log(this.nuevoRole);
  Swal.fire({
    title: 'Estas Seguro?',
    text: 'Cambiaras los permisos de ' + nombre,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.value) {
      this.UsuarioLogeado.ActualizarRole(id, this.nuevoRole);
      this.MostrarUsuarios();
      Swal.fire(
        'Exito',
        'Permisos Actualizados',
        'success'
      );
    }
  });
}
ngOnInit() {
  //this.MostrarUsuarios();
  this.obtenerCanciones();
}


}
