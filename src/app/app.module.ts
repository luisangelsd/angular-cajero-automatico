import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VistaAdministradorComponent } from './vistas/vista-administrador/vista-administrador.component';
import { VistaClienteComponent } from './vistas/vista-cliente/vista-cliente.component';


const rutas: Routes=[
  {path:'',component:VistaClienteComponent},
  {path:'administrador', component:VistaAdministradorComponent},
  {path:'cliente', component: VistaClienteComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    VistaAdministradorComponent,
    VistaClienteComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
    
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
