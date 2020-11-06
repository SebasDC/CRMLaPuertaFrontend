import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Customer } from '../customers/customers.component';

export interface Project {
  _id : string,
  title: string,
  customer : Customer
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];


  constructor(private projectsService : ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getAllProjects( { populate : true}  )
      .then(projects => {
        
        this.projects = projects;
        
      })



  }

  crear() {
    // this.projectsService.createOneProject({ title: 'Proyecto', customer: '' })
    //   .then(newProject => this.projects.push(newProject) )
    

  }



}
