import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMutanteComponent } from './core/components/home-mutante/home-mutante.component';
import { AdministrarMutantesComponent } from './core/components/administrar-mutantes/administrar-mutantes.component';
import { AgregarMutanteComponent } from './core/components/agregar-mutante/agregar-mutante.component';
import { ErrorComponent } from './core/components/error/error.component';



const routes: Routes = [
  {path: '', component : HomeMutanteComponent},
  {path: 'agregar-mutante', component : AgregarMutanteComponent},
  {path: 'administrar-mutantes', component : AdministrarMutantesComponent},
  {path: '**', component : ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
