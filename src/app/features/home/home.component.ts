import { Component, OnInit } from '@angular/core';
import { TrocarAbaService } from '../../core/services/navegation/trocar-aba.service';
import { HomeService } from '../../core/services/api-services/home-service/home.service';
import { AuthService } from '../../core/services/api-services/auth-service/auth.service';

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
  rota:string =  '/mastermind/seleciona-dificuldade'

  constructor(private navigationService: TrocarAbaService,
        private authService: AuthService,
        private homeService: HomeService,
  ) {}

  ngOnInit(): void {

    const id_user  =this.authService.getUserId()


    this.homeService.verifica_dados_usuario(id_user).subscribe(res => {
      console.log('dados_basicos', res);
      this.nomeUsuario = res?.response?.nome?.nome; 
      console.log('nomeUsuario', this.nomeUsuario)

      if(res.response.primeira_vez){
        this.rota = '/tutorial'
      }
    });
    

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