import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son-calcu',
  templateUrl: './son-calcu.component.html',
  styleUrls: ['./son-calcu.component.css']
})
export class SonCalcuComponent implements OnInit {
  @Input() numUno:number = 0;
  @Input() numDos:number = 0;
  resultado:number = 2; 
  @Output()enviarResultado: EventEmitter<number> = new EventEmitter()


  // Operaciones a devolver
  sumar():void{
  this.resultado = this.numUno + this.numDos;
  }

  restar():void{
    this.resultado = this.numUno - this.numDos;
  }

  multiplicar():void{
    this.resultado = this.numUno * this.numDos;
  }

  dividir():void{
    this.resultado =this.numUno / this.numDos;
  }

  // Devolver resultado
  retorno(){  
    this.enviarResultado.emit(this.resultado)
  }
  constructor() { }

  ngOnInit(): void {
  }
 

  
}
