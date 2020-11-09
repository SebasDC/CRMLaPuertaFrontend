import { Injectable } from '@angular/core';
import { Project } from '../pages/projects/projects.component';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url = 'http://localhost:5000/projects'


  constructor() { }

  public getAllProjects( config? : { populate? : boolean, page? : number, limit?: number }   ): Promise<Project[]> {
      return axios.get(this.url , { params : config } )  
        .then(response => response.data);
  }

  public getOneProject(id: string, config: { populate : boolean} ): Promise<Project> {
      return axios.get(this.url + '/' + id , { params : config})
        .then(response => response.data);
  }

  public createOneProject(project : Project): Promise<Project> {
      return axios.post(this.url, project)
        .then(response => response.data);
  }

  public editOneProject(project : Project): Promise<Project> {
      return axios.put(this.url + '/' + project._id, project  )
        .then(response => response.data);
  }

  public removeOneProject(project : Project): Promise<any> {
      return axios.delete(this.url + '/' + project._id   )
        .then(response => response.data);
  }



}