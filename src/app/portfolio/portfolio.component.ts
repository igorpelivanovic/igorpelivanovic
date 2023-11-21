import { Component } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../interfaces/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent{

  private _projectsArray : Project[] = [
    {title: 'Info Books', body: 'Info Books is made in Angular + SCSS. Use the REST API to retrive information about books, which can be download on different options.', image: 'portfolio-1.png', url: 'https://igorpelivanovic.github.io/infobooks/'},
    {title: 'GP', body: 'GP aplication present website of company for provision of IT services. Made in Angular + SCSS and use MapLibre-GL-JS library.', image: 'portfolio-2.png', url: 'https://igorpelivanovic.github.io/gp/'},
    {title: 'Fast Buy', body: 'Fast buy is simulation of frontend part webshop aplication, with logging available users. Aplication is made in Angular + SCSS.', image: 'portfolio-3.png', url: 'https://igorpelivanovic.github.io/fastbuy/'},
    {title: 'Coffie Shop', body: 'Coffie shop is website made in HTML + SCSS + Bootstrap v5.1.3, and use Leafletjs libery. Present website of family bussines-coffie shop.', image: 'portfolio-4.png', url: 'https://igorpelivanovic.github.io/coffieshop/'}
  ]

  private _icons = {
    faArrowUpRightFromSquare: faArrowUpRightFromSquare
  }

  get icon(){
    return this._icons
  }

  get projects(): Project[]{
    return this._projectsArray
  }
}
