import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PinosSelecionadosComponent } from "./pinos-selecionados.component";

@NgModule({
  declarations: [PinosSelecionadosComponent],
  imports: [
    CommonModule
  ],
  exports: [PinosSelecionadosComponent]
})
export class PinosSelecionadosModule { }