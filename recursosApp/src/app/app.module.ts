import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { NotificacionesComponent } from './directivas/notificaciones/notificaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CicloForComponent } from './ciclo-for/ciclo-for.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { EstilosComponent } from './estilos/estilos.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { PadreComponent } from './comunicacion/padre/padre.component';
import { HijoComponent } from './comunicacion/padre/hijo/hijo.component';
import { HijoAPadreComponent } from './comunicacion/hijo-apadre/hijo-apadre.component';
import { HijoDosComponent } from './comunicacion/hijo-apadre/hijo-dos/hijo-dos.component';
import { TestServicioService } from './test-servicio.service';
import { ServiciosComponenteComponent } from './servicios-componente/servicios-componente.component';
import { RutasComponent } from './rutas/rutas.component';
import { HomeComponent } from './rutas/home/home.component';
import { IntranetComponent } from './rutas/intranet/intranet.component';
import { PrivateComponent } from './rutas/private/private.component';
import { RouterModule, Routes } from '@angular/router';

// Para rutas creamos una constante de arreglo de tipo routes
const appRoute: Routes = [
  { path: '', component: HomeComponent },
  // Se debe preparar la url para poder recibir información
  { path: 'intranet/:id', component: IntranetComponent },
  { path: 'private', component: PrivateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    NotificacionesComponent,
    CicloForComponent,
    ObjetoComponent,
    EstilosComponent,
    ComunicacionComponent,
    PadreComponent,
    HijoComponent,
    HijoAPadreComponent,
    HijoDosComponent,
    ServiciosComponenteComponent,
    RutasComponent,
    HomeComponent,
    IntranetComponent,
    PrivateComponent,
  ],
  imports: 
  [BrowserModule,
  FormsModule, 
  ReactiveFormsModule, 
// Para usar rutas debemos importar el router module
RouterModule.forRoot(appRoute)
],
  providers: [TestServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
