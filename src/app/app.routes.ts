import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Collections } from './pages/collections/collections';

export const routes: Routes = [
    {
        path: '',
        component: Login,
        pathMatch: 'full'
    },
    {
        path: 'collections',
        component: Collections,
    }
];
