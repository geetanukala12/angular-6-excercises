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
  isValid : boolean;
  isClicked : boolean = false;

  onSubmit(){
    this.isClicked = true;
    this.UserResponse =  this.http.post("http://localhost:3004/authenticate", 
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
              if(val.hasOwnProperty('status')){
                    if(val.status == true){
                      this.isValid =  true;
                      sessionStorage.setItem('user', '1');
                      this.router.navigate(['/dashboard']);
                    }else{
                      this.isValid =  false;
                    }
          }
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });

        console.log(this.isValid)
  }
}
