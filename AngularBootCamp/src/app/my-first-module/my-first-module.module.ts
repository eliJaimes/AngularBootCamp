/* ••[1]••••••••••••••••••••••••• my-fist-module.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { MyFirstDirectiveDirective } from '../directives/my-first-directive.directive';
import { MyFirstInlineComponentComponent } from '../components/my-first-inline-component/my-first-inline-component.component';
import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import { MyFirstPipePipe } from '../pipes/my-first-pipe.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MyFirstDirectiveDirective,
    MyFirstComponentComponent,
    MyFirstInlineComponentComponent,
    MyFirstPipePipe,
  ],
  exports: [MyFirstComponentComponent, MyFirstInlineComponentComponent],
  imports: [CommonModule, MyFirstModuleRoutingModule, FormsModule],
})
export class MyFirstModuleModule {}
