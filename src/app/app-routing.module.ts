import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos perfil
import { PerfilComponent } from './Components/perfil/perfil.component';

const routes: Routes = [

  //creamos la ruta de perfil
  {path: 'Inicio', component:PerfilComponent},
  {path: '', redirectTo: 'Inicio', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
