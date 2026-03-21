import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecionaDificuldadeComponent } from './seleciona-dificuldade.component';

describe('SelecionaDificuldadeComponent', () => {
  let component: SelecionaDificuldadeComponent;
  let fixture: ComponentFixture<SelecionaDificuldadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionaDificuldadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionaDificuldadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
