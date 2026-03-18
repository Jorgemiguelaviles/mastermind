import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoRoutingModule } from './historico-routing.module';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { RankingComponent } from './pages/ranking/ranking.component';

@NgModule({
  declarations: [
    DashboardsComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    HistoricoRoutingModule
  ]
})
export class HistoricoModule {}