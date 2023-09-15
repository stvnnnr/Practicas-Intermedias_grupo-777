import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-dashboard-admon',
  templateUrl: './dashboard-admon.component.html',
  styleUrls: ['./dashboard-admon.component.css']
})
export class DashboardAdmonComponent {
  //Creacion de array donde almacenar los usuarios
  usuarios: any[] = [];
  info: any;
  usuarioID:any = localStorage.getItem('id');


  constructor(private backend: BackendService, private router: Router, private ruta: ActivatedRoute) { }

  ngOnInit() {

    this.backend.Admin().subscribe(
      res => {
        this.info = res
        for (let i = 0; i < this.info.length; i++) {
          this.usuarios.push(this.info[i])
        }
        console.log(this.usuarios);
      },
      err => {
        console.log(err)
      }
    );

  }

  Logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
