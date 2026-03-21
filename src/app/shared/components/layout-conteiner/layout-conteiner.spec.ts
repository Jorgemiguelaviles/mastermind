import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConteiner } from './layout-conteiner.component';

describe('LayoutConteiner', () => {
  let component: LayoutConteiner;
  let fixture: ComponentFixture<LayoutConteiner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutConteiner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutConteiner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
