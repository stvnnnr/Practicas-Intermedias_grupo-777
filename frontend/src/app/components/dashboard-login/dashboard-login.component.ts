import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.css']
})
export class DashboardLoginComponent {
  nickname: string = '';
  password: string = '';

  iniciarSesion(crearForm: NgForm): void{
    this.nickname = crearForm.value.nickname;
    this.password = crearForm.value.password;

    console.log(this.nickname);
    console.log(this.password);

  }
}
