import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosGeraisComponent } from './filtros-gerais.component';

describe('FiltrosGeraisComponent', () => {
  let component: FiltrosGeraisComponent;
  let fixture: ComponentFixture<FiltrosGeraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosGeraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosGeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
