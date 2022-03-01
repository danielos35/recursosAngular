import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-apadre',
  templateUrl: './hijo-apadre.component.html',
  styleUrls: ['./hijo-apadre.component.css'],
})
export class HijoAPadreComponent implements OnInit {
 
  // Crear donde almacenar los datos que se reciben
  datoRecibido:string;
  recibirDatosDesdeElHijo(valor:string){
    this.datoRecibido = valor;
  }

  ngOnInit(): void {}
}
