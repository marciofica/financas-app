import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { PlanoDeContasComponent } from './plano-de-contas';
import { EventosFinanceirosComponent } from './eventos-financeiros';
import { TiposPagamentosComponent } from './tipos-pagamentos';

export const PagesRoutes: Routes = [
    {
        path: 'pages',
        redirectTo: 'pages/dashboard'
    },
    {
        path: 'pages/dashboard',
        component: DashboardComponent
    },
    {
        path: 'pages/plano-de-contas',
        component: PlanoDeContasComponent
    },
    {
        path: 'pages/eventos-financeiros',
        component: EventosFinanceirosComponent
    },
    {
        path: 'pages/tipos-pagamentos',
        component: TiposPagamentosComponent
    },
];