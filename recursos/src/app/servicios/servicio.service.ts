
import { servicios } from './services';
export class ServicioEsp{


    
    constructor(private servicios:servicios){
    
    
    
    }

    generarNombre(){

        this.servicios.enviarAConsola('HolaMundo')
    }






}