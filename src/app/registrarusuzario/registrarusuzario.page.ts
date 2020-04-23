import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-registrarusuzario',
  templateUrl: './registrarusuzario.page.html',
  styleUrls: ['./registrarusuzario.page.scss'],
})
export class RegistrarusuzarioPage implements OnInit {
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
  confirmacion: string;

  constructor(private router: Router,  private httpClient: HttpClient) { }

  Registrar() {

    if(this.password === this.confirmacion){

    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.password);
    console.log(this.email);
    console.log(this.confirmacion);


    return this.httpClient.post('http://localhost:3000/usuario/registrar', { 
    nombre: this.nombre,
    apellidos: this.apellidos,
    email: this.email,
    password: this.password
  }).subscribe(
        data => {
          console.log(data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Exito!',
            text: this.nombre + ' Ha sido registrado con exito\n Bienvenido a tu Reproductor Favorito',
            showConfirmButton: true  
          });
          this.router.navigate(['login' ]);
          this.nombre = this.apellidos = this.email =  this.password = '';
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
    }else{
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Error',
        text: 'Por favor confirma tu contraseña',
        showConfirmButton: true
      });
    }
}


  ngOnInit() {
  }

}
