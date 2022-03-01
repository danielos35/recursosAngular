import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculara-simple',
  templateUrl: './calculara-simple.component.html',
  styleUrls: ['./calculara-simple.component.css']
})
export class CalcularaSimpleComponent implements OnInit {
  numOne:number = 0; 
  numTwo:number = 0; 
  resultado:number = 0;
  
  sumar():void{
   this.resultado = this.numOne + this.numTwo; 
  }

  restar():void{
    this.resultado = this.numOne - this.numTwo; 
  }

  mul():void{
    this.resultado = this.numOne * this.numTwo; 
  }

  div(){

    this.resultado = this.numOne / this.numTwo; 
  }
  
  constructor() {}

  ngOnInit(): void {
  }

}
