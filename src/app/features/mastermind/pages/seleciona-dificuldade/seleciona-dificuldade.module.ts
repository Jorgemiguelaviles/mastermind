import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {  SelecionaDificuldadeRoutingModule } from "./seleciona-dificuldade-routing.module";
import { SelecionaDificuldadeComponent } from "./seleciona-dificuldade.component";
import { LayoutConteinerModule } from "../../../../shared/components/layout-conteiner/layout-conteiner.module";

@NgModule({
  declarations: [SelecionaDificuldadeComponent],
  imports: [
    CommonModule,
    SelecionaDificuldadeRoutingModule,
    LayoutConteinerModule
  ]
})
export class SelecionaDificuldadeModule { }