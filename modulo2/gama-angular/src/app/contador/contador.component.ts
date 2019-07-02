import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {




  count = 0;
  countPlus = 3;
  num = 0;
  items: Array<string|number> = ['Contador', 'de', 'imposto'];


  ngOnInit() {
    setTimeout(() => {


      setInterval(() => {
        this.count += this.countPlus;
        this.items[3] = this.count;
      }, 1000);

    }, 3000);
  }


  botaoRapido() {

    this.num =  Number(prompt('Digite a velocidade do seu creu'));
    if (this.num > 0) {
      this.countPlus = this.num;
    }
  }

}
