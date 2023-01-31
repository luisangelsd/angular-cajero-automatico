import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { EntityMonedas } from '../modelo-entitys/entity-monedas';

@Injectable({
  providedIn: 'root'
})

export class ServiceApiMonedasService {

  private urlEndPoint: String ="http://localhost:8090/monedas/";

  //-- Guardar
  public guardar (entityMonedas: EntityMonedas):Observable<EntityMonedas>{
    return this.http.post(this.urlEndPoint+"save", entityMonedas).pipe(
      map(respuesta => respuesta as EntityMonedas),
      catchError(e=>{
        return throwError(e);
      })
    )
  }

  //-- Editar: update/5/nueva-denominacion/10
  public editar(dActual:any, dNuevo:any):Observable<EntityMonedas>{
    return this.http.put(this.urlEndPoint+"update/"+dActual+"/nueva-denominacion/"+dNuevo,null).pipe(
      map(respuesta => respuesta as EntityMonedas),
      catchError(e=>{
        return throwError(e);
      })
    );
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
  

  constructor(
    private http: HttpClient
  ) { }

}
