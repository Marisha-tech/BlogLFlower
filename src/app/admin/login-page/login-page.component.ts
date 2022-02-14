import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces";
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup | any
  submitted = false // блокировка кнопки войти (исключить нажатие несколько раз)
  message: string = '' // для вывода сообщения в случае, если в адресной строке ?loginAgain

  constructor(
    public auth: AuthService,//будет ипользоваться в шаблоне
    private router: Router, //для редиректа
    private route: ActivatedRoute, //текущий роут
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Пожалуйста, авторизуйтесь'
      } else if (params['authFailed']) {
        this.message = 'Истекло время жизни сессии. Необходимо авторизоваться'
      }
    })

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {

    if (this.form.invalid) {
      return
    }

    this.submitted = true
    // console.log(this.form)
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard']) //если авторизация прошла успешно, тогда сделать редирект на страницу admin/dashboard
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }
}
