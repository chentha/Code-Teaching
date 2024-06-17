import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { CommentService } from '../core/comment.service';

interface Comment {
  id: number;
  userId: number;
  username: string;
  text: string;
  timestamp: Date;
}
@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrl: './detail-video.component.scss'
})
export class DetailVideoComponent {
  comments: Comment[] = [];
  newCommentText = '';
  isMenuOpen: boolean = false;
  activeSubMenu: string | null = null;
  user: { email: string; image: string | null } | null = null;

  isOpen = false; 

  toggleMenu() {
    this.isOpen = !this.isOpen; 
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
    this.authService.logout();
    this.user = null;
  }

  constructor(private commentService: CommentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadComments();
    this.user = this.authService.getCurrentUser();
  }

  loadComments(): void {
    this.comments = this.commentService.getComments();
  }

  addComment(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && this.newCommentText.trim()) {
      const newComment: Comment = {
        id: new Date().getTime(),
        userId: currentUser.id,
        username: currentUser.username,  // Include username
        text: this.newCommentText,
        timestamp: new Date()
      };
      this.commentService.addComment(newComment);
      this.newCommentText = '';
      this.loadComments();
    } else {
      alert('You must be logged in to add a comment');
    }
  }

  deleteComment(id: number): void {
    this.commentService.deleteComment(id);
    this.loadComments();
  }
}
