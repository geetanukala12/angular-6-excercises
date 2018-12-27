import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, userService]
})

export class AppComponent{
  public data:any;
  public userdata:any;
  public visibility:string;

  constructor(private http: HttpClient, userservice : userService, public router: Router, private util:userService){
      this.router = router; 
      this.util = util;
  }

  ngOnInit (){
            this.http.get('http://localhost:3004/allusers').subscribe(data => {
                this.data = data;  
                  if(sessionStorage.getItem("user") != null){
                    this.visibility = "1";
                  }else{
                    this.router.navigate(['/login']);
                  }
            });
  }

  deleteUser(){
    confirm("Are you sure? do you want to delete the user?")
  }

  edit(userObj){
    localStorage.removeItem("userId");
    localStorage.setItem("userId", userObj.userId);
    this.router.navigate(['edit-user']);
    console.log(userObj)
  } 
}

