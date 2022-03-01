import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijito',
  templateUrl: './hijito.component.html',
  styleUrls: ['./hijito.component.css']
})
export class HijitoComponent implements OnInit {
  @Input() envio:string = ''; 
  @Output() devolver: EventEmitter <string> = new EventEmitter(); 
  saludo:string = '';

  constructor() { }
  


  enviarAlPadre(){
    this.saludo = 'Hola Mundo desde el hijo'; 
    this.devolver.emit(this.saludo)

  }

  ngOnInit(): void {

  }

}
