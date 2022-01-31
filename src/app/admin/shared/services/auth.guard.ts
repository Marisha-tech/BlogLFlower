/*Для того, чтобы у неавторизованного пользователя не было доступа на страницы dashboard, create, edit*/
/*Обязательно AuthGuard прописать в providers в admin.module*/

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,//для проверки авторизации
    private router: Router,//для редиректа
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return true
    } else {
      this.auth.logout()
      this.router.navigate(['/admin', 'login'], {
        queryParams: {
          loginAgain: true//в случае неавторизации в адресной строке будет параметр ?loginAgain=true
        }
      })
      return false
    }
  }

}
