import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/store/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageModule } from './message/message.module';
import { messageReducer } from 'src/store/message.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      messages: messageReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
