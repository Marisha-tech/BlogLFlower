import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/interfaces";
import {PostsServices} from "../../shared/posts.services";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup | any

  constructor(
    private postsService: PostsServices,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //инициализация формы
    /*this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      img: new FormControl(null),
    })*/

    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      text: [null, Validators.required],
      author: [null, Validators.required],
      img: [null]
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const post: Post = {
      title: this.form.value.title,
      text: this.form.value.text,
      author: this.form.value.author,
      date: new Date(),
      img: this.form.value.img,
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset()
      this.alert.success('Создан пост')
    })
    // console.log(post)
  }
}
