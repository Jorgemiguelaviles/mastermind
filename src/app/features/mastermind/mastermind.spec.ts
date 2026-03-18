import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mastermind } from './mastermind.component';

describe('Mastermind', () => {
  let component: Mastermind;
  let fixture: ComponentFixture<Mastermind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mastermind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mastermind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
