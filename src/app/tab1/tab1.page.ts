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
  canciones: any;

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
obtenerCanciones(): Promise<any> {
  return new Promise((resolve, reject) => {
    this.httpClient.post('http://localhost:3000/cancion/consultar',{ }).subscribe(res => {
      console.log('respuesta', res);
      this.canciones = res;
      console.log(this.canciones);
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

CambiarAudio(cancion, titulo, artista){
  console.log(cancion);
  this.direccionAudio = cancion;
  document.getElementById('titulo').innerHTML = titulo;
  document.getElementById('artista').innerHTML = artista;

}

ngOnInit() {
  //his.ObtenerCanciones();
this.obtenerCanciones();
}
}
