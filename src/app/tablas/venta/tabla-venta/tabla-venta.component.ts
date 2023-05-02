import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/model/venta';
import { VentaServicioService } from 'src/app/servicio/venta-servicio.service';

@Component({
  selector: 'app-tabla-venta',
  templateUrl: './tabla-venta.component.html',
  styleUrls: ['./tabla-venta.component.css']
})
export class TablaVentaComponent implements OnInit{
  listVenta: Venta []=[];

  constructor(private ventaService:VentaServicioService){
    
  }

  ngOnInit(): void {
    this.allVenta();
  }
  allVenta():void{

    this.ventaService.getAllVenta().subscribe(data=>{
      console.log(data);
      this.listVenta= data.data;
    })
  }

}
