import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor(){
        
    }
    login(email:string, password:string){
        var user = {
            email:'admin@gmail.com',
            password:'admin@123'}
        if(email != user.email || password != user.password){
            return false;
        }else{
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}