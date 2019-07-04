import { TestBed } from '@angular/core/testing';

import { SomaService } from './soma.service';

describe('SomaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service).toBeTruthy();
  });

  it('Soma deve retorna 5', () => {
    const service: SomaService = TestBed.get(SomaService);

    expect(service.soma(1, 4)).toBe(5);
  });
});
