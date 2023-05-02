import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioServicioService } from 'src/app/servicio/usuario-servicio.service';


@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent  implements OnInit{
  listUsuario: Usuario []=[];

  constructor(private usuarioService:UsuarioServicioService){

  }

  ngOnInit(): void {
    this.allUsuario();
  }
  allUsuario():void{
    this.usuarioService.getAllUsuario().subscribe(data=>{
      console.log(data);
      this.listUsuario= data.data;
    })
  }

}
