import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent   {
  isLoggedIn: boolean
  constructor(
    private router: Router,
    private authService: AuthService,

    
  ) { }

  

  async logout() {
    try {
      this.authService.logout()
      this.router.navigate(['/dashboard']);
    }
    catch (err) {
      console.log(err);
    }
  }

}
