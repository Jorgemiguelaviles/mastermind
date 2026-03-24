// timer.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.css'],
  standalone: false
})
export class TimerComponent {
  @Input() tempo: number = 0; // Recebe o número puro do pai

  // A formatação visual fica no filho para manter o template limpo
  formatarVisual(): string {
    const minutos = Math.floor(this.tempo / 60);
    const segundos = this.tempo % 60;
    return `${this.pad(minutos)}:${this.pad(segundos)}`;
  }

  private pad(valor: number): string {
    return valor < 10 ? `0${valor}` : `${valor}`;
  }
}