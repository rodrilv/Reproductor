import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{ 
  direccionAudio: string;
  canciones: Array<any>;

  constructor( private httpClient: HttpClient) {
    this.direccionAudio = '';
    this.canciones = [];
  }

ObtenerCanciones(){
  return this.httpClient.post('http://localhost:3000/cancion/consultar', { 
  }).subscribe(
        data => {
          console.log(data);
          this.canciones.push(data);
          console.log(this.canciones);
        },
        (err) => {
          console.log(err);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al Obtener Canciones',
            text: err.error.err.message,
            showConfirmButton: true         
          });

        }


      );

}

CambiarAudio(cancion, titulo, artista){
  this.direccionAudio = cancion;
  document.getElementById('titulo').innerHTML = titulo;
  document.getElementById('artista').innerHTML = artista;

}

ngOnInit() {
  this.ObtenerCanciones();
}
}
