import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.css'],
})
export class HijoDosComponent {

  // Variable a enviar
  mensaje:string;

  // Agregamos el decorador, e importamos @outloo and event emitter
  @Output() caminoAlPadre = new EventEmitter<string>();

  

  // Creamos función para emitir datos 
  enviarAlPadre(){
    this.caminoAlPadre.emit(this.mensaje); 
    // console.log(this.mensaje);
    
  }

  enviarAlPadreDos(texto:string){
    this.caminoAlPadre.emit(texto)
  }
}
