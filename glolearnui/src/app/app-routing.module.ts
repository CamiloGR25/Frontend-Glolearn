import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';

const routes: Routes = [
  {path : 'cursos', component: CursosComponent },
  {path: 'registrar', component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
