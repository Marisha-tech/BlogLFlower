import { Component, OnInit } from '@angular/core';
import {PostsServices} from "../shared/posts.services";
import {Observable} from "rxjs";
import {Post} from "../shared/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts$: Observable<Post[]> | any

  constructor( private postsService: PostsServices ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAll()
  }

}
