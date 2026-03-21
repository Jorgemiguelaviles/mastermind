import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pinos-certos',
  standalone: false,
  templateUrl: './pinos-certos.html',
  styleUrl: './pinos-certos.css',
})
export class PinosCertosComponent {
  @Input() pretos: number = 0;
@Input() brancos: number = 0;

pinos: ('preto' | 'branco')[] = [];

ngOnChanges(): void {
  this.gerarPinos();
}

private gerarPinos(): void {
  const pretosArray = Array.from({ length: this.pretos }, () => 'preto' as const);
  const brancosArray = Array.from({ length: this.brancos }, () => 'branco' as const);

  this.pinos = [...pretosArray, ...brancosArray];
}

}
