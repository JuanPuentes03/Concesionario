import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../model/ResponseI';

const urlBase="http://localhost:8088/concesionario"

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioServicioService {

  constructor(private http:HttpClient) { }

  getAllConcesionario():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/All");
  }

  crearConcesionario(data: any):Observable<ResponseI>{
    return this.http.post<ResponseI>(urlBase+"/crear",data);
  }
}
