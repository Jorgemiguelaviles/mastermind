import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  @Input() isBooting: boolean = true;
  @Input() isSwitchingTab: boolean = false;
  @Input() abaSelecionada: 'main' | 'ranking' | 'dashboard' = 'main';
  @Output() onTrocarAba = new EventEmitter<'main' | 'ranking' | 'dashboard'>();
  aba!: 'main' | 'ranking' | 'dashboard';
  

   trocarAba(novaAba: 'main' | 'ranking' | 'dashboard') {
    this.onTrocarAba.emit(novaAba);
  }

menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

fecharMobile() {
  if (window.innerWidth < 768) {
    this.menuOpen = false;
  }
}

}
