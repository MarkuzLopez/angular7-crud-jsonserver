import { Injectable } from '@angular/core';
//importacion para funcion de servicio 
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Producto } from '../componentes/modelos/productos.model';
import { map } from 'rxjs/operators';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiConfig: any;

  constructor(public http: HttpClient) { 
      //this.apiConfig = environment.ApiConfig;      
  }

  getProducto()  { 
    let url = URL_SERVICIOS + '/productos';
    //let url = this.apiConfig;
    return this.http.get(url).pipe(map((resp: any)=> { 
      console.log(resp);  
        return resp;
      })
    )
  }
 
//   getMemo(idMemo):Observable<any>{
//     const headers = new HttpHeaders();
//     headers.append('Content-Type', 'application/x-www-form-urlencoded');
//     const url = `${this.apiConfig.basePath}getActaCierre/${idMemo}`;
//     return this._http.get(url,{headers});
//  }

  guardarProducto(producto: Producto ) { 
    let url = URL_SERVICIOS + '/productos'; 
   // let url = this.apiConfig;
    
    return this.http.post(url, producto).pipe(
      map((resp: any) => { 
         return resp;
      })
    )
  }

  mostrarProducto(id: number) { 
    let  url = URL_SERVICIOS +'/productos/' + id;    
    //let url = this.apiConfig + id;
    return this.http.get(url).pipe(map((resp: any) => { 
       return resp;
    }))
  }

  actualizarProducto(producto: Producto) { 
    let url = URL_SERVICIOS + '/productos/' + producto.id;
    // let url = this.apiConfig + producto.id;
    return this.http.put(url, producto).pipe(
      map((resp: any) => { 
        console.log('Producto Actualizado Correctamente');
        return resp;                
      })
    )
  }

  borrarProducto(id: number) { 
    let url = URL_SERVICIOS + '/productos/' + id;

    return this.http.delete(url).pipe(
      map((resp: any) =>{ 
        return resp;        
      })
    )
  }

}
