import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAlumnosComponent } from './components/dashboard-alumnos/dashboard-alumnos.component';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';
import { DashboardProfesoresComponent } from './components/dashboard-profesores/dashboard-profesores.component';
import { DashboardAdmonComponent } from './components/dashboard-admon/dashboard-admon.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'alumnos', component: DashboardAlumnosComponent
  },
  {
    path: 'login', component: DashboardLoginComponent
  },
  {
    path: 'profesores', component: DashboardProfesoresComponent
  },
  {
    path: 'admin',
    component: DashboardAdmonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
