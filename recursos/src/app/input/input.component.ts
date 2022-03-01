import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  
  fromMaster:string = 'Saludo desde componente Padre'; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
