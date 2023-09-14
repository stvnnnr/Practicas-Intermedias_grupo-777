import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAlumnosComponent } from './components/dashboard-alumnos/dashboard-alumnos.component';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAlumnosComponent,
    DashboardLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Modulo para que reconozca el ngForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
