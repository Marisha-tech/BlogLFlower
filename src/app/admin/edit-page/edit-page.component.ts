import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsServices} from "../../shared/posts.services";
import {switchMap} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup | any
  post: Post | any //для хранения id поста
  submitted = false //флаг для обновления формы

  uSub: Subscription | any

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsServices
  ) {
  }

  ngOnInit(): void {
    //отписываться от route не нужно, тк ангуляр делает это самостоятельно
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params['id'])
      })).subscribe((post: Post) => {
      this.post = post //для хранения id поста
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required),
      })
    })
  }

  ngOnDestroy() {
    if (this.uSub){
      this.uSub.unsubscribe()
    }
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    this.uSub = this.postsService.update({
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text,
    }).subscribe(() => {
      this.submitted = false
    })
  }
}
