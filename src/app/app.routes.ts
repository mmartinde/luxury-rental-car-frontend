import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarComponent } from './pages/car/car.component';
import { adminProtectGuard } from './guards/admin-protect.guard';
import { userProtectGuard } from './guards/user-protect.guard';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { UserComponent } from './pages/user/user.component';
import { AdminCarComponent } from './pages/admin-car/admin-car.component';
import { EditCarComponent } from './components/admin-car/edit-car/edit-car.component';
import { AddCarComponent } from './components/admin-car/add-car/add-car.component';

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
        path: 'user', 
        component: UserComponent
    },
    {
        path:'cars',
        component:CarsComponent,
    },
    {
        path:'cars/:id',
        component:CarComponent,
    },
    {
        path:"adminUsers",
        component:AdminUserComponent,
        canActivate:[userProtectGuard, adminProtectGuard]
    },
    {
        path:"adminCars",
        component:AdminCarComponent,
        canActivate:[userProtectGuard, adminProtectGuard]
    },
    {
        path:"adminCars/editCar/:id",
        component:EditCarComponent,
        canActivate:[userProtectGuard, adminProtectGuard]
    },
    {
        path:"adminCars/addCar",
        component:AddCarComponent,
        canActivate:[userProtectGuard, adminProtectGuard]
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent 
    },
    { 
        path: '**', 
        redirectTo: 'not-found'  // Redirecciona todas las rutas no encontradas a 'not-found'
    }, 
    
];
