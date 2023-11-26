import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {UsuarioService} from 'src/app/services/usuario.service'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnDestroy{
  constructor(@Inject(DOCUMENT) private document: Document,
    private authenticationService: UsuarioService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.document.body.classList.remove('bg-gradient-primary');
  }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary');
  }

  onLogin(form: any): void {
    console.log(form.value);
    this.authenticationService.login(form.value).subscribe(
      (res) => {
        localStorage.setItem('accessToken',JSON.parse(JSON.stringify(res)).accessToken);
        localStorage.setItem('cargo',JSON.parse(JSON.stringify(res)).cargo);
        localStorage.setItem('_id',JSON.parse(JSON.stringify(res))._id);
        this.router.navigateByUrl('/cursos'); 
      }
    );
  }
}
