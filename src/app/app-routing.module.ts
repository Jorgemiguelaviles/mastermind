import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule)
  },

  {
    path: '',
    canActivate: [], // futuramente seu AuthGuard
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./features/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'historico',
        loadChildren: () =>
          import('./features/historico/historico.module').then(m => m.HistoricoModule)
      },
      {
        path: 'mastermind',
        loadChildren: () =>
          import('./features/mastermind/mastermind.module').then(m => m.MastermindModule)
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}