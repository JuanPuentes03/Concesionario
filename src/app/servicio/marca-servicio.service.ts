import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../model/ResponseI';


const urlBase="http://localhost:8088/marca"

@Injectable({
  providedIn: 'root'
})
export class MarcaServicioService {

  constructor(private http:HttpClient) { }

  getAllMarca():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/All");
  }

  crearMarca(data: any):Observable<ResponseI>{
    return this.http.post<ResponseI>(urlBase+"/crear",data);
  }
}
