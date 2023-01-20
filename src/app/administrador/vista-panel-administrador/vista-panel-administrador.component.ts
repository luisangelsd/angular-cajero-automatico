import { Component, OnInit } from '@angular/core';
import { EntityMonedas } from '../../modelo-entitys/entity-monedas';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ServiceApiMonedasService } from '../../modelo-servicios/service-api-monedas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vista-panel-administrador',
  templateUrl: './vista-panel-administrador.component.html',
  styleUrls: ['./vista-panel-administrador.component.css']
})
export class VistaPanelAdministradorComponent implements OnInit{

/*======== Inyección de servicios ========*/
constructor(
  public servicioMonedas: ServiceApiMonedasService
){}


/*======== Variables Globales ========*/
public entityMonedas: EntityMonedas | undefined;
public listEntityMonedas: EntityMonedas[] | undefined;
public ventanaGuardarEditar: Boolean=false;


/*======== Validar Formulario ========*/
public formGroupGuardar=new FormGroup({
  form_denominacion:new FormControl("",[Validators.required])
});





/*======== Metodos Monedas ========*/

//-- Activar ventana guardar
public activarVentanaGuardar(){
  this.ventanaGuardarEditar=true;
}


//-- Cerrar ventana Guardar Editar
public cerrarVentanaGuardarEditar(){
  this.ventanaGuardarEditar=false;
}

//-- Guardar
public guardarMonedas():void{
  if (this.formGroupGuardar.valid) {
    alert("juju");
  }else{
    alert("Añade una denominación");
  }

}


//-- Listar 
public listarMonedas():void{
  this.servicioMonedas.listarMonedas().subscribe(
    HttpResponse =>{
      this.listEntityMonedas=HttpResponse;
      if(this.listEntityMonedas==null){
        alert("No hay registros a mostrar");
      }
    },
    HttpErrorResponse =>{
      switch(HttpErrorResponse.status){
        default:
            alert("Error: " + HttpErrorResponse.error.error);
          break;
      }
    }
  )
}




ngOnInit(): void {
 this.listarMonedas();
}

}

