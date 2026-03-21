import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  @Input() soundMuted: boolean = false;

  constructor(private router: Router) {}
  toggleSoundClicked() {
     this.soundMuted = !this.soundMuted;

  console.log('Som:', this.soundMuted ? 'mutado' : 'ativo');
  }
  openSettingsClicked() {
    // logica para abrir o menu
  }
  
  logoutClicked() {
  // limpa token / sessão
  localStorage.clear();

  // redireciona para login
  this.router.navigate(['/login']);

}}


