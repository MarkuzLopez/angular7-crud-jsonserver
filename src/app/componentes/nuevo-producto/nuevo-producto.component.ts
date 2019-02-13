import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../modelos/productos.model';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  forma: FormGroup;     
  constructor(public _productService: ProductosService, public router: Router) { }

  ngOnInit() {
    this.forma = new FormGroup({ 
      nombre: new FormControl(null, Validators.required), 
      precio: new FormControl(null, Validators.required),
    })
  }

  saveProducto() {    
    if(this.forma.invalid) { 
      return;
    }   
    
    let producto =  new Producto ( 
        this.forma.value.nombre, 
        this.forma.value.precio
    );
    
    this._productService.guardarProducto(producto).subscribe(resp => { 
      Swal.fire(
        'Guardado!',
        'Prodcuto Correctamente!',
        'success'
       )
      this.router.navigate(['/']);
    })
  }

}
