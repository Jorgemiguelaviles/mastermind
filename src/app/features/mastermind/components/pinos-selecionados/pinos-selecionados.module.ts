import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PinosSelecionadosComponent } from "./pinos-selecionados.component";
import { PinosCertosModule } from "../pinos-certos/pinos-certos.module";

@NgModule({
  declarations: [PinosSelecionadosComponent],
  imports: [
    CommonModule,
    PinosCertosModule
  ],
  exports: [PinosSelecionadosComponent]
})
export class PinosSelecionadosModule { }