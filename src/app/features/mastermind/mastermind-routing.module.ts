import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastermindComponent } from './mastermind.component';

const routes: Routes = [
  {
    path: '',
    component: MastermindComponent
  },
  {
    path: 'seleciona-dificuldade',
    loadChildren: () =>
      import('./pages/seleciona-dificuldade/seleciona-dificuldade.module')
        .then(m => m.SelecionaDificuldadeModule)
  },
  {
    path: 'jogo',
    loadChildren: () =>
      import('./pages/game/game.module')
        .then(m => m.GameModule)
  },
  {
    path: 'resultados',
    loadChildren: () =>
      import('./pages/resultados/resultado.module')
        .then(m => m.ResultadosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastermindRoutingModule {}