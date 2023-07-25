import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { DtoSaldoRetirar } from '../modelo-dtos/dto-saldo-retirar';
import { DtoListarBilletesMonedas } from '../modelo-dtos/dto-listar-billetes-monedas';
import swal from 'sweetalert2';	

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private urlEndPoint: String ="http://localhost:8080/";


  
  //-- Retirar Saldo
  public retirarSaldo(cantidad : any): Observable<DtoSaldoRetirar>{
    return this.http.get(this.urlEndPoint+ "retirar-saldo/"+cantidad).pipe(
      map (respuesta => respuesta as DtoSaldoRetirar),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

  //-- Listar Billetes/Monedas (Denominaciónes, Cantidad)
  public listarBilletesMonedas (): Observable<DtoListarBilletesMonedas>{
    return this.http.get(this.urlEndPoint+"listar-saldo").pipe(
      map(response => response as DtoListarBilletesMonedas),
      catchError( e=> {
        return throwError(e);
      })
    )
  }


  //-- Editar Monedas Billetes
   public actualizarMonedasBilletes (dtoSaldoRetirar: DtoSaldoRetirar):Observable<String>{
    return this.http.put(this.urlEndPoint+"update/monedas-billetes", dtoSaldoRetirar).pipe(
      map(respuesta => respuesta as String),
      catchError(e=>{
        return throwError(e);
      })
    )
  }
  
  constructor(
    private http: HttpClient
  ) { }

}
