import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs/operators'
import { map } from 'rxjs/operators'

@Injectable()
export class GithubStarsService {

  constructor(private _http: HttpClient) { }

  angularGithubStars() {
    return this._http.get('https://api.github.com/repos/angular/angular').pipe(map(result => result))
  }

  reactGithubStars() {
    return this._http.get('https://api.github.com/repos/facebook/react').pipe(map(result => result))
  }

  vueGithubStars() {
    return this._http.get('https://api.github.com/repos/vuejs/vue').pipe(map(result => result))
  }

}
