import { Http } from "@angular/http";
import { Injectable } from "@angular/core";


@Injectable()
export class userService{
    constructor(private http:Http){

    }
    
    getUserList(){
         //read local json data using http
        return this.http.get('../src/app/json/userlist.json').subscribe(data => console.log(data));
    }

}
