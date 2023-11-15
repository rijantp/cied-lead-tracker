import { HttpClient } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { LoginRequestInterface } from '../types/login-request.interface'
import { ApiLoginInterface } from '../types/api-login.interface'
import { AuthDetailsInterface } from '../types/auth-details.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuthSig = signal<undefined | AuthDetailsInterface>(undefined)

  http: HttpClient = inject(HttpClient)

  loginUser(body: LoginRequestInterface): Observable<ApiLoginInterface> {
    return this.http.post<ApiLoginInterface>(
      `${environment.apiBaseUrl}accounts/login/`,
      body
    )
  }
}
