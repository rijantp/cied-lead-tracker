import {
  Directive,
  ElementRef,
  Renderer2,
  inject,
  AfterViewInit,
  Input,
} from '@angular/core'

@Directive({
  selector: '[appProbabilityBadge]',
  standalone: true,
})
export class ProbabilityBadgeDirective implements AfterViewInit {
  eleRef: ElementRef = inject(ElementRef)
  renderer: Renderer2 = inject(Renderer2)
  className: string = ''
  text: string = ''

  @Input({ required: true }) set appProbabilityBadge(value: number) {
    switch (true) {
      case value >= 0 && value <= 24:
        this.className = 'low-probability'
        this.text = 'Low'
        break
      case value >= 25 && value <= 49:
        this.className = 'medium-probability'
        this.text = 'Medium'
        break
      case value >= 50 && value <= 99:
        this.className = 'high-probability'
        this.text = 'High'
        break
      default:
        this.className = 'low-probability'
        this.text = 'Low'
        break
    }
  }

  ngAfterViewInit(): void {
    this.renderer.addClass(this.eleRef.nativeElement, this.className)
    this.renderer.setProperty(
      this.eleRef.nativeElement,
      'textContent',
      this.text
    )
  }
}
