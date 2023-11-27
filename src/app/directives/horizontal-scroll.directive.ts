import { DOCUMENT } from '@angular/common';
import { AfterContentInit, AfterViewInit, ContentChild, Directive, ElementRef, HostListener, Inject, Renderer2, ViewChild, numberAttribute } from '@angular/core';

@Directive({
  selector: '[horizontalScroll]'
})
export class HorizontalScrollDirective implements AfterContentInit {

  private _el : HTMLElement

  @ContentChild('elementsContainer') elementsContainer : ElementRef | undefined 

  @HostListener('window:scroll') onScroll(){
    this.scrollAction()
  }

  @HostListener('window:resize') onResize(){
    this.initSectionHeight()
    this.scrollAction()
  }


  constructor(private element : ElementRef, @Inject(DOCUMENT) private document: Document, private render: Renderer2) { 
    this._el = element.nativeElement
  }
  ngAfterContentInit(): void {
    this.initSectionHeight()
    this.scrollAction()
  }
  private initSectionHeight():void{
    let minHeightSection : number = Number(getComputedStyle(this._el).getPropertyValue('min-height').split('p')[0])
    console.log(this.elementsContainer?.nativeElement.children.length - 1)
    let extensionHeightSection : number = (this.elementsContainer?.nativeElement.children.length - 1) * this.elementsContainer?.nativeElement.offsetWidth
    this.render.setStyle(this._el, 'height', `${minHeightSection + extensionHeightSection}px`)
  }
  private scrollAction():void{
    if(Number(this.document.defaultView?.scrollY) - Number(this._el?.offsetTop) >= 0 && Number(this._el?.offsetTop) + Number(this._el?.offsetHeight) >= Number(this.document.defaultView?.scrollY) + Number(this.document.defaultView?.innerHeight)){
      let transformXVal = Number(this.document.defaultView?.scrollY) - Number(this._el?.offsetTop)
      this.render.setStyle(this.elementsContainer?.nativeElement, 'transform', `translateX(${-transformXVal}px)`)
      return
    }
    if(Number(this.document.defaultView?.scrollY) - Number(this._el?.offsetTop) < 0){
      this.render.setStyle(this.elementsContainer?.nativeElement, 'transform', `translateX(0px)`)
      return
    }
    this.render.setStyle(this.elementsContainer?.nativeElement, 'transform', `translateX(-${this.elementsContainer?.nativeElement.scrollWidth - this.elementsContainer?.nativeElement.offsetWidth}px)`)
  }

}
