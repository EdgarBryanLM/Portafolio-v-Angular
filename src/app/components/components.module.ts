import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes */
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosCarruselComponent } from './proyectos-carrusel/proyectos-carrusel.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SchoolComponent } from './school/school.component';
import { SkillsComponent } from './skills/skills.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { ProyectosSocialesComponent } from './proyectos-sociales/proyectos-sociales.component';
/* Modulos de angular */
import { RouterModule } from '@angular/router';
/*Apis */
import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SidebarModule } from 'primeng/sidebar'
@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    ProyectosCarruselComponent,
    FooterComponent,
    SkillsComponent,
    SchoolComponent,
    ProyectosComponent,
    ProyectosSocialesComponent,
    MenuBarComponent,
    CaptchaComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    RecaptchaModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    SidebarModule
  ],
  exports: [
    HomeComponent,
    ContactoComponent,
    ProyectosCarruselComponent,
    FooterComponent,
    SkillsComponent,
    SchoolComponent,
    ProyectosComponent
  ]
})
export class ComponentsModule { }
