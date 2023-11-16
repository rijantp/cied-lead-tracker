import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../../auth/services/auth.service'

export const authGuard: CanActivateFn = (
  route,
  state,
  authService: AuthService = inject(AuthService),
  router: Router = inject(Router)
) => {
  const isLoggedIn: boolean = Boolean(authService.userAuthSig())
  if (!isLoggedIn) {
    router.navigate(['login'])
  }
  return isLoggedIn
}
