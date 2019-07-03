import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { CEP } from 'src/types/Cep';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {
  cep: CEP = {};
  constructor(
    private cepService: CepService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( (params) => {
      console.log(params);
      this.cepService.getCep(params.numero).subscribe( value => {
        console.log(value);
        this.cep = value;
      });
    });

  }

}
