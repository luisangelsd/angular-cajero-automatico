import { Component, OnInit } from '@angular/core';
import { DtoBillete } from 'src/app/modelo-dtos/dto-billete';
import { DtoMoneda } from 'src/app/modelo-dtos/dto-moneda';
import { DtoSaldoRetirar } from 'src/app/modelo-dtos/dto-saldo-retirar';
import { ServiceApiService } from 'src/app/modelo-servicios/service-api.service';

@Component({
  selector: 'app-vista-administrador',
  templateUrl: './vista-administrador.component.html',
  styleUrls: ['./vista-administrador.component.css']
})
export class VistaAdministradorComponent implements OnInit {


  /*======== Inyección de servicios ========*/
constructor(
  public serviceApiService:ServiceApiService
){}


/*======== Variables Globales ========*/
public dtoSaldoRetirar : DtoSaldoRetirar = new DtoSaldoRetirar();
public listDtoMonedas: DtoMoneda[] | undefined;
public listDtoBilletes: DtoBillete[] | undefined;








/*======== Metodos Monedas ========*/


  //-- Listar Denominaciones
  

  //-- Retir Saldo
  public retirarSaldo(saldo:number):void{
    this.serviceApiService.retirarSaldo(saldo).subscribe(
      HttpResponse => {
        this.dtoSaldoRetirar = HttpResponse;
      },
      HttpErrorResponse =>{
        switch(HttpErrorResponse.status){
          default:
              alert("Error: " + HttpErrorResponse);
            break;
        }

      }
    )
  }

  ngOnInit(): void {
   
  
  }


}
