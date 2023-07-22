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
      default:
        swal.fire(httpErrorResponse.error.errors.mensaje,
        "Status: "+ httpErrorResponse.status,
        "error"); 
        break;
    }
  }

  constructor() { }
}
