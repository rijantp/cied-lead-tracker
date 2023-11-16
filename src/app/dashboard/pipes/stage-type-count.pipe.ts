import { Pipe, PipeTransform } from '@angular/core'
import { StageTypeCountInterface } from '../types/stage-type-count.interface'
import { TabsEnum } from '../constants/tabs.enum'

@Pipe({
  name: 'stageTypeCount',
  standalone: true,
})
export class StageTypeCountPipe implements PipeTransform {
  transform(tab: TabsEnum, stageTypes: StageTypeCountInterface[]): string {
    const tabCount: number = stageTypes
      .filter(
        (stage: StageTypeCountInterface) =>
          stage.stage_type.toLowerCase() === tab.toLowerCase()
      )
      .map((stage: StageTypeCountInterface) => stage.value)[0]
    return `${tab} (${tabCount})`
  }
}
