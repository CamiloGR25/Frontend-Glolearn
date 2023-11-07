import { Component } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursosList:any=[];
  constructor(private cursosService: CursosService){}
  
  getTodoscursos(){
    this.cursosService.getTodosCursosData().subscribe((data:{})=>{this.cursosList=data})//trae los datos de todos loc sursos
  }
  ngOnInit(){
    this.getTodoscursos();
  }
}
