// src/app/services/comment.service.ts
import { Injectable } from '@angular/core';


interface Comment {
  id: number;
  userId: number;
  username: string;  // Add username field
  text: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private storageKey = 'comments';

  constructor() { }

  getComments(): Comment[] {
    const commentsJson = localStorage.getItem(this.storageKey);
    return commentsJson ? JSON.parse(commentsJson) : [];
  }

  addComment(comment: Comment): void {
    const comments = this.getComments();
    comments.push(comment);
    localStorage.setItem(this.storageKey, JSON.stringify(comments));
  }

  deleteComment(id: number): void {
    let comments = this.getComments();
    comments = comments.filter(comment => comment.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(comments));
  }
}
