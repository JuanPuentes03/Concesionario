import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VentaServicioService } from 'src/app/servicio/venta-servicio.service';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit{

  usuarioForm=new FormGroup({
    id:new FormControl(''),
    fechaVenta:new FormControl(''),
    metodosDePago:new FormControl(''),
    montoTotal:new FormControl(''),
  });
  ventaForm: any;
  constructor(private api:VentaServicioService, private router:Router){}
  ngOnInit(): void {

  }
  addVenta():void{
    let venta={
      id:this.ventaForm.get('id')?.value,
      fechaVenta:this.ventaForm.get('nombre')?.value,
      metodosDePago:this.ventaForm.get('apellido')?.value,
      montoTotal:this.ventaForm.get('correo')?.value
    }
    this.api.crearVenta(venta).subscribe(Response=>{
      if(Response.status==="ok"){
        alert("Registo exitoso");
        this.router.navigate(['Ventas']);
      }
    });

  }

}
