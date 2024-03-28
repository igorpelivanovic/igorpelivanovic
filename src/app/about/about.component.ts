import { Component } from '@angular/core';
import { faCalendarDays, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { Education } from '../core/interfaces/education';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  private _icons = {
    faCalendarDays: faCalendarDays,
    faGraduationCap: faGraduationCap
  } 

  private _educations : Education[] = [
    {title: "Multimedia electical technician", subTitle: "Mechanical and Electro tehnicals School - Paracin", time: {start: 2016, end: 2020}},
    {title: "PHP Web Developer", subTitle: "LINK group, ITAcademy - Belgrade", time: {start: 2020, end: 2021}},
    {title: "JavaScript Frontend Developer", subTitle: "LINK group, ITAcademy - Belgrade", time: {start: 2021, end: 2022}}
  ]

  get icon(){
    return this._icons
  }

  constructor(){}

  get edu(): Education[]{
    return this._educations
  }

  openFile():void{
    window.open(environment.cvUrl)
  }

}
