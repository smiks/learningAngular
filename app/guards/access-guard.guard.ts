import { inject } from '@angular/core'
import { CanActivateFn, UrlTree, Router } from '@angular/router';

export const accessGuardGuard = (redirectRoute: string): CanActivateFn => {
    return (): UrlTree => {
      const router: Router = inject(Router);
      return router.createUrlTree([redirectRoute]);
    }
    
}
