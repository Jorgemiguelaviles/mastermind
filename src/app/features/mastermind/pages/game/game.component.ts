import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormGameService } from '../../../../core/services/form-game/form-game.service';



@Component({
  selector: 'app-game',
  standalone: false,
  templateUrl: './game.html',
  styleUrl: './game.css',
})
// game.component.ts
export class GameComponent implements OnInit, OnDestroy {
  tempo: number = 0; // O estado mestre fica aqui
  interval: any;
  currentRound = 0;
  totalRounds = 10;
  isBooting = true;
  isSwitchingTab = false;

  constructor(
    private formGameService: FormGameService,
    private router: Router,
  ) {
  }

  // --- Listeners ---
  @HostListener('window:beforeunload', ['$event'])
  confirmExit(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = true;
  }

  ngOnInit(): void {
    this.iniciarTimer();
    const token = this.formGameService.isSessionAtiva; 
    
    if (!token) {
      this.router.navigate(['/main']);
    }

    this.formGameService.finalizarSession();
  }

  iniciarTimer() {
    this.pararTimer();
    this.interval = setInterval(() => {
      this.tempo++;
    }, 1000);
  }

  pararTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  venceu_partida(venceu: boolean) {
    if (venceu) {
      this.pararTimer();
      this.formGameService.setResultadoPartida(venceu); 
      this.formGameService.setTempoPartida(this.tempo)
      console.log('Tempo final registrado:', this.tempo);
      this.formGameService.finalizarPartida().subscribe({
      next: (res) => {
        console.log('Partida finalizada com sucesso no Back-end!', res);
        this.formGameService.setPontuacao(res.response.resumo_partida.pontuacao)
        console.log('analisar', res.response.resumo_partida.pontuacao)

        // 4. Agora sim, navega para a tela de resultados
        this.router.navigate(['/mastermind/resultados']);
        this.formGameService.ativarSession()
      },
      error: (err) => {
        console.error('Erro crítico ao finalizar partida:', err);
        // Opcional: mostrar um alerta ao usuário que o progresso não foi salvo
      }
    });
     
    }
  }

  advanceRound() {
  if (this.currentRound < this.totalRounds - 1) {
    this.currentRound++;
  } else{
     this.formGameService.setResultadoPartida(false); 
     this.formGameService.setTempoPartida(this.tempo)
    this.router.navigate(['/mastermind/resultados']);
    this.formGameService.ativarSession()
  }
}
}