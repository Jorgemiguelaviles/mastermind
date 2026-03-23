import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutConteinerModule } from "../../../../shared/components/layout-conteiner/layout-conteiner.module";
import { SelecionaDificuldadeComponent } from "./seleciona-dificuldade.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SelecionaDificuldadeRoutingModule } from "./seleciona-dificuldade-routing.module";

@NgModule({
  declarations: [SelecionaDificuldadeComponent],
  imports: [
    CommonModule,
    LayoutConteinerModule,
    ReactiveFormsModule,
    SelecionaDificuldadeRoutingModule
  ]
})
export class SelecionaDificuldadeModule { }