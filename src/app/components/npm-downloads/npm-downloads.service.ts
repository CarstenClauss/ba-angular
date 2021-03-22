import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/operators'
import { map } from 'rxjs/operators'

@Injectable()
export class NpmDownloadService {

  constructor(private _http: HttpClient) { }

  angularNpmDownloads() {
    return this._http.get('https://api.npmjs.org/downloads/point/last-week/angular').pipe(map(result => result))
  }

  reactNpmDownloads() {
    return this._http.get('https://api.npmjs.org/downloads/point/last-week/react').pipe(map(result => result))
  }

  vueNpmDownloads() {
    return this._http.get('https://api.npmjs.org/downloads/point/last-week/vue').pipe(map(result => result))
  }

}
