/* ••[1]••••••••••••••••••••••••• my-fist-module.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { MyFirstDirectiveDirective } from '../directives/my-first-directive.directive';
import { MyFirstInlineComponentComponent } from '../components/my-first-inline-component/my-first-inline-component.component';
import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MyFirstDirectiveDirective,
    MyFirstComponentComponent,
    MyFirstInlineComponentComponent,
  ],
  exports: [MyFirstComponentComponent, MyFirstInlineComponentComponent],
  imports: [CommonModule, MyFirstModuleRoutingModule],
})
export class MyFirstModuleModule {}
