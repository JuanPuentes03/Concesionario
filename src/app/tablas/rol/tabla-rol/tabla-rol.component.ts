import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/model/rol';
import { RolServicioService } from 'src/app/servicio/rol-servicio.service';


@Component({
  selector: 'app-tabla-rol',
  templateUrl: './tabla-rol.component.html',
  styleUrls: ['./tabla-rol.component.css']
})
export class TablaRolComponent implements OnInit {
  listRol: Rol []=[];

  constructor(private rolService:RolServicioService){
    
  }

  ngOnInit(): void {
    this.allRol();
  }
  allRol():void{

    this.rolService.getAllRol().subscribe(data=>{
      console.log(data);
      this.listRol= data.data;
    })
  }

}
