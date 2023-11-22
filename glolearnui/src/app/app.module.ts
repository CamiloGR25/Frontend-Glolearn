import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosComponent } from './components/cursos/cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { IngresarComponent } from './components/usuario/ingresar/ingresar.component';
import { CrearCursoComponent } from './components/cursos/crear-curso/crear-curso.component';
import { EliminarCursoComponent } from './components/cursos/eliminar-curso/eliminar-curso.component';
import { ToastrModule } from 'ngx-toastr';
import { InscribirCursoComponent } from './components/usuario/inscribir-curso/inscribir-curso.component';
import { MisCursosComponent } from './components/usuario/mis-cursos/mis-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,//declarar el nuevo componente cursos
    RegistrarComponent,
    IngresarComponent,
    InicioComponent,
    MenuComponent,
    CrearCursoComponent,
    EliminarCursoComponent,
    InscribirCursoComponent,
    MisCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
