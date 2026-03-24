import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PinosSelecionadosComponent } from "./pinos-selecionados.component";
import { PinosCertosModule } from "../pinos-certos/pinos-certos.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PinosSelecionadosComponent],
  imports: [
    CommonModule,
    PinosCertosModule,
    ReactiveFormsModule
  ],
  exports: [PinosSelecionadosComponent]
})
export class PinosSelecionadosModule { }