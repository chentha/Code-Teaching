import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Note: this should be styleUrls, not styleUrl
})
export class HomeComponent implements OnInit {
  isMenuOpen: boolean = false;
  activeSubMenu: string | null = null;
  user: { email: string; image: string | null } | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.activeSubMenu = null;
  }

  toggleSubMenu(menu: string): void {
    if (this.activeSubMenu === menu) {
      this.activeSubMenu = null;
    } else {
      this.activeSubMenu = menu;
    }
  }

  logout(): void {
    this.authService.logout(); // Call logout method from AuthService
    this.user = null; // Clear user information
  }
}
