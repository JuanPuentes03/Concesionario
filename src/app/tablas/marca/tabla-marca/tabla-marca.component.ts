import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/model/marca';
import { MarcaServicioService } from 'src/app/servicio/marca-servicio.service';


@Component({
  selector: 'app-tabla-marca',
  templateUrl: './tabla-marca.component.html',
  styleUrls: ['./tabla-marca.component.css']
})
export class TablaMarcaComponent implements OnInit {
  listMarca: Marca []=[];

  constructor(private marcaService:MarcaServicioService){

  }

  ngOnInit(): void {
    this.allMarca();
  }
  allMarca():void{

    this.marcaService.getAllMarca().subscribe(data=>{
      console.log(data);
      this.listMarca= data.data;
    })
  }

}
