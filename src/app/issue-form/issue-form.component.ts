import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Issue } from "../issue";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnChanges {
  @ViewChild(NgForm) form: NgForm;

  @Input() issue: Issue = null;

  @Output() onSubmit = new EventEmitter<Issue>();
  @Output() onReset = new EventEmitter();

  model: Issue = null
  constructor(private _snackBar: MatSnackBar) { }

  ngOnChanges() {
    this.model = Object.assign({}, this.issue);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this._snackBar.open('Saved Successfully','', {
      duration: 2000,
    });
    this.onSubmit.emit(this.model);
  }

  reset() {
    this.onReset.emit();
  }

}
