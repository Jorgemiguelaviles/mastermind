import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleciona-dificuldade',
  standalone: false,
  templateUrl: './seleciona-dificuldade.html',
  styleUrl: './seleciona-dificuldade.css',
})
export class SelecionaDificuldadeComponent {
    isBooting = true;
  isSwitchingTab = false;
constructor(private router: Router) {}

selecionarDificuldade(nivel: string) {
  // depois você pode salvar isso num service
  console.log('Dificuldade:', nivel);

  this.router.navigate(['/mastermind/jogo']);
}}
