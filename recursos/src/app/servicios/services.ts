import { Injectable } from '@angular/core';
import { ServicioEsp } from './servicio.service';
export class servicios{
    
  
    constructor(){
        

    }
    
    namesStudents:Array<string> = ['Daniel 1', 'Felipe 2', 'Pedro 3']

    enviarAConsola(mensaje:string):void{
        console.log(mensaje);
        
    }

    
    

}