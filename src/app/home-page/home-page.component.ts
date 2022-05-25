import { Component, OnInit } from '@angular/core';
import {PostsServices} from "../shared/posts.services";
import {Observable} from "rxjs";
import {Post} from "../shared/interfaces";
import {MENUITEM} from "../shared/menu-data";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public menu: any
  posts$?: Observable<Post[]>

  constructor( private postsService: PostsServices ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAll()
    this.menu = MENUITEM.map(item => item).splice(2)
  }

}
