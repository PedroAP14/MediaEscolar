import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Notas } from './components/inserir/notas/notas';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const routes: Routes = [
  {path:'', component: Home},
  {path:'inserir/notas', component:Notas}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
