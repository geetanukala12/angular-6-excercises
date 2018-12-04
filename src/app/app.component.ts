import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userService } from './services/user.service';
import { Router } from '@angular/router';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { DataTable } from 'angular-6-datatable';


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

  constructor(private http: HttpClient, userservice : userService, public router: Router){
      this.router = router; 

      this.http.get('http://localhost:3002/allusers').subscribe(data => {
          this.data = data;  
          console.log(data);
      });
  }

  ngOnInit() {
    console.log(sessionStorage.getItem("user"))
    if(sessionStorage.getItem("user") != null){
      this.visibility = "1";
    }else{
      this.router.navigate(['/login']);
    }
  }

  logout(){
    this.visibility = "0";
    sessionStorage.removeItem("user");
  }

  deleteUser(){
    confirm("are you sure?")
  }

  edit(userObj){
    localStorage.removeItem("userId");
    localStorage.setItem("userId", userObj.userId);
    this.router.navigate(['edit-user']);
    console.log(userObj)
  } 
}

