import { CategoryInterface } from './category.interface'
import { CurrentStageInterface } from './current-stage.interface'
import { FormInterface } from './form.interface'
import { OrganizationInterface } from './organization.interface'
import { ProspectHistoryInterface } from './prospect-history.interface'
import { StageInterface } from './stage-interface'

export interface LeadInterface {
  id: string
  name: string
  forms: FormInterface[]
  organization: OrganizationInterface
  label: unknown[]
  stage_contact: unknown
  category: CategoryInterface
  description: string
  pipedrive: string
  probability: number
  source: string
  stage: StageInterface[]
  type: string
  created_on: string
  updated_on: string
  updater: number
  dealer_probablity: number
  deal_value: string
  is_deleted: boolean
  stage_submission_id?: string
  current_stage: CurrentStageInterface
  previous_contact: unknown[]
  prospect_history: ProspectHistoryInterface[]
}
