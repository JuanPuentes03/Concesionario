import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoServicioService } from 'src/app/servicio/vehiculo-servicio.service';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrls: ['./add-vehiculo.component.css']
})
export class AddVehiculoComponent implements OnInit {

  vehiculoForm=new FormGroup({
    id:new FormControl(''),
    modelo:new FormControl(''),
    centimetrosCubicos:new FormControl(''),
    placa:new FormControl(''),
    precio:new FormControl(''),
    color:new FormControl(''),
  });

  constructor(private api:VehiculoServicioService, private router:Router){}
  ngOnInit(): void {

  }
  addVehiculo():void{
    let vehiculo={
      id:this.vehiculoForm.get('id')?.value,
      modelo:this.vehiculoForm.get('modelo')?.value,
      centimetrosCubicos:this.vehiculoForm.get('centimetrosCubicos')?.value,
      placa:this.vehiculoForm.get('placa')?.value,
      precio:this.vehiculoForm.get('precio')?.value,
      color:this.vehiculoForm.get('color')?.value
    }
    this.api.crearVehiculo(vehiculo).subscribe(Response=>{
      if(Response.status==="ok"){
        alert("Registo exitoso");
        this.router.navigate(['Vehiculos']);
      }
    });

  }


}
