import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { OnLoadService } from '../services/on-load.service';
import { delay } from 'rxjs';

@Directive({
  selector: '[appIntoSectionObserver]'
})
export class IntoSectionObserverDirective implements OnInit, OnDestroy {

  private _observer : IntersectionObserver | undefined

  @Input({required: true}) addClass : string = '' 
  @Input() options : IntersectionObserverInit = {
    rootMargin: '0px',
    threshold: .6
  }

  constructor(private el: ElementRef, private renderer: Renderer2, private onLoadDoc: OnLoadService) {}
  
  ngOnInit(): void {
    this.createIntoSectionObserber()
    this.onLoadDoc.onLoad.pipe(delay(1000)).subscribe(() => this.startObserving())
  }

  ngOnDestroy(): void {
    this._observer?.disconnect()
  }

  private createIntoSectionObserber(): void{
    this._observer = new IntersectionObserver(entires=>{
      entires.forEach(entry=>{
        if(entry.isIntersecting){
          this.renderer.addClass(entry.target, this.addClass)
          this._observer?.unobserve(entry.target)
        }
      })
    }, this.options)
  }

  private startObserving(): void{
    if(!this._observer){
      return
    }
    this._observer.observe(this.el.nativeElement)
  }

}

