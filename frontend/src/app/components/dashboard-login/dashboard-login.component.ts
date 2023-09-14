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
        var respuesta: string = res["idtype"];
        console.log("respuesta" + respuesta);
        if (respuesta == "1") {
          this._router.navigate(['admin']);
        } else if (respuesta == "2") {
          this._router.navigate(['profesores']);
        } else if (respuesta == "3") {
          this._router.navigate(['alumnos']);
        } else {
          alert("Usuario o contraseña no valido");
          crearForm.reset();
          this._router.navigate(['login']);

        }
      }, (error) => {
        console.error(error);
      }
    )

    console.log(this.nickname);
    console.log(this.password);

  }
}
