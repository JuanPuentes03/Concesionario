import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaUsuarioComponent } from './tablas/usuario/tabla-usuario/tabla-usuario.component';
import { TablaVehiculoComponent } from './tablas/vehiculo/tabla-vehiculo/tabla-vehiculo.component';
import { TablaConcesionarioComponent } from './tablas/concesionario/tabla-concesionario/tabla-concesionario.component';
import { TablaMarcaComponent } from './tablas/marca/tabla-marca/tabla-marca.component';
import { TablaRolComponent } from './tablas/rol/tabla-rol/tabla-rol.component';
import { TablaVentaComponent } from './tablas/venta/tabla-venta/tabla-venta.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { MenuComponent } from './templates/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioServicioService } from './servicio/usuario-servicio.service';
import { AddMarcaComponent } from './tablas/marca/add-marca/add-marca.component';
import { AddRolComponent } from './tablas/rol/add-rol/add-rol.component';
import { AddUsuarioComponent } from './tablas/usuario/add-usuario/add-usuario.component';
import { AddVehiculoComponent } from './tablas/vehiculo/add-vehiculo/add-vehiculo.component';
import { AddVentaComponent } from './tablas/venta/add-venta/add-venta.component';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { AddConcesionarioComponent } from './tablas/concesionario/add-concesionario/add-concesionario.component';



@NgModule({
  declarations: [
    AppComponent,
    TablaUsuarioComponent,
    TablaVehiculoComponent,
    TablaConcesionarioComponent,
    TablaMarcaComponent,
    TablaRolComponent,
    TablaVentaComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AddMarcaComponent,
    AddRolComponent,
    AddUsuarioComponent,
    AddVehiculoComponent,
    AddVentaComponent,
    AddConcesionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsuarioServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
