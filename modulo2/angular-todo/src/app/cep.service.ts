import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CEP } from 'src/types/Cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }


  getCep(cep: string): Observable<CEP> {
    return this.http.get<CEP>('https://viacep.com.br/ws/' + cep + '/json/');
  }
}
