import { Routes } from '@angular/router';

import { ConfiguracoesComponent } from './configuracoes.component';
import { PlanoDeContasComponent, CreateComponent, PlanoDeContasEditComponent, PlanoDeContasDeleteComponent } from './plano-de-contas';
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
          { path: 'plano-de-contas/new', component: CreateComponent },
          { path: 'plano-de-contas/:id/edit', component: PlanoDeContasEditComponent },
          { path: 'plano-de-contas/:id/delete', component: PlanoDeContasDeleteComponent },
          { path: 'eventos-financeiros', component: EventosFinanceirosComponent },
          { path: 'tipos-pagamentos', component: TiposPagamentosComponent }
        ]
    }
];