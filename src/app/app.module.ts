import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServiceAppService } from './service-app.service';
import { TrackByComponent } from './track-by/track-by.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, TrackByComponent],
  bootstrap: [AppComponent],
  providers: [ServiceAppService],
})
export class AppModule {}
