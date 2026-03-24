import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGameService } from '../../../../core/services/form-game/form-game.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/api-services/auth-service/auth.service';
import { GameService } from '../../../../core/services/api-services/game-service/game-service';

@Component({
  selector: 'app-seleciona-dificuldade',
  templateUrl: './seleciona-dificuldade.html',
  styleUrl: './seleciona-dificuldade.css',
  standalone: false
})
export class SelecionaDificuldadeComponent implements OnInit {

  isBooting = true;
  isSwitchingTab = false;
  form!: FormGroup;

  dificuldadeSelecionada: string | null = null;
configSelecionada: { slots: number; cores: number } | null = null;

dificuldadesConfig: any = {
  facil: { slots: 3, cores: 5 },
  medio: { slots: 4, cores: 6 },
  dificil: { slots: 4, cores: 7 },
  insano: { slots: 5, cores: 7 }
};


  constructor(
    private router: Router,
    private formGameService: FormGameService,
    private authService: AuthService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.form = this.formGameService.getForm();
    this.setDificuldade(null)

  }

setDificuldade(nivel: string | null) {
  this.dificuldadeSelecionada = nivel;
  this.configSelecionada = nivel ? this.dificuldadesConfig[nivel] : null;

  this.form.get('dificuldade')?.setValue(nivel);
}

// --- Listeners ---
  @HostListener('window:beforeunload', ['$event'])
  confirmExit(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = true;
  }


  postForm() {

    const id_usuario = this.authService.getUserId()

    const formData = new FormData();

    formData.append('dificuldade', this.form.value.dificuldade);
    formData.append('id_usuario', String(id_usuario));

    // this.router.navigate(['/mastermind/jogo']);
    this.gameService.createNovoJogo(formData).subscribe({
    next: (res) => {
  console.log('Sucesso:', res);

  this.formGameService.setListaCores(res.response.lista_cores);
  this.formGameService.setNGaps(res.response.n_de_espacos);
  this.formGameService.ativarSession()
  this.formGameService.setIdPartida(res.response.id_partida)

  this.router.navigate(['/mastermind/jogo']);
},
    error: (err) => {
      console.error('Erro:', err);
    }
  }
);
  }
}