import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';

const routes :Routes = [
    { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
