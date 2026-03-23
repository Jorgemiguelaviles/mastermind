import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/api-services/auth-service/auth.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  @Input() soundMuted: boolean = false;

  constructor(private router: Router,
    private authService: AuthService
  ) {}
  toggleSoundClicked() {
     this.soundMuted = !this.soundMuted;

  console.log('Som:', this.soundMuted ? 'mutado' : 'ativo');
  }
  openSettingsClicked() {
    // logica para abrir o menu
  }
  
logoutClicked() {
    this.authService.logout(); // 👈 centralizado no service
    this.router.navigate(['/login']);
  }

}


