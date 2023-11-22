import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresarComponent } from './components/usuario/ingresar/ingresar.component';
import { CrearCursoComponent } from './components/cursos/crear-curso/crear-curso.component';
import { EliminarCursoComponent } from './components/cursos/eliminar-curso/eliminar-curso.component';
import { InscribirCursoComponent } from './components/usuario/inscribir-curso/inscribir-curso.component';
import { MisCursosComponent } from './components/usuario/mis-cursos/mis-cursos.component';

const routes: Routes = [
  {path : 'cursos', component: CursosComponent },
  {path: 'registrar', component: RegistrarComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'inicio', component:InicioComponent},
  {path: '', component:InicioComponent},
  {path: 'crear/curso', component:CrearCursoComponent},
  {path: 'eliminar/curso', component:EliminarCursoComponent},
  {path: 'inscribir_curso', component:InscribirCursoComponent},
  {path: 'mis_curso', component:MisCursosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
