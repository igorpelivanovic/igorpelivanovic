import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Typewritter]'
})
export class TypewritterDirective implements OnInit {

  @Input({required: true}) text : String[] = []
  @Input() letterDelay: number = 500
  @Input() textDelay: number = 1000

  private _el!: HTMLElement
  private _index: number = 0

  constructor(private el: ElementRef) { 
    this._el = el.nativeElement
  }

  ngOnInit(): void {
      this.writeLetter()
  } 

  private timeOut(time: number){
    return new Promise((resolve)=>setTimeout(resolve, time)) 
  }

  private async  writeLetter () : Promise<void>{
      for(let i = 0; i < this.text[this._index].length; i++){
        this._el.innerText = this.text[this._index].substring(0, i+1)
        await this.timeOut(this.letterDelay)
      }
      await this.timeOut(this.textDelay)
      for(let i = this.text[this._index].length; i > 0; i--){
        this._el.innerText = this.text[this._index].substring(0, i-1)
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
