import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
      MatFormFieldModule, MatInputModule,
      MatButtonToggleModule, MatListModule,MatCardModule
} from "@angular/material";
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { RoutingModule } from "./routing/routing.module";
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { MenuComponent } from './menu/menu.component';
import {IssueService} from './issue.service'
import {AuthService} from './auth.service'
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    StatusFilterComponent,
    IssueEditComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent],
  providers:[IssueService,AuthService]
})
export class AppModule { }
