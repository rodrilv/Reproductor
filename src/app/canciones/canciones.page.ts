import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.page.html',
  styleUrls: ['./canciones.page.scss'],
})
export class CancionesPage implements OnInit {

titulo: string;
artista: string;
duracion; string;
url: string;
nombreArchivo: string;

constructor(private httpClient: HttpClient, private browser: InAppBrowser){ 
  this.url = '';
}


guardarCancion(){
  this.url = 'https://proyectodbdr.000webhostapp.com/archivos_music/' + this.nombreArchivo;

  return this.httpClient.post('http://localhost:3000/cancion/registrar', 
  { titulo: this.titulo,
    artista: this.artista,
    duracion: this.duracion,
    url: this.url
  }).subscribe(
        data => {
          console.log(data);
          this.titulo = this.artista = this.duracion = this.url = '';
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Exito!',
            text: this.titulo + 'Ha sido registrada con exito',
            showConfirmButton: true  
          });

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

  openHost() {
      this.browser.create('https://files.000webhost.com');
  }
  
  MostrarAviso(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Aviso!',
      text: 'Para poder subir una Cancion asegurate de cargar correctamente el archivo dando click en "Cargar Cancion"',
      showConfirmButton: true  
    });
  }

  ngOnInit() {
    this.MostrarAviso();
  }

}
