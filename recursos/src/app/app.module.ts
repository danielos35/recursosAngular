import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepetidorComponent } from './repetidor/repetidor.component';
import { Repetidor2Component } from './repetidor2/repetidor2.component';
import { VariablesComponent } from './variables/variables.component';
import { HabilitarButtomComponent } from './habilitar-buttom/habilitar-buttom.component';
import { PrintWButtomComponent } from './print-wbuttom/print-wbuttom.component';
import { DinamicPlaceholderComponent } from './dinamic-placeholder/dinamic-placeholder.component';
import { Repetidor3Component } from './repetidor3/repetidor3.component';
import { FormsModule } from '@angular/forms';
import { CalcularaSimpleComponent } from './calculara-simple/calculara-simple.component';
import { IfComponent } from './if/if.component';
import { ElseComponent } from './else/else.component';
import { ForComponent } from './for/for.component';
import { InputComponent } from './input/input.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { SonComponent } from './input/son/son.component';
import { OutputComponent } from './output/output.component';
import { HijitoComponent } from './output/hijito/hijito.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SonCalcuComponent } from './calculadora/son-calcu/son-calcu.component';
import { RlocalesComponent } from './rlocales/rlocales.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestServicesComponent } from './test-services/test-services.component';
import { servicios } from './servicios/services';
import { OriginalServicesComponent } from './servicios/original-services/original-services.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { BindingComponent } from './binding/binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBandingComponent } from './two-way-banding/two-way-banding.component';

@NgModule({
  declarations: [
    AppComponent,
    RepetidorComponent,
    Repetidor2Component,
    VariablesComponent,
    HabilitarButtomComponent,
    PrintWButtomComponent,
    DinamicPlaceholderComponent,
    Repetidor3Component,
    CalcularaSimpleComponent,
    IfComponent,
    ElseComponent,
    ForComponent,
    InputComponent,
    HijoComponent,
    PadreComponent,
    SonComponent,
    OutputComponent,
    HijitoComponent,
    CalculadoraComponent,
    SonCalcuComponent,
    RlocalesComponent,
    ViewChildComponent,
    TestServicesComponent,
    OriginalServicesComponent,
    InterpolacionComponent,
    BindingComponent,
    EventBindingComponent,
    TwoWayBandingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [servicios],
  bootstrap: [AppComponent],
})
export class AppModule {}
