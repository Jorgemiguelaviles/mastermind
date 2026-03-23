import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pinos-certos',
  standalone: false,
  templateUrl: './pinos-certos.html',
  styleUrl: './pinos-certos.css',
})
export class PinosCertosComponent {
  @Input() slots:number[] | undefined
  resultado = {
    pretos: 3,
    brancos: 3
  };

  get feedbackArray(): string[] {
    if (!this.resultado) return [];

    const totalSlots = this.slots ? this.slots.length : 0;

    const pretos = Array(this.resultado.pretos).fill('preto');
    const brancos = Array(this.resultado.brancos).fill('branco');

    const feedback = [...pretos, ...brancos];

    // ⚠️ nunca ultrapassa o número de slots
    return feedback.slice(0, totalSlots);
  }

}
