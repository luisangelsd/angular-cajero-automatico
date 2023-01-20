import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPanelAdministradorComponent } from './vista-panel-administrador/vista-panel-administrador.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VistaPanelAdministradorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    
  ],
  exports:[
    VistaPanelAdministradorComponent
  ]
})
export class AdministradorModule { }
