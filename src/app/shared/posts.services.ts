import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FbCreateResponse, Post} from "./interfaces";
import {environment} from "../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";
import {Router} from "@angular/router";


@Injectable({providedIn: "root"})


export class PostsServices {

  errorMessage: String = "";

  //тк работа с бэком, то нужно подключить HttpClient
  constructor(private http: HttpClient,
              private router: Router) {
  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        }
      }))
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }))
  }

  //выполнить запрос к БД, чтобы получить отдельный пост
  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.fbDbUrl}/posts/${id}.json`)
      //необходимо распарсить объект, чтобы получить отдельный элемент поста
      .pipe(
        tap(post => {
          //если будет запрошен несуществующий id поста
          //TODO если Firebase ответит ошибкой?
          if (post == null) {
            this.router.navigate(['error-page'])
          }
        }),
        map((post: Post) => {
          return {
            ...post,
            id,
            date: new Date(post.date)
          }
        })
      )
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`)
  }

  update(post: Post): Observable<Post> {
    //patch() позволяет частично обновлять данные
    return this.http.patch<Post>(`${environment.fbDbUrl}/posts/${post.id}.json`, post)
  }
}
