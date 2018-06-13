import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { ConfiguracoesRoutes } from './configuracoes';

export const PagesRoutes: Routes = [
    {
        path: 'pages',
        redirectTo: 'pages/dashboard'
    },
    {
        path: 'pages/dashboard',
        component: DashboardComponent
    },
    ...ConfiguracoesRoutes
];