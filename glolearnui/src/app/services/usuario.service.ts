import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {firstValueFrom} from 'rxjs';
import { User } from '../models/user';
import { Jwtres } from '../models/jwtres';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private httpClient=inject(HttpClient);
  private apiUrl='/glolearn/usuarios/registrar'
  private apiUri='/glolearn/usuarios'

  private token: string | null = '';
  
  constructor() { }

  async registrar(formValor:any){
    return firstValueFrom(
      await this.httpClient.post<any>(`${this.apiUrl}`,formValor)
    )
  }

  login(user: User): Observable<Jwtres> {
    console.log('en service');
    return this.httpClient.post<Jwtres>(this.apiUri + '/ingresar', user).pipe(
      tap((res: Jwtres) => {
        if (res) {
          {
            console.log(JSON.parse(JSON.stringify(res)).accessToken)
            ACCESS_TOKEN: JSON.parse(JSON.stringify(res)).accessToken
          }
        }else{
          console.log('hubo un error')
        }
      })

    )
  }

  logout() {
    this.token = '';
    localStorage.removeItem("accessToken");
    //localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string) {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", token);
    this.token = token;
  }

  private getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
