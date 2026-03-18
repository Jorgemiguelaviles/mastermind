import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CadastroComponent } from "./cadastro.component";
import { cadastroRoutingModule } from "./cadastro-routing.module";

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    cadastroRoutingModule,
    CommonModule
  ],
  exports: []
})
export class CadastroModule { }