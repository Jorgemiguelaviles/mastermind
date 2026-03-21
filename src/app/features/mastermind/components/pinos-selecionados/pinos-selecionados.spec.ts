import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinosSelecionadosComponent } from './pinos-selecionados.component';

describe('PinosSelecionadosComponent', () => {
  let component: PinosSelecionadosComponent;
  let fixture: ComponentFixture<PinosSelecionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinosSelecionadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinosSelecionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
