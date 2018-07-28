import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { Sky2Component } from './sky2/sky2.component';
import { Sky3Component } from './sky3/sky3.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Sky2Component,
    Sky3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
