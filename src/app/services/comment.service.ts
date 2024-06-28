import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { 

  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/comments'

  getCommentsByPostId(postId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.apiUrl}?postId=${postId}`)
  }
}
