import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { LogarRoutingModule } from "./logar-routing.module";
import { LogarComponent } from "./logar.component";

@NgModule({
  declarations: [LogarComponent],
  imports: [
    LogarRoutingModule,
    CommonModule
  ],
  exports: []
})
export class LogarModule { }