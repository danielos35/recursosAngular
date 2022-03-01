import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilitar-buttom',
  templateUrl: './habilitar-buttom.component.html',
  styleUrls: ['./habilitar-buttom.component.css']
})
export class HabilitarButtomComponent implements OnInit {
  
  // Status del botón
  statusButtom:boolean = true;

  // Botón activado
  buttomOn(){

    this.statusButtom = false

  } 

  // Botón desactivado
  buttomOff(){
    this.statusButtom = true; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
