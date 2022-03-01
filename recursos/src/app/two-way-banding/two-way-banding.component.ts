import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-two-way-banding',
  templateUrl: './two-way-banding.component.html',
  styleUrls: ['./two-way-banding.component.css'],
})
export class TwoWayBandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Event binding

  nombre: string;
  cambiarNombre(evento: Event) {
    this.nombre = (<HTMLInputElement>evento.target).value;
  }


  // Two way binding
  nombreTWB:string = 'Escribe aquí tu texto' 

}
