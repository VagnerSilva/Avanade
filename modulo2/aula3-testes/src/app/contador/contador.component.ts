import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {
  }

  counter(type: boolean) {
    if (type) {
      this.count++;
    } else {
      this.count--;
    }
  }

}
