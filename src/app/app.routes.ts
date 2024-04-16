import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
        path: '**', 
        redirectTo: 'not-found'  // Redirecciona todas las rutas no encontradas a 'not-found'
    }, 
];
