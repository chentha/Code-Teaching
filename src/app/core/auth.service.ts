// src/app/auth.service.ts
import { Injectable } from '@angular/core';


interface User {
  email: any;
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'users';
  private currentUserKey = 'currentUser';

  constructor() { }

  register(user: User): boolean {
    let users = this.getUsers();
    if (users.find(u => u.username === user.username || u.email === user.email)) {
      return false; // User already exists
    }
    user.id = new Date().getTime();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username || u.password === password);
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem(this.currentUserKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  private getUsers(): User[] {
    const usersJson = localStorage.getItem(this.storageKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }
}
