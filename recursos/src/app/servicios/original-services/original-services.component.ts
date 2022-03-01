import { Component, OnInit } from '@angular/core';
import { servicesTest } from './servicios';
import { servicios } from '../services';

@Component({
  selector: 'app-original-services',
  templateUrl: './original-services.component.html',
  styleUrls: ['./original-services.component.css'], 
  providers: [servicesTest,servicios]
})
export class OriginalServicesComponent implements OnInit {
  
  names:Array<string> = []; 
  constructor(public nombre:servicesTest, public testServicios:servicios) { }
  
  ngOnInit(): void {
    this.nombre.verConsola()
    this.testServicios.enviarAConsola('Hola Mundo')
    this.names = this.testServicios.namesStudents

  }

  asignarNombres(){
    
    
  }

  
  
}
