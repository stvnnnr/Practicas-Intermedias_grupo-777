import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAlumnosComponent } from './components/dashboard-alumnos/dashboard-alumnos.component';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
