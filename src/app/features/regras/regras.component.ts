import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mastermind',
  templateUrl: './regras.html',
  styleUrl: './regras.css',
  standalone: false,
})
export class RegrasComponent {

  constructor(private router: Router) { }

    voltar() {
    this.router.navigate(['/main']);
  }

  iniciarJogo() {
    this.router.navigate(['/mastermind/seleciona-dificuldade']);
  }

}
