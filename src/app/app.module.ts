import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot('UA-177263861-1')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
