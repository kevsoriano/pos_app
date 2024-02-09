import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { take, map } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user.pipe(
    take(1),
    map(user => {
      const isAuthenticated = !!user;
      if(isAuthenticated) {
        return true;
      }

      return router.parseUrl('/account/login');
    })
  )
};
