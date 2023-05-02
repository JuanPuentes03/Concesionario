import { Component, OnInit } from '@angular/core';
import { Concesionario } from 'src/app/model/concesionario';
import { ConcesionarioServicioService } from 'src/app/servicio/concesionario-servicio.service';

@Component({
  selector: 'app-tabla-concesionario',
  templateUrl: './tabla-concesionario.component.html',
  styleUrls: ['./tabla-concesionario.component.css']
})
export class TablaConcesionarioComponent implements OnInit{
  listConcesionario: Concesionario []=[];

  constructor(private concesionarioService:ConcesionarioServicioService){

  }
  
  ngOnInit(): void {
    this.allConcesionario();
  }
  allConcesionario():void{
    
    this.concesionarioService.getAllConcesionario().subscribe(data=>{
      console.log(data);
      this.listConcesionario= data.data;
    })
  }
}
