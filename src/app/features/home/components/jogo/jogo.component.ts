import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo',
  standalone: false,
  templateUrl: './jogo.html',
  styleUrl: './jogo.css',
})
export class JogoComponent {
  mostrarTutorial = false;
  @Input() rota:string | null | undefined

  constructor(private router: Router
  ) {}


 iniciarJogo() {
  this.router.navigate([this.rota]);
}

irParaTutorial() {
  this.router.navigate(['/tutorial']);
}
}
