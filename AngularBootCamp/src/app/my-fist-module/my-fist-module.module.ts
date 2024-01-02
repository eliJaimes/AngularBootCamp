/* ••[1]••••••••••••••••••••••••• my-fist-module.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { MyFistModuleRoutingModule } from './my-fist-module-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MyFistModuleRoutingModule],
})
export class MyFistModuleModule {}
