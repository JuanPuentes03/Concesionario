import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcesionarioServicioService } from 'src/app/servicio/concesionario-servicio.service';


@Component({
  selector: 'app-add-concesionario',
  templateUrl: './add-concesionario.component.html',
  styleUrls: ['./add-concesionario.component.css']
})
export class AddConcesionarioComponent implements OnInit {

  concesionarioForm=new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    direccion:new FormControl(''),
    telefono:new FormControl(''),
    ciudad:new FormControl(''),
  });

  constructor(private api:ConcesionarioServicioService, private router:Router){}
    ngOnInit(): void {

    }
    addConcesionario():void{
      let concesionario={
        id:this.concesionarioForm.get('id')?.value,
        nombre:this.concesionarioForm.get('nombre')?.value,
        direccion:this.concesionarioForm.get('direccion')?.value,
        telefono:this.concesionarioForm.get('telefono')?.value,
        ciudad:this.concesionarioForm.get('ciudad')?.value
      }
      this.api.crearConcesionario(concesionario).subscribe(Response=>{
        if(Response.status==="ok"){
          alert("Registro Exitoso")
          this.router.navigate(['Concesionarios']);
        }
      });
    }
}
