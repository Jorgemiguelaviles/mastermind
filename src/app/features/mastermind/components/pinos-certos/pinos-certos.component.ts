import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResultadoFeedback } from '../../../../core/interfaces/models/ResultadoFeedback';

@Component({
  selector: 'app-pinos-certos',
  standalone: false,
  templateUrl: './pinos-certos.html',
  styleUrl: './pinos-certos.css',
})
export class PinosCertosComponent implements OnChanges {
  @Input() slots: number[] | undefined;
  @Input() resultado: ResultadoFeedback = { cinzas: 2, brancos: 2 };

  ngOnChanges(changes: SimpleChanges) {
    // Debug para verificar se o dado realmente chegou do pai
    if (changes['resultado']) {
      console.log('Dados recebidos no Filho:', this.resultado);
    }
  }

  get feedbackArray(): string[] {
    // Fallback: se o pai não mandou slots, usamos o total de acertos
    const totalSlots = this.slots && this.slots.length > 0 
                       ? this.slots.length 
                       : (this.resultado.cinzas + this.resultado.brancos);

    // Criamos os arrays garantindo que o valor seja numérico (|| 0)
    const arrayCinzas = Array(Math.max(0, this.resultado.cinzas || 0)).fill('cinzas');
    const arrayBrancos = Array(Math.max(0, this.resultado.brancos || 0)).fill('brancos');

    const feedback = [...arrayCinzas, ...arrayBrancos];

    // Corta apenas se totalSlots for maior que 0
    return totalSlots > 0 ? feedback.slice(0, totalSlots) : feedback;
  }
}