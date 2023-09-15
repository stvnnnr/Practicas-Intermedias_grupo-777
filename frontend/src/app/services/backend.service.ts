import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  URL: string = 'http://127.0.0.1:4000';

  Student(usuario: String){
    return this.http.get(`${this.URL}/datos/${usuario}`)
  }

  Admin(){
    return this.http.get(`${this.URL}/admindatos`)
  }

  UpdateUser(usuario: String, contenido:any) {
    return this.http.put(`${this.URL}/modificar/${usuario}`, contenido);
  }
}
