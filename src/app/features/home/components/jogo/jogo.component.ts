import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo',
  standalone: false,
  templateUrl: './jogo.html',
  styleUrl: './jogo.css',
})
export class JogoComponent {
  mostrarTutorial = false;

  constructor(private router: Router) {}


 iniciarJogo() {
  this.router.navigate(['/mastermind/jogo']);
}

irParaTutorial() {
  this.router.navigate(['/tutorial']);
}
}
