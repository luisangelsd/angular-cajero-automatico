import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/modelo-servicios/service-api.service';
import { DtoSaldoRetirar } from '../../modelo-dtos/dto-saldo-retirar';

@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrls: ['./vista-cliente.component.css']
})
export class VistaClienteComponent implements OnInit{

  
  /*======== Inyección de servicios ========*/
constructor(
  public serviceApi:ServiceApiService
){}


/*======== Variables Globales ========*/
public dtoSaldoRetirar:DtoSaldoRetirar = new DtoSaldoRetirar();




/*======== Metodos Monedas ========*/


  //-- Listar Denominaciones
  public retirarDinero():void{
    this.serviceApi.retirarSaldo(100).subscribe(
      HttpResponse =>{
        this.dtoSaldoRetirar = HttpResponse;
        console.log(HttpResponse);
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
