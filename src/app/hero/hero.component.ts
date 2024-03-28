import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SectionService } from '../core/services/section.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  protected typeWriteingContent: String[] = []

  constructor(private sectionService: SectionService){}

  ngOnInit(): void {
    this.typeWriteingContent = ['JavaScript frontend web developer', 'PHP web developer']
  }
  openFile(): void{
    window.open(environment.cvUrl)
  }
  goToSection(fragment: string):void{
    this.sectionService.goToSection(fragment)
  }

}
