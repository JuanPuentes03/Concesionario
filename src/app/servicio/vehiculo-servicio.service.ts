import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../model/ResponseI';


const urlBase="http://localhost:8088/vehiculo"

@Injectable({
  providedIn: 'root'
})
export class VehiculoServicioService {

  constructor(private http:HttpClient) { }

  getAllVehiculo():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/All");
  }

  crearVehiculo(data: any):Observable<ResponseI>{
    return this.http.post<ResponseI>(urlBase+"/crear",data);
  }
}
