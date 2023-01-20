import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPanelUsuarioComponent } from './vista-panel-usuario/vista-panel-usuario.component';
import { VistaPanelAdministradorComponent } from '../administrador/vista-panel-administrador/vista-panel-administrador.component';




@NgModule({
  declarations: [
    VistaPanelUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VistaPanelUsuarioComponent
  ]
})
export class UsuarioModule {
  
 }
