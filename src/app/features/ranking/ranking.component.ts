import { Component, OnInit } from '@angular/core';
import { TrocarAbaService } from '../../core/services/navegation/trocar-aba.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.html',
  styleUrls: ['./ranking.css'],
  standalone: false,
})
export class RankingComponent implements OnInit {

  abaSelecionada: 'main' | 'ranking' | 'dashboard' = 'ranking';
  isBooting = true;
  isSwitchingTab = false;
loading = false;
pagina = 1;
limite = 10;

constructor(private navigationService: TrocarAbaService) {}

ngOnInit(): void {
    console.log('MainComponent carregado');

    setTimeout(() => {
      this.isBooting = false;
    }, 1200);
  }

carregarMais() {
  if (this.loading) return;

  this.loading = true;

  // simulação de API
  setTimeout(() => {
    this.pagina++;

    const novos = this.gerarMock(this.pagina);

    this.ranking = [...this.ranking, ...novos];

    this.loading = false;
  }, 1200);
}
trocarAbaComEfeito(aba: 'main' | 'ranking' | 'dashboard') {
    this.abaSelecionada = aba;
    this.navigationService.navegarComEfeito(
      `/${aba}`,
      () => this.isSwitchingTab = true,
      () => this.isSwitchingTab = false
    );
  }


/* mock temporário (depois você apaga quando ligar backend) */
gerarMock(pagina: number) {
  const base = (pagina - 1) * 10;

  return Array.from({ length: 10 }).map((_, i) => ({
    rank: base + i + 1,
    avatar: `https://i.pravatar.cc/150?img=${(base + i + 1) % 70}`,
    nome: `Player ${base + i + 1}`,
    pontos: 4000 - (base + i * 50),
    partidas: 100 + i * 3,
    winRate: 40 + i,
    melhorTempo: `02:${10 + i}`
  }));
}



ranking = [
  {
    rank: 1,
    avatar: 'https://i.pravatar.cc/150?img=1',
    nome: 'Atena Prime',
    pontos: 9850,
    partidas: 120,
    winRate: 78,
    melhorTempo: '01:12'
  },
  {
    rank: 2,
    avatar: 'https://i.pravatar.cc/150?img=2',
    nome: 'Neon Blade',
    pontos: 9120,
    partidas: 140,
    winRate: 74,
    melhorTempo: '01:18'
  },
  {
    rank: 3,
    avatar: 'https://i.pravatar.cc/150?img=3',
    nome: 'Cyber Fox',
    pontos: 8800,
    partidas: 110,
    winRate: 71,
    melhorTempo: '01:25'
  },
  {
    rank: 4,
    avatar: 'https://i.pravatar.cc/150?img=4',
    nome: 'Zero Ghost',
    pontos: 8420,
    partidas: 130,
    winRate: 69,
    melhorTempo: '01:30'
  },
  {
    rank: 5,
    avatar: 'https://i.pravatar.cc/150?img=5',
    nome: 'Shadow Pulse',
    pontos: 8100,
    partidas: 125,
    winRate: 68,
    melhorTempo: '01:33'
  },
  {
    rank: 6,
    avatar: 'https://i.pravatar.cc/150?img=6',
    nome: 'Nova Strike',
    pontos: 7890,
    partidas: 118,
    winRate: 66,
    melhorTempo: '01:36'
  },
  {
    rank: 7,
    avatar: 'https://i.pravatar.cc/150?img=7',
    nome: 'QuantumX',
    pontos: 7600,
    partidas: 150,
    winRate: 64,
    melhorTempo: '01:40'
  },
  {
    rank: 8,
    avatar: 'https://i.pravatar.cc/150?img=8',
    nome: 'Dark Orbit',
    pontos: 7350,
    partidas: 132,
    winRate: 63,
    melhorTempo: '01:44'
  },
  {
    rank: 9,
    avatar: 'https://i.pravatar.cc/150?img=9',
    nome: 'Echo Void',
    pontos: 7100,
    partidas: 140,
    winRate: 61,
    melhorTempo: '01:48'
  },
  {
    rank: 10,
    avatar: 'https://i.pravatar.cc/150?img=10',
    nome: 'Pulse Rider',
    pontos: 6900,
    partidas: 155,
    winRate: 60,
    melhorTempo: '01:50'
  },
  {
    rank: 11,
    avatar: 'https://i.pravatar.cc/150?img=11',
    nome: 'Steel Mind',
    pontos: 6700,
    partidas: 160,
    winRate: 59,
    melhorTempo: '01:55'
  },
  {
    rank: 12,
    avatar: 'https://i.pravatar.cc/150?img=12',
    nome: 'Night Coder',
    pontos: 6500,
    partidas: 145,
    winRate: 58,
    melhorTempo: '01:58'
  },
  {
    rank: 13,
    avatar: 'https://i.pravatar.cc/150?img=13',
    nome: 'Byte Hunter',
    pontos: 6300,
    partidas: 150,
    winRate: 56,
    melhorTempo: '02:02'
  },
  {
    rank: 14,
    avatar: 'https://i.pravatar.cc/150?img=14',
    nome: 'LogicX',
    pontos: 6100,
    partidas: 135,
    winRate: 55,
    melhorTempo: '02:05'
  },
  {
    rank: 15,
    avatar: 'https://i.pravatar.cc/150?img=15',
    nome: 'Ghost Loop',
    pontos: 5900,
    partidas: 128,
    winRate: 53,
    melhorTempo: '02:09'
  },
  {
    rank: 16,
    avatar: 'https://i.pravatar.cc/150?img=16',
    nome: 'Hex Runner',
    pontos: 5700,
    partidas: 122,
    winRate: 52,
    melhorTempo: '02:12'
  },
  {
    rank: 17,
    avatar: 'https://i.pravatar.cc/150?img=17',
    nome: 'Bit Storm',
    pontos: 5500,
    partidas: 140,
    winRate: 50,
    melhorTempo: '02:18'
  },
  {
    rank: 18,
    avatar: 'https://i.pravatar.cc/150?img=18',
    nome: 'Null Byte',
    pontos: 5300,
    partidas: 138,
    winRate: 49,
    melhorTempo: '02:22'
  },
  {
    rank: 19,
    avatar: 'https://i.pravatar.cc/150?img=19',
    nome: 'Core Breaker',
    pontos: 5100,
    partidas: 142,
    winRate: 47,
    melhorTempo: '02:30'
  },
  {
    rank: 20,
    avatar: 'https://i.pravatar.cc/150?img=20',
    nome: 'Last Signal',
    pontos: 4900,
    partidas: 150,
    winRate: 45,
    melhorTempo: '02:40'
  }
];
}