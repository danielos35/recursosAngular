import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}
  textoCapturado: string;

  ngOnInit(): void {}

  setWindow() {
    alert('Bienvenido');
  }

  capturarEvento(evento: Event) {
    console.log((<HTMLInputElement>evento.target).value);
    this.textoCapturado = (<HTMLInputElement>evento.target).value; 
  }
}
