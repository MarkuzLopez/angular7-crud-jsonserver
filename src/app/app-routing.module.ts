import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';

const routes: Routes = [
  
  { path: '', component: DashboardComponent  },  
  { path: 'nuevo-producto', component: NuevoProductoComponent }, 
  { path: 'editar-producto/:id', component: EditarProductoComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
