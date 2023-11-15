import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { ApiUserDetailsInterface } from '../types/api-user-details.interface'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  http: HttpClient = inject(HttpClient)

  getUserDetails(): Observable<ApiUserDetailsInterface> {
    return this.http.get<ApiUserDetailsInterface>(
      `${environment.apiBaseUrl}accounts/user/85NPW/`
    )
  }
}
