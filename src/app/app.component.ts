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
  public data:any;
  constructor(private http: HttpClient, userservice : userService){
    //read local json data
    this.data = require('./json/userlist.json');
    console.log(this.data.data)
  }

}

