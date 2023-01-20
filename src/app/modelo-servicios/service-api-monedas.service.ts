import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { EntityMonedas } from '../modelo-entitys/entity-monedas';

@Injectable({
  providedIn: 'root'
})

export class ServiceApiMonedasService {

  private urlEndPoint: String ="http://localhost:8090/monedas/";

  //-- Listar monedas
  public listarMonedas():Observable<EntityMonedas[]>{
    return this.http.get(this.urlEndPoint+"list").pipe(
      map(respuesta => respuesta as EntityMonedas[]),
      catchError(e=>{
        return throwError(e);
      })
    );
  }
  /*

  //-- Buscar 
  public buscarPorDenominacion(denominacion: Number):Observable<EntityMonedas>{
    return this.http.get(this.urlEndPoint+"show/"+denominacion).pipe(
      map(respuesta => respuesta as EntityMonedas),
      catchError (e => {
        return throwError(e);
      })
    )
  }

  //-- Eliminar
  public eliminarPorDenominacion(denominacion: Number): Observable<EntityMonedas>{
    return this.http.delete(this.urlEndPoint+"delete/"+denominacion).pipe(
      map(respuesta => respuesta as EntityMonedas),
      catchError(e=>{
        return throwError(e);
      })
    )
  }


  //-- Guardar
  public guardar (entityMonedas: EntityMonedas):Observable<EntityMonedas>{
    return this.http.post(this.urlEndPoint+"save", entityMonedas).pipe(
      map(respuesta => respuesta as EntityMonedas),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

  //-- Editar
  */

  constructor(
    private http: HttpClient
  ) { }

}
