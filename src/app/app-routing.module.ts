import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'info-user', component:InfoUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
