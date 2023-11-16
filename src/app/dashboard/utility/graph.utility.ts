import { LeadStageConst } from '../constants/lead-stage.const'
import { GraphInterface } from '../types/graph.interface'

export class GraphUtility {
  static findMax<T>(list: T[], key: keyof T): number {
    let max = 0
    list.forEach((item: T) => {
      if (Number(item[key]) > max) max = Number(item[key])
    })

    return max
  }

  static getGraphDomains<T>(list: T[], key: keyof T): number[] {
    const maxDomain: number = GraphUtility.findMax(list, key)
    switch (true) {
      case maxDomain < 4:
        return [3, 2, 1, 0]
      case maxDomain < 10:
        return [9, 6, 3, 0]
      case maxDomain <= 15:
        return [15, 10, 5, 0]
      case maxDomain <= 30:
        return [30, 20, 10, 0]
      case maxDomain <= 60:
        return [60, 40, 20, 0]
      default:
        return [300, 200, 100, 0]
    }
  }

  static getStyle(
    stageType: GraphInterface,
    maxDomain: number
  ): { height: string; color: string } {
    const height = `${(stageType.leads * 100) / maxDomain}%`
    switch (stageType.stage_name) {
      case LeadStageConst.CONTACT_MADE.name:
        return { height: height, color: LeadStageConst.CONTACT_MADE.color }
      case LeadStageConst.INITIAL_INTEREST.name:
        return { height: height, color: LeadStageConst.INITIAL_INTEREST.color }
      case LeadStageConst.FIRST_INTO_MEETING.name:
        return {
          height: height,
          color: LeadStageConst.FIRST_INTO_MEETING.color,
        }
      case LeadStageConst.FOLLOW_UP_MEETING_STAGE.name:
        return {
          height: height,
          color: LeadStageConst.FOLLOW_UP_MEETING_STAGE.color,
        }
      case LeadStageConst.WORKSHOP_STAGE.name:
        return { height: height, color: LeadStageConst.WORKSHOP_STAGE.color }
      default:
        return { height: '0', color: 'white' }
    }
  }
}
