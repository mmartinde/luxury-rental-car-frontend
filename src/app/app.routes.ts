import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarComponent } from './pages/car/car.component';

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
        component:CarsComponent
    },
    {
        path:'car',
        component:CarComponent
    },
    { 
        path: '**', 
        redirectTo: 'not-found'  // Redirecciona todas las rutas no encontradas a 'not-found'
    }, 
    
];
