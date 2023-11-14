import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterLink } from '@angular/router'
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms'
import { AuthService } from './services/auth.service'
import { LoginRequestInterface } from './types/login-request.interface'
import { ApiLoginInterface } from './types/api-login.interface'

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  router: Router = inject(Router)
  authService: AuthService = inject(AuthService)

  disableLogin: boolean = false

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  })

  onLogin(): void {
    const requestBody: LoginRequestInterface = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password,
      device_id: 'fgdg',
    }
    this.disableLogin = true
    this.authService.loginUser(requestBody).subscribe({
      next: (response: ApiLoginInterface) => {
        this.disableLogin = false
        this.authService.userAuthSig.set(response.data)
        this.router.navigate(['/'])
      },
      error: () => {
        this.disableLogin = false
      },
    })
  }
}
