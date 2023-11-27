import { DOCUMENT } from '@angular/common';
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActiveSectionService } from '../services/active-section.service';
import { animateLoadingScreen } from '../animations/AnimateLoadingScreen';
import { SectionService } from '../services/section.service';
import { OnLoadService } from '../services/on-load.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [animateLoadingScreen]
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterContentChecked{

  protected currentSection !: string
  protected scrolled: boolean = false
  private _isLoad: boolean = false
  public hamburgerMenuOpen: boolean = false

  @ViewChildren('navButton') private navigationBtns !: QueryList<ElementRef>
  @ViewChild('navIndicator') private navIndicator !: ElementRef<HTMLElement>
  @ViewChild('logoContainer', {static: true}) protected logoContainer !: ElementRef

  @HostListener('window:scroll') onScroll(){
    if(Number(this.document.defaultView?.scrollY) > 50){
      this.scrolled = true
      return
    }
    this.scrolled = false
    return
  }
  constructor(@Inject(DOCUMENT) private document: Document, 
              private activeSection: ActiveSectionService, 
              private changeDetectorRef: ChangeDetectorRef, 
              private renderer: Renderer2, 
              private sectionService: SectionService,
              private onLoadDoc: OnLoadService){}
  ngAfterContentChecked(): void {
    this.initActiveSection()

  }

  ngOnInit(): void {
    this.onLoadDoc.onLoad.subscribe(()=>{
      this._isLoad = true})
  }

  ngAfterViewInit(): void {
    this.initActiveSection()
    this.changeDetectorRef.detectChanges()
  }

  get load(): boolean{
    return this._isLoad
  }

  get logoContainerStyle(): Object{
    return {
      value: this._isLoad,
      params: {
        yCord: this.logoContainer.nativeElement.offsetTop,
        xCord: this.logoContainer.nativeElement.offsetLeft,
        width: this.logoContainer.nativeElement.offsetWidth
      }
    }
  }

  goToSection(fragment: string):void{
    this.sectionService.goToSection(fragment)
    this.closeHamburgerMenu()
  }
  private initActiveSection() : void{
    this.activeSection.activeSection.subscribe((val: string)=>{
      this.currentSection = val
      this.moveIndicator(this.navigationBtns.find(btn=> btn.nativeElement.dataset.fragment == this.currentSection))
    })
  }

  private moveIndicator(btnRef: ElementRef | undefined) :void{
    if(btnRef){
      let btn = btnRef.nativeElement as HTMLElement
      this.renderer.setStyle(this.navIndicator.nativeElement, 'width', `${btn.offsetWidth}px`)
      this.renderer.setStyle(this.navIndicator.nativeElement, 'left', `${btn.offsetLeft}px`)
    }
    return
  }
  toggleHamburgerMenu(): void{
    this.hamburgerMenuOpen = !this.hamburgerMenuOpen
  }
  private closeHamburgerMenu(): void{
    this.hamburgerMenuOpen = false
  }
}
