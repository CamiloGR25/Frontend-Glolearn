import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresarComponent } from './components/usuario/ingresar/ingresar.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';

const routes: Routes = [
  {path : 'cursos', component: CursosComponent },
  {path: 'registrar', component: RegistrarComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'inicio', component:InicioComponent},
  {path: '', component:InicioComponent},
  {path: 'crear/curso', component:CrearCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
