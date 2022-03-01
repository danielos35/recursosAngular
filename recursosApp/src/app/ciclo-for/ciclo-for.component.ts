import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-for',
  templateUrl: './ciclo-for.component.html',
  styleUrls: ['./ciclo-for.component.css']
})
export class CicloForComponent implements OnInit {

  listado=[
    {
      titulo:"La biblia", 
      identificador:"Identificador"
    }, 
    {
      titulo:"La divina comedia", 
      identificador:"Identificador"
    }, 
    {
      titulo:"Cien años de soledad", 
      identificador:"Identificador"
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
    console.log(this.listado);
    
  }

}
