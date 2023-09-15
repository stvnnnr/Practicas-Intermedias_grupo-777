import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from "../../services/login-service";

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.css']
})
export class DashboardLoginComponent {
  nickname: string = '';
  password: string = '';

  constructor(private authService: LoginService, private _router: Router) { } // Inyecta el servicio AuthService

  iniciarSesion(crearForm: NgForm): void {
    this.nickname = crearForm.value.nickname;
    this.password = crearForm.value.password;

    // Llama al método login del servicio LoginService
    this.authService.login(this.nickname, this.password).subscribe(
      res => {
        var respuesta: string = res["id_user_type"];
        var id_user: string = res["dpi"]; // Identificador del usuario para las peticiones de su dashboard
        const token = res['token']; // Asume que el backend devuelve el token en la respuesta

        console.log("respuesta" + respuesta);
        console.log('Token recibido: ' + token);

        // Utiliza un objeto de rutas para mapear id_user_type a rutas
        const routesMap: { [key: string]: string } = {
          "1": "admin",
          "2": "profesores",
          "3": "alumnos"
        };

        // Verifica si id_user_type existe en el mapa de rutas
        if (routesMap[respuesta]) {
          // Ruta válida, redirige al usuario
          this._router.navigate([routesMap[respuesta]]);
          // Almacena el token y el id_user en localStorage
          this.authService.setAuthToken(token);
          this.authService.setIdUser(id_user);
        } else {
          // Id_user_type no encontrado en el mapa, muestra un mensaje de error
          alert("Usuario o contraseña no valido");
          crearForm.reset();
          this._router.navigate(['login']);
        }

      }, (error) => {
        console.error(error);
      }
    )

  }
}
