import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'clientes',
    component : CustomersComponent
  },
  {
    path: 'proyectos',
    component : ProjectsComponent
  },
  {
    path: 'proyectos/:id',
    component : ProjectDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
