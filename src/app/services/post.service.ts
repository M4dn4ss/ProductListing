import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
            .pipe(
              retry(3),
              catchError(this.handleError)
            );
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.url, post);
  }

  updatePost(post: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${post.id}`, post);
  }

  deletePost(post: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${post.id}`)
            .pipe(
              retry(3),
              catchError(this.handleError)
            );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      // client error
      console.log('client error: ' + error.error.message);
    } else {
      // backend error
      console.log(`backend error: status code: ${error.status} ' error: ${error.error}`);
    }
    return throwError('An unknown error has occurred.');
  }
}