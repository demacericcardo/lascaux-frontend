import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout()
      .subscribe((success: boolean) => {
        if (success) {
          this.router.navigate(['/login']);
        } else {
          alert('Logout fallito!');
        }
      });
  }
}
