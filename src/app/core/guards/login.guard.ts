import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/api-services/auth-service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const isLogged = authService.isLoggedIn();

  if (isLogged) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};