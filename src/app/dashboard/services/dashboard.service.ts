import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { ApiUserDetailsInterface } from '../types/api-user-details.interface'
import { ApiGraphDetailsInterface } from '../types/api-graph-details.interface'
import { ApiProbabilityInterface } from '../types/api-probability.interface'

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

  getGraphDetails(stageType: string): Observable<ApiGraphDetailsInterface> {
    return this.http.get<ApiGraphDetailsInterface>(
      `${environment.apiBaseUrl}leads/dashboard/graph/?stage_type=${stageType}`
    )
  }

  getProbabilityDetails(
    stageType: string
  ): Observable<ApiProbabilityInterface> {
    return this.http.get<ApiProbabilityInterface>(
      `${environment.apiBaseUrl}leads/probability/analysis/?stage_type=${stageType}`
    )
  }
}
