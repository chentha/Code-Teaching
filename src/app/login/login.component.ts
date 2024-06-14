// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  regUsername = '';
  regPassword = '';
  alert: boolean | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
      this.alert = true
      console.log('Registration successful. Alert:', this.alert);
      // this.router.navigate(['/comments']);
    } else {
      this.alert = false
      console.log('User already exists. Alert:', this.alert);
      alert('Invalid credentials');
    }
  }


}
