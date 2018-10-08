import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  submitted = false;

  langs:string[] = [
    'English',
    'French',
    'Telugu',
  ];
  email: string; 
  first_name:string;
  last_name:string;
  password:String

  constructor(private authenticationService: AuthenticationService){
      authenticationService = authenticationService;
  }
    
  onSubmit() {
     //register user
    console.log("email is"+this.email)
    console.log("password is"+this.password)
    console.log("first name is"+this.first_name)
    console.log("last name is"+this.last_name)
    this.submitted = true;
  }

  login(email:string, password:string){
    //login method
  }
}
