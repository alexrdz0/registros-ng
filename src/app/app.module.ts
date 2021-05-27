import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { DatosComponent } from './components/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
