import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.css'],
  standalone: false
})
export class TimerComponent implements OnInit, OnDestroy {

  tempo: number = 0; // em segundos
  interval: any;

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer() {
    this.interval = setInterval(() => {
      this.tempo++;
    }, 1000);
  }

  pararTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  resetarTimer() {
    this.tempo = 0;
  }

  formatarTempo(): string {
    const minutos = Math.floor(this.tempo / 60);
    const segundos = this.tempo % 60;

    return `${this.pad(minutos)}:${this.pad(segundos)}`;
  }

  private pad(valor: number): string {
    return valor < 10 ? `0${valor}` : `${valor}`;
  }
}