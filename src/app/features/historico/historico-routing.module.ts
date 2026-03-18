import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboards', component: DashboardsComponent },
      { path: 'ranking', component: RankingComponent },
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricoRoutingModule {}