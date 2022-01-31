import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup | any
  submitted = false // блокировка кнопки войти (исключить нажатие несколько раз)

  constructor(
    public auth: AuthService,//будет ипользоваться в шаблоне
    private router: Router //для редиректа
  ) {
  }

  ngOnInit(): void {
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
