import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent {
  showProfile: boolean = true;  
  showGoal: boolean = false;
  showTest: boolean = false;
  showSkill: boolean = false; 
  showPractice: boolean = false; 
  activeTab: string | undefined;
  currentUser: any = {}; // Initialize currentUser as an empty object
  imageUrl: string = '../../assets/image/default.webp'; 
  username: string = '';

  constructor(private authService: AuthService) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      this.username = this.currentUser.username || '';
      this.imageUrl = this.currentUser.image || '../../assets/image/default.webp';
    }
  }

  ShowProfile() {
    this.showProfile = true;
    this.showGoal = false;
    this.showTest = false;
    this.showSkill = false;
    this.showPractice = false;
  }

  ShowGoal() {
    this.showProfile = false;
    this.showGoal = true;
    this.showTest = false;
    this.showSkill = false;
    this.showPractice = false;
  }

  ShowTest() {
    this.showProfile = false;
    this.showGoal = false;
    this.showTest = true;
    this.showSkill = false;
    this.showPractice = false;
  }

  ShowSkill() {
    this.showProfile = false;
    this.showGoal = false;
    this.showTest = false;
    this.showSkill = true;
    this.showPractice = false;
  }

  ShowPrac() {
    this.showProfile = false;
    this.showGoal = false;
    this.showTest = false;
    this.showSkill = false;
    this.showPractice = true;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage() {
    if (this.imageUrl !== '../../assets/image/default.webp') {
      this.currentUser.image = this.imageUrl;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser)); // Update localStorage
      alert('Image uploaded successfully');
    } else {
      alert('Please select an image');
    }
  }
}
