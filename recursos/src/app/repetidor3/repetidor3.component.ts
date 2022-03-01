import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repetidor3',
  templateUrl: './repetidor3.component.html',
  styleUrls: ['./repetidor3.component.css']
})
export class Repetidor3Component implements OnInit {
  repetidor:string = "HolaMundo"; 
  valor:string = ''

  constructor() { }

  ngOnInit(): void {
    
    
  }

  imprimir(){
    console.log(this.valor);
    
  }
}
