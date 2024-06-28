import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  getPostsByUserId(userId:number):Observable<Post[]>{
    return this.http.get<Post[]>(`${this.apiUrl}?userId=${userId}`);

  }



}
