import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs'; //recuperar datos en la consulta del API
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  apiUri='/glolearn/cursos';//indica la ruta a la que se accedera de la API
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http:HttpClient) { }

  getTodosCursosData(): Observable<any>{
    return this.http.get<any>(this.apiUri);
  }

  nuevoCurso(token:any, data:any):Observable<any>{
    return this.http.post<any>(
      this.apiUri,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          accessToken: `${token}`
        }
      });
  }

}


  