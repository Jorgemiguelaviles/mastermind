import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecionaDificuldadeComponent } from './seleciona-dificuldade.component';

const routes: Routes = [
  {
    path: '',
    component: SelecionaDificuldadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecionaDificuldadeRoutingModule {}