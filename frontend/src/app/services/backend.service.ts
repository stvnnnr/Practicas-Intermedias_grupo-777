import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login-service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient, private _loginService: LoginService) { }
  URL: string = 'http://localhost:8990';

  Student(){
    // Obtiene el token y el id_user del servicio de login
    const token = this._loginService.getAuthToken();
    const idUser = this._loginService.getIdUser();

    // Verifica si el token e id_user están disponibles
    if (!token || !idUser) {
      throw new Error('Token o id_user no disponibles.');
    }

    return this.http.get(`${this.URL}/datos/${idUser}`)
  }

  Admin(){
    const token = this._loginService.getAuthToken();

    // Verifica si el token e id_user están disponibles
    if (!token) {
      throw new Error('Token o id_user no disponibles.');
    }

    return this.http.get(`${this.URL}/admindatos`)
  }

  UpdateUser(usuario: String, contenido:any) {
    return this.http.put(`${this.URL}/modificar/${usuario}`, contenido);
  }
}
