import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { CreateArtComponent} from './components/create-art/create-art.component';
import { NbarComponent } from './components/nbar/nbar.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'list-articulos', component: ListComponent},
  { path: 'create-art', component: CreateArtComponent}, 
  { path: 'editArt/:id', component: CreateArtComponent}, 
  { path: 'logad', component: AdminComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
