import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css'],
})
export class NotificacionesComponent implements OnInit {
  tipoDeDirectiva: string;
  test:boolean = true;

  // Reactivo
  formularioReactivo: FormGroup;

  constructor(public formulario: FormBuilder) {}

  ngOnInit(): void {
    this.formularioReactivo = this.formulario.group({
      tipoDirectivaIn: ['',Validators.required],
    });
  }

  definirDirectiva(event: Event) {
    // Manera tradicional
    // this.tipoDeDirectiva = (<HTMLInputElement>event.target).value;

    // Reactivo
  this.tipoDeDirectiva = this.formularioReactivo.controls.tipoDirectivaIn.value;
  }
}
