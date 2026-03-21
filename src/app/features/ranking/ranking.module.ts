import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { RankingComponent } from "./ranking.component";
import { RankingRoutingModule } from "./ranking-routing.module";
import { NavbarModule } from "../../shared/components/navbar/navbar.module";
import { LayoutConteinerModule } from "../../shared/components/layout-conteiner/layout-conteiner.module";

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    RankingRoutingModule,
    NavbarModule,
    LayoutConteinerModule
  ],
  exports: [RankingComponent]
})
export class RankingModule { }