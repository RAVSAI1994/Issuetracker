import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    try {
      this.message = "Try to login!";
        this.authService.login();
      this.router.navigate(['/issues']);
    }
    catch (err) {
      this.message = "Login failed!";
      console.log(err);
    }
  }

}