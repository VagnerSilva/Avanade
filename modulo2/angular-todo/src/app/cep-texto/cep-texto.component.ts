import { Component, OnInit } from '@angular/core';
import { CEP } from 'src/types/Cep';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep-texto',
  templateUrl: './cep-texto.component.html',
  styleUrls: ['./cep-texto.component.scss']
})
export class CepTextoComponent implements OnInit {

  cep: CEP = {};
  cepText = '';

  constructor(private cepService: CepService) {  }

  ngOnInit() {
  }

  buscarCep() {
    if (!this.cepText) { return; }
    this.cepService.getCep(this.cepText).subscribe(v => {
      this.cep = v;
      this.cepText = '';
    });
  }

}
