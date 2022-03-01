import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {
   
  
  condicion:boolean = true;

  mostrar():void {
      this.condicion = true; 
  }

  ocultar():void{
  
    this.condicion = false; 

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
