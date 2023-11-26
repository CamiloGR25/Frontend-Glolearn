import { Component } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent {
  cursosID:any=[];
  cursosLista:any=[];
  
  constructor(
    private usuarioService:UsuarioService,
    private cursosService: CursosService){}

  ngOnInit(){
    this.usuarioService.getCursosUsuarioData(localStorage.getItem("_id")).subscribe((data:{})=>{this.cursosID=data})
    this.cursosService.getTodosCursosData().subscribe((data:{})=>{this.cursosLista=data})//trae los datos de todos los sursos 
    
  }
  
  identificarCursos(){
   
  }
}
