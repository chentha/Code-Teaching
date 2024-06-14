// src/app/comment/comment.component.ts
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../core/comment.service';
import { AuthService } from '../core/auth.service';


interface Comment {
  id: number;
  userId: number;
  username: string;  // Add username field
  text: string;
  timestamp: Date;
}
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];
  newCommentText = '';

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
