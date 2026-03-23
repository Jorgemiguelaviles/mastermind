import { NgModule } from "@angular/core";
import { CadastroComponent } from "./cadastro.component";
import { CadastroRoutingModule } from "./cadastro-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [CadastroComponent],
  imports: [
        CadastroRoutingModule,
    CommonModule

  ],
  exports: []
})
export class CadastroModule { }