import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartidasJogadasComponent } from "./partidas-jogadas.component";

@NgModule({
  declarations: [PartidasJogadasComponent],
  imports: [
    CommonModule
  ],
  exports: [PartidasJogadasComponent]
})
export class PartidasJogadasModule { }