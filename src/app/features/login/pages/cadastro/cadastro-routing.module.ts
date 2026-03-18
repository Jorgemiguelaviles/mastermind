import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroModule } from './cadastro.module';

const routes: Routes = [
  {
    path: '',
    component: CadastroModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cadastroRoutingModule {}