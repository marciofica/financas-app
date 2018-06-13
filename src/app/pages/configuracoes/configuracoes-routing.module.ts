import { Routes } from '@angular/router';

import { ConfiguracoesComponent } from './configuracoes.component';
import { PlanoDeContasComponent } from './plano-de-contas';
import { EventosFinanceirosComponent } from './eventos-financeiros';
import { TiposPagamentosComponent } from './tipos-pagamentos';

export const ConfiguracoesRoutes: Routes = [
    {
        path: 'pages/configuracoes',
        redirectTo: 'pages/configuracoes/plano-de-contas'
    },
    {
        path: 'pages/configuracoes',
        component: ConfiguracoesComponent,
        children: [
          { path: '', redirectTo: 'pages/configuracoes', pathMatch: 'full' },
          { path: 'plano-de-contas', component: PlanoDeContasComponent },
          { path: 'eventos-financeiros', component: EventosFinanceirosComponent },
          { path: 'tipos-pagamentos', component: TiposPagamentosComponent }
        ]
    }
];