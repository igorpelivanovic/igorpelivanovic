import { Component, OnInit } from '@angular/core';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { fadeInOutFromRight } from 'src/app/core/animations/fadeInOutFromRight';
import { InfoMessage } from 'src/app/core/interfaces/infoMessage';
import { InfoMessageService } from 'src/app/core/services/info-message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss'],
  animations: [fadeInOutFromRight]
})
export class InfoAlertComponent implements OnInit {
 
  private _messages: InfoMessage[] = []
  
  private _icons = {
    faCircleCheck: faCircleCheck,
    faCircleExclamation: faCircleExclamation
  }

  get icon(){
    return this._icons
  }

  get messages(): InfoMessage[]{
    return this._messages
  }

  constructor(private infoMessageService : InfoMessageService ){}

  ngOnInit(): void {
    this.infoMessageService.messages.subscribe(message=>{
      this.initMessage(message)
    })
  }
  private initMessage(message: InfoMessage){
    this._messages.push(message)
    setTimeout(()=>this.removeMessage(message.id), message.duration)
  }
  private removeMessage(id: number){
    this._messages = this._messages.filter(message=>message.id != id)
  }
}
