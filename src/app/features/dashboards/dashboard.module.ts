import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardsComponent } from "./dashboards.component";
import { FiltrosGeraisModule } from "./components/filtros-gerais/filtors-gerais.module";
import { GraficosDeTempoModule } from "./components/graficos-de-tempo/graficos-de-tempo.module";
import { DashboardsRoutingModule } from "./dashboarding-routing.module";
import { NavbarModule } from "../../shared/components/navbar/navbar.module";
import { LayoutConteinerModule } from "../../shared/components/layout-conteiner/layout-conteiner.module";
import { PartidasJogadasModule } from "./components/partidas-jogadas/partidas-jogadas.module";

@NgModule({
  declarations: [DashboardsComponent],
  imports: [
    CommonModule,
    FiltrosGeraisModule,
    GraficosDeTempoModule,
    DashboardsRoutingModule,
    NavbarModule,
    LayoutConteinerModule,
    PartidasJogadasModule

  ],
  exports: []
})
export class DashboardsModule { }