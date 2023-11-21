import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { ActiveSectionService } from '../services/active-section.service';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appSectionIntoView]'
})
export class SectionIntoViewDirective implements AfterViewInit{

  private _el : HTMLElement

  @Input() rootMargin: number = 100

  constructor(private el: ElementRef, private activeSection: ActiveSectionService, @Inject(DOCUMENT) private document: Document) { 
    this._el = el.nativeElement
  }
  ngAfterViewInit(): void {
    this.checkSection()  
  }
  @HostListener('window:scroll') onScroll(){
    this.checkSection()
  }
  private checkSection(): void{
    let start = Number(this.document.defaultView?.scrollY) + Number(this.document.defaultView?.innerHeight) - 160 >= this._el.offsetTop
    let end = this._el.offsetHeight + this._el.offsetTop - Number(this.document.defaultView?.innerHeight) + 160>= Number(this.document.defaultView?.scrollY)
    if(start && end){
      this.activeSection.activeSectionID = this._el.id
    }
  }

}
