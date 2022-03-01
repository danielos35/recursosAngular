import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }
  numberOne:number = 0
  numberTwo:number = 0;
  resultado:number = 0; 

  asignarRetorno(numero:number){  
    this.resultado = numero; 
  }

  ngOnInit(): void {
  }

}
