import { Component } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { TmplAstDeferredBlockError } from '@angular/compiler';

@Component({
  selector: 'app-inscribir-curso',
  templateUrl: './inscribir-curso.component.html',
  styleUrls: ['./inscribir-curso.component.css']
})
export class InscribirCursoComponent {
  cursosList:any=[];
  idUsuario:any="";
  idCurso:any;
  cursoInscrito:boolean=false;

  constructor(
    private cursosService: CursosService,
    private usuarioService:UsuarioService,
    private toastr: ToastrService,
    ){}
  
  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para aceptar', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => this.inscribirCurso());
  }

  getTodoscursos(){
    this.cursosService.getTodosCursosData().subscribe((data:{})=>{this.cursosList=data})//trae los datos de todos los sursos
  }
  ngOnInit(){
    this.getTodoscursos();
  }

  recibirIdCurso(idCurso:any){
    this.idCurso=idCurso;
    this.idUsuario=localStorage.getItem("_id");
    this.newMessage("Seguro quiere inscribirse al curso")
  }

  inscribirCurso(){
    this.usuarioService.inscribirCurso(this.idUsuario, {codigoCurso: this.idCurso}).subscribe(
      () => {
        //Enviando mensaje de confirmación
        this.cursoInscrito=true
        alert("Inscripción del curso exitosa")
      }
    );
    setTimeout(()=>{
      this.cursoInscrito=false
    },3500);
  }
}
