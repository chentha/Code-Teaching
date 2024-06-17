// src/app/auth.service.ts
import { Injectable } from '@angular/core';

interface User {
  email: string;
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  updateUserImage(image: any) {
    throw new Error('Method not implemented.');
  }
  updateUsername(username: string) {
    throw new Error('Method not implemented.');
  }
  private storageKey = 'users';
  private currentUserKey = 'currentUser';
  currentUserChanged: any;

  constructor() { }

  register(user: User): boolean {
    let users = this.getUsers();
    if (users.find(u => u.username === user.username || u.password === user.password)) {
      return false; // Username or email already exists
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

  // getCurrentUser(): User | null {
  //   const userJson = localStorage.getItem(this.currentUserKey);
  //   return userJson ? JSON.parse(userJson) : null;
  // }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  private getUsers(): User[] {
    const usersJson = localStorage.getItem(this.storageKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }
}
