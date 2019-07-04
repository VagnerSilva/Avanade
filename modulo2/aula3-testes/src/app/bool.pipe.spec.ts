import { BoolPipe } from './bool.pipe';

describe('BoolPipe', () => {
  it('create an instance', () => {
    const pipe = new BoolPipe();
    expect(pipe).toBeTruthy();
  });

  it('Mudar retornar Sim ou Não para valor  booleanos', () => {
    const pipe = new BoolPipe();
    expect(pipe.transform(false)).toBe('Não');
  })
});
