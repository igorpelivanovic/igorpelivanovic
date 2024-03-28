import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InfoMessage } from '../interfaces/infoMessage';

@Injectable({
  providedIn: 'root'
})
export class InfoMessageService {

  private _messageSubj!: Subject<InfoMessage>

  constructor() { 
    this._messageSubj = new Subject()
  }
  set addMessage(message: Omit<InfoMessage, 'id'>){
    this._messageSubj.next({...message, id: new Date().getTime()})
  }
  get messages(): Observable<InfoMessage>{
    return this._messageSubj.asObservable()
  }
  
}
