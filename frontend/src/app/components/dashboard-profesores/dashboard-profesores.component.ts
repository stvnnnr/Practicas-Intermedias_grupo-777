import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso-model';
import { CursosService } from 'src/app/services/cursos-service';

@Component({
  selector: 'app-dashboard-profesores',
  templateUrl: './dashboard-profesores.component.html',
  styleUrls: ['./dashboard-profesores.component.css']
})
export class DashboardProfesoresComponent {

  cursos: Curso[] = [];

  constructor(private _servicioCurso: CursosService) { }

  ngOnInit() {

    /*this.cursos = [
      {
        id_course: 1,
        name: 'Curso 1',
        start_time: '09:00 AM',
        end_time: '11:00 AM',
        id_professor: '1'
      },
      {
        id_course: 2,
        name: 'Curso 2',
        start_time: '02:00 PM',
        end_time: '04:00 PM',
        id_professor: '1'
      },
      {
        id_course: 3,
        name: 'Curso 3',
        start_time: '09:00 AM',
        end_time: '11:00 AM',
        id_professor: '1'
      },
      {
        id_course: 4,
        name: 'Curso 4',
        start_time: '06:00 PM',
        end_time: '08:00 PM',
        id_professor: '1'
      }
    ];*/

    this._servicioCurso.getCursos(1).subscribe(
      (res: Curso[]) => {
        this.cursos = res
      },
      (error) => {
        console.error('Error al obtener la lista de cursos:', error);
      }
    );
  }
}
