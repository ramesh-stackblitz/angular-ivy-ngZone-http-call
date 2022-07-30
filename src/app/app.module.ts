import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServiceAppService } from './service-app.service';
import { TrackByComponent } from './track-by/track-by.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TrackByComponent,
    GrandParentComponent,
    ParentComponent,
    ChildComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ServiceAppService],
})
export class AppModule {}
