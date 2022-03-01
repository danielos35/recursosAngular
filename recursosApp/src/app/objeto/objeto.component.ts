import { Component, OnInit } from '@angular/core';
import { Persona } from '../clases/persona.model';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {
  
  arquitecto:Persona[] =[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
