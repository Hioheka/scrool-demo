import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrrolViewComponent } from './views/pages/scrrol-view/scrrol-view.component';
import { ExampleComponent } from './views/pages/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrrolViewComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
