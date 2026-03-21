import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-partidas-jogadas',
  standalone: false,
  templateUrl: './partidas-jogadas.html',
  styleUrl: './partidas-jogadas.css',
})
export class PartidasJogadasComponent {
  pieChart?: Chart;
  barChart?: Chart;

  ngAfterViewInit(): void {
    this.renderBarChart();
    this.renderPieChart();
  }

  private renderBarChart(): void {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Fácil', 'Médio', 'Difícil', 'Insano'],
        datasets: [{
          label: 'Partidas',
          data: [40, 30, 20, 10],
          backgroundColor: [
            '#00ff88',
            '#00ccff',
            '#ffcc00',
            '#ff3366'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: '#fff' } },
          y: { ticks: { color: '#fff' } }
        }
      }
    });
  }

  private renderPieChart(): void {
    const canvas = document.getElementById('pieChart') as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Fácil', 'Médio', 'Difícil', 'Insano'],
        datasets: [{
          data: [40, 30, 20, 10],
          backgroundColor: [
            '#00ff88',
            '#00ccff',
            '#ffcc00',
            '#ff3366'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: '#fff'
            }
          }
        }
      }
    });
  }
}
