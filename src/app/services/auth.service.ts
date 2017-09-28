//reference site: https://realpython.com/blog/python/user-authentication-with-angular-4-and-flask/
//for backend :https://medium.com/@petehouston/develop-a-simple-api-authentication-service-with-json-web-token-using-laravel-angularjs-and-240135855ef1

import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:8080/auth/public';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}
  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
   return this.http.post(url, user).toPromise();
  }
  register(user): Promise<any> {
    let url: string = `${this.BASE_URL}/register`;
    //return this.http.post(url, user, {headers: this.headers}).toPromise();
	return this.http.post(url, user).toPromise();
  }
}