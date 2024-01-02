/* ••[1]••••••••••••••••••••••••• my-fist-module.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { MyFistDirectiveDirective } from '../directives/my-fist-directive.directive';
import { MyFistModuleRoutingModule } from './my-fist-module-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MyFistDirectiveDirective],
  imports: [CommonModule, MyFistModuleRoutingModule],
})
export class MyFistModuleModule {}
