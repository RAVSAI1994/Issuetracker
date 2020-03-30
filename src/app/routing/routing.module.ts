import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IssueListComponent } from "../issue-list/issue-list.component";
import { IssueDetailComponent } from "../issue-detail/issue-detail.component";
import { IssueFormComponent } from "../issue-form/issue-form.component";
import { IssueEditComponent } from "../issue-edit/issue-edit.component";
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {
    path: 'issues',
    component: IssueListComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'addNewIssue',
    component:  IssueEditComponent,
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
  },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
