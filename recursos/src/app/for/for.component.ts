import { Component, OnInit } from '@angular/core';
import { Persona } from './for.model';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  inputNombre:string = ''; 
  inputApellido:string = ''; 
  personas:Persona[] = ([
      // new Persona ('Juan', 'Marquez'),
      // new Persona ('Juan', 'Marquez'), 
      // new Persona ('Juan', 'Marquez'), 
    ])
  

    
  agregarPersona(){
    let personaAgregar = new Persona(this.inputNombre, this.inputApellido); 
    this.personas.push(personaAgregar)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
