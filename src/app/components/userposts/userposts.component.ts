import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostcommentComponent } from "../postcomment/postcomment.component";

@Component({
    selector: 'app-userposts',
    standalone: true,
    templateUrl: './userposts.component.html',
    styleUrl: './userposts.component.css',
    imports: [CommonModule, FormsModule, PostcommentComponent]
})
export class UserpostsComponent implements OnInit{

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostsByUserId(1).subscribe((data: Post[]) => {
      this.posts = data;
      // showComments property for each post
      this.posts.forEach(post => post.showComments = false);
    });
  }

  toggleComments(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.showComments = !post.showComments;
    }
  }


}
