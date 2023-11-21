import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TrimValidator } from './form_validators/trimValidator';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';
import { InfoMessageService } from '../services/info-message.service';
import { TypeInfoMessage } from '../interfaces/infoMessage';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private _icons = {
    faLinkedin: faLinkedin,
    faEnvelope: faEnvelope,
    faPaperPlane: faPaperPlane,
    faSpinner: faSpinner
  }

  get icon(){
    return this._icons
  }

  private _contactForm !: FormGroup

  private _sendingMail : boolean = false

  protected isSubmitForm : boolean = false

  get form(): FormGroup{
    return this._contactForm
  }

  get sendingProgress(): boolean{
    return this._sendingMail
  }

  constructor(private _formBuilder : FormBuilder, private infoMessage: InfoMessageService){
  }

  ngOnInit(): void {
    this.initContactForm()
  }
  private initContactForm():void{
    this._contactForm = this._formBuilder.group({
      from_name: new FormControl('', [Validators.required, TrimValidator.trimValue]),
      email_id: new FormControl('', [Validators.required, TrimValidator.trimValue, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}')]),
      message: new FormControl('' ,[Validators.required, TrimValidator.trimValue])
    })
  }

  getFormControl(formControlString: string): FormControl{
    return this._contactForm.get(formControlString) as FormControl
  }

  submitContactForm(): void{
    this.isSubmitForm = true
    if(this.form.valid){
      this._sendingMail = true
      let value = { from_name: this.form.value.from_name.trim(), 
                    email_id: this.form.value.email_id.trim(),  
                    message: this.form.value.message.trim()
                  }
      emailjs.send(environment.emailjs.serviceID,environment.emailjs.templateID, value, environment.emailjs.public_key).then(()=>{
        this.infoMessage.addMessage = {duration: 5000, messsage: 'message is send. I will get back to you as soon as possible', type: TypeInfoMessage.success}
        this.resetForm()
      }).catch(()=>{
        this.infoMessage.addMessage = {duration: 5000, messsage: 'Somthing wrong, try again later', type: TypeInfoMessage.error}
        this.isSubmitForm = false
      });
    }
  }

  private resetForm(): void{
    this._sendingMail = false
    this.isSubmitForm = false
    this.form.reset({
      from_name: '',
      email_id: '',
      message: ''
    })
  }


}
