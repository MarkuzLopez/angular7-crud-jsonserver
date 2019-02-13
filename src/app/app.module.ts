import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductosService } from './services/productos.service';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NuevoProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule    
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
