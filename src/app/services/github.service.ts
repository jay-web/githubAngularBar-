import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;

  private client_id:string = "40e768e97e438675f766";

  private client_secret:string = "b56f90fbcdda3e0ec33cc44298fd9990a5826c95";

  constructor(public http: Http) {
    console.log("Github service is ready to launch....")
    this.username = "jay-web";
   }
  
   getUser(){
     return this.http.get("http://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map(res => res.json());
   }

   getRepos(){
     return this.http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map(res => res.json());
   }
   
   updateUser(username:string){
    this.username = username;
   }
}
