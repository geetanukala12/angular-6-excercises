import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

const routes :Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'edit-user', component: UserComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
