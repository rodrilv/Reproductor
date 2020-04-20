import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { UsuariologeadoService } from '../services/usuariologeado.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  password: string;
  mostrarContrasena: boolean;
  constructor( private router: Router, public UsuarioLogeado: UsuariologeadoService ,private httpClient: HttpClient) { 
    this.mostrarContrasena = false;
  }

  Logear() {

    console.log(this.usuario);
    console.log(this.password);
    this.UsuarioLogeado.Logear(this.usuario,this.password);
/*
    return this.httpClient.post('http://localhost:3000/login', {
    email: this.usuario,
    password: this.password
  }).subscribe(
        data => {
          console.log(data);
          //alert( data.mensaje)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: true,          
          });
          this.router.navigate(['tabs', 'tab1' ]);

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


      );*/
}
redirect() {
    this.UsuarioLogeado.redirect();
  //this.router.navigate(['registrarse']);

}


  ngOnInit() {
  }

}

