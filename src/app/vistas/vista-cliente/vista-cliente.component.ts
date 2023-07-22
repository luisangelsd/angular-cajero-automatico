import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/modelo-servicios/service-api.service';
import { DtoSaldoRetirar } from '../../modelo-dtos/dto-saldo-retirar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponseService } from '../../modelo-servicios/http-error-response.service';
import swal from 'sweetalert2';	
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrls: ['./vista-cliente.component.css']
})
export class VistaClienteComponent implements OnInit{

  
  /*======== Inyección de servicios ========*/
constructor(
  public serviceApi:ServiceApiService,
  public serviceHttpErrors: HttpErrorResponseService
){}


/*======== Variables Globales ========*/
public dtoSaldoRetirar:DtoSaldoRetirar = new DtoSaldoRetirar();
public dtoSaldoRetirarActualizar:DtoSaldoRetirar = new DtoSaldoRetirar();

public activarVistaRetirarDinero: boolean =false;


public formGroupRetirarSaldo = new FormGroup({
  form_cantidad: new FormControl("",[Validators.required])
});

public formGroupActualizar = new FormGroup({
  
});


/*======= Meotodos Auxiliares =========*/
public activarDescativarVistaRetirarDinero (){
  if (this.activarVistaRetirarDinero==true) {
    this.formGroupRetirarSaldo.reset();
    this.activarVistaRetirarDinero=false;
  }else{
    this.activarVistaRetirarDinero=true;
  }
}





  //-- Listar Denominaciones
  public retirarDinero():void{

    //-- Validar formulario
    if(this.formGroupRetirarSaldo.valid){
       let cantidad = this.formGroupRetirarSaldo.get("form_cantidad")?.value;

      this.serviceApi.retirarSaldo(cantidad).subscribe(
        HttpResponse =>{
          this.dtoSaldoRetirar = HttpResponse;
          this.activarDescativarVistaRetirarDinero();
          this.formGroupRetirarSaldo.reset();
          swal.fire("¡Has Retirado $"+cantidad+"!", "", "success");
        },
        HttpErrorResponse =>{
          this.serviceHttpErrors.manejoDeErrores(HttpErrorResponse);
        }
      )

    }else{
      swal.fire("¡Añade una Cantidad!", "", "error");
    }
  }

  //-- Actualizar
  public actualizarMonedasBilletes(){
    console.warn(this.dtoSaldoRetirarActualizar);
    this.serviceApi.actualizarMonedasBilletes(this.dtoSaldoRetirarActualizar).subscribe(
      HttpResponse =>{
        swal.fire("¡Saldo Añadido Correctamente!", "", "success");
        this.dtoSaldoRetirarActualizar=new DtoSaldoRetirar();
      },
      HttpErrorResponse =>{
        this.serviceHttpErrors.manejoDeErrores(HttpErrorResponse);
      }
    );
    
  }


  ngOnInit(): void {
   
   
  
  }


}
