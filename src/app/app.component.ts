import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})

export class AppComponent{
  constructor(private http: HttpClient, userservice : userService){
    //read local json data
    let userlist = require('./json/userlist.json');
    console.log(userlist.data)

    console.log(userservice.getUserList());
    
  }
}
