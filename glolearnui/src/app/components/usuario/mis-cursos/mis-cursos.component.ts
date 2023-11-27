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
    this.usuarioService.getCursosUsuarioData(localStorage.getItem("_id")).subscribe((data:{})=>{this.cursosID=JSON.parse(JSON.stringify(data)).cursos
      console.log(this.cursosID)
    })
    
    this.cursosService.getTodosCursosData().subscribe((data:{})=>{this.cursosLista=data
    console.log(this.cursosLista)
    })
    
  }
  
  entrarCurso(){
    alert("Entrando al curos...")
  }
}
