import { Component, OnInit } from '@angular/core';
import { TrocarAbaService } from '../../core/services/navegation/trocar-aba.service';

@Component({
  selector: 'app-main',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {

  isBooting = true;
  isSwitchingTab = false;
  soundMuted = false;
  abaSelecionada: 'main' | 'ranking' | 'dashboard' = 'main';
  nomeUsuario = 'Jorge'

  constructor(private navigationService: TrocarAbaService) {}

  ngOnInit(): void {
    console.log('MainComponent carregado');

    setTimeout(() => {
      this.isBooting = false;
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
}