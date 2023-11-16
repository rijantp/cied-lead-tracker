export interface StageInterface {
  name: string
  id: string
  is_active: boolean
  stage_form_id?: string
  position: number
  probability: number
  lead_count: number
  updated_on: string
  is_deleted: boolean
  stage_history_id?: string
}
