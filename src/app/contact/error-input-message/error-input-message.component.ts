import { Component, Input, OnInit } from '@angular/core';
import { inputErrorMsg } from './errorMessagesText';

@Component({
  selector: 'app-error-input-message',
  templateUrl: './error-input-message.component.html',
  styleUrls: ['./error-input-message.component.scss']
})
export class ErrorInputMessageComponent implements OnInit{

  @Input() errors!: Object | null
  @Input() formSubmit: boolean = false

  ngOnInit(): void { }
  
  get errorMsg(): string{
    if(this.errors != null){
      return String(inputErrorMsg.get(Object.keys(this.errors)[0]))
    }
    return 'Form error'
  }

}
