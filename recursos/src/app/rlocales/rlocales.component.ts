import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rlocales',
  templateUrl: './rlocales.component.html',
  styleUrls: ['./rlocales.component.css']
})
export class RlocalesComponent implements OnInit {
  
  nombre:string = ''; 
  apellido:string = '   '; 
  asignarNombre(nombre:HTMLInputElement, apellido:HTMLInputElement){

    this.nombre = nombre.value ; 
    this.apellido = apellido.value;
    console.log(this.apellido, this.nombre);
     

  }
  constructor() { }

  ngOnInit(): void {
  }

}
