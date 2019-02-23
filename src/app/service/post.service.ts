import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {PatronList} from "../model/patron.list";
import {Post} from "../model/post";
import {Episode} from "../model/episode";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  baseUrl: string = `${environment.apiUrl}`

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`)
  }

  getPostById(id: Number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + "/posts/" + id)
  }

  addPost(post: Post): any {
    return this.http.post(this.baseUrl + "/posts", post)
  }

  updatePost(id: number, post: Post): any {
    post.id= id;
    return this.http.put(this.baseUrl + "/posts/" + id, post)
  }

  deletePost(id: number): any {
    return this.http.delete(this.baseUrl + "/posts/" + id)
  }
}
