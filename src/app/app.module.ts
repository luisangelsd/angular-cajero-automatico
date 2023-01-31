import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { VistaPanelAdministradorComponent } from './administrador/vista-panel-administrador/vista-panel-administrador.component';
import { VistaPanelUsuarioComponent } from './usuario/vista-panel-usuario/vista-panel-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorModule } from './administrador/administrador.module';


const rutas: Routes=[
  {path:'',component:VistaPanelAdministradorComponent},
  {path:'vista-panel-administrador', component:VistaPanelAdministradorComponent},
  {path:'vista-panel-usuario', component: VistaPanelUsuarioComponent}
]


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    AdministradorModule
    
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
