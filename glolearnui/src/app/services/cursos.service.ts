import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs'; //recuperar datos en la consulta del API
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  apiUri="glolearn/cursos";//indica la ruta a la que se accedera de la API
  constructor(private http:HttpClient) { }
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
}

getAllCursosData(): Observable<any>{
  return this.http.get<any>(this.apiUri);
}


  