import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso-model';
import { LoginService } from './login-service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private apiUrl = 'http://localhost:8990'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient, private _loginService: LoginService) { }

  getCursos(): Observable<Curso[]> {
     // Obtiene el token y el id_user del servicio de login
     const token = this._loginService.getAuthToken();
     const idUser = this._loginService.getIdUser();

     // Verifica si el token e id_user están disponibles
    if (!token || !idUser) {
      throw new Error('Token o id_user no disponibles.');
    }

    // Configura las cabeceras para incluir el token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Curso[]>(`${this.apiUrl}/auth/cursos/`, { headers, params: { id_user: idUser } });
  }

}
