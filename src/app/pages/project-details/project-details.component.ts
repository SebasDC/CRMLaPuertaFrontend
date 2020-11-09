import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public project;

  constructor(private router : ActivatedRoute, private projectsService : ProjectsService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
    console.log({ id });
    
    this.projectsService.getOneProject(id, { populate : true})
      .then(project => {
        this.project = project;

      });

    
    
    
  }

}
