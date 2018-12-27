import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '.././services/authentication.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userService } from '.././services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthenticationService, userService]

})
export class RegistrationComponent implements OnInit {

  submitted = false;

  langs:string[] = [
    'English',
    'French',
    'Telugu',
  ];
  email: string; 
  firstname:string;
  lastname:string;
  password:string;
  phone:string;
  title:string = 'Registration';

  showUserData:boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router, private http:HttpClient, private util:userService){
      this.authenticationService = authenticationService;
      this.router = router;
      this.util = util;
  }
    
  onSubmit() {
      sessionStorage.setItem("user",this.email)
      this.showUserData = true;
      //register user
      this.submitted = true;
      var userdata =  this.http.post("http://localhost:3004/registration", 
      {
            "data":{
              "email":this.email,"password":this.password,"first_name":this.firstname,"last_name":this.lastname, "phone":this.phone
            }
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
        }
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  ngOnInit(){
    if(this.router.url == '/edit-user'){
        this.title  = "Edit User";
    }
  }
}
