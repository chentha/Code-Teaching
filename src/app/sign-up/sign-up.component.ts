import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  regUsername = '';
  regEmail = '';
  regPassword = '';
  alert: boolean | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    const registrationData = {
      id: 0, 
      username: this.regUsername,
      email: this.regEmail,
      password: this.regPassword,
      image: null // Include the image property
    };

    if (this.authService.register(registrationData)) {
      this.alert = true; // Registration successful
      console.log('Registration successful. Alert:', this.alert);
    } else {
      this.alert = false; // User already exists
      console.log('User already exists. Alert:', this.alert);
    }
  }
}
