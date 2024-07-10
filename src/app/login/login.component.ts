import { Component } from '@angular/core';
import { UserLogin } from '../../interfaces/User';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  model: UserLogin = {
    username: '',
    password: '',
    rememberMe: false
  }

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.model).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/']);
        } else {
          alert('Username o password non corretti!');
        }
      }
    );
  }
}