import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasJogadas } from './partidas-jogadas';

describe('PartidasJogadas', () => {
  let component: PartidasJogadas;
  let fixture: ComponentFixture<PartidasJogadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidasJogadas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasJogadas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
