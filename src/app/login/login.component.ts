import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  email:string;
  password:string;

  onSubmit(){
     //login method
     console.log(this.email)
     console.log(this.password)
  }
}
