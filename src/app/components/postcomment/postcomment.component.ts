import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postcomment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './postcomment.component.html',
  styleUrl: './postcomment.component.css'
})
export class PostcommentComponent implements OnInit {
  constructor(private commentService: CommentService) {

  }
  @Input() postId!: number
  
  comments: Comment[] = []


  ngOnInit(): void {
    this.commentService.getCommentsByPostId(this.postId).subscribe((data: Comment[]) => {
    this.comments = data;
    });

  }

}
