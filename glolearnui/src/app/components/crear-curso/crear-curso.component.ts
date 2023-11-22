import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {

  cursoForm: any= this.formBuilder.group({
    nombre:'',
    descripcion:'',
    instructor:'',
    prerrequisitos:'',
    duracion:0
  })
  editCurso: boolean= false;
  idCurso:any

  constructor(
    private cursoService: CursosService,
    private formBuilder: FormBuilder,
    private router: Router
  ){  
  }

  nuevoCursoEntrada(){
    this.cursoService.nuevoCurso(localStorage.getItem('accessToken'), this.cursoForm.value).subscribe(
      ()=>{
        alert("curso registrado")
        this.router.navigateByUrl('/cursos');
      }
    )
  }
}
