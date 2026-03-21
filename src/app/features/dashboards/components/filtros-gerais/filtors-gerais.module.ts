import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FiltrosGeraisComponent } from "./filtros-gerais.component";

@NgModule({
  declarations: [FiltrosGeraisComponent],
  imports: [
    CommonModule,
  ],
  exports: [FiltrosGeraisComponent]
})
export class FiltrosGeraisModule { }