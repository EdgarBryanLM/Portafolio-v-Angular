import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectosSocialesComponent } from './components/proyectos-sociales/proyectos-sociales.component';

const routes: Routes = [

  { path: '',
    component: HomeComponent},

    { path: 'proyectos',
    component: ProyectosComponent},
    { path: 'proyectos-sociales',
    component: ProyectosSocialesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
