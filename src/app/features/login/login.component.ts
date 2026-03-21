import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: false,
})
export class LoginComponent {

  fase: 'intro' | 'login' = 'intro';

  piscando = false;
  esconderTexto = false;
  animouTitulo = false;

  animando = false;
  tela: 'login' | 'cadastro' | 'recuperar' = 'login';

  private iniciou = false;

  @HostListener('document:keydown')
  @HostListener('document:click')
  iniciar() {
    if (this.fase !== 'intro' || this.iniciou) return;

    this.iniciou = true;

    this.piscando = true;

    setTimeout(() => {
      this.esconderTexto = true;
    }, 1000);

    setTimeout(() => {
      this.animouTitulo = true;
    }, 1300);

    setTimeout(() => {
      this.fase = 'login';
    }, 2200);
  }

  trocarTela(nova: 'login' | 'cadastro' | 'recuperar') {
    this.animando = true;

    setTimeout(() => {
      this.tela = nova;
      this.animando = false;
    }, 400);
  }
}