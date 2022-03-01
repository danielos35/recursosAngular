import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent implements OnInit {
  
  idLlegada:number; 

  // inyectamos el activareRoute para 
  constructor(private ruta:Router, public entradaRuta:ActivatedRoute) { }

  ngOnInit(): void {
    //almacenamos los datos en la variable utilizando ActivatedRoute, indicandole el nombre con el que se envia el valor
    this.idLlegada = this.entradaRuta.snapshot.params['id']||0; 
    console.log('numeroDelEmpleado:',this.idLlegada);
    
  }

  volverHome(){
    this.ruta.navigate([""])
  }

  

}
