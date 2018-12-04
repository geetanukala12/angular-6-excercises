import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule, FormGroup } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular-6-datatable";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routingModule } from './app.routing';
import { RegistrationComponent } from './registration/registration.component';
import { userService } from './services/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    routingModule,
    DataTableModule,
    NgbModule
    ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
