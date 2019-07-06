import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css']
})
export class MessageHeaderComponent implements OnInit {

  messageNumber = 0;

  constructor(private store: Store<any>) { }

  ngOnInit() {

    this.store.select('messages').subscribe(v => {
      console.log(v, 'ok');
      this.messageNumber = v.messages.length;
    });
  }

}
