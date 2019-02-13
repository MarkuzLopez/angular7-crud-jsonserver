import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../modelos/productos.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productos: Producto [] = [];
  total = 0;
  constructor(public _productService: ProductosService) { }

  ngOnInit() {  
    this.getProductos();      
  }

  getProductos(){ 

    this._productService.getProducto().subscribe((resp: any) => {      
      this.productos = resp;
      this.total++;
    })
  }

  deleteProducto(id: any){ 
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "Puedes Revertir Estos Cambios!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'Tu Registro ha sido eliminado.',
          'success'
        )
        this._productService.borrarProducto(id).subscribe(resp => { 
          this.getProductos();
          console.log('Registro Eliminado', resp);        
        })
      }
    })      
  }

}
