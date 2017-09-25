import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = [];
  username:string;
  repos = [];
  constructor(private githubService: GithubService) { 

  this.user = false;
  }

  ngOnInit() {
  }

  searchUser(){
    this.githubService.updateUser(this.username);

    this.githubService.getUser().subscribe( userData => {
      console.log(userData);
      this.user = userData;
    })

    this.githubService.getRepos().subscribe( reposData => {
      console.log(reposData);
      this.repos =reposData;
    })
  }

}
