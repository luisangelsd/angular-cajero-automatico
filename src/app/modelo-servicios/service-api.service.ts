import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { DtoSaldoRetirar } from '../modelo-dtos/dto-saldo-retirar';
import { DtoListarBilletesMonedas } from '../modelo-dtos/dto-listar-billetes-monedas';

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
      catchError(e=>{
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
  
  /*
  //-- Guardar
  public guardar (entityMonedas: EntityMonedas):Observable<EntityMonedas>{
    return this.http.post(this.urlEndPoint+"save", entityMonedas).pipe(
      map(respuesta => respuesta as EntityMonedas),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

  

    //-- Eliminar
    public eliminarPorDenominacion(denominacion: any): Observable<EntityMonedas>{
      return this.http.delete(this.urlEndPoint+"delete/"+denominacion).pipe(
        map(respuesta => respuesta as EntityMonedas),
        catchError(e=>{
          return throwError(e);
        })
      )
    }


  //-- Listar monedas
  public listarMonedas():Observable<EntityMonedas[]>{
    return this.http.get(this.urlEndPoint+"list").pipe(
      map(respuesta => respuesta as EntityMonedas[]),
      catchError(e=>{
        return throwError(e);
      })
    );
  }

    //-- Buscar 
    public buscarPorDenominacion(denominacion: any):Observable<EntityMonedas>{
      return this.http.get(this.urlEndPoint+"show/"+denominacion).pipe(
        map(respuesta => respuesta as EntityMonedas),
        catchError (e => {
          return throwError(e);
        })
      )
    }
  
*/
  constructor(
    private http: HttpClient
  ) { }

}
