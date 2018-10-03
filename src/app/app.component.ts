import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  submitted = false;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  onSubmit() {
      console.log(this.loginForm)
      this.submitted = true;
      console.log("email is"+this.loginForm.controls.email.value)
      console.log("password is"+this.loginForm.controls.password.value)
  }

  login(email:string, password:string){
    
  }
}
