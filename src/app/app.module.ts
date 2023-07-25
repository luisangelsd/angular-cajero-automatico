import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VistaAdministradorComponent } from './vistas/vista-administrador/vista-administrador.component';
import { VistaClienteComponent } from './vistas/vista-cliente/vista-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { VistaMenuComponent } from './vistas/vista-menu/vista-menu.component';


const rutas: Routes=[
  {path:'',component:VistaClienteComponent},
  {path:'administrador', component:VistaAdministradorComponent},
  {path:'cliente', component: VistaClienteComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    VistaAdministradorComponent,
    VistaClienteComponent,
    VistaMenuComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    FormsModule
    
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
