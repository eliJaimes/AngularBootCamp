/* ••[1]••••••••••••••••••••••••• app.module.ts •••••••••••••••••••••••••••••• */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MyFistModuleModule } from './my-fist-module/my-fist-module.module';
import { NgModule } from '@angular/core';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyFistModuleModule],
  providers: [],
})
export class AppModule {}
