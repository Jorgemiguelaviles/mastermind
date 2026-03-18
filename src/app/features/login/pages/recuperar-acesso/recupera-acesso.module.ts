import { NgModule } from "@angular/core";
import { RecuperarAcessoComponent } from "./recuperar-acesso.component";
import { RecuperarAcessoRoutingModule } from "./recupera-acesso-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [RecuperarAcessoComponent],
  imports: [
    RecuperarAcessoRoutingModule,
    CommonModule
  ],
  exports: []
})
export class RecuperarAcessoModule { }