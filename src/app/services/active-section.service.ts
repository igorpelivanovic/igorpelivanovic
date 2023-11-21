import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {

  private _activeSection!: BehaviorSubject<string>;

  constructor() {
    this._activeSection = new BehaviorSubject('')
   }

  set activeSectionID(sectionID: string){
    this._activeSection.next(sectionID)
  }

  get activeSection(): Observable<string>{
    return this._activeSection.asObservable()
  }
}
