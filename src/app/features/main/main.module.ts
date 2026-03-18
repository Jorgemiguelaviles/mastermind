import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { CommonModule } from "@angular/common";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
MainRoutingModule,
    CommonModule

  ],
  exports: []
})
export class MainModule { }