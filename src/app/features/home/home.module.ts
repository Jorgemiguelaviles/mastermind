import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { JogoModule } from "./components/jogo/jogo.module";
import { MenuModule } from "../../shared/components/menu/menu.module";
import { NavbarModule } from "../../shared/components/navbar/navbar.module";
import { HomeRoutingModule } from "./home-routing.module";
import { LayoutConteinerModule } from "../../shared/components/layout-conteiner/layout-conteiner.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    JogoModule,
    MenuModule,
    NavbarModule,
    LayoutConteinerModule

  ],
  exports: []
})
export class HomeModule { }