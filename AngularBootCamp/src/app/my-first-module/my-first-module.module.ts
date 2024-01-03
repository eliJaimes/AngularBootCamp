/* ••[1]••••••••••••••••••••••••• my-fist-module.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { MyFirstDirectiveDirective } from '../directives/my-first-directive.directive';
import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MyFirstDirectiveDirective],
  imports: [CommonModule, MyFirstModuleRoutingModule],
})
export class MyFirstModuleModule {}
