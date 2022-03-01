import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css'],
})
export class InterpolacionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'Daniel';
  num = 0;
  siNo = true;
  arr = [1, 2, 3, 4];
  objeto = {
    nombre: 'Daniel',
    apellido: 'Jose',
  };

  obtenerNumero() {
    return this.num;
  }


  llamarEmpresa(value:string){
    
  }
}

/* la interpolación permite utilizar texto dinamico que vaya cambiando mediant1e se ejecuta la aplicación*/
