import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor() { }

  soma(n: number, m: number) {
    return n + m;
  }
}
