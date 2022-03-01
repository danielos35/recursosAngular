import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  fromFather:string = 'Hola mundo'
  fromHijo:string = ''; 
  
  recogerDatosDesdeHijo(dato:string){ 
    this.fromHijo = dato; 
    console.log('Saludos: ', dato);   
  }


  
  constructor() { }

  ngOnInit(): void {
  }


}

