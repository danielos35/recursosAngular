import { Injectable } from '@angular/core';

// Permite insertar servicios dentro de un servicio
@Injectable({
  providedIn: 'root'
})
export class TestServicioService {

  alerta(texto:string){
    alert(texto); 
  }

  // Despues de crear un servicio este se debe de registrar en appModule Providers

  constructor() { }
}
