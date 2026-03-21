import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FiltrosGeraisModule } from "./features/dashboards/components/filtros-gerais/filtors-gerais.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FiltrosGeraisModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }