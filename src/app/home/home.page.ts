import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: any = null;
  username: string = null;
  repos: any = null;

  ngOnInit(): void {
    // 
  }

  constructor(private githubService: GithubService) { }


  async searchData() {



    if (this.username !== '') {
      try {
        this.user = await this.githubService.getUserProfile(this.username).toPromise();
        this.repos = await this.githubService.getUserRepos(this.username).toPromise();
      } catch (_e) {
        this.user = null;
        this.repos = null;
      }
    } else {
      this.user = null;
      this.repos = null;
    }

  };




}
