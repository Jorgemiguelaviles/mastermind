import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosDeTempoComponent } from './graficos-de-tempo.component';

describe('GraficosDeTempoComponent', () => {
  let component: GraficosDeTempoComponent;
  let fixture: ComponentFixture<GraficosDeTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficosDeTempoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosDeTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
