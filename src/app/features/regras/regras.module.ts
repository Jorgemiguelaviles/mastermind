import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegrasComponent } from "./regras.component";
import { RegrasRoutingModule } from "./regras-routing.module";

@NgModule({
  declarations: [RegrasComponent],
  imports: [
RegrasRoutingModule,
    CommonModule
  ],
  exports: []
})
export class RegrasModule { }