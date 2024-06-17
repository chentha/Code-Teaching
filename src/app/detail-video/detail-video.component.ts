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

  isOpen = false; 

  toggleMenu() {
    this.isOpen = !this.isOpen; 
  }

  constructor(private commentService: CommentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadComments();
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
