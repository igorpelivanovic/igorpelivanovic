import { Component } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../core/interfaces/projects';
import { projectData } from '../core/data/portfolioProjectData';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent{

  private _projectsArray: Project[] = projectData

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
