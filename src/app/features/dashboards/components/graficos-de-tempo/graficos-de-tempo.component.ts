import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

type TipoGrafico = 'partidas' | 'pontuacao' | 'posicao';

@Component({
  selector: 'app-graficos-de-tempo',
  standalone: false,
  templateUrl: './graficos-de-tempo.html',
  styleUrls: ['./graficos-de-tempo.css'],
})
export class GraficosDeTempoComponent implements AfterViewInit {
 @ViewChild('chartCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  tipo: TipoGrafico = 'partidas';
  chart?: Chart;

  ngAfterViewInit(): void {
  setTimeout(() => {
    this.renderChart();
  }, 0);
}

  setTipo(tipo: TipoGrafico): void {
    this.tipo = tipo;
    this.updateChart();
  }

  private renderChart(): void {
    const ctx = this.canvasRef.nativeElement.getContext('2d');

    if (!ctx) return;

    this.chart = new Chart(ctx, {
  type: 'line',
  data: this.getData(),
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    }
  }
});

// 👇 FORÇA O RENDER REAL
setTimeout(() => {
  this.chart?.resize();
}, 50);
  }

  private updateChart(): void {
    if (!this.chart) return;

    this.chart.data = this.getData();
    this.chart.update();
  }

  private getData() {
    const baseLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];

    switch (this.tipo) {

      case 'partidas':
        return {
          labels: baseLabels,
          datasets: [{
            data: [3, 5, 2, 6, 4],
            borderColor: '#00ffff'
          }]
        };

      case 'pontuacao':
        return {
          labels: baseLabels,
          datasets: [{
            data: [120, 200, 150, 300, 250],
            borderColor: '#00ff88'
          }]
        };

      case 'posicao':
        return {
          labels: baseLabels,
          datasets: [{
            data: [5, 3, 4, 2, 1],
            borderColor: '#ffcc00'
          }]
        };
    }
  }
}