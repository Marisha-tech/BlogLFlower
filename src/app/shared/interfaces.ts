export interface MenuMain {
  name: string,
  url?: string,
  href?: string,
  id?: string
}


export interface User {
  email: string
  password: string
  returnSecureToken?: boolean //в firebase в теле запроа должен быть returnSecureToken = true
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string //expiresIn - время жизни токена
}

export interface Post {
  id?: string
  title: string
  text: string
  author: string
  date: Date
  img: string
}

export interface FbCreateResponse {
  name?: string,
}
