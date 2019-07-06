import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageHeaderComponent } from './message-header/message-header.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MessageListComponent, MessageHeaderComponent, AddMessageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MessageListComponent,
    MessageHeaderComponent,
    AddMessageComponent
  ]
})
export class MessageModule { }
