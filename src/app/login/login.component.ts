import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data:any;

  constructor(private http:HttpClient, private router:Router) { 
    
  }

  ngOnInit() {

  }

  email:string;
  password:string;
  UserResponse:any;

  onSubmit(){
    this.UserResponse =  this.http.post("http://localhost:3000/authenticate", 
        {
            "email": this.email,
            "password": this.password
        },
        {
          headers:{
            'Access-Control-Allow-Origin':"*",
            'Access-Control-Allow-Methods':"GET, POST, OPTIONS, PUT, PATCH, DELETE"
          }
        }).subscribe(
        (val) => {
          if(val){
            sessionStorage.setItem('user', '1');
            this.router.navigate(['/dashboard']);
            //console.log("POST call successful value returned in body", val);
          }
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
}
