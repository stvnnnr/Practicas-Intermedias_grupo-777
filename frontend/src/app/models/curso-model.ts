export class Curso{
    id_course: number;
    name: string;
    start_time: string;
    end_time: string;
    id_professor: string;

    constructor(id:number, nombre:string, inicio: string, termina: string, id_profesor: string){
        this.id_course = id;
        this.name = nombre;
        this.start_time = inicio;
        this.end_time = termina;
        this.id_professor = id_profesor;
    }

}