import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinosCertosComponent } from './pinos-certos.component';

describe('PinosCertosComponent', () => {
  let component: PinosCertosComponent;
  let fixture: ComponentFixture<PinosCertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinosCertosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinosCertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
