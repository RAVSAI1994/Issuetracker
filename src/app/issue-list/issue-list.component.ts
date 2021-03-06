import { Component, OnInit, ViewChild } from '@angular/core';
import { Issue } from "../issue";
import { IssueFormComponent } from "../issue-form/issue-form.component";
import { IssueService } from "../issue.service";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  @ViewChild(IssueFormComponent) issueForm: IssueFormComponent;

  issues = [];
  filteredIssues = [];

  selectedStatus = '';

  constructor(
    private issueService: IssueService,
  ) {}

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues) => {
      this.issues =issues 
      this.onFilterChange('')

    })
  }

  onFilterChange(value: string) {
    this.selectedStatus = value;
    this.filteredIssues = this.selectedStatus === '' ? this.issues : this.issues.filter(issue => issue.status === this.selectedStatus);
  }
}
