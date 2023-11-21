import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private sectionService: SectionService){}

  private _icons = {
    faLinkedin: faLinkedin,
    faEnvelope: faEnvelope,
  }
  get icon(){
    return this._icons
  }
  get currentYear(): number{
    return new Date().getFullYear()
  }
  goToSection(fragment: string):void{
    this.sectionService.goToSection(fragment)
  }
}
