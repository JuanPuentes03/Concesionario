import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../model/ResponseI';


const urlBase="http://localhost:8088/venta"


@Injectable({
  providedIn: 'root'
})
export class VentaServicioService {

  constructor(private http:HttpClient) { }

  getAllVenta():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/All");
  }

  crearVenta(data: any):Observable<ResponseI>{
    return this.http.post<ResponseI>(urlBase+"/crear",data);
  }
}
