import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { LoginService } from 'src/app/services/login-service';

@Component({
  selector: 'app-dashboard-admon',
  templateUrl: './dashboard-admon.component.html',
  styleUrls: ['./dashboard-admon.component.css']
})
export class DashboardAdmonComponent {
  //Creacion de array donde almacenar los usuarios
  usuarios: any[] = [];
  info: any;
  usuarioID: any = localStorage.getItem('id');


  constructor(private backend: BackendService, private router: Router, private ruta: ActivatedRoute, private _loginService: LoginService) { }

  ngOnInit() {

    // Verifica si el token está presente
    const token = this._loginService.getAuthToken();
    if (!token) {
      // Si no hay token, redirige al inicio de sesión (login)
      this.router.navigate(['/login']);
      return; // Detiene la ejecución del código para evitar cargar cursos sin autenticación
    }

    this.backend.Admin().subscribe(
      res => {
        this.info = res
        for (let i = 0; i < this.info.length; i++) {
          this.usuarios.push(this.info[i])
        }
        console.log(this.usuarios);
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
