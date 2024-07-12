import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  showNavbar: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn()
      .subscribe((isLoggedIn: boolean) => {
        this.showNavbar = isLoggedIn;
      });
  }

  onLogout() {
    this.authService.logout()
      .subscribe((success: boolean) => {
        if (success) {
          window.location.href = '/';
        } else {
          alert('Logout fallito!');
        }
      });
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
