import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './Components/contactme/contactme.component';
import { MoreAboutMeComponent } from './Components/more-about-me/more-about-me.component';

//importamos perfil
import { PerfilComponent } from './Components/perfil/perfil.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';

const routes: Routes = [

  //creamos la ruta de perfil
  {path: 'Inicio', component:PerfilComponent},
  {path: '', redirectTo: 'Inicio', pathMatch:'full'},

  //route to aboutme
  {path:'AboutMe', component:MoreAboutMeComponent},

  //route to proyects
  {path:'Proyects', component:ProyectsComponent},

  //route to ContacMe
  {path:'ContactMe', component:ContactmeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
