import { GraphInterface } from './graph.interface'
import { StageTypeCountInterface } from './stage-type-count.interface'

export interface GraphDetailsInterface {
  graph: GraphInterface[]
  stage_type_count: StageTypeCountInterface[]
}
