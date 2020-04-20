import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras} from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuariologeadoService {
  usuario: any;
 /* password: string;
  mostrarContrasena: boolean;*/
  constructor(private router: Router, private httpClient: HttpClient) {
    this.usuario = [];
   }

  Logear(usuario, password) {

    console.log(usuario);
    console.log(password);

    return this.httpClient.post('http://localhost:3000/login', {
    email: usuario,
   password
  }).subscribe(
        data => {
          console.log(data);
          this.usuario.push(data);
          console.log(this.usuario);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: true,          
          });
          this.router.navigate(['tabs', 'tab2' ]);

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
ActualizarRole(id, role) {
  return this.httpClient.put('http://localhost:3000/usuario/actualizar', {
    id,
    role
  }).subscribe(
        data => {
          console.log(data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Actualizado',
            showConfirmButton: true,          
          });

        },
        (err) => {
          console.log(err);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al Actualizar',
            text: err.error.err.message,
            showConfirmButton: true         
          });

        }


      );

}

CerrarSesion(){
  this.usuario = [];
  //this.usuario.
  this.router.navigate(['login']);
}
redirect() {
  this.router.navigate(['registrarse']);

}
}
