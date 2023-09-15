import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { LoginService } from 'src/app/services/login-service';

@Component({
  selector: 'app-dashboard-alumnos',
  templateUrl: './dashboard-alumnos.component.html',
  styleUrls: ['./dashboard-alumnos.component.css']
})
export class DashboardAlumnosComponent {

  //Creacion de array donde almacenar los cursos
  cursos: any[] = [];
  personalinfo: any = {
    name: '',
    lastname: '',
  };
  info: any;
  usuarioID:any = localStorage.getItem('id');

  constructor(private backend: BackendService, private router: Router, private ruta: ActivatedRoute, private _loginService: LoginService) { }

  ngOnInit() {

    // Verifica si el token está presente
    const token = this._loginService.getAuthToken();
    if (!token) {
      // Si no hay token, redirige al inicio de sesión (login)
      this.router.navigate(['/login']);
      return; // Detiene la ejecución del código para evitar cargar cursos sin autenticación
    }

    //donde esta el 16 se debe de cambiar al id del usuario logeado en el local storage
    this.backend.Student().subscribe(
      res => {
        console.log(res),
        this.info = res
        this.personalinfo = this.info[0].student

        for (let i = 0; i < this.info.length; i++) {
          this.cursos.push(this.info[i].course)
        }
        
      },
      err => {
        console.log(err)
      }
    );
  }

  Logout() {
    // Elimina el token y redirige al inicio de sesión
    this._loginService.removeAuthToken();
    this._loginService.removeIdUser();
    this.router.navigate(['/login']);
  }

}
