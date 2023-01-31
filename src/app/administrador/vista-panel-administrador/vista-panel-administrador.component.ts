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
entityMonedas: EntityMonedas = new EntityMonedas();
public listEntityMonedas: EntityMonedas[] | undefined;
public ventanaGuardarEditarMoneda: Boolean=false;
public activarBtnGuardar=true;
public activarBtnEditar=false;



/*======== Validar Formulario ========*/
public formGroupGuardar=new FormGroup({
  form_denominacion:new FormControl("",[Validators.required])

});






/*======== Metodos Monedas ========*/


//-- Limpiar formulario guardarEditarMoneda
public limpiarFormGuardarEditarMonedas():void{
  this.formGroupGuardar.reset();
  this.entityMonedas.cantidad= undefined;
}


//-- Activar ventana guardar
public activarVentanaGuardarMoneda():void{
  this.ventanaGuardarEditarMoneda=true;
  this.activarBtnGuardar=true;
  this.activarBtnEditar=false;
}

//-- Activar ventana editar
public activarVentanaEditarMoneda():void{
  this.ventanaGuardarEditarMoneda=true;
  this.activarBtnEditar=true;
  this.activarBtnGuardar=false;
}


//-- Cerrar ventana Guardar Editar
public cerrarVentanaGuardarEditarMoneda():void{
  this.ventanaGuardarEditarMoneda=false;
  this.limpiarFormGuardarEditarMonedas();
}



//-- Buscar: Activa ventana
public buscar(entityMonedas: EntityMonedas){

    this.servicioMonedas.buscarPorDenominacion(entityMonedas.denominacion).subscribe(
      HttpResponse=>{

        this.entityMonedas=HttpResponse;
        this.activarVentanaEditarMoneda();
        
        if (this.entityMonedas==null) {
          this.listarMonedas();
          alert("No existe la denominación");
        }

        this.activarVentanaEditarMoneda();
      },
      HttpErrorResponse=>{
        switch(HttpErrorResponse.status){
          default:
              alert("Error: "+HttpErrorResponse.error.error);
            break;
        }
      }
    );
 
}


//-- Guardar
public guardarMonedas():void{
  
    if (this.formGroupGuardar.valid) {
      this.servicioMonedas.guardar(this.entityMonedas).subscribe(
        HttpResponse => {
          this.listarMonedas();
        },
        HttpErrorResponse=>{
          switch(HttpErrorResponse.status){
            default:
              alert("Ocurrio un error: "+HttpErrorResponse.error.error);
            break;
  
          }
  
  
        }
      )
    }else{
      alert("La denominación no puede estar vacia");
    }


}


//-- Editar
public editarMoneda():void{
  /*
  this.servicioMonedas.editar(5,10).subscribe(
    HttpResponse=>{
      this.cerrarVentanaGuardarEditarMoneda();
      this.listarMonedas();
    },
    HttpErrorResponse=>{
      switch(HttpErrorResponse.status){
        default:
            alert("Error: "+HttpErrorResponse.error.error);
          break;
      }
    }
  )*/
}


//-- Eliminar
public eliminar(entityMoneda: EntityMonedas):void{
  this.servicioMonedas.eliminarPorDenominacion(entityMoneda.denominacion).subscribe(

    HttpResponse =>{
      this.listarMonedas();
    },
    HttpErrorResponse =>{
      switch (HttpErrorResponse.status){
        default:
            alert("Error: "+ HttpErrorResponse.error.error);
            this.listarMonedas();
          break;
      }
    }
  )

}

//-- Listar 
public listarMonedas():void{
  this.servicioMonedas.listarMonedas().subscribe(
    HttpResponse =>{
      this.listEntityMonedas=HttpResponse;
      if(this.listEntityMonedas==null){
        //alert("No hay registros a mostrar");
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

