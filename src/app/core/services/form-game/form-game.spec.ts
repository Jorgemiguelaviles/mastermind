import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGame } from './form-game';

describe('FormGame', () => {
  let component: FormGame;
  let fixture: ComponentFixture<FormGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
