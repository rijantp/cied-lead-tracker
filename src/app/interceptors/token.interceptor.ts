import { HttpInterceptorFn } from '@angular/common/http'
import { AuthService } from '../auth/services/auth.service'
import { inject } from '@angular/core'

export const tokenInterceptor: HttpInterceptorFn = (
  req,
  next,
  authService = inject(AuthService)
) => {
  if (req.method === 'GET') {
    const token: string = authService.userAuthSig()?.token ?? ''
    const id: string = authService.userAuthSig()?.id ?? ''
    req = req.clone({
      headers: req.headers.set('BEARER', token).set('USER-ID', id),
    })
  }

  return next(req)
}
