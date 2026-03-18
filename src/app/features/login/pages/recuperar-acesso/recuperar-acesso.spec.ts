import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarAcesso } from './recuperar-acesso.component';

describe('RecuperarAcesso', () => {
  let component: RecuperarAcesso;
  let fixture: ComponentFixture<RecuperarAcesso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarAcesso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarAcesso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
