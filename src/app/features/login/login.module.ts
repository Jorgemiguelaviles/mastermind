import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";
import { LogarModule } from "./pages/logar/logar.module";
import { CadastroModule } from "./pages/cadastro/cadastro.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    LogarModule,
    CadastroModule

  ],
  exports: []
})
export class LoginModule { }