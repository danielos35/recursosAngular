import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  
  variableNumerica:number = 12; 
  variableString:string = "Hola Mundo"; 
  variableBooleana:boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
