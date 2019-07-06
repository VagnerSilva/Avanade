import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<number>) { }

  ngOnInit() {
    this.count$ = this.store.select('counter');
  }

  counter(type) {
     if (type) {
      this.store.dispatch({
        type: 'INCREMENT'
      });
    }  else {
      this.store.dispatch({
        type: 'DECREMENT'
      });
    }
  }

}
