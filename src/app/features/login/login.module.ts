import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";
import { RecuperarAcessoModule } from "./pages/recuperar-acesso/recupera-acesso.module";
import { LogarModule } from "./pages/logar/logar.module";
import { CadastroModule } from "./pages/cadastro/cadastro.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    RecuperarAcessoModule,
    LogarModule,
    CadastroModule

  ],
  exports: []
})
export class LoginModule { }