import { Component, inject } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  formulario:any=this.formbuilder.group({
    nombre:"",
    apellido:"",
    correo:"",
    cargo:"",
    identificacion:"",
    numIdentificacion:0,
    fechaNacimiento: Date,
    nombreUsuario:"",
    contraseña:""
  });
  usuarioService=inject(UsuarioService)
  constructor(private formbuilder:FormBuilder){
    
  }
  onSubmit(){
    this.usuarioService.registrar(this.formulario.value);
  }
}
