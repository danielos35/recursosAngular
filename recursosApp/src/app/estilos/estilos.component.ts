import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

  entrada:string; 
  comprobacion = false; 
  constructor() { }

  ngOnInit(): void {
  }

}
