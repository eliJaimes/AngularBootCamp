/* ••[1]••••••••••••••••••••••••• my-fist-module-routing.module.ts •••••••••••••••••••••••••••••• */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class MyFirstModuleRoutingModule {}
