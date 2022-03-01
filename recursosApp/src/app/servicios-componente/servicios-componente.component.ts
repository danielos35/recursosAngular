import { Component, OnInit } from '@angular/core';
import { TestServicioService } from '../test-servicio.service';

@Component({
  selector: 'app-servicios-componente',
  templateUrl: './servicios-componente.component.html',
  styleUrls: ['./servicios-componente.component.css']
})
export class ServiciosComponenteComponent implements OnInit {

  // La inserción de un servicio la hacemos
  constructor(public servicio:TestServicioService) { }

  ngOnInit(): void {

    this.servicio.alerta('HolaMundo')
  }

}
