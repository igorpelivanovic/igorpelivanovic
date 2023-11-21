import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToFullWidth]'
})
export class ToFullWidthDirective implements AfterViewInit {

  private _el: HTMLElement

  @Input({required: true}) duration : number = 0

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this._el = el.nativeElement
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this._el, 'animation-duration', `${this.duration}ms`)
  }
}
