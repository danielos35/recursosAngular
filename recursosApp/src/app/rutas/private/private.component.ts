import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements OnInit {
  // Para usar rutas en este componente devemos insertar el servicio router;
  constructor(private ruta: Router) {}
  
  id= 2; 

  ngOnInit(): void {}

  volverHome() {
    // Con el metodo navigate vamos a la ruta indicada
    this.ruta.navigate(['']);
  }
  irIntranet() {
    // Con el metodo navigate vamos a la ruta indicada
    this.ruta.navigate(['./intranet']);
  }
}
