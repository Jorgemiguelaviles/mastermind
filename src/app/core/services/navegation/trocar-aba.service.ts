import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class TrocarAbaService {

  constructor(private router: Router) {}

  navegarComEfeito(
    rota: string,
    antesDeNavegar: () => void,
    depoisDeNavegar?: () => void,
    delay: number = 300
  ) {
    antesDeNavegar();

    setTimeout(() => {
      this.router.navigate([rota]);
      depoisDeNavegar?.();
    }, delay);
  }
}