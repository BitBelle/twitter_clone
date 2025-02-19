import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users/1'

  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

}
