import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  goToSection(fragment: string): void{
    this.document.getElementById(fragment)?.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
