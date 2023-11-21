import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, delay, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnLoadService {
  private _onLoad: Observable<Event>;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this._onLoad = fromEvent(document.defaultView as Window, 'load')
  }

  get onLoad():Observable<Event>{
    return this._onLoad
  }

}
