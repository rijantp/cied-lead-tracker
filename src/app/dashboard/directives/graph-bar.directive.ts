import {
  Directive,
  ElementRef,
  Renderer2,
  inject,
  AfterViewInit,
  Input,
} from '@angular/core'
import { GraphUtility } from '../utility/graph.utility'
import { GraphInterface } from '../types/graph.interface'

@Directive({
  selector: '[appGraphBar]',
  standalone: true,
})
export class GraphBarDirective implements AfterViewInit {
  eleRef: ElementRef = inject(ElementRef)
  renderer: Renderer2 = inject(Renderer2)

  @Input({ required: true }) appGraphBar!: GraphInterface
  @Input({ required: true }) maxDomain!: number

  ngAfterViewInit(): void {
    const style = GraphUtility.getStyle(this.appGraphBar, this.maxDomain)

    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      style.color
    )
    this.renderer.setStyle(this.eleRef.nativeElement, 'height', style.height)
  }
}
