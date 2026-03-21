import { NgModule } from "@angular/core";
import { MastermindComponent } from "./mastermind.component";
import { MastermindRoutingModule } from "./mastermind-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MastermindComponent],
  imports: [
    CommonModule,
    MastermindRoutingModule
  ]
})
export class MastermindModule { }