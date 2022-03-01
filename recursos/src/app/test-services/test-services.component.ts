import { Component, OnInit } from '@angular/core';
import { servicios } from '../servicios/services';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css'], 
  providers:[servicios]
})
export class TestServicesComponent implements OnInit {


  // Servicio inyectado
  constructor(public servicios:servicios) { }


  name:string = 'Daniel'; 
  ngOnInit(): void {

    this.servicios.enviarAConsola(this.name)
  }



}
