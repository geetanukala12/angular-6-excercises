import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import value from '*.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public myGroup:any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() { 
      this.myGroup = new FormGroup({
        // firstName: new FormControl()
      });
      var userdata =  this.http.post("http://localhost:3004/registration", 
        {
            "userId": localStorage.getItem("userId")
        },
        {
          headers:{
            'Access-Control-Allow-Origin':"*",
            'Access-Control-Allow-Methods':"GET, POST, OPTIONS, PUT, PATCH, DELETE"
          }
        }).subscribe(
        (val) => {
          if(val){
            console.log("POST call successful value returned in body", val);
          }
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });

        this.myGroup.setValue(userdata);
  }

}
