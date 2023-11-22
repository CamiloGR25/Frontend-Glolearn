import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.css']
})
export class EliminarCursoComponent {
  cursosList:any=[];
  cursoEliminado:boolean=false;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    ){}
  
  getTodoscursos(){
    this.cursosService.getTodosCursosData().subscribe((data:{})=>{this.cursosList=data})//trae los datos de todos loc sursos
  }
  ngOnInit(){
    this.getTodoscursos();
  }

  recibirIdCurso(idCurso:any){
    console.log(idCurso)
    this.newMessage("Seguro quiere eliminar el curso", idCurso)
  }

  newMessage(messageText: string, id:any) {
    this.toastr.error('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => this.eliminarCurso(id));
  }

  eliminarCurso(id:any){
    this.cursosService.eliminarCurso(id).subscribe(()=>{
      //window.location.reload();
      this.cursoEliminado=true;
    })
  }
}

