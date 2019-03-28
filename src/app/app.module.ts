import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AppService],
  entryComponents: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const appcomponent = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('suggested-widget', appcomponent);
  }
}
