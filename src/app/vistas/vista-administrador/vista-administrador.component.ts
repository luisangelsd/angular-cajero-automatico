import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DtoBillete } from 'src/app/modelo-dtos/dto-billete';
import { DtoMoneda } from 'src/app/modelo-dtos/dto-moneda';
import { DtoSaldoRetirar } from 'src/app/modelo-dtos/dto-saldo-retirar';
import { ServiceApiService } from 'src/app/modelo-servicios/service-api.service';
import { DtoListarBilletesMonedas } from '../../modelo-dtos/dto-listar-billetes-monedas';
import { HttpErrorResponseService } from 'src/app/modelo-servicios/http-error-response.service';
import swal from 'sweetalert2';	

@Component({
  selector: 'app-vista-administrador',
  templateUrl: './vista-administrador.component.html',
  styleUrls: ['./vista-administrador.component.css']
})
export class VistaAdministradorComponent implements OnInit {


  /*======== Inyección de servicios ========*/
constructor(
  public serviceApi:ServiceApiService,
  public serviceHttpErrors: HttpErrorResponseService
){}


/*======== Variables Globales ========*/
public dtoSaldoRetirar : DtoSaldoRetirar = new DtoSaldoRetirar();

public dtoListarBilletesMonedas : DtoListarBilletesMonedas | undefined;
public listDtoMonedas: DtoMoneda[] | undefined;
public listDtoBilletes: DtoBillete[] | undefined;
public totalSaldo: number =0;









/*======== Metodos Monedas ========*/


  //-- Listar Denominaciones
  public listarSaldo():void{
    this.serviceApi.listarBilletesMonedas().subscribe(
      HttpResponse =>{
        this.dtoListarBilletesMonedas = HttpResponse;
        this.listDtoBilletes = this.dtoListarBilletesMonedas.billetes;
        this.listDtoMonedas = this.dtoListarBilletesMonedas.monedas;
        this.totalSaldo= this.dtoListarBilletesMonedas.total;
        swal.fire("¡Saldo Actualizado!", "", "success");
      },
      HttpErrorResponse =>{
          this.serviceHttpErrors.manejoDeErrores(HttpErrorResponse);
      }
    )
  }



  ngOnInit(): void {
   this.listarSaldo();
  }


}
