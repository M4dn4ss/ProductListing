import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  error: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = <[any]>response;
      }, error => this.error = error);
  }
    

  createPost(input: HTMLInputElement) {
    const post: Post = { id: null, title: input.value };
    input.value = '';

    this.postService.createPost(post)
      .subscribe((response: CreatePostResponse) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post: Post) {
    post.title = 'updated';

    this.postService.updatePost(post)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  deletePost(post: Post) {
    this.postService.deletePost(post)
      .subscribe((response: any) => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => this.error = error);
  }
}

interface Post {
  id: number;
  title: string;
}

interface PostResponse {
  id: number;
  title: string;
}

interface CreatePostResponse {
  id: number;
  // other properties of the response object
}
