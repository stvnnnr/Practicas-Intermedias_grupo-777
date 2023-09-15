import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiUrl = 'http://localhost:8990'; // Reemplaza con la URL de tu API
    private authTokenKey = 'auth-token'; // Clave para almacenar el token en localStorage
    private idUserKey = 'id-user'; // Agrega la clave para el id_user_type en localStorage

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, { username, password });
    }

    // Método para almacenar el token en localStorage
    setAuthToken(token: string): void {
        localStorage.setItem(this.authTokenKey, token);
    }

    // Método para obtener el token desde localStorage
    getAuthToken(): string | null {
        return localStorage.getItem(this.authTokenKey);
    }

    // Método para eliminar el token de localStorage al cerrar sesión
    removeAuthToken(): void {
        localStorage.removeItem(this.authTokenKey);
    }

    setIdUser(idUser: string): void {
        localStorage.setItem(this.idUserKey, idUser);
    }

    getIdUser(): string | null {
        return localStorage.getItem(this.idUserKey);
    }

    removeIdUser(): void {
        localStorage.removeItem(this.idUserKey);
    }
}
