import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseApi: string = 'https://api.github.com/users'

  constructor(private httpClient: HttpClient) { }


  getUserProfile(_username) {

    return this.httpClient.get(`${this.baseApi}/${_username}`);

  }

  getUserRepos(_username) {

    return this.httpClient.get(`${this.baseApi}/${_username}/repos`);

  }

}
