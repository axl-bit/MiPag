import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componente de barra
import { NavbarComponent } from './Components/navbar/navbar.component';

//componente de perfil
import { PerfilComponent } from './Components/perfil/perfil.component';
import { MoreAboutMeComponent } from './Components/more-about-me/more-about-me.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { ContactmeComponent } from './Components/contactme/contactme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilComponent,
    MoreAboutMeComponent,
    FooterComponent,
    ProyectsComponent,
    ContactmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
