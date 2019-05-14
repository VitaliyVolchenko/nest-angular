import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BlogModule} from './blog/BlogModule';

import { AppComponent } from './app.component';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    AppRoutingModule,
    MatButtonModule,    
    MatToolbarModule,
    MatIconModule,
    BlogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
