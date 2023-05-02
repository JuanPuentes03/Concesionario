import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoServicioService } from 'src/app/servicio/vehiculo-servicio.service';


@Component({
  selector: 'app-tabla-vehiculo',
  templateUrl: './tabla-vehiculo.component.html',
  styleUrls: ['./tabla-vehiculo.component.css']
})
export class TablaVehiculoComponent implements OnInit {
  listVehiculo: Vehiculo []=[];

  constructor(private vehiculoservice:VehiculoServicioService){
    
  }

  ngOnInit(): void {
    this.allVehiculo();
  }
  allVehiculo():void{

    this.vehiculoservice.getAllVehiculo().subscribe(data=>{
      console.log(data);
      this.listVehiculo= data.data;
    })
  }

}
