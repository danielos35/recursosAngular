import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamic-placeholder',
  templateUrl: './dinamic-placeholder.component.html',
  styleUrls: ['./dinamic-placeholder.component.css']
})
export class DinamicPlaceholderComponent implements OnInit {
  statusPlaceholder:string="Visible";
  
  placeholderNombre(){
  
      this.statusPlaceholder = "Nombre";

  }

  placeholderApellido(){

    this.statusPlaceholder = "Apellido"
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
