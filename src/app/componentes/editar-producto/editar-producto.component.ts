import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../modelos/productos.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  forma: FormGroup; 
  //public producto: any;
  producto: Producto;
  id: any;

  constructor(private router: ActivatedRoute, private _rout: Router,  public _productService: ProductosService ) { 
    this.router.params.subscribe(params => { 
      this.id = params['id'];
    })
  }

  ngOnInit() {
    this.forma = new FormGroup({ 
      nombre: new FormControl(null, Validators.required),
      precio: new FormControl(null, Validators.required)
    })
    console.log(this.id);
    this._productService.mostrarProducto(this.id).subscribe(resp => { 
        this.producto = resp;
    });       
  }

  updateProducto(id: any){ 
    if(this.forma.invalid) { 
      return;
    }
    
    let producto = new Producto(        
      this.forma.value.nombre,
      this.forma.value.precio,
      this.id
    )

    console.log(producto);
    
    this._productService.actualizarProducto(producto).subscribe(resp => { 
     // swal('Importante', 'Debe de aceptar las condiciones', 'warning');
     //alert('You clicked the button!')
     Swal.fire(
      'Actualizado!',
      'Prodcutos Correctamente!',
      'success'
     )
      this._rout.navigate(['/']);
    })

  }

}
