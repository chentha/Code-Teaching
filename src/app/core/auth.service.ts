import { Injectable } from '@angular/core';

interface User {
  email: string;
  id: number;
  username: string;
  password: string;
  image: string | null; // Include the image property
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'users';
  private currentUserKey = 'currentUser';
  currentUserChanged: any;

  constructor() { }

  register(user: User): boolean {
    let users = this.getUsers();
    if (users.find(u => u.username === user.username || u.email === user.email)) { // Check username or email
      return false; // Username or email already exists
    }
    user.id = new Date().getTime();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username && u.password === password); // Check both username and password
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

  updateUserImage(image: string): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      currentUser.image = image;
      localStorage.setItem(this.currentUserKey, JSON.stringify(currentUser));
      this.updateUserInStorage(currentUser);
    }
  }

  updateUsername(username: string): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      currentUser.username = username;
      localStorage.setItem(this.currentUserKey, JSON.stringify(currentUser));
      this.updateUserInStorage(currentUser);
    }
  }

  private updateUserInStorage(updatedUser: User): void {
    let users = this.getUsers();
    users = users.map(user => user.id === updatedUser.id ? updatedUser : user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
