export interface User {
  email: string
  password: string
  returnSecureToken?: boolean //в firebase в теле запроа должен быть returnSecureToken = true
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string //expiresIn - время жизни токена
}
