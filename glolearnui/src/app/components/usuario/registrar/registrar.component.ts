import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  formulario:FormGroup;
  usuarioService=inject(UsuarioService)
  constructor(){
    this.formulario=new FormGroup({ //Creamos un objeto de tipo formulario con sus atributos que recibiremos
      nombre:new FormControl(),
      apellido: new FormControl(),
      correo: new FormControl(),
      cargo: new FormControl(),
      identificacion: new FormControl(),
      numIdentificacion: new FormControl(),
      fechaNacimiento: new FormControl(),
      nombreUsuario: new FormControl(),
      contraseña: new FormControl()
    })
  }
  onSubmit(){
    this.usuarioService.registrar(this.formulario.value);
  }
}
