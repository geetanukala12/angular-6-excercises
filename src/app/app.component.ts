import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userService } from './services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})

export class AppComponent{
  public data:any;
  public userdata:any;
  public visibility:string;

  constructor(private http: HttpClient, userservice : userService, public router: Router, public location: Location ){
      this.router = router; 
      this.location = location;
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

  logout(){
    this.visibility = "0";
    sessionStorage.removeItem("user");
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

