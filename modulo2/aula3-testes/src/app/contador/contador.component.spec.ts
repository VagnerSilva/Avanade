import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponent } from './contador.component';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    element =  fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Clica no botão aumentar duas veze exibe 2', () => {
    component.counter(true);
    component.counter(true);
    fixture.detectChanges();

    expect(element.querySelector('H1').textContent).not.toBe('Contar: 1');
    expect(element.querySelector('H1').textContent).toBe('Contar: 2');
  });
});
