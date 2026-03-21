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
    // canActivate: [], 
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboards/dashboard.module').then(m => m.DashboardsModule)
      },
      {
        path: 'ranking',
        loadChildren: () =>
          import('./features/ranking/ranking.module').then(m => m.RankingModule)
      },
      {
        path: 'mastermind',
        loadChildren: () =>
          import('./features/mastermind/mastermind.module').then(m => m.MastermindModule)
      },
       {
  path: 'tutorial',
  loadChildren: () =>
    import('./features/regras/regras.module').then(m => m.RegrasModule)
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