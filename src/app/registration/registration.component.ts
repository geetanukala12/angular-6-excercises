import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '.././services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
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
  password:String

  showLayout:boolean;

  constructor(private authenticationService: AuthenticationService, private route: Router){
      authenticationService = authenticationService;
      route = route;
  }
    
  onSubmit() {
    sessionStorage.setItem("user",this.email)
    this.showLayout = true;
     //register user
    console.log("email is"+this.email)
    console.log("password is"+this.password)
    console.log("first name is"+this.firstname)
    console.log("last name is"+this.lastname)
    this.submitted = true;
    //this.route.navigate(['login']);
    this.route.navigate(['']);
  }

  ngOnInit(){
    
  }
}
