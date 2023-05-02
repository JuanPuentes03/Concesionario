import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../model/ResponseI';

const urlBase="http://localhost:8088/rol"

@Injectable({
  providedIn: 'root'
})
export class RolServicioService {

  constructor(private http:HttpClient) { }

  getAllRol():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/All");
  }

  crearRol(data: any):Observable<ResponseI>{
    return this.http.post<ResponseI>(urlBase+"/crear",data);
  }
}
