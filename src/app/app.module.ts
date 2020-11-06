import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './views/hello/hello.component';
import { SebasComponent } from './components/sebas/sebas.component';
import { OsamaComponent } from './components/osama/osama.component';
import { BelenComponent } from './belen/belen.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SebasComponent,
    OsamaComponent,
    BelenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
