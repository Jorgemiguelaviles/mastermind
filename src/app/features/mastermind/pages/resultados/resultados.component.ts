import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGameService } from '../../../../core/services/form-game/form-game.service';

@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.html',
  styleUrl: './resultados.css',
})
export class ResultadosComponent implements OnInit {



  venceu = false; // mock
  dificuldade = 'Médio';
  tempo = '02:34';
  pontuacao = 1000


  constructor(private router: Router,
    private formGameService: FormGameService
  ) {}


  ngOnInit(): void {
    const token = this.formGameService.isSessionAtiva; 
    
    if (!token) {
      this.router.navigate(['/main']);
    }

    this.formGameService.finalizarSession();
    this.dificuldade = this.formGameService.getDificuldade()
    this.venceu = this.formGameService.getResultadoPartida()
    this.tempo = this.formGameService.getTempoPartida()
    console.log(this.formGameService.getPontuacao())
    this.pontuacao = parseInt(this.formGameService.getPontuacao()) 
  }

  voltarInicio() {
    this.router.navigate(['/main']);
  }
}
