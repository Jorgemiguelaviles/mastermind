import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameComponent } from "./game.component";
import { GameRoutingRoutingModule } from "./game-routing.module";
import { PinosCertosModule } from "../../components/pinos-certos/pinos-certos.module";
import { PinosSelecionadosModule } from "../../components/pinos-selecionados/pinos-selecionados.module";
import { LayoutConteinerModule } from "../../../../shared/components/layout-conteiner/layout-conteiner.module";

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameRoutingRoutingModule,
    PinosCertosModule,
    PinosSelecionadosModule,
    LayoutConteinerModule

  ]
})
export class GameModule { }