import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/modelo-servicios/service-api.service';
import { DtoSaldoRetirar } from '../../modelo-dtos/dto-saldo-retirar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponseService } from '../../modelo-servicios/http-error-response.service';

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
public activarVistaRetirarDinero: boolean =false;


public formGroupRetirarSaldo = new FormGroup({
  form_cantidad: new FormControl("",[Validators.required])
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
        },
        HttpErrorResponse =>{
          this.serviceHttpErrors.manejoDeErrores(HttpErrorResponse);
        }
      )

    }else{
      alert("Formulario no valid");
    }

    
  }



  ngOnInit(): void {
   
   
  
  }


}
