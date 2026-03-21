import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.html',
  styleUrl: './resultados.css',
})
export class ResultadosComponent {



  venceu = false; // mock
  dificuldade = 'Médio';
  tempo = '02:34';

  stats = {
    mediaTempo: '03:10',
    melhorTempo: '01:58',
    winRate: 65
  };

  constructor(private router: Router) {}

  voltarInicio() {
    this.router.navigate(['/main']);
  }
}
