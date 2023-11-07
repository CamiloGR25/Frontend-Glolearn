import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private httClient=inject(HttpClient);
  private apiUrl='/glolearn/usuarios/registrar'
  constructor() { }

  async registrar(formValor:any){
    return firstValueFrom(
      await this.httClient.post<any>(`${this.apiUrl}`,formValor)
    )
  }
}
