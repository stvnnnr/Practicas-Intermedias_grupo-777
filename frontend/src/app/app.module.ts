import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAlumnosComponent } from './components/dashboard-alumnos/dashboard-alumnos.component';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';

// Servicios
import { LoginService } from "./services/login-service";
import { DashboardProfesoresComponent } from './components/dashboard-profesores/dashboard-profesores.component';
import { DashboardAdmonComponent } from './components/dashboard-admon/dashboard-admon.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAlumnosComponent,
    DashboardLoginComponent,
    DashboardProfesoresComponent,
    DashboardAdmonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Modulo para que reconozca el ngForm
    HttpClientModule // Modulo para que reconozca HttpClient
  ],
  providers: [ LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
