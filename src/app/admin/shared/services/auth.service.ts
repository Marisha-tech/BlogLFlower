/*
* Для авторизации внутри приложения*/

import {Injectable} from "@angular/core";
import {FbAuthResponse, User} from "../../../shared/interfaces";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, Subject, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
import {catchError, tap} from "rxjs/operators";

// {providedIn: "root"} - не нужно, тк авторизация не нужна в главном модуле
@Injectable()

export class AuthService {

  //для вывода ошибки при авторизации
  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {
  }

  //почему token не просто переменная? token необходимо реализовать как get, т.к. будут доп проверки (например: не истек ли токен)
  get token(): string {

    //получение токена
    const expDate = new Date(localStorage.getItem('fb-token-exp')!)
    if (new Date() > expDate) {
      this.logout() //если текущая дата больше даты токена, тогда вызвать метод logout
      return ''
    }
    return localStorage.getItem('fb-token')! // в случае, если дата токена активна
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))//обработка ошибок
      )
  }

  logout() {
    this.setToken(null)
  }

  //приватный метод для обработки ошибок
  private handleError(error: HttpErrorResponse): any {
    const {message} = error.error.error

    // console.log(message)
    switch (message) {
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль')
        break
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email')
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email не найден')
        break
    }

    return throwError(error)
  }

  //проверка на аутентификацию
  isAuthenticated(): boolean {
    return !!this.token //token приходит с сервера
  }

  //чтобы изменять токен
  private setToken(response: FbAuthResponse | null) {
    // console.log(response)
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000) //дата окончания токена
      localStorage.setItem('fb-token', response.idToken) //сохранить в localStorage текущий токен
      localStorage.setItem('fb-token-exp', expDate.toString()) //сохранить в localStorage дата окончания токена
    } else {
      localStorage.clear()
    }
  }
}
