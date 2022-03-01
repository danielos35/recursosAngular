import { Component, OnInit } from '@angular/core';
import { servicios } from '../servicios/services';

@Component({
  selector: 'app-repetidor2',
  templateUrl: './repetidor2.component.html',
  styleUrls: ['./repetidor2.component.css']
})
export class Repetidor2Component implements OnInit {
  constructor(public name:servicios) { }
  datosRepetidor:string = ""; 

  repetirYGuardar(event:Event){
    
    this.datosRepetidor = (<HTMLInputElement>event.target).value; 
    
  }


  

  ngOnInit(): void {
    this.name.enviarAConsola('')
  }

}
