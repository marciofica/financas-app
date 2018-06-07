import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard';

export const PagesRoutes: Routes = [
    {
        path: 'pages',
        redirectTo: 'pages/dashboard'
    },
    {
        path: 'pages/dashboard',
        component: DashboardComponent
    },
];