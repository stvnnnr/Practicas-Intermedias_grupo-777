import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso-model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private apiUrl = 'http://localhost:8990'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getCursos(id_profesor: number): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/auth/cursos/` + id_profesor);
  }
}
