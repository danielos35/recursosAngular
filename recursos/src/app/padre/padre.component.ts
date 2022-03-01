import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})

export class PadreComponent implements OnInit {
  constructor() { }

  // Mensaje para enviar a componente hijo
  padre:string = 'Mensaje Enviado al hijo, desde el padre'; 

  ngOnInit(): void {
  }

}
