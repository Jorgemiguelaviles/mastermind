import { Component, OnInit } from '@angular/core';
import { TrocarAbaService } from '../../core/services/navegation/trocar-aba.service';

@Component({
  selector: '   ',
  templateUrl: './dashboards.html',
  styleUrl: './dashboards.css',
  standalone: false,
})
export class DashboardsComponent implements OnInit {
  isBooting = true;
  isSwitchingTab = false;
  abaSelecionada: 'main' | 'ranking' | 'dashboard' = 'dashboard';

   constructor(private navigationService: TrocarAbaService) {}


  ngOnInit(): void {

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
