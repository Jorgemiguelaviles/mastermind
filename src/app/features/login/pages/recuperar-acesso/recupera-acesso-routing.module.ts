import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarAcessoModule } from './recupera-acesso.module';

const routes: Routes = [
  {
    path: '',
    component: RecuperarAcessoModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarAcessoRoutingModule {}