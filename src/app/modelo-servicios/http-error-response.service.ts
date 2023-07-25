import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import swal from 'sweetalert2';	


@Injectable({
  providedIn: 'root'
})
export class HttpErrorResponseService {

  //-- Variables globales
   


  public manejoDeErrores(httpErrorResponse: HttpErrorResponse):void{
    switch (httpErrorResponse.status) {
      case 0:
        swal.fire("Ups!!, Ocurrio un error al conectarse con el Servidor",
        "Status: "+ httpErrorResponse.status,
        "error");
        break;

      default:
        try {
          swal.fire(httpErrorResponse.error.errors.mensaje, "Status: "+ httpErrorResponse.status,"error"); 
        } catch (error) {
          swal.fire("Ups!!, Ocurrio un error", "Status: "+ httpErrorResponse.status,"error"); 
        }
      break;
        
    }
  }

  constructor() { }
}
