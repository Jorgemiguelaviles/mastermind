import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogarModule } from './logar.module';

const routes: Routes = [
  {
    path: '',
    component: LogarModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogarRoutingModule {}