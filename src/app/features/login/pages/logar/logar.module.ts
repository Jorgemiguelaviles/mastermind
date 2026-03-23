import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { LogarComponent } from "./logar.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LogarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [LogarComponent]
})
export class LogarModule { }