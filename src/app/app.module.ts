import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { TypewritterDirective } from './core/directives/typewritter.directive';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HorizontalScrollDirective } from './core/directives/horizontal-scroll.directive';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ErrorInputMessageComponent } from './contact/error-input-message/error-input-message.component';
import { InfoAlertComponent } from './contact/info-alert/info-alert.component';
import { SectionIntoViewDirective } from './core/directives/section-into-view.directive';
import { ToFullWidthDirective } from './core/directives/to-full-width.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadScreenComponent } from './header/load-screen/load-screen.component';
import { IntoSectionObserverDirective } from './core/directives/into-section-observer.directive';
import { LogoComponent } from './components/logo/logo.component';


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
    IntoSectionObserverDirective,
    LogoComponent
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
