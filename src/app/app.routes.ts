import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarComponent } from './pages/car/car.component';
import { adminProtectGuard } from './guards/admin-protect.guard';
import { userProtectGuard } from './guards/user-protect.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent 
    },
    {
        path:'cars',
        component:CarsComponent,
        canActivate:[adminProtectGuard, userProtectGuard]
    },
    {
        path:'car',
        component:CarComponent,
        canActivate:[adminProtectGuard, userProtectGuard]
    },
    { 
        path: '**', 
        redirectTo: 'not-found'  // Redirecciona todas las rutas no encontradas a 'not-found'
    }, 
    
];
