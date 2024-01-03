/* ••[1]••••••••••••••••••••••••• app.module.ts •••••••••••••••••••••••••••••• */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { NgModule } from '@angular/core';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyFirstModuleModule],
  providers: [],
})
export class AppModule {}
