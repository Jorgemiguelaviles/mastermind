import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GraficosDeTempoComponent } from "./graficos-de-tempo.component";

@NgModule({
  declarations: [GraficosDeTempoComponent],
  imports: [
    CommonModule
  ],
  exports: [GraficosDeTempoComponent]
})
export class GraficosDeTempoModule { }