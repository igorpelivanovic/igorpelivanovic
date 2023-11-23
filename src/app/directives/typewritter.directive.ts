import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { OnLoadService } from '../services/on-load.service';

@Directive({
  selector: '[Typewritter]'
})
export class TypewritterDirective implements OnInit {

  @Input({required: true}) text : String[] = []
  @Input() letterDelay: number = 500
  @Input() textDelay: number = 1100

  private _el!: HTMLElement
  private _index: number = 0

  constructor(private el: ElementRef, private renderer: Renderer2, private onLoadService: OnLoadService) { 
    this._el = el.nativeElement
  }

  ngOnInit(): void {
    this.onLoadService.onLoad.subscribe((data)=>{
      this.writeLetter()
    })
  } 

  private createTypedCursor(): void{
    let cursor = this.renderer.createElement('span')
    this.renderer.addClass(cursor, 'typedCursor')
    this.renderer.addClass(cursor, 'border-color-primary') 
    this.renderer.appendChild(this._el, cursor)
  }

  private addContent(content: string): void{
    this.renderer.setProperty(this._el, 'textContent', content)
    this.createTypedCursor()
  }

  private timeOut(time: number): Promise<any>{
    return new Promise((resolve)=>setTimeout(resolve, time)) 
  }

  private async  writeLetter () : Promise<void>{
      for(let i = 0; i < this.text[this._index].length; i++){
        this.addContent(this.text[this._index].substring(0, i+1))
        await this.timeOut(this.letterDelay)
      }
      await this.timeOut(this.textDelay)
      for(let i = this.text[this._index].length; i > 0; i--){
        this.addContent(this.text[this._index].substring(0, i+1))
        await this.timeOut(this.letterDelay)
      }
      this._index++
      if(this._index >= this.text.length){
        this._index = 0
      } 
      this.timeOut(this.textDelay)
      this.writeLetter()
  }

}
