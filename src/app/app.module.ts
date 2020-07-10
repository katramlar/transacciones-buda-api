import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TransaccionService } from './servicios/transaccion.service';

import { AppComponent } from './app.component';
import { DatosComponent } from './componentes/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TransaccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
