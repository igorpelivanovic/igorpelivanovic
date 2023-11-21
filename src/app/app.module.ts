import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { TypewritterDirective } from './directives/typewritter.directive';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ErrorInputMessageComponent } from './contact/error-input-message/error-input-message.component';
import { InfoAlertComponent } from './contact/info-alert/info-alert.component';
import { SectionIntoViewDirective } from './directives/section-into-view.directive';
import { ToFullWidthDirective } from './directives/to-full-width.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadScreenComponent } from './header/load-screen/load-screen.component';
import { IntoSectionObserverDirective } from './directives/into-section-observer.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    TypewritterDirective,
    AboutComponent,
    PortfolioComponent,
    HorizontalScrollDirective,
    ContactComponent,
    FooterComponent,
    ErrorInputMessageComponent,
    InfoAlertComponent,
    SectionIntoViewDirective,
    ToFullWidthDirective,
    LoadScreenComponent,
    IntoSectionObserverDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
