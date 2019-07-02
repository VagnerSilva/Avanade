import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItenmComponent } from './todo-itenm/todo-itenm.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItenmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
