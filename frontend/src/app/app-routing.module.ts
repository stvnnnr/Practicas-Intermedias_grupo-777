import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAlumnosComponent } from './components/dashboard-alumnos/dashboard-alumnos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/alumnos',
    pathMatch:'full'
  },
  {
    path: 'alumnos',
    component: DashboardAlumnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
